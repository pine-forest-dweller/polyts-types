/// <reference no-default-lib="true"/>

// MACRO MATH API

interface Number {
	/** macro for number // number */
	idiv(this: number, other: number): number;
}

declare interface Vector2 {
	/** macro for Vector2 + Vector2 */
	add(this: Vector2, v2: Vector2): Vector2;
	/** macro for Vector2 - Vector2 */
	sub(this: Vector2, v2: Vector2): Vector2;
	/** macro for Vector2 * Vector2 | number */
	mul(this: Vector2, other: Vector2 | number): Vector2;
	/** macro for Vector2 / Vector2 | number */
	div(this: Vector2, other: Vector2 | number): Vector2;
	/** macro for Vector2 // Vector2 | number */
	idiv(this: Vector2, other: Vector2 | number): Vector2;
}

declare interface Vector3 {
	/** macro for Vector3 + Vector3 */
	add(this: Vector3, v3: Vector3): Vector3;
	/** macro for Vector3 - Vector3 */
	sub(this: Vector3, v3: Vector3): Vector3;
	/** macro for Vector3 * Vector3 | number */
	mul(this: Vector3, other: Vector3 | number): Vector3;
	/** macro for Vector3 / Vector3 | number */
	div(this: Vector3, other: Vector3 | number): Vector3;
	/** macro for Vector3 // Vector3 | number */
	idiv(this: Vector3, other: Vector3 | number): Vector3;
}
