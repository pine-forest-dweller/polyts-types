import { globSync } from "glob";
import { parse } from "yaml";
import fs from "node:fs";

const YAML_DIR = "./Docs-v2/yaml";
const OUT_PATH = "./include/polytoria.d.ts";

const typesFileNames = globSync(`${YAML_DIR}/types/*.yaml`);

let creatable = [];
let services = [];

let output = "// File generated from Polytoria/Docs-V2. Do not edit directly.\n\n";
output += `/// <reference path="macro_math.d.ts" />\n`;
output += `/// <reference path="lua.d.ts" />\n`;
output += `/// <reference path="luau.d.ts" />\n\n`;

output += `
declare class PTSignal<T extends (...args: any[]) => void = () => void> {
	Connect(action: T): PTSignalConnection;
	Disconnect(action: T): void;
	Once(action: T): void;
	Wait(): any;
}

declare class PTSignalConnection {
	Disconnect(): void;
	readonly Connected: boolean;
}
`

function typeToTS(str, isReturn = false) {
    switch (str.toLowerCase()) {
        case "() -> ()":
            return "() => void";
        case "nil":
            return isReturn ? "void" : "undefined";
        case "table":
            return "object";
        case "string":
        case "boolean":
        case "number":
        case "any":
            return str;
        default:
            const arrayMatch = str.match(/^{\s*(\w+)\s*}$/);
            if (arrayMatch) {
                const inner = arrayMatch[1];
                return `${typeToTS(inner)}[]`;
            }
            return str;
   };
};

function cleanDuplicateParams(params) {
    const seen = {}
    return params.map(p => {
        let name = p.Name;
        seen[name] = seen[name] ? (seen[name] + 1) : 1;
        if (seen[name] > 1) {
            p.Name += `_${seen[name] - 1}`;
        }
        
        return p;
    });
}

function sanitizeDesc(desc, pream = "") {
    if (!desc) return "";

    const escaped = desc.replace(/\*\//g, "*\\/");
    const lines = escaped
        .split(/\n/)
        .map(ln => `${pream} * ${ln}`)
        .join("\n");

    return `${pream}/**\n${lines}\n${pream} */\n`;
}

for (const fileName of typesFileNames) {
    const content = fs.readFileSync(fileName, "utf-8");
    const doc = parse(content);

    const className = doc.Name;

    if (className === "PTSignalConnection" || className === "PTSignal") {
        continue;
    }

    const baseType = doc.BaseType ? ` extends ${doc.BaseType}` : "";
    const desc = doc.Description;
    const classIsStatic = doc.IsStatic;

    if (desc.length > 0) {
        output += sanitizeDesc(desc);
    }

    if (doc.Category === "services") {
        services.push(className);
    } else {
        creatable.push(className);
    }

    const ioc = classIsStatic ? "interface" : "class"

    output += `declare ${ioc} ${className}${baseType} {\n`;
    const props = doc.Properties;
    if (props && Array.isArray(props)) {
        for (const property of props) {
            const readOnly = property.IsReadOnly ? "readonly " : "";
            const desc = property.Description.replace("\n", "")
            if (desc) {
                output += sanitizeDesc(desc, "\t");
            }
            output += `\t${readOnly}${property.Name}: ${typeToTS(property.Type)};\n`;
        }
    }

    const methods = doc.Methods;
    if (methods && Array.isArray(methods)) {
        for (const method of methods) {
            const name = method.Name;
            const returnT = method.ReturnType;
            const params = cleanDuplicateParams(method.Parameters ?? []);
            const isStatic = (method.IsStatic && !classIsStatic) ? "static " : "";
            const desc = method.Description;

            if (desc.length > 0) {
                output += sanitizeDesc(desc, "\t");
            }
            output += `\t${isStatic}${name}(`;
            output += params.map(p => `${p.Name}${p.IsOptional ? "?" : ""}: ${typeToTS(p.Type)}`).join(", ")
            output += `) : ${typeToTS(returnT)};\n`;
        }
    }

    const events = doc.Events;
    if (events && Array.isArray(events)) {
        for (const event of events) {
            const name = event.Name;
            const desc = event.Description;
            output += sanitizeDesc(desc, "\t");

            output += `\t`;
            if (classIsStatic && event.IsStatic) {
                output += `static `
            };

            output += `readonly ${name}: PTSignal<(`;
            const params = cleanDuplicateParams(event.Parameters ?? []);
            if (params) {
                output += params.map(p => `${p.Name}${p.IsOptional ? "?" : ""}: ${typeToTS(p.Type)}`).join(", ");
            }
            output += `) => void>;\n`;
        }
    }

    output += `}\n\n`;

    if (doc.IsStatic) {
        output += `declare const ${className}: ${className};\n\n`
    }
}


const enumFileNames = globSync(`${YAML_DIR}/enums/*.yaml`);
let redeclarations = ``;

output += `declare namespace Enums {\n`;

for (const fileName of enumFileNames) {
    const content = fs.readFileSync(fileName, "utf-8");
    const doc = parse(content);

    const name = doc.Name;
    const desc = (doc.Description.length > 0) ? `\t\t//${doc.Description}` : ``;
    redeclarations += `type ${name} = Enums.${name};\n`;
    output += desc;
    output += `\tconst enum ${name} {\n`;
    for (const opt of doc.Options) {
        const desc = opt.Description;
        if (desc.length > 0) {
            output += sanitizeDesc(desc, "\t\t");
        }
        output += `\t\t${opt.Name},\n`;
    }
    output += `\t}\n\n` 
}

output += `}\n`;
output += redeclarations;

fs.writeFileSync(OUT_PATH, output);