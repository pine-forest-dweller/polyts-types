// math functions
declare namespace math {
	/**
	 * Returns a perlin noise value. The returned value is most often between the range [-1, 1].
	 *
	 * The returned value is sometimes will be outside of the range [-1,1], so if the interval is critical to you,
	 * you should use `math.clamp(noise, -1, 1)` on the output.
	 *
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates.
	 * For example, `math.noise(1.158, 5.723)` will always return `0.48397532105446` and `math.noise(1.158, 6)` will always return `0.15315161645412`.
	 *
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5.
	 * For coordinates that are close to each other, the return values will also be close to each other.
	 */
	function noise(x: number, y?: number, z?: number): number;
	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

/** Yields the current thread until the specified amount of seconds have elapsed.
The delay will have a minimum duration of 29 milliseconds, but this minimum may be higher depending on the target framerate and various throttling conditions. If the seconds parameter is not specified, the minimum duration will be used.
This function returns:

Actual time yielded (in seconds)*/
declare function wait(seconds?: number): number;
/** Behaves identically to Lua’s print function, except the output is styled as a warning, with yellow text and a timestamp.
This function accepts any number of arguments, and will attempt to convert them into strings which will then be joined together with spaces between them. */
declare function warn(...params: Array<unknown>): void;

// math functions
declare namespace math {
	/**
	 * Returns a perlin noise value. The returned value is most often between the range [-1, 1].
	 *
	 * The returned value is sometimes will be outside of the range [-1,1], so if the interval is critical to you,
	 * you should use `math.clamp(noise, -1, 1)` on the output.
	 *
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates.
	 * For example, `math.noise(1.158, 5.723)` will always return `0.48397532105446` and `math.noise(1.158, 6)` will always return `0.15315161645412`.
	 *
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5.
	 * For coordinates that are close to each other, the return values will also be close to each other.
	 */
	function noise(x: number, y?: number, z?: number): number;
	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

declare namespace utf8 {
	/** Receives zero or more codepoints as integers, converts each one to its corresponding UTF-8 byte sequence and returns a string with the concatenation of all these sequences. */
	function char(...codepoints: Array<number>): string;
	/** Returns an iterator function that will iterate over all codepoints in string str. It raises an error if it meets any invalid byte sequence. */
	function codes(str: string): IterableFunction<LuaTuple<[number, number]>>;
	/** Returns the codepoints (as integers) from all codepoints in the provided string (str) that start between byte positions i and j (both included). The default for i is 0 and for j is i. It raises an error if it meets any invalid byte sequence. Similar to `string.byte`.*/
	function codepoint(str: string, i?: number, j?: number): LuaTuple<Array<number>>;
	/** Returns the number of UTF-8 codepoints in the string str that start between positions i and j (both inclusive). The default for i is 0 and for j is -1. If it finds any invalid byte sequence, returns a false value plus the position of the first invalid byte. */
	function len(s: string, i?: number, j?: number): LuaTuple<[number, undefined] | [false, number]>;
	/** Returns the position (in bytes) where the encoding of the n-th codepoint of s (counting from byte position i) starts. A negative n gets characters before position i. The default for i is 0 when n is non-negative and #s + 1 otherwise, so that utf8.offset(s, -n) gets the offset of the n-th character from the end of the string. If the specified character is neither in the subject nor right after its end, the function returns nil. */
	function offset(s: string, n: number, i?: number): number | undefined;
	/** Returns an iterator function that will iterate the grapheme clusters of the string. */
	function graphemes(s: string, i?: number, j?: number): IterableFunction<LuaTuple<[number, number]>>;
	/** Converts the input string to Normal Form C, which tries to convert decomposed characters into composed characters. */
	function nfcnormalize(str: string): string;
	/** Converts the input string to Normal Form D, which tries to break up composed characters into decomposed characters. */
	function nfdnormalize(str: string): string;
	/** The pattern which matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string. */
	const charpattern: "[%z\x01-\x7F\xC2-\xF4][\x80-\xBF]*";
}

interface CheckableTypes {
	[key: string]: any;
}

interface Instances {
	[key: string]: Instance;
}

interface buffer {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_buffer: unique symbol;
}

declare namespace buffer {
	/** Creates a buffer. */
	function create(size: number): buffer;

	/** Creates a buffer from a string. */
	function fromstring(str: string): buffer;

	/** Converts a buffer to a string. */
	function tostring(b: buffer): string;

	/** Returns the size of the buffer in bytes. */
	function len(b: buffer): number;

	/** Reads a range of bits into an unsigned integer from the buffer based on a specific bitCount integer from 0 to 32, inclusive. */
	function readbits(b: buffer, bitOffset: number, bitCount: number): number;

	/** Reads an 8-bit signed integer from the buffer. */
	function readi8(b: buffer, offset: number): number;

	/** Reads an 8-bit unsigned integer from the buffer. */
	function readu8(b: buffer, offset: number): number;

	/** Reads a 16-bit signed integer from the buffer. */
	function readi16(b: buffer, offset: number): number;

	/** Reads a 16-bit unsigned integer from the buffer. */
	function readu16(b: buffer, offset: number): number;

	/** Reads a 32-bit signed integer from the buffer. */
	function readi32(b: buffer, offset: number): number;

	/** Reads a 32-bit unsigned integer from the buffer. */
	function readu32(b: buffer, offset: number): number;

	/** Reads a 32-bit floating-point value from the buffer. */
	function readf32(b: buffer, offset: number): number;

	/** Reads a 64-bit floating-point value from the buffer. */
	function readf64(b: buffer, offset: number): number;

	/** Writes an 8-bit signed integer to the buffer. */
	function writei8(b: buffer, offset: number, value: number): void;

	/** Writes data to the buffer based on a specific bitCount integer from 0 to 32, inclusive. `value` is treated as an unsigned 32‑bit number and only bitCount least significant bits are written. */
	function writebits(b: buffer, bitOffset: number, bitCount: number, value: number): void;

	/** Writes an 8-bit unsigned integer to the buffer. */
	function writeu8(b: buffer, offset: number, value: number): void;

	/** Writes a 16-bit signed integer to the buffer. */
	function writei16(b: buffer, offset: number, value: number): void;

	/** Writes a 16-bit unsigned integer to the buffer. */
	function writeu16(b: buffer, offset: number, value: number): void;

	/** Writes a 32-bit signed integer to the buffer. */
	function writei32(b: buffer, offset: number, value: number): void;

	/** Writes a 32-bit unsigned integer to the buffer. */
	function writeu32(b: buffer, offset: number, value: number): void;

	/** Writes a 32-bit floating-point value to the buffer. */
	function writef32(b: buffer, offset: number, value: number): void;

	/** Writes a 64-bit floating-point value to the buffer. */
	function writef64(b: buffer, offset: number, value: number): void;

	/** Reads a string from the buffer. */
	function readstring(b: buffer, offset: number, count: number): string;

	/** Writes a string to the buffer. */
	function writestring(b: buffer, offset: number, value: string, count?: number): void;

	/** Copies bytes between buffers. */
	function copy(target: buffer, targetOffset: number, source: buffer, sourceOffset?: number, count?: number): void;

	/** Sets a region of the buffer memory to some 8-bit unsigned integer value. */
	function fill(b: buffer, offset: number, value: number, count?: number): void;
}


interface vector {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_vector: unique symbol;

	readonly x: number;
	readonly y: number;
	readonly z: number;
}

declare namespace vector {
	/** Constant vector with all components set to zero. */
	const zero: vector;

	/** Constant vector with all components set to one. */
	const one: vector;

	/** Creates a new vector with the given component values. */
	function create(x: number, y: number, z: number): vector;

	/** Calculates the magnitude of a given vector. */
	function magnitude(vec: vector): number;

	/** Computes the normalized version (unit vector) of a given vector. */
	function normalize(vec: vector): vector;

	/** Computes the cross product of two vectors. */
	function cross(vec1: vector, vec2: vector): vector;

	/** Computes the dot product of two vectors. */
	function dot(vec1: vector, vec2: vector): number;

	/** Computes the angle between two vectors in radians. The axis, if specified, is used to determine the sign of the angle. */
	function angle(vec1: vector, vec2: vector, axis?: vector): number;

	/** Applies `math.floor` to every component of the input vector. */
	function floor(vec: vector): vector;

	/** Applies `math.ceil` to every component of the input vector. */
	function ceil(vec: vector): vector;

	/** Applies `math.abs` to every component of the input vector. */
	function abs(vec: vector): vector;

	/** Applies `math.sign` to every component of the input vector. */
	function sign(vec: vector): vector;

	/** Applies `math.clamp` to every component of the input vector. */
	function clamp(vec: vector, min: vector, max: vector): vector;

	/** Applies `math.max` to the corresponding components of the input vectors. Equivalent to `vector.create(math.max((...).x), math.max((...).y), math.max((...).z))`. */
	function max(...vecs: Array<vector>): vector;

	/** Applies `math.min` to the corresponding components of the input vectors. Equivalent to `vector.create(math.min((...).x), math.min((...).y), math.min((...).z))`. */
	function min(...vecs: Array<vector>): vector;
}