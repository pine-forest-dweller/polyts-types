// File generated from Polytoria/Docs-V2. Do not edit directly.

/// <reference path="macro_math.d.ts" />
/// <reference path="lua.d.ts" />
/// <reference path="luau.d.ts" />


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
/**
 * \!! WIP Class, WorldsService is a service that is used to join players to other worlds. This class is currently unavailable in public servers. **This is not recommended for use at this time.**
 */
declare interface WorldsService extends Instance {
	/**
	 * Request a new server with data
	 */
	NewServerAsync(worldPath: string) : string;
	/**
	 * Request a new server with data
	 */
	NewServerAsync(data: NewServerRequestData) : string;
	/**
	 * Join a player to a public server of the specified world
	 */
	JoinWorldAsync(plr: Player, to: string) : undefined;
	/**
	 * Join a party of player to a public server of the specified world
	 */
	JoinWorldPartyAsync(plrs: Player[], to: string) : undefined;
	/**
	 * Join a player to a private server of the specified world
	 */
	JoinPrivateAsync(plr: Player, accessID: string) : undefined;
	/**
	 * Join a party of player to a private server of the specified world
	 */
	JoinPrivatePartyAsync(players: Player[], accessID: string) : undefined;
}

declare const WorldsService: WorldsService;

/**
 * World is the root object in the Polytoria instance tree. It is the object from which everything is descended.
 */
declare interface World extends Instance {
	/**
	 * Returns true if this current session is being tested locally
	 */
	readonly IsLocalTest: boolean;
	/**
	 * Returns true if this world is being ran from a 1.0 world file.
	 */
	readonly IsLegacyWorld: boolean;
	/**
	 * The ID of the current Polytoria world.
	 */
	readonly WorldID: number;
	/**
	 * The server ID of the current instance.
	 */
	readonly ServerID: number;
	/**
	 * The uptime of this game in seconds.
	 */
	readonly UpTime: number;
	/**
	 * A synchronized clock that represents the server's current time.
	 */
	readonly ServerTime: number;
	/**
	 * The total number of instances currently loaded.
	 */
	readonly InstanceCount: number;
	/**
	 * Missing Documentation
	 */
	GetNetworkedObject(networkID: string) : NetworkedObject;
	/**
	 * Fires every frame after the world has been rendered. The `delta` parameter is the time between the last frame and the current.
	 */
	readonly Rendered: PTSignal<(number: number) => void>;
}

declare const World: World;

/**
 * Welds represent joins between two physics objects.
 */
declare class Weld extends Instance {
	/**
	 * First physics object in the weld.
	 */
	Part0: Instance;
	/**
	 * Second physics object in the weld.
	 */
	Part1: Instance;
	/**
	 * Determines whether the weld is enabled.
	 */
	Enabled: boolean;
	/**
	 * Fires when the weld is broken.
	 */
	Break() : undefined;
}

/**
 * VoiceBox is an object that can output speech bubbles.
 */
declare class VoiceBox extends Part {
	/**
	 * Creates a speech bubble with the given message
	 */
	Speak(msg: string) : undefined;
}

/**
 * Vector3Value is an object that holds a Vector3 value.
 */
declare class Vector3Value extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: Vector3;
}

/**
 * Vector3 is a 3D vector with an x, y and z component.
 */
declare class Vector3 {
	/**
	 * The X component of the vector.
	 */
	X: number;
	/**
	 * The Y component of the vector.
	 */
	Y: number;
	/**
	 * The Z component of the vector.
	 */
	Z: number;
	/**
	 * Shorthand for Vector3.New(0, 0, -1).
	 */
	readonly Forward: Vector3;
	/**
	 * Shorthand for Vector3.New(0, 0, 1).
	 */
	readonly Back: Vector3;
	/**
	 * Shorthand for Vector3.New(0, -1, 0).
	 */
	readonly Down: Vector3;
	/**
	 * Shorthand for Vector3.New(-1, 0, 0).
	 */
	readonly Left: Vector3;
	/**
	 * Shorthand for Vector3.New(1, 1, 1).
	 */
	readonly One: Vector3;
	/**
	 * Shorthand for Vector3.New(0, 0, 0).
	 */
	readonly Zero: Vector3;
	/**
	 * Shorthand for Vector3.New(1, 0, 0).
	 */
	readonly Right: Vector3;
	/**
	 * Shorthand for Vector3.New(0, 1, 0).
	 */
	readonly Up: Vector3;
	/**
	 * The length of the vector.
	 */
	readonly Magnitude: number;
	/**
	 * The normalized version of the vector.
	 */
	readonly Normalized: Vector3;
	/**
	 * The squared length of the vector.
	 */
	readonly SqrMagnitude: number;
	/**
	 * Returns a new Vector3 of (0,0,0) since there are no parameters.
	 */
	static New() : Vector3;
	/**
	 * Returns a new Vector3 with the given value of d and sets x, y, and z to d
	 */
	static New(d: number) : Vector3;
	/**
	 * Returns a new Vector3 with the given x and y with a z component of 0, since it is not set.
	 */
	static New(x: number, y: number) : Vector3;
	/**
	 * Returns a new Vector3 with the given numbers x, y, and z, and sets the Vector3 to it.
	 */
	static New(x: number, y: number, z: number) : Vector3;
	/**
	 * Returns a new Vector3 with the given Vector2 components and a z component of 0.
	 */
	static New(v: Vector2) : Vector3;
	/**
	 * Returns the angle in degrees between from and to.
	 */
	static Angle(from: Vector3, to: Vector3) : number;
	/**
	 * Returns the cross product of lhs and rhs.
	 */
	static Cross(lhs: Vector3, rhs: Vector3) : Vector3;
	/**
	 * Returns the distance between a and b.
	 */
	static Distance(a: Vector3, b: Vector3) : number;
	/**
	 * Returns the dot product of lhs and rhs.
	 */
	static Dot(lhs: Vector3, rhs: Vector3) : number;
	/**
	 * Returns a new Vector3 that is the linear interpolation between a and b by t.
	 */
	static Lerp(a: Vector3, b: Vector3, t: number) : Vector3;
	/**
	 * Returns a vector that is made from the largest components of two vectors.
	 */
	static Max(lhs: Vector3, rhs: Vector3) : Vector3;
	/**
	 * Returns a vector that is made from the smallest components of two vectors.
	 */
	static Min(lhs: Vector3, rhs: Vector3) : Vector3;
	/**
	 * Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
	 */
	static MoveTowards(current: Vector3, target: Vector3, maxDistanceDelta: number) : Vector3;
	/**
	 * Returns a new Vector3 that is the normalized version of the given vector.
	 */
	static Normalize(value: Vector3) : Vector3;
	/**
	 * Returns the projection of a vector onto another vector.
	 */
	static Project(vector: Vector3, onNormal: Vector3) : Vector3;
	/**
	 * Missing Documentation
	 */
	static ProjectOnPlane(vector: Vector3, planeNormal: Vector3) : Vector3;
	/**
	 * Returns the reflection of a vector off the plane defined by a normal.
	 */
	static Reflect(inDirection: Vector3, inNormal: Vector3) : Vector3;
	/**
	 * Returns the signed angle in degrees between from and to.
	 */
	static SignedAngle(from: Vector3, to: Vector3, axis: Vector3) : number;
	/**
	 * Spherically interpolates between two vectors.
	 */
	static Slerp(a: Vector3, b: Vector3, t: number) : Vector3;
	/**
	 * Returns a new Vector3 with all components rounded down.
	 */
	static Floor(val: Vector3) : Vector3;
	/**
	 * Returns a new Vector3 with all components rounded up.
	 */
	static Ceil(val: Vector3) : Vector3;
	/**
	 * Returns a new Vector3 with all components rounded to the nearest integer.
	 */
	static Round(val: Vector3) : Vector3;
	/**
	 * Returns a new Vector3 with all components as absolute values.
	 */
	static Abs(val: Vector3) : Vector3;
	/**
	 * Returns a new Vector3 with all components as sign values.
	 */
	static Sign(val: Vector3) : Vector3;
	/**
	 * Missing Documentation
	 */
	static Rotated(val: Vector3, axis: Vector3, angle: number) : Vector3;
	/**
	 * Missing Documentation
	 */
	static LimitLength(val: Vector3, length: number) : Vector3;
	/**
	 * Clamps a Vector3 within a range.
	 */
	static Clamp(val: Vector3, min: Vector3, max: Vector3) : Vector3;
	/**
	 * Converts components from radians to degrees.
	 */
	static RadToDeg(val: Vector3) : Vector3;
	/**
	 * Converts components from degrees to radians.
	 */
	static DegToRad(val: Vector3) : Vector3;
}

/**
 * Vector2Value is an object that holds a Vector2 value.
 */
declare class Vector2Value extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: Vector2;
}

/**
 * Vector2 is a 2D vector with an x and y component.
 */
declare class Vector2 {
	/**
	 * The X component of the vector.
	 */
	X: number;
	/**
	 * The Y component of the vector.
	 */
	Y: number;
	/**
	 * Shorthand for Vector2.New(0, -1).
	 */
	readonly Down: Vector2;
	/**
	 * Shorthand for Vector2.New(-1, 0).
	 */
	readonly Left: Vector2;
	/**
	 * Shorthand for Vector2.New(1, 1).
	 */
	readonly One: Vector2;
	/**
	 * Shorthand for Vector2.New(0, 0).
	 */
	readonly Zero: Vector2;
	/**
	 * Shorthand for Vector2.New(1, 0).
	 */
	readonly Right: Vector2;
	/**
	 * Shorthand for Vector2.New(0, 1).
	 */
	readonly Up: Vector2;
	/**
	 * The length of the vector.
	 */
	readonly Magnitude: number;
	/**
	 * The normalized version of the vector.
	 */
	readonly Normalized: Vector2;
	/**
	 * The squared length of the vector.
	 */
	readonly SqrMagnitude: number;
	/**
	 * Returns a new Vector2 with the given x and y components.
	 */
	static New() : Vector2;
	/**
	 * Returns a new Vector2 with the given x and y components.
	 */
	static New(d: number) : Vector2;
	/**
	 * Returns a new Vector2 with the given x and y components.
	 */
	static New(x: number, y: number) : Vector2;
	/**
	 * Returns the angle in degrees between from and to.
	 */
	static Angle(from: Vector2, to: Vector2) : number;
	/**
	 * Returns the cross product of lhs and rhs.
	 */
	static Cross(lhs: Vector2, rhs: Vector2) : number;
	/**
	 * Returns the distance between a and b.
	 */
	static Distance(a: Vector2, b: Vector2) : number;
	/**
	 * Returns the dot product of lhs and rhs.
	 */
	static Dot(lhs: Vector2, rhs: Vector2) : number;
	/**
	 * Returns a new vector that is the linear interpolation between a and b by t.
	 */
	static Lerp(a: Vector2, b: Vector2, t: number) : Vector2;
	/**
	 * Returns a vector that is made from the largest components of two vectors.
	 */
	static Max(lhs: Vector2, rhs: Vector2) : Vector2;
	/**
	 * Returns a vector that is made from the smallest components of two vectors.
	 */
	static Min(lhs: Vector2, rhs: Vector2) : Vector2;
	/**
	 * Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
	 */
	static MoveTowards(current: Vector2, target: Vector2, maxDistanceDelta: number) : Vector2;
	/**
	 * Returns a new Vector2 that is the normalized version of the given vector.
	 */
	static Normalize(value: Vector2) : Vector2;
	/**
	 * Returns the projection of a vector onto another vector.
	 */
	static Project(vector: Vector2, onNormal: Vector2) : Vector2;
	/**
	 * Returns the reflection of a vector off the plane defined by a normal.
	 */
	static Reflect(inDirection: Vector2, inNormal: Vector2) : Vector2;
	/**
	 * Spherically interpolates between two vectors.
	 */
	static Slerp(a: Vector2, b: Vector2, t: number) : Vector2;
	/**
	 * Returns a new Vector2 with all components rounded down.
	 */
	static Floor(val: Vector2) : Vector2;
	/**
	 * Returns a new Vector2 with all components rounded up.
	 */
	static Ceil(val: Vector2) : Vector2;
	/**
	 * Returns a new Vector2 with all components rounded to the nearest integer.
	 */
	static Round(val: Vector2) : Vector2;
	/**
	 * Returns a new Vector2 with all components as absolute values.
	 */
	static Abs(val: Vector2) : Vector2;
	/**
	 * Returns a new Vector2 with all components as sign values.
	 */
	static Sign(val: Vector2) : Vector2;
	/**
	 * Clamps a Vector2 within a range.
	 */
	static Clamp(val: Vector2, min: Vector2, max: Vector2) : Vector2;
	/**
	 * Missing Documentation
	 */
	static ProjectOnPlane(vector: Vector2, planeNormal: Vector2) : Vector2;
	/**
	 * Missing Documentation
	 */
	static Rotated(val: Vector2, angle: number) : Vector2;
	/**
	 * Missing Documentation
	 */
	static LimitLength(val: Vector2, length: number) : Vector2;
	/**
	 * Converts components from radians to degrees.
	 */
	static RadToDeg(val: Vector2) : Vector2;
	/**
	 * Converts components from degrees to radians.
	 */
	static DegToRad(val: Vector2) : Vector2;
}

/**
 * VariantValue is an object that holds a Variant value.
 */
declare class VariantValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: Variant;
}

/**
 * Variant is a container that can store any type of value.
 */
declare class Variant {
	/**
	 * The value of the variant.
	 */
	readonly Value: any;
	/**
	 * Returns a new Variant
	 */
	static New() : Variant;
	/**
	 * Returns a new Variant
	 */
	static New(value: any) : Variant;
}

/**
 * ValueBase is an abstract base class for objects that hold a value.
 */
declare class ValueBase extends Instance {
	/**
	 * Fires when value has been changed
	 */
	readonly Changed: PTSignal<() => void>;
}

/**
 * UIViewport is a UI object that allows displaying 3D content on 2D UI
 */
declare class UIViewport extends UIField {
}

/**
 * UIView is a class that displays a rectangle in your place's UI.
 */
declare class UIView extends UIField {
	/**
	 * Determines the border color of the UI.
	 */
	BorderColor: Color;
	/**
	 * Determines the color of the UI.
	 */
	Color: Color;
	/**
	 * Determines where borders are placed.
	 */
	BorderMode: BorderMode;
	/**
	 * Determines the width of the border of the UI.
	 */
	BorderWidth: number;
	/**
	 * Determines the corner radius of the UI.
	 */
	CornerRadius: number;
}

/**
 * UIVLayout is a class that aligns all of its children vertically.
 */
declare class UIVLayout extends UIHVLayout {
}

/**
 * UIVFlow is a class that aligns all of it's children vertically and wraps them around at the borders.
 */
declare class UIVFlow extends UIFlowLayout {
}

/**
 * UITextInput is a class that allows the user to enter text.
 */
declare class UITextInput extends UIView {
	/**
	 * The text of the label.
	 */
	Text: string;
	/**
	 * The color of the text.
	 */
	TextColor: Color;
	/**
	 * Determines how text is justified.
	 */
	JustifyText: HorizontalAlignment;
	/**
	 * The font size of the label.
	 */
	FontSize: number;
	/**
	 * Overrides font size and scales the text to fit the container.
	 */
	AutoSize: boolean;
	/**
	 * Determines the maximum font size of the text when AutoSize is enabled.
	 */
	MaxAutoSize: number;
	/**
	 * Determine if this text input can be typed in multi-line.
	 */
	MultiLine: boolean;
	/**
	 * The placeholder text displayed when the input is empty.
	 */
	Placeholder: string;
	/**
	 * The color of the placeholder text.
	 */
	PlaceholderColor: Color;
	/**
	 * The color of the text when the input is read-only.
	 */
	ReadOnlyColor: Color;
	/**
	 * Determine if this text input is read-only.
	 */
	ReadOnly: boolean;
	/**
	 * The font asset used for the text.
	 */
	FontAsset: FontAsset;
	/**
	 * Forces the local player to focus on the text input.
	 */
	Focus() : undefined;
	/**
	 * Fires when user submitted the text
	 */
	readonly Submitted: PTSignal<(string: string) => void>;
	/**
	 * Fires when user changed the text
	 */
	readonly Changed: PTSignal<(string: string) => void>;
	/**
	 * Fires when user focuses on this input field
	 */
	readonly FocusEnter: PTSignal<() => void>;
	/**
	 * Fires when user defocused from this input field
	 */
	readonly FocusExit: PTSignal<() => void>;
}

/**
 * UIStroke modifies the parent UI element by changing the stroke.
 */
declare class UIStroke extends Instance {
	/**
	 * Thickness of the stroke.
	 */
	Thickness: UIScale;
	/**
	 * Color of the stroke.
	 */
	Color: Color;
}

/**
 * UIShadow modifies the parent UI element to add shadow layers.
 */
declare class UIShadow extends Instance {
	/**
	 * Shadows placed behind the UI.
	 */
	Layers: ShadowLayer[];
}

/**
 * UIScrollView is a class that allows the user to scroll content within a view.
 */
declare class UIScrollView extends UIContainer {
	/**
	 * Determines the horizontal scroll mode of the scroll view.
	 */
	HorizontalScrollMode: UIScrollMode;
	/**
	 * Determines the vertical scroll mode of the scroll view.
	 */
	VerticalScrollMode: UIScrollMode;
}

/**
 * UIScale is a measurement made from an offset in pixels and a scale based off it's size.
 */
declare class UIScale {
	/**
	 * The offset in pixels.
	 */
	Offset: number;
	/**
	 * The scale relative to the parent size.
	 */
	Scale: number;
	/**
	 * Calculates the pixel size of the UIScale.
	 */
	Compute(parentSize: number) : number;
}

/**
 * UILabel is a class that can be used to display text.
 */
declare class UILabel extends UIView {
	/**
	 * The text of the label.
	 */
	Text: string;
	/**
	 * The color of the text.
	 */
	TextColor: Color;
	/**
	 * The width of the text outline.
	 */
	OutlineWidth: number;
	/**
	 * The color of the text outline.
	 */
	OutlineColor: Color;
	/**
	 * Determines the horizontal alignment of the text.
	 */
	HorizontalAlignment: HorizontalAlignment;
	/**
	 * Determines the vertical alignment of the text.
	 */
	VerticalAlignment: VerticalAlignment;
	/**
	 * The font size of the text.
	 */
	FontSize: number;
	/**
	 * Overrides font size and scales the text to fit the container.
	 */
	AutoSize: boolean;
	/**
	 * Determines the maximum font size of the text when AutoSize is enabled.
	 */
	MaxAutoSize: number;
	/**
	 * Determines whether the text uses rich text formatting.
	 */
	UseRichText: boolean;
	/**
	 * The font asset used for the text.
	 */
	FontAsset: FontAsset;
	/**
	 * Text trimming mode for this label.
	 */
	TextTrimming: TextTrimming;
	/**
	 * Determines if the text should be wrapped at borders.
	 */
	TextWrapped: boolean;
}

/**
 * UIImage is a class that can be used to display images.
 */
declare class UIImage extends UIField {
	/**
	 * The image asset used for the image.
	 */
	Image: ImageAsset;
	/**
	 * Determines UV scale of the image.
	 */
	TextureScale: Vector2;
	/**
	 * Determines UV offset of the image.
	 */
	TextureOffset: Vector2;
	/**
	 * The color applied to the image.
	 */
	Color: Color;
	/**
	 * Determines how the image is stretched within the view.
	 */
	StretchMode: ImageStretchMode;
	/**
	 * Determine the image filter mode.
	 */
	TextureFilter: TextureFilter;
	/**
	 * Determines if the image is flipped horizontally.
	 */
	FlipHorizontal: boolean;
	/**
	 * Determines if the image is flipped vertically.
	 */
	FlipVertical: boolean;
	/**
	 * Indicates whether the image is currently loading.
	 */
	readonly Loading: boolean;
}

/**
 * UIHVLayout is an abstract class that provides horizontal and vertical layout functionality for UI elements.
 */
declare class UIHVLayout extends UIContainer {
	/**
	 * The spacing between child elements in the layout.
	 */
	Spacing: number;
	/**
	 * Determines the alignment of child elements within the layout.
	 */
	ChildAlignment: UILayoutAlignment;
}

/**
 * UIHLayout is a class that aligns all of it's children horizontally.
 */
declare class UIHLayout extends UIHVLayout {
}

/**
 * UIHFlow is a class that aligns all of it's children horizontally and wraps them around at the borders.
 */
declare class UIHFlow extends UIFlowLayout {
}

/**
 * UIGridLayout is a class that arranges all of it's children in a grid layout
 */
declare class UIGridLayout extends UIContainer {
	/**
	 * The spacing between each item.
	 */
	Spacing: number;
	/**
	 * The number of columns for this grid layout.
	 */
	Columns: number;
}

/**
 * UIFlowLayout is a class that aligns all of it's children horizontally or vertically and wraps them around at the borders.
 */
declare class UIFlowLayout extends UIHVLayout {
}

/**
 * UIField is the abstract base class of all UI classes.
 */
declare class UIField extends Instance {
	/**
	 * The offset of the UI element in pixels.
	 */
	PositionOffset: Vector2;
	/**
	 * The position of the UI element relative to its parent.
	 */
	PositionRelative: Vector2;
	/**
	 * The rotation of the UI element in degrees.
	 */
	Rotation: number;
	/**
	 * The size offset of the UI element in pixels.
	 */
	SizeOffset: Vector2;
	/**
	 * The size of the UI element relative to its parent.
	 */
	SizeRelative: Vector2;
	/**
	 * Determines whether the UI element clips its descendants.
	 */
	ClipDescendants: boolean;
	/**
	 * The pivot point of the UI element.
	 */
	PivotPoint: Vector2;
	/**
	 * The scale of the UI element.
	 */
	Scale: Vector2;
	/**
	 * Determines whether the UI element is visible.
	 */
	Visible: boolean;
	/**
	 * Determines the mask mode of the UI element.
	 */
	MaskMode: UIMaskMode;
	/**
	 * Determines if the UI field should be ignored by mouse input
	 */
	IgnoreMouse: boolean;
	/**
	 * Determines the ZIndex value of this UI field.
	 */
	ZIndex: number;
	/**
	 * The absolute position of the UI element in pixels.
	 */
	readonly AbsolutePosition: Vector2;
	/**
	 * The absolute size of the UI element in pixels.
	 */
	readonly AbsoluteSize: Vector2;
	/**
	 * Indicates whether the UI element is visible in the UI hierarchy.
	 */
	readonly IsVisibleInTree: boolean;
	/**
	 * Fires when user's cursor hovers on this UI
	 */
	readonly MouseEnter: PTSignal<() => void>;
	/**
	 * Fires when user's cursor leaves this UI
	 */
	readonly MouseExit: PTSignal<() => void>;
	/**
	 * Fires when user hold down mouse on this UI
	 */
	readonly MouseDown: PTSignal<() => void>;
	/**
	 * Fires when user release mouse on this UI
	 */
	readonly MouseUp: PTSignal<() => void>;
	/**
	 * Fires when this UI transform has been changed
	 */
	readonly TransformChanged: PTSignal<() => void>;
	/**
	 * Fires when this UI visibility has been changed
	 */
	readonly VisibilityChanged: PTSignal<() => void>;
}

/**
 * UICorner modifies the parent UI element to add rounded corners.
 */
declare class UICorner extends Instance {
	/**
	 * Corner radius. When set, all specific corner radiuses are updated.
	 */
	CornerRadius: UIScale;
	/**
	 * Top left corner radius.
	 */
	TopLeftRadius: UIScale;
	/**
	 * Top right corner radius.
	 */
	TopRightRadius: UIScale;
	/**
	 * Bottom left corner radius.
	 */
	BottomLeftRadius: UIScale;
	/**
	 * Bottom right corner radius.
	 */
	BottomRightRadius: UIScale;
}

/**
 * Base class for all UI containers
 */
declare class UIContainer extends UIField {
}

/**
 * UIButton is a class that represents a clickable button UI element.
 */
declare class UIButton extends UILabel {
	/**
	 * Fires when user click on this button
	 */
	readonly Clicked: PTSignal<() => void>;
}

/**
 * UIAspectRatioRestraint restrains the size of the parent UI element to match a specific aspect ratio.
 */
declare class UIAspectRatioRestraint extends Instance {
	/**
	 * Determines which axis should be prioritized when scaling the UI element.
	 */
	DominantAxis: DominantAxis;
	/**
	 * Determines how the UI element should be scaled.
	 */
	ScaleType: AspectRatioScaleType;
	/**
	 * Target aspect ratio of the UI element.
	 */
	AspectRatio: number;
}

/**
 * TweenService is a service for managing tweens
 */
declare interface TweenService extends Instance {
	/**
	 * Creates a new tween object
	 *     
	 *     Note: Tween will run automatically after one frame, you must use it's function right after creating it.
	 */
	NewTween() : TweenObject;
}

declare const TweenService: TweenService;

/**
 * An object that represents tween
 */
declare class TweenObject {
	/**
	 * Determines if this tween is looped
	 */
	Looped: boolean;
	/**
	 * Determines if this tween will run all the tweens in parallel
	 */
	Parallel: boolean;
	/**
	 * Determines the speed scale of this tween
	 */
	SpeedScale: number;
	/**
	 * Determines the tween direction.
	 */
	Direction: TweenDirection;
	/**
	 * Determines the tween transition.
	 */
	Transition: TweenTransition;
	/**
	 * Returns whether or not this tween is running
	 */
	readonly IsRunning: boolean;
	/**
	 * Returns the elapsed time of this tween
	 */
	readonly ElapsedTime: number;
	/**
	 * Set the direction of this tween. This function returns a `TweenObject` which means you can stack it with other functions.
	 */
	SetDirection(dir: TweenDirection) : TweenObject;
	/**
	 * Set the transition of this tween. This function returns a `TweenObject` which means you can stack it with other functions.
	 */
	SetTrans(trans: TweenTransition) : TweenObject;
	/**
	 * Tweens the position of a Dynamic.
	 */
	TweenPosition(target: Dynamic, destination: Vector3, time: number) : undefined;
	/**
	 * Tweens the rotation of a Dynamic.
	 */
	TweenRotation(target: Dynamic, destination: Vector3, time: number) : undefined;
	/**
	 * Tweens the size of a Dynamic.
	 */
	TweenSize(target: Dynamic, destination: Vector3, time: number) : undefined;
	/**
	 * Tweens a color between two specified values.
	 */
	TweenColor(from: Color, to: Color, time: number, callback: () => void) : undefined;
	/**
	 * Tweens a number between two specified values.
	 */
	TweenNumber(from: number, to: number, time: number, callback: () => void) : undefined;
	/**
	 * Tweens a Vector2 between two specified values.
	 */
	TweenVector2(from: Vector2, to: Vector2, time: number, callback: () => void) : undefined;
	/**
	 * Tweens a Vector3 between two specified values.
	 */
	TweenVector3(from: Vector3, to: Vector3, time: number, callback: () => void) : undefined;
	/**
	 * Tweens a Quaternion between two specified values.
	 */
	TweenQuaternion(from: Quaternion, to: Quaternion, time: number, callback: () => void) : undefined;
	/**
	 * Play this tween
	 */
	Play() : undefined;
	/**
	 * Pause this tween
	 */
	Pause() : undefined;
	/**
	 * Stop this tween
	 */
	Stop() : undefined;
	/**
	 * Creates a delay in the tween.
	 */
	Interval(sec: number) : undefined;
	/**
	 * Chain a tween if parallel is set to true
	 */
	Chain() : TweenObject;
	/**
	 * Cancel this tween
	 */
	Cancel(callFinished?: boolean) : undefined;
	/**
	 * Fires when this tween has finished
	 */
	readonly Finished: PTSignal<() => void>;
	/**
	 * Fires when this tween has been canceled
	 */
	readonly Canceled: PTSignal<() => void>;
}

/**
 * Trusses are parts that can be climbed by the player.
 */
declare class Truss extends Part {
	/**
	 * The speed at which the player can climb the truss.
	 */
	ClimbSpeed: number;
	/**
	 * Determines whether the truss is climbable.
	 */
	Climbable: boolean;
}

/**
 * Tools are objects that can be held by the player.
 */
declare class Tool extends RigidBody {
	/**
	 * Determines whether the tool can be dropped by the player.
	 */
	Droppable: boolean;
	/**
	 * The icon for this tool, appears in inventory.
	 */
	IconImage: ImageAsset;
	/**
	 * Determines the cooldown before a dropped tool can be picked up.
	 */
	DropEquipCooldown: number;
	/**
	 * Determines who is currently holding this tool.
	 */
	Holder: NPC;
	/**
	 * Activates the tool, similarly to pressing the mouse button.
	 */
	Activate() : undefined;
	/**
	 * Deactivates the tool, similarly to releasing the mouse button.
	 */
	Deactivate() : undefined;
	/**
	 * Plays the specified animation on the holder of the tool.
	 */
	PlayAnimation(animationName: string) : undefined;
	/**
	 * Fires when this tool has been equipped
	 */
	readonly Equipped: PTSignal<() => void>;
	/**
	 * Fires when this tool has been unequipped
	 */
	readonly Unequipped: PTSignal<() => void>;
	/**
	 * Fires when this tool has been activated (via mouse press or `Tool:Activate`)
	 */
	readonly Activated: PTSignal<() => void>;
	/**
	 * Fires when this tool has been deactivated (via mouse release or `Tool:Deactivate`)
	 */
	readonly Deactivated: PTSignal<() => void>;
}

/**
 * Text3D is a class that represents 3D text in the game world.
 */
declare class Text3D extends Dynamic {
	/**
	 * The text content displayed.
	 */
	Text: string;
	/**
	 * The size of the font used for the text.
	 */
	FontSize: number;
	/**
	 * The color of the text.
	 */
	Color: Color;
	/**
	 * The width of the text outline.
	 */
	OutlineWidth: number;
	/**
	 * The color of the text outline.
	 */
	OutlineColor: Color;
	/**
	 * Determines whether the text should always be facing the camera.
	 */
	FaceCamera: boolean;
	/**
	 * Determines the horizontal alignment of the text.
	 */
	HorizontalAlignment: HorizontalAlignment;
	/**
	 * Determines the vertical alignment of the text.
	 */
	VerticalAlignment: VerticalAlignment;
	/**
	 * The font asset used for the text.
	 */
	FontAsset: FontAsset;
	/**
	 * Determines whether the text should be parsed as rich text.
	 */
	UseRichText: boolean;
	/**
	 * Determines whether the text should be affected by lighting.
	 */
	Shaded: boolean;
}

/**
 * A temporary container. All class that were instantiated from `Instance.New` will have this class as their first parent.
 */
declare interface Temporary extends ServerHidden {
}

declare const Temporary: Temporary;

/**
 * Teams is a collection of Team objects used to manage player teams.
 */
declare interface Teams extends Instance {
	/**
	 * Get all the teams
	 */
	GetTeams() : Team[];
}

declare const Teams: Teams;

/**
 * Team is an object that represents a player team to which players can be assigned.
 */
declare class Team extends Instance {
	/**
	 * Display name for this team
	 */
	DisplayName: string;
	/**
	 * Color for this team
	 */
	Color: Color;
	/**
	 * Returns the display name of the team. If DisplayName is specified, it returns DisplayName; otherwise, it returns Name.
	 */
	GetDisplayName() : string;
	/**
	 * Get all players assigned to this team.
	 */
	GetPlayers() : Player[];
}

/**
 * SunLight is the main directional light source representing the sun in the game world.
 */
declare interface SunLight extends Light {
}

declare const SunLight: SunLight;

/**
 * StringValue is an object that holds a string value.
 */
declare class StringValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: string;
}

/**
 * Stats is a collection of Stat objects used to manage player stats.
 */
declare interface Stats extends Instance {
	/**
	 * Gets all Stat objects
	 */
	GetStats() : Stat[];
	/**
	 * Gets all visible Stat objects
	 */
	GetVisibleStats() : Stat[];
}

declare const Stats: Stats;

/**
 * Stat is an object that represents a player stat to which players can be assigned to have their own number or string values.
 */
declare class Stat extends Instance {
	/**
	 * The display name for this stat.
	 */
	DisplayName: string;
	/**
	 * Determines whether the stat is visible.
	 */
	Visible: boolean;
	/**
	 * Returns the display name of the stat. If DisplayName is specified, it returns DisplayName; otherwise, it returns Name.
	 */
	GetDisplayName() : string;
	/**
	 * Set the value stat of player to string
	 */
	Set(player: Player, val: number) : undefined;
	/**
	 * Set the value stat of player to string
	 */
	Set(player: Player, val: string) : undefined;
	/**
	 * Get the value stat of player
	 */
	Get(player: Player) : any;
	/**
	 * Get the total value for team
	 */
	GetTotalForTeam(team: Team) : number;
	/**
	 * Gets the display value for a player. If the value is a number, it is automatically converted to K/M/S format (e.g., 1K+, 12.3K+).
	 */
	GetDisplayValue(plr: Player) : string;
}

/**
 * SpotLight is a source of light emitting in a specific direction and angle that can be placed in the world.
 */
declare class SpotLight extends Light {
	/**
	 * The maximum distance the light can reach.
	 */
	Range: number;
	/**
	 * The angle of the spotlight's cone.
	 */
	Angle: number;
}

/**
 * Sounds are objects that can be placed in the world and play audio.
 */
declare class Sound extends Dynamic {
	/**
	 * The audio asset to be played by the sound.
	 */
	Audio: AudioAsset;
	/**
	 * The volume level of the sound.
	 */
	Volume: number;
	/**
	 * The pitch level of the sound.
	 */
	Pitch: number;
	/**
	 * The left-right pan level of the sound.
	 */
	Pan: number;
	/**
	 * Determines whether the sound should start playing automatically when loaded.
	 */
	Autoplay: boolean;
	/**
	 * Determines whether the sound should loop when it reaches the end.
	 */
	Loop: boolean;
	/**
	 * Determines what position the sound should loop back to.
	 */
	LoopStart: number;
	/**
	 * Determines whether the sound should be played in the 3D world space.
	 */
	PlayInWorld: boolean;
	/**
	 * Determines whether the sound should be paused
	 */
	Paused: boolean;
	/**
	 * The maximum distance at which the sound can be heard.
	 */
	MaxDistance: number;
	/**
	 * Determines how a sound should get quieter when further away.
	 */
	AttenuationMode: SoundAttenuationMode;
	/**
	 * Indicates the current playback position of the sound in seconds.
	 */
	Time: number;
	/**
	 * Indicates whether the sound is currently playing.
	 */
	readonly Playing: boolean;
	/**
	 * Indicates whether the sound is currently loading.
	 */
	readonly Loading: boolean;
	/**
	 * The total length of the sound in seconds.
	 */
	readonly Length: number;
	/**
	 * Starts playing the sound.
	 */
	Play() : undefined;
	/**
	 * Plays the sound once at the specified volume without affecting the current playback.
	 */
	PlayOneShot(volume?: number) : undefined;
	/**
	 * Pause the sound if it is currently playing.
	 */
	Pause() : undefined;
	/**
	 * Stops the sound if it is currently playing.
	 */
	Stop() : undefined;
	/**
	 * Missing Documentation
	 */
	GetPeakVolume() : number;
	/**
	 * Fires when this sound has loaded
	 */
	readonly Loaded: PTSignal<() => void>;
	/**
	 * Fires when this sound has finished playback
	 */
	readonly Finished: PTSignal<() => void>;
}

/**
 * WIP Class
 */
declare interface SocialService extends Instance {
}

declare const SocialService: SocialService;

/**
 * Sky is an abstract base class representing the sky in the game world.
 */
declare class Sky extends Instance {
}

/**
 * ShadowLayer represents a shadow placed behind a UI element.
 */
declare class ShadowLayer {
	/**
	 * The color of the shadow.
	 */
	Color: Color;
	/**
	 * The offset of the shadow.
	 */
	Offset: Vector2;
	/**
	 * Determines how much the shadow is blurred.
	 */
	Radius: number;
	/**
	 * Determines how big the shadow is.
	 */
	Spread: number;
	/**
	 * Determines how the shadow is blended.
	 */
	BlendMode: BlendMode;
	/**
	 * Creates a new ShadowLayer object.
	 */
	static New() : ShadowLayer;
}

/**
 * ServerScript is a script that runs on the server.
 */
declare class ServerScript extends Script {
}

/**
 * ServerHidden, similar to Hidden, is a container for objects that are meant to be hidden. Unlike Hidden, ServerHidden won't replicate its contents to clients and can only be accessed by the server.
 */
declare interface ServerHidden extends HiddenBase {
}

declare const ServerHidden: ServerHidden;

/**
 * Seats are parts the player can sit on.
 */
declare class Seat extends Part {
	/**
	 * Indicates who is currently occupying the seat.
	 */
	Occupant: NPC;
	/**
	 * Determines whether players are allowed to sit on this seat.
	 */
	CanPlayerSit: boolean;
	/**
	 * Determines whether NPCs are allowed to sit on this seat.
	 */
	CanNPCSit: boolean;
	/**
	 * Missing Documentation
	 */
	SitDirectionLocked: boolean;
	/**
	 * Fires when an occupant sits on the seat.
	 */
	readonly Sat: PTSignal<(npc: NPC) => void>;
	/**
	 * Fires when an occupant leaves the seat.
	 */
	readonly Vacated: PTSignal<(npc: NPC) => void>;
}

/**
 * Shared table of object. This class provides a table which any scripts can modify.
 */
declare class ScriptSharedTable {
	/**
	 * Clear the shared table
	 */
	Clear() : undefined;
	/**
	 * Remove the key from shared table
	 */
	Remove(key: string) : undefined;
	/**
	 * Clear all keys with the prefix
	 */
	ClearPrefix(prefix: string) : undefined;
	/**
	 * Clear all keys with the suffix
	 */
	ClearSuffix(suffix: string) : undefined;
}

/**
 * ScriptService is a service used for storing scripts and local scripts. It is also responsible for managing their execution within the game.
 */
declare interface ScriptService extends Instance {
}

declare const ScriptService: ScriptService;

/**
 * Scripts are abstract base classes representing Lua code that can be executed in the game.
 */
declare class Script extends Instance {
	/**
	 * The source code of the script as a string.
	 */
	Source: string;
	/**
	 * Determine if this script should be enabled. Note that setting it to false during runtime won't stop the script immediately, rather it would stop any running threads when it hits any yield function.
	 */
	IsEnabled: boolean;
	/**
	 * A linked script asset associated with this script.
	 */
	LinkedScript: FileLinkAsset;
	/**
	 * Indicates whether the script is running in compatibility mode.
	 */
	Compatibility: boolean;
	/**
	 * Calls a function in the script with the given arguments.
	 */
	Call(funcName: string, args: any) : undefined;
	/**
	 * Calls a function in the script asynchronously with the given arguments.
	 */
	CallAsync(funcName: string, args: any) : undefined;
	/**
	 * Link script with the target file path
	 */
	LinkWithScriptFile(scriptPath: string) : undefined;
}

/**
 * RigidBody is the base class for object affected by physics, and can also be used as a container for other physics objects.
 */
declare class RigidBody extends Physical {
	/**
	 * Determines the linear velocity of this object.
	 */
	Velocity: Vector3;
	/**
	 * Determines the angular velocity of this object.
	 */
	AngularVelocity: Vector3;
	/**
	 * Determines how much this object is affected by gravity.
	 */
	GravityScale: number;
	/**
	 * Determines the mass of the entity.
	 */
	Mass: number;
	/**
	 * Determines the friction of the entity.
	 */
	Friction: number;
	/**
	 * Determines the drag (air resistance) of the entity.
	 */
	Drag: number;
	/**
	 * Determines the angular drag of the entity.
	 */
	AngularDrag: number;
	/**
	 * Determines the bounciness of the entity.
	 */
	Bounciness: number;
	/**
	 * Determines if this object can be rotated.
	 */
	LockRotation: boolean;
}

/**
 * Base class for resource based assets
 */
declare class ResourceAsset extends BaseAsset {
	/**
	 * Indicates whether the asset is currently loading.
	 */
	readonly Loading: boolean;
	/**
	 * Fires when this asset has loaded
	 */
	readonly Loaded: PTSignal<() => void>;
}

/**
 * RayResult is a data type that contains data about a raycast result.
 */
declare class RayResult {
	/**
	 * The origin point of the ray.
	 */
	Origin: Vector3;
	/**
	 * The direction vector of the ray.
	 */
	Direction: Vector3;
	/**
	 * The position where the ray hit an object.
	 */
	Position: Vector3;
	/**
	 * The surface normal at the point where the ray hit.
	 */
	Normal: Vector3;
	/**
	 * The distance from the ray's origin to the hit point.
	 */
	Distance: number;
	/**
	 * The instance that was hit by the ray.
	 */
	Instance: Instance;
}

/**
 * RangeValue is an object that holds a NumberRange value.
 */
declare class RangeValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: NumberRange;
}

/**
 * QuaternionValue is an object that holds a Quaternion value.
 */
declare class QuaternionValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: Quaternion;
}

/**
 * Represents a quaternion used for rotations.
 */
declare class Quaternion {
	/**
	 * The X component of the quaternion.
	 */
	X: number;
	/**
	 * The Y component of the quaternion.
	 */
	Y: number;
	/**
	 * The Z component of the quaternion.
	 */
	Z: number;
	/**
	 * The W component of the quaternion.
	 */
	W: number;
	/**
	 * The identity rotation.
	 */
	readonly Identity: Quaternion;
	/**
	 * Creates a new Quaternion object with the specified components.
	 */
	static New() : Quaternion;
	/**
	 * Creates a new Quaternion object with the specified components.
	 */
	static New(x: number, y: number, z: number, w: number) : Quaternion;
	/**
	 * Calculates the angle between two quaternions.
	 */
	static Angle(a: Quaternion, b: Quaternion) : number;
	/**
	 * Creates a rotation which rotates angle degrees around axis.
	 */
	static AngleAxis(angle: number, axis: Vector3) : Quaternion;
	/**
	 * Calculates the dot product of two quaternions.
	 */
	static Dot(a: Quaternion, b: Quaternion) : number;
	/**
	 * Creates a quaternion from Euler angles specified by a Vector3.
	 */
	static Euler(x: number, y: number, z: number) : Quaternion;
	/**
	 * Creates a quaternion from Euler angles specified by a Vector3.
	 */
	static Euler(euler: Vector3) : Quaternion;
	/**
	 * Converts a quaternion to Euler angles represented as a Vector3.
	 */
	static ToEuler(euler: Quaternion) : Vector3;
	/**
	 * Creates a rotation which rotates angle degrees around axis.
	 */
	static FromToRotation(fromDirection: Vector3, toDirection: Vector3) : Quaternion;
	/**
	 * Calculates the inverse of a quaternion.
	 */
	static Inverse(rotation: Quaternion) : Quaternion;
	/**
	 * Linearly interpolates between two quaternions.
	 */
	static Lerp(a: Quaternion, b: Quaternion, t: number) : Quaternion;
	/**
	 * Linearly interpolates between two quaternions without clamping the interpolant.
	 */
	static LerpUnclamped(a: Quaternion, b: Quaternion, t: number) : Quaternion;
	/**
	 * Creates a rotation with the specified forward and upwards directions.
	 */
	static LookRotation(forward: Vector3) : Quaternion;
	/**
	 * Creates a rotation with the specified forward and upwards directions.
	 */
	static LookRotation(forward: Vector3, upwards: Vector3) : Quaternion;
	/**
	 * Normalizes the given quaternion.
	 */
	static Normalize(quaternion: Quaternion) : Quaternion;
	/**
	 * Rotates a rotation from towards to by maxDegreesDelta.
	 */
	static RotateTowards(from: Quaternion, to: Quaternion, maxDegreesDelta: number) : Quaternion;
	/**
	 * Spherically interpolates between two quaternions.
	 */
	static Slerp(a: Quaternion, b: Quaternion, t: number) : Quaternion;
	/**
	 * Spherically interpolates between two quaternions without clamping the interpolant.
	 */
	static SlerpUnclamped(a: Quaternion, b: Quaternion, t: number) : Quaternion;
}

/**
 * Service responsible for handling in-game purchases and ownership verification.
 */
declare interface PurchasesService extends Instance {
	/**
	 * Prompt the purchase prompt to player
	 */
	PromptAsync(player: Player, assetID: number) : boolean;
	/**
	 * Checks asynchronously if the specified player owns the asset with the given asset ID.
	 */
	OwnsItemAsync(player: Player, assetID: number) : boolean;
}

declare const PurchasesService: PurchasesService;

/**
 * ProceduralSky is a type of sky that generates its appearance procedurally based on the position of the sun and its properties.
 */
declare class ProceduralSky extends Sky {
	/**
	 * The size of the sun in the sky.
	 */
	SunSize: number;
	/**
	 * The tint color of the sky.
	 */
	SkyTint: Color;
	/**
	 * The color of the horizon in the sky.
	 */
	HorizonColor: Color;
	/**
	 * The color of the ground in the sky.
	 */
	GroundColor: Color;
	/**
	 * The exposure level of the sky.
	 */
	Exposure: number;
}

/**
 * PresenceService is a service that allows ClientScripts to set the active status of the player. Which will be used to display in supported integrations.
 */
declare interface PresenceService extends Instance {
	/**
	 * Current activity status.
	 */
	State: string;
	/**
	 * Activity cover image.
	 */
	CoverImage: PTImageAsset;
	/**
	 * Reset the running timer for this activity.
	 */
	ResetTimer() : undefined;
}

declare const PresenceService: PresenceService;

/**
 * PreferencesService is a service that allows scripts to access some of the user preferences
 */
declare interface PreferencesService extends Instance {
	/**
	 * Missing Documentation
	 */
	readonly CameraSensitivity: number;
	/**
	 * Missing Documentation
	 */
	readonly UiScale: number;
	/**
	 * Missing Documentation
	 */
	Get(name: string) : any;
	/**
	 * Fired when a user preference setting is changed.
	 */
	readonly SettingChanged: PTSignal<(string: string, any: any) => void>;
}

declare const PreferencesService: PreferencesService;

/**
 * a PolytorianModel is a CharacterModel that represents the default Polytoria Character.
 */
declare class PolytorianModel extends CharacterModel {
	/**
	 * The head color
	 */
	HeadColor: Color;
	/**
	 * The torso color
	 */
	TorsoColor: Color;
	/**
	 * The left arm color
	 */
	LeftArmColor: Color;
	/**
	 * The right arm color
	 */
	RightArmColor: Color;
	/**
	 * The left leg color
	 */
	LeftLegColor: Color;
	/**
	 * The right leg color
	 */
	RightLegColor: Color;
	/**
	 * The face image to use
	 */
	FaceImage: ImageAsset;
	/**
	 * The body mesh to use. The mesh must be in Polytoria Body rig format.
	 */
	BodyMesh: MeshAsset;
	/**
	 * Returns true if this character is ragdolling.
	 */
	readonly Ragdolling: boolean;
	/**
	 * Returns the current global ragdoll position. If not ragdolling, Returns `Vector3.Zero`.
	 */
	readonly RagdollPosition: Vector3;
	/**
	 * Returns the current global ragdoll rotation. If not ragdolling, Returns `Vector3.Zero`.
	 */
	readonly RagdollRotation: Vector3;
	/**
	 * Start ragdoll
	 */
	StartRagdoll(force?: Vector3) : undefined;
	/**
	 * Stop ragdoll
	 */
	StopRagdoll() : undefined;
	/**
	 * Get an attachment from this character.
	 */
	GetAttachment(attachmentEnum: CharacterAttachment) : Dynamic;
	/**
	 * Load an appearance.
	 */
	LoadAppearance(userID: number, loadTool?: boolean) : undefined;
	/**
	 * Clear current appearance.
	 */
	ClearAppearance() : undefined;
	/**
	 * Fires when ragdoll starts.
	 */
	readonly RagdollStarted: PTSignal<() => void>;
	/**
	 * Fires when ragdoll stops.
	 */
	readonly RagdollStopped: PTSignal<() => void>;
}

/**
 * PointLight is a type of light that emits light in all directions from a single point.
 */
declare class PointLight extends Light {
	/**
	 * The range of the point light's illumination.
	 */
	Range: number;
}

/**
 * Players is the container class for all Player instances.
 */
declare interface Players extends Instance {
	/**
	 * The player who is currently playing the game.
	 */
	readonly LocalPlayer: Player;
	/**
	 * Determines whether or not collisions between players are enabled.
	 */
	PlayerCollisionEnabled: boolean;
	/**
	 * Determines whether or not server should trust the client for adjusting player's properties. Enabling this is recommended.
	 */
	UseServerAuthority: boolean;
	/**
	 * The number of players currently in the game.
	 */
	readonly PlayersCount: number;
	/**
	 * Returns a table containing all the players currently in the game.
	 */
	GetPlayers() : Player[];
	/**
	 * Returns the player with the specified username.
	 */
	GetPlayer(username: string) : Player;
	/**
	 * Returns the player with the specified user ID.
	 */
	GetPlayerByID(userID: number) : Player;
	/**
	 * Fires when player has connected
	 */
	readonly PlayerAdded: PTSignal<(player: Player) => void>;
	/**
	 * Fires when player has disconnected
	 */
	readonly PlayerRemoved: PTSignal<(player: Player) => void>;
}

declare const Players: Players;

/**
 * PlayerGUI is a class that contains all custom GUIs.
 */
declare interface PlayerGUI extends Instance {
}

declare const PlayerGUI: PlayerGUI;

/**
 * PlayerDefaults is a service used for storing the default values of the  Player when created.
 */
declare interface PlayerDefaults extends HiddenBase {
	/**
	 * The default maximum health of the player.
	 */
	MaxHealth: number;
	/**
	 * The default walking speed of the player.
	 */
	WalkSpeed: number;
	/**
	 * The default sprinting speed of the player.
	 */
	SprintSpeed: number;
	/**
	 * The default jump power of the player.
	 */
	JumpPower: number;
	/**
	 * The default time the player has to wait before respawning.
	 */
	RespawnTime: number;
	/**
	 * The default chat color of the player.
	 */
	ChatColor: Color;
	/**
	 * Determines if the chat has colored player names.
	 */
	ChatColorsEnabled: boolean;
	/**
	 * Determines whether the player can move by default.
	 */
	CanMove: boolean;
	/**
	 * The rate at which the player's stamina depletes while sprinting.
	 */
	StaminaBurn: number;
	/**
	 * Determines whether the player uses stamina.
	 */
	UseStamina: boolean;
	/**
	 * Legacy value for stamina.
	 */
	StaminaEnabled: boolean;
	/**
	 * Determines the default stamina of players.
	 */
	Stamina: number;
	/**
	 * Determines the default maximum stamina of players.
	 */
	MaxStamina: number;
	/**
	 * Determines the rate at which the player's stamina regenerates.
	 */
	StaminaRegen: number;
	/**
	 * Determines whether the inventory is kept when respawning.
	 */
	KeepInventory: boolean;
	/**
	 * Determines whether the player uses head turning by default.
	 */
	UseHeadTurning: boolean;
	/**
	 * Determines whether the player uses bubble chat by default.
	 */
	UseBubbleChat: boolean;
	/**
	 * Determines whether the player's appearance is automatically loaded by default.
	 */
	AutoLoadAppearance: boolean;
	/**
	 * Determines whether the player's equippable appearance tool should be loaded.
	 */
	LoadAppearanceTools: boolean;
	/**
	 * Determine the movement mode for the player.
	 */
	MovementMode: PlayerMovementMode;
	/**
	 * Resets the specified player back to their default values.
	 */
	LoadDefaults() : undefined;
}

declare const PlayerDefaults: PlayerDefaults;

/**
 * Player represents a user playing the game.
 */
declare class Player extends NPC {
	/**
	 * The unique ID of the player.
	 */
	readonly UserID: number;
	/**
	 * Determines whether the player can move.
	 */
	CanMove: boolean;
	/**
	 * Determines the sprinting speed of the player.
	 */
	SprintSpeed: number;
	/**
	 * Determines the current stamina of the player.
	 */
	Stamina: number;
	/**
	 * Determines the maximum stamina of the player.
	 */
	MaxStamina: number;
	/**
	 * Determines whether the player uses stamina.
	 */
	UseStamina: boolean;
	/**
	 * Determines the rate at which the player's stamina regenerates.
	 */
	StaminaRegen: number;
	/**
	 * Determines the rate at which the player's stamina depletes while sprinting.
	 */
	StaminaBurn: number;
	/**
	 * Determines the time the player has to wait before respawning.
	 */
	RespawnTime: number;
	/**
	 * Determines whether the inventory is kept when respawning.
	 */
	KeepInventory: boolean;
	/**
	 * Determines whether the player uses head turning.
	 */
	UseHeadTurning: boolean;
	/**
	 * Determines whether the player uses bubble chat.
	 */
	UseBubbleChat: boolean;
	/**
	 * Determines whether the player's appearance is automatically loaded.
	 */
	AutoLoadAppearance: boolean;
	/**
	 * If true, animation will not stop when player starts moving
	 */
	AllowAnimationWhileMoving: boolean;
	/**
	 * Player's assigned team
	 */
	Team: Team;
	/**
	 * Determine the movement mode for the player.
	 */
	MovementMode: PlayerMovementMode;
	/**
	 * Missing Documentation
	 */
	RotationMode: PlayerRotationMode;
	/**
	 * The amount of network latency (ping) the player is experiencing.
	 */
	readonly NetworkPing: number;
	/**
	 * Determines whether the player is an administrator.
	 */
	readonly IsAdmin: boolean;
	/**
	 * Determines whether the player is the creator of the game.
	 */
	readonly IsCreator: boolean;
	/**
	 * Role class of the player.
	 */
	readonly UserRoleClass: string;
	/**
	 * Determines the chat color of the player.
	 */
	ChatColor: Color;
	/**
	 * Determines whether the player is the local player.
	 */
	readonly IsLocal: boolean;
	/**
	 * Determines whether the player is currently climbing.
	 */
	readonly IsClimbing: boolean;
	/**
	 * Determines the truss the player is currently climbing.
	 */
	readonly ClimbingTruss: Truss;
	/**
	 * Determines the platform the player is using.
	 */
	readonly UserPlatform: ClientPlatform;
	/**
	 * The inventory of the player.
	 */
	readonly Inventory: Inventory;
	/**
	 * Makes the player jump.
	 */
	Jump() : undefined;
	/**
	 * Kicks the player from the game with the specified reason.
	 */
	Kick(reason: string) : undefined;
	/**
	 * Unequips the currently equipped tool of the player.
	 */
	UnequipTool() : undefined;
	/**
	 * Respawns the player.
	 */
	Respawn() : undefined;
	/**
	 * Resets the player's appearance to the default.
	 */
	ResetAppearance() : undefined;
	/**
	 * Fires when this player chats
	 */
	readonly Chatted: PTSignal<(string: string) => void>;
	/**
	 * Fires when stat value has changed
	 */
	readonly StatChanged: PTSignal<(stat: Stat, any: any) => void>;
	/**
	 * Fires when player has been assigned a team
	 */
	readonly TeamChanged: PTSignal<(team: Team) => void>;
	/**
	 * Fires when this player has respawned
	 */
	readonly Respawned: PTSignal<() => void>;
}

/**
 * Physical represents an object affected by physics in the world.
 */
declare class Physical extends Dynamic {
	/**
	 * Determines whether this object is affected by physics.
	 */
	Anchored: boolean;
	/**
	 * Determines whether this object can collide with other objects.
	 */
	CanCollide: boolean;
	/**
	 * Determines what collision layers this object belongs to.
	 */
	CollisionLayers: number;
	/**
	 * Determines what collision layers this object can collide with.
	 */
	CollisionMask: number;
	/**
	 * Determines the linear velocity of this object.
	 */
	Velocity: Vector3;
	/**
	 * Determines the angular velocity of this object.
	 */
	AngularVelocity: Vector3;
	/**
	 * Sets the network authority of this object to the specified player.
	 */
	SetNetworkAuthority(plr: Player) : undefined;
	/**
	 * Missing Documentation
	 */
	SetCollisionLayer(layer: number, value: boolean) : undefined;
	/**
	 * Missing Documentation
	 */
	SetCollisionMask(layer: number, value: boolean) : undefined;
	/**
	 * Missing Documentation
	 */
	GetCollisionLayer(layer: number) : boolean;
	/**
	 * Missing Documentation
	 */
	GetCollisionMask(layer: number) : boolean;
	/**
	 * Get all objects that are currently in contact with this object.
	 */
	GetTouching() : Physical[];
	/**
	 * Moves the part by the specified vector while keeping physics in mind.
	 */
	MovePosition(position: Vector3) : undefined;
	/**
	 * Rotates the part by the specified Euler angles while keeping physics in mind.
	 */
	MoveRotation(rotation: Vector3) : undefined;
	/**
	 * Add force to this physical
	 */
	AddForce(force: Vector3, mode?: ForceMode) : undefined;
	/**
	 * Add torque to this physical
	 */
	AddTorque(force: Vector3, mode?: ForceMode) : undefined;
	/**
	 * Add force at position to this physical
	 */
	AddForceAtPosition(force: Vector3, position: Vector3, mode?: ForceMode) : undefined;
	/**
	 * Add relative force to this physical
	 */
	AddRelativeForce(force: Vector3, mode?: ForceMode) : undefined;
	/**
	 * Add relative torque to this physical
	 */
	AddRelativeTorque(torque: Vector3, mode?: ForceMode) : undefined;
	/**
	 * Fires when this object has collide with other object
	 */
	readonly Touched: PTSignal<(physical: Physical) => void>;
	/**
	 * Fires when this object has stopped colliding with other object
	 */
	readonly TouchEnded: PTSignal<(physical: Physical) => void>;
	/**
	 * Fires when cursor is hovered on this object. Only fired locally
	 */
	readonly MouseEnter: PTSignal<() => void>;
	/**
	 * Fires when cursor leaves this object. Only fired locally
	 */
	readonly MouseExit: PTSignal<() => void>;
	/**
	 * Fires when this object has been clicked by a player
	 */
	readonly Clicked: PTSignal<(player: Player) => void>;
}

/**
 * Particles represents a particle system that can be used to create various visual effects.
 */
declare class Particles extends Dynamic {
	/**
	 * Determines if particles should be emitting.
	 */
	Playing: boolean;
	/**
	 * Missing Documentation
	 */
	SpeedScale: number;
	/**
	 * The image used for the particles.
	 */
	Image: ImageAsset;
	/**
	 * Determines the texture filter mode.
	 */
	TextureFilter: TextureFilter;
	/**
	 * The color gradient used for the particles.
	 */
	Color: ColorSeries;
	/**
	 * Determines the lifetime of a particle.
	 */
	Lifetime: NumberRange;
	/**
	 * Determines the number of particles emitted.
	 */
	Amount: number;
	/**
	 * Missing Documentation
	 */
	Explosiveness: number;
	/**
	 * Determines the gravity effect applied to the particles.
	 */
	Gravity: Vector3;
	/**
	 * Determines the velocity direction
	 */
	VelocityDirection: Vector3;
	/**
	 * Determines the initial velocity
	 */
	InitialVelocity: NumberRange;
	/**
	 * Determines the starting rotation.
	 */
	StartRotation: NumberRange;
	/**
	 * Missing Documentation
	 */
	AngularVelocity: NumberRange;
	/**
	 * Missing Documentation
	 */
	AngularVelocityOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	LinearAcceleration: NumberRange;
	/**
	 * Missing Documentation
	 */
	LinearAccelerationOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	RadialAcceleration: NumberRange;
	/**
	 * Missing Documentation
	 */
	readonly RadialAccelerationOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	TangentialAcceleration: NumberRange;
	/**
	 * Missing Documentation
	 */
	readonly TangentialAccelerationOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	OrbitalVelocity: NumberRange;
	/**
	 * Missing Documentation
	 */
	readonly OrbitalVelocityOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	Damping: NumberRange;
	/**
	 * Missing Documentation
	 */
	readonly DampingOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	ScaleOverVelocity: NumberRange;
	/**
	 * Missing Documentation
	 */
	readonly ScaleOverVelocityCurve: NumberSeries;
	/**
	 * Missing Documentation
	 */
	TurbulenceEnabled: boolean;
	/**
	 * Missing Documentation
	 */
	TurbulenceInfluence: NumberRange;
	/**
	 * Missing Documentation
	 */
	readonly TurbulenceOverLifetime: NumberSeries;
	/**
	 * Missing Documentation
	 */
	TurbulenceNoiseScale: number;
	/**
	 * Missing Documentation
	 */
	TurbulenceNoiseStrength: number;
	/**
	 * Missing Documentation
	 */
	TurbulenceNoiseSpeed: Vector3;
	/**
	 * Determines the spread angle of the velocity
	 */
	Spread: number;
	/**
	 * Determines how flat the spread angle should be
	 */
	Flatness: number;
	/**
	 * Determine the initial scale range
	 */
	Scale: NumberRange;
	/**
	 * Missing Documentation
	 */
	ScaleOverLifetime: NumberSeries;
	/**
	 * Determine the hue variation
	 */
	HueVariation: NumberRange;
	/**
	 * Determines the blend mode of the particle.
	 */
	BlendMode: BlendMode;
	/**
	 * Determines whether the particles are shaded.
	 */
	Shaded: boolean;
	/**
	 * Determines the emission shape of this particle
	 */
	EmissionShape: ParticleEmissionShape;
	/**
	 * Determines the emission shape's scale
	 */
	EmissionShapeScale: Vector3;
	/**
	 * Whether the particles are simulated in world or local space.
	 */
	SimulationSpace: ParticleSimulationSpace;
	/**
	 * Determines the orientation mode of this particle.
	 */
	Orientation: ParticleOrientation;
	/**
	 * Returns true if the particle is playing.
	 */
	readonly IsPlaying: boolean;
	/**
	 * Returns true if the particle is paused.
	 */
	readonly IsPaused: boolean;
	/**
	 * Returns true if the particle has stopped.
	 */
	readonly IsStopped: boolean;
	/**
	 * Starts playing the particle system, as well as unpausing the currently paused particle system.
	 */
	Play() : undefined;
	/**
	 * Pauses all particles at the current position that they are at. Stop or play the particle system to unpause it.
	 */
	Pause() : undefined;
	/**
	 * Stops playing the particle system.
	 */
	Stop() : undefined;
	/**
	 * Missing Documentation
	 */
	Clear() : undefined;
	/**
	 * Emits a specified number of particles immediately.
	 */
	Emit(count: number) : undefined;
}

/**
 * Parts represent the basic building blocks of the world.
 */
declare class Part extends Entity {
	/**
	 * Determines the shape of the part.
	 */
	Shape: PartShape;
	/**
	 * Determines the material of the part.
	 */
	Material: PartMaterial;
	/**
	 * Determines the color of the part.
	 */
	Color: Color;
	/**
	 * Determines whether the part casts shadows.
	 */
	CastShadows: boolean;
}

/**
 * A mesh asset that's loaded from Polytoria.
 */
declare class PTMeshAsset extends MeshAsset {
	/**
	 * Asset ID of this mesh
	 */
	AssetID: number;
}

/**
 * PTMeshAnimationAsset is an animation asset where animation is loaded from Polytoria mesh.
 */
declare class PTMeshAnimationAsset extends MeshAnimationAsset {
	/**
	 * Asset ID for this mesh animation
	 */
	AssetID: number;
}

/**
 * An image asset that's loaded from Polytoria.
 */
declare class PTImageAsset extends ImageAsset {
	/**
	 * Asset ID of this image
	 */
	ImageID: number;
	/**
	 * Image type of this image
	 */
	ImageType: ImageType;
}

/**
 * A function that expects a return value. This will sometimes be referred as `function`
 */
declare class PTFunction {
}

/**
 * A function that doesn't expect a return value. This will sometimes be referred as `function`
 */
declare class PTCallback {
}

/**
 * Audio asset which is loaded from Polytoria
 */
declare class PTAudioAsset extends AudioAsset {
	/**
	 * The audio ID to load
	 */
	AudioID: number;
}

/**
 * NumberValue is an object that holds a number value.
 */
declare class NumberValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: number;
}

/**
 * Number series is a data type that represents a collection of numbers and points.
 */
declare class NumberSeries {
	/**
	 * Returns the point count of this number series.
	 */
	readonly PointCount: number;
	/**
	 * Creates a number series from a range.
	 */
	static New() : NumberSeries;
	/**
	 * Creates a number series from a range.
	 */
	static New(min: number, max: number) : NumberSeries;
	/**
	 * Clear this NumberSeries
	 */
	Clear() : undefined;
	/**
	 * Sets the value at the specified point in the number series.
	 */
	SetValue(point: number, value: number) : undefined;
	/**
	 * Removes the point at the specified index from the number series.
	 */
	RemovePoint(point: number) : undefined;
	/**
	 * Get all offsets
	 */
	GetOffsets() : number[];
	/**
	 * Get all numbers
	 */
	GetValues() : number[];
	/**
	 * Sets the offset at the specified point in the number series.
	 */
	SetOffset(point: number, offset: number) : undefined;
	/**
	 * Gets the value at the specified point in the number series.
	 */
	GetValue(point: number) : number;
	/**
	 * Gets the offset at the specified point in the number series.
	 */
	GetOffset(point: number) : number;
	/**
	 * Add number point to the series with an offset.
	 */
	AddPoint(offset: number, value: number) : number;
	/**
	 * Interpolates between numbers in the series based on the parameter t.
	 */
	Lerp(t: number) : number;
}

/**
 * NumberRange is a data type that represents a range between two numbers, defined by a minimum and maximum value.
 */
declare class NumberRange {
	/**
	 * Determines the minimum value of the range.
	 */
	Min: number;
	/**
	 * Determines the maximum value of the range.
	 */
	Max: number;
	/**
	 * Creates a new NumberRange object with the specified minimum and maximum values.
	 */
	static New(from: number, to: number) : NumberRange;
	/**
	 * Linearly interpolates between the minimum and maximum values of the range based on the parameter t, which is typically between 0 and 1.
	 */
	Lerp(t: number) : number;
}

/**
 * NewServerRequestData represents the request data for a new server instance, to be used with WorldsService.
 */
declare class NewServerRequestData {
	/**
	 * Target world path.
	 */
	WorldPath: string;
	/**
	 * How much player slot should the new server allocates for.
	 */
	MaxPlayers: number;
	/**
	 * Creates a new `NewServerRequestData`
	 */
	static New() : NewServerRequestData;
}

/**
 * NetworkedObject is a base class for all object that's synchronized by the network.
 */
declare class NetworkedObject {
	/**
	 * Name of this object
	 */
	Name: string;
	/**
	 * Class name of this object
	 */
	readonly ClassName: string;
	/**
	 * A shared table accessible by scripts.
	 */
	readonly Shared: ScriptSharedTable;
	/**
	 * Returns networked ID of this object. Networked ID are always unique per network session.
	 */
	readonly NetworkedObjectID: string;
	/**
	 * Returns object ID of this object. Object ID originates from the .poly file.
	 */
	readonly ObjectID: string;
	/**
	 * Returns true if this object exists in network, false if this object is spawned by the local client.
	 */
	readonly ExistInNetwork: boolean;
	/**
	 * Returns whether or not the instance is the specified class, this also checks for inheritance.
	 */
	IsA(className: string) : boolean;
	/**
	 * Clones the instance
	 */
	Clone(parent?: NetworkedObject) : NetworkedObject;
	/**
	 * Destroys the instance (same as Delete method)
	 */
	Destroy(time?: number) : undefined;
	/**
	 * Deletes the instance (same as Destroy method)
	 */
	Delete(time?: number) : undefined;
	/**
	 * Fires when a property of this object has changed
	 */
	readonly PropertyChanged: PTSignal<(string: string) => void>;
	/**
	 * Fires when this object has been renamed
	 */
	readonly Renamed: PTSignal<() => void>;
	/**
	 * Fires when object enters the tree
	 */
	readonly TreeEntered: PTSignal<() => void>;
	/**
	 * Fires when object exit the tree (via reparent or delete)
	 */
	readonly TreeExited: PTSignal<() => void>;
	/**
	 * Fires when this object is being destroyed
	 */
	readonly Destroying: PTSignal<() => void>;
}

/**
 * NetworkEvents are events that can be called to communicate between server and client. NetMessages are the class used for sharing data between server and client when sending NetworkEvents.
 */
declare class NetworkEvent extends Instance {
	/**
	 * Determines if this network event should send messages reliably. Recommended to be off if you're passing lot of data that doesn't need to arrive reliably.
	 */
	Reliable: boolean;
	/**
	 * Sends a message to the server.
	 */
	InvokeServer(msg?: NetMessage, _?: any) : undefined;
	/**
	 * Sends a message to a specific client.
	 */
	InvokeClient(msg?: NetMessage, player?: Player) : undefined;
	/**
	 * Sends a message to all connected clients.
	 */
	InvokeClients(msg?: NetMessage) : undefined;
	/**
	 * Fires when server receives message from client
	 */
	readonly InvokedServer: PTSignal<(player: Player, netMessage: NetMessage) => void>;
	/**
	 * Fires when client receives message from server
	 */
	readonly InvokedClient: PTSignal<(netMessage: NetMessage) => void>;
}

/**
 * Represents a network message used for communication between clients and servers.
 */
declare class NetMessage {
	/**
	 * Adds a string value to the message with the specified key.
	 */
	AddString(key: string, value: string) : undefined;
	/**
	 * Adds an integer value to the message with the specified key.
	 */
	AddInt(key: string, value: number) : undefined;
	/**
	 * Adds a boolean value to the message with the specified key.
	 */
	AddBool(key: string, value: boolean) : undefined;
	/**
	 * Adds a number value to the message with the specified key.
	 */
	AddNumber(key: string, value: number) : undefined;
	/**
	 * Adds a Vector2 value to the message with the specified key.
	 */
	AddVector2(key: string, value: Vector2) : undefined;
	/**
	 * Adds a Vector3 value to the message with the specified key.
	 */
	AddVector3(key: string, value: Vector3) : undefined;
	/**
	 * Adds a Color value to the message with the specified key.
	 */
	AddColor(key: string, value: Color) : undefined;
	/**
	 * Adds a Quaternion value to the message with the specified key.
	 */
	AddQuaternion(key: string, value: Quaternion) : undefined;
	/**
	 * Adds a Variant value to the message with the specified key.
	 */
	AddVariant(key: string, value: Variant) : undefined;
	/**
	 * Adds an Instance value to the message with the specified key.
	 */
	AddInstance(key: string, value: Instance) : undefined;
	/**
	 * Adds an Buffer value to the message with the specified key.
	 */
	AddBuffer(key: string, buffer: buffer) : undefined;
	/**
	 * Gets a string value from the message with the specified key.
	 */
	GetString(key: string) : string;
	/**
	 * Gets an integer value from the message with the specified key.
	 */
	GetInt(key: string) : number;
	/**
	 * Gets a number value from the message with the specified key.
	 */
	GetNumber(key: string) : number;
	/**
	 * Gets a boolean value from the message with the specified key.
	 */
	GetBool(key: string) : boolean;
	/**
	 * Gets a Vector2 value from the message with the specified key.
	 */
	GetVector2(key: string) : Vector2;
	/**
	 * Gets a Vector3 value from the message with the specified key.
	 */
	GetVector3(key: string) : Vector3;
	/**
	 * Gets a Color value from the message with the specified key.
	 */
	GetColor(key: string) : Color;
	/**
	 * Gets a Quaternion value from the message with the specified key.
	 */
	GetQuaternion(key: string) : Quaternion;
	/**
	 * Gets a Variant value from the message with the specified key.
	 */
	GetVariant(key: string) : Variant;
	/**
	 * Gets an Instance value from the message with the specified key.
	 */
	GetInstance(key: string) : Instance;
	/**
	 * Gets an Buffer value from the message with the specified key.
	 */
	GetBuffer(key: string) : buffer;
	/**
	 * Creates a new NetMessage instance.
	 */
	static New() : NetMessage;
}

/**
 * NPC (non-player character) is an object similar to a  Player but that can be controlled by code. Like players, it can walk and jump, and its body part colors can be customized.
 */
declare class NPC extends Physical {
	/**
	 * Determines the linear velocity of this NPC.
	 */
	Velocity: Vector3;
	/**
	 * The offset to the seat at which the NPC is positioned when sitting.
	 */
	SeatOffset: Vector3;
	/**
	 * The current health of the NPC.
	 */
	Health: number;
	/**
	 * The maximum health of the NPC.
	 */
	MaxHealth: number;
	/**
	 * Determines the jump power of the NPC.
	 */
	JumpPower: number;
	/**
	 * Determines the walking speed of the NPC.
	 */
	WalkSpeed: number;
	/**
	 * Determines whether the NPC uses a nametag.
	 */
	UseNametag: boolean;
	/**
	 * Determines the offset position of the NPC's nametag.
	 */
	NametagOffset: Vector3;
	/**
	 * Determines the visibility radius of the NPC's nametag.
	 */
	NametagVisibleRadius: number;
	/**
	 * Determines the display name of the NPC.
	 */
	DisplayName: string;
	/**
	 * Determines the sound played when the NPC jumps.
	 */
	JumpSound: Sound;
	/**
	 * Indicates whether the NPC is currently sitting.
	 */
	readonly IsSitting: boolean;
	/**
	 * Indicates whether the NPC is currently dead.
	 */
	readonly IsDead: boolean;
	/**
	 * Indicates the tool currently held by the NPC.
	 */
	readonly HoldingTool: Tool;
	/**
	 * Indicates the seat in which the NPC is currently sitting.
	 */
	readonly SittingIn: Seat;
	/**
	 * The character model associated with the NPC.
	 */
	readonly Character: CharacterModel;
	/**
	 * Determines the instance the NPC should walk towards.
	 */
	MoveTarget: Dynamic;
	/**
	 * Indicates if NPC is standing on ground.
	 */
	readonly IsOnGround: boolean;
	/**
	 * Indicates if NPC is on the ceiling.
	 */
	readonly IsOnCeiling: boolean;
	/**
	 * Indicates the distance to the navigation destination.
	 */
	readonly NavDestinationDistance: number;
	/**
	 * Indicates whether the NPC has reached its navigation destination.
	 */
	readonly NavDestinationReached: boolean;
	/**
	 * Indicates whether the navigation destination is valid.
	 */
	readonly NavDestinationValid: boolean;
	/**
	 * Move this NPC while respecting collisions.
	 */
	Move(velo: Vector3) : undefined;
	/**
	 * Kills the NPC.
	 */
	Kill() : undefined;
	/**
	 * Try to detect stairs and step up. Returns true if the NPC has stepped up.
	 */
	TryStepUp() : boolean;
	/**
	 * Makes the NPC jump.
	 */
	Jump() : undefined;
	/**
	 * Makes the NPC sit on a specified seat.
	 */
	Sit(seat: Seat) : undefined;
	/**
	 * Unsits the NPC from the current seat.
	 */
	Unsit(addForce?: boolean) : undefined;
	/**
	 * Equips the NPC with a specified tool.
	 */
	EquipTool(tool: Tool) : undefined;
	/**
	 * Unequips the currently equipped tool from the NPC.
	 */
	DropTool() : undefined;
	/**
	 * Loads the appearance of the NPC based on a user ID.
	 */
	LoadAppearance(userID: number) : undefined;
	/**
	 * Clears the NPC's current appearance.
	 */
	ClearAppearance() : undefined;
	/**
	 * Determines the position the NPC should walk towards.
	 */
	SetNavDestination(pos: Vector3) : undefined;
	/**
	 * Respawns the NPC.
	 */
	Respawn() : undefined;
	/**
	 * Applies damage to the NPC.
	 */
	TakeDamage(dmg: number) : undefined;
	/**
	 * Heals the NPC by a specified amount.
	 */
	Heal(amount: number) : undefined;
	/**
	 * Triggered when the NPC dies.
	 */
	readonly Died: PTSignal<() => void>;
	/**
	 * Fires when the NPC's health changes.
	 */
	readonly HealthChanged: PTSignal<(number: number, number_1: number) => void>;
	/**
	 * Fires when the NPC jumps.
	 */
	readonly Jumped: PTSignal<() => void>;
	/**
	 * Fires when the NPC is no longer on ground.
	 */
	readonly LeftGround: PTSignal<() => void>;
	/**
	 * Fires when the NPC sits on a seat.
	 */
	readonly Seated: PTSignal<(seat: Seat) => void>;
	/**
	 * Fires when the NPC exits from a seart.
	 */
	readonly Unseated: PTSignal<(seat: Seat) => void>;
	/**
	 * Triggered when the NPC lands on the ground after a jump or fall.
	 */
	readonly Landed: PTSignal<() => void>;
	/**
	 * Triggered when the NPC finishes navigating to a destination.
	 */
	readonly NavFinished: PTSignal<() => void>;
}

/**
 * ModuleScripts are specialized scripts to hold data that can be accessed by other scripts using the require() function. It is important to define and return a table in a ModuleScript. When the place starts, the server and the client will run the ModuleScript once and store the result for other scripts to retrieve with require().
 */
declare class ModuleScript extends Script {
}

/**
 * Model is an instance that can hold other instances, and which transform affects its children.
 */
declare class Model extends Dynamic {
}

/**
 * Default instance that's created when instance is invalid.
 */
declare class MissingInstance extends Instance {
}

/**
 * Base class for mesh assets
 */
declare class MeshAsset extends ResourceAsset {
}

/**
 * MeshAnimationInfo contains the animation information for meshes.
 */
declare class MeshAnimationInfo {
	/**
	 * The name of this animation
	 */
	Name: string;
	/**
	 * The length of this animation
	 */
	Length: number;
	/**
	 * Indicates the playing state of this animation.
	 */
	IsPlaying: boolean;
}

/**
 * \!! WIP Class, Base class for animation loaded from meshes
 */
declare class MeshAnimationAsset extends ResourceAsset {
	/**
	 * Animation type of this mesh
	 */
	AnimationType: MeshAnimationType;
}

/**
 * Represents a part that can have custom mesh applied to it, the mesh may be from the Polytoria Store (Hats, Tools and Heads) or user-uploaded meshes.
 */
declare class Mesh extends Entity {
	/**
	 * The mesh asset used by this Mesh.
	 */
	Asset: MeshAsset;
	/**
	 * Whether to keep the offset of the mesh or recenter it.
	 */
	IncludeOffset: boolean;
	/**
	 * The type of collision shape to apply to the mesh.
	 */
	CollisionType: MeshCollisionType;
	/**
	 * Missing Documentation
	 */
	TextureFilter: TextureFilter;
	/**
	 * Whether to play the mesh's animation automatically when the mesh is loaded.
	 */
	PlayAnimationOnStart: boolean;
	/**
	 * Whether to use the color of the part this mesh is attached to.
	 */
	UsePartColor: boolean;
	/**
	 * The color of the mesh.
	 */
	Color: Color;
	/**
	 * Whether the mesh casts shadows.
	 */
	CastShadows: boolean;
	/**
	 * Indicates the name of the current animation playing on the mesh.
	 */
	readonly CurrentAnimation: string;
	/**
	 * Indicates whether an animation is currently playing on the mesh.
	 */
	readonly IsAnimationPlaying: boolean;
	/**
	 * Indicates whether this mesh is currently being loaded.
	 */
	readonly Loading: boolean;
	/**
	 * Plays the specified animation on the mesh.
	 */
	PlayAnimation(animationName: string, speed?: number, loop?: boolean) : undefined;
	/**
	 * Stops the specified animation on the mesh.
	 */
	StopAnimation(animationName?: string) : undefined;
	/**
	 * Gets a list of all animations available on the mesh.
	 */
	GetAnimations() : string[];
	/**
	 * Gets the animation info.
	 */
	GetAnimationInfo() : MeshAnimationInfo[];
	/**
	 * Fires when this mesh has been loaded.
	 */
	readonly Loaded: PTSignal<() => void>;
}

/**
 * Marker3D is a object that allows marking a specific point in world. This will hint an axis gizmo in local test and creator.
 */
declare class Marker3D extends Dynamic {
	/**
	 * Length of this Marker
	 */
	Length: number;
	/**
	 * Determines if this marker should appear on top of everything else in 3D.
	 */
	AppearOnTop: boolean;
	/**
	 * Determines if this marker should be visible in development.
	 */
	VisibleInDev: boolean;
}

/**
 * Base class for lighting modifiers
 */
declare class LightingModifier extends Instance {
}

/**
 * Lighting is responsible for controlling the state of the lighting in the place. It provides many different options for creators to enhance and fine-tune the visuals of their worlds.
 */
declare interface Lighting extends Instance {
	/**
	 * Sets the skybox to one of the preset skyboxes.
	 */
	Skybox: SkyboxPreset;
	/**
	 * Determines the source of ambient lighting in the place.
	 */
	AmbientSource: AmbientSource;
	/**
	 * Sets the ambient color of the lighting in the place.
	 */
	AmbientColor: Color;
	/**
	 * Enables or disables fog in the place.
	 */
	FogEnabled: boolean;
	/**
	 * Sets the color of the fog in the place.
	 */
	FogColor: Color;
	/**
	 * Sets the distance from the camera at which fog begins to appear.
	 */
	FogStartDistance: number;
	/**
	 * Sets the distance from the camera at which fog stops appearing.
	 */
	FogEndDistance: number;
}

declare const Lighting: Lighting;

/**
 * Light is an abstract base class for all light objects in the world.
 */
declare class Light extends Dynamic {
	/**
	 * Determines whether the light is enabled.
	 */
	Enabled: boolean;
	/**
	 * Sets the color of the light.
	 */
	Color: Color;
	/**
	 * Sets the brightness of the light.
	 */
	Brightness: number;
	/**
	 * Sets the size of the light.
	 */
	LightSize: number;
	/**
	 * Sets the specular intensity of the light.
	 */
	Specular: number;
	/**
	 * Enables or disables shadows cast by the light.
	 */
	Shadows: boolean;
}

/**
 * Inventory is a container for Tools, equippable by player.
 */
declare interface Inventory extends HiddenBase {
}

declare const Inventory: Inventory;

/**
 * InteractionPrompt is a object that allows players to interact with objects.
 */
declare class InteractionPrompt extends Physical {
	/**
	 * Missing Documentation
	 */
	UIMode: UIMode;
	/**
	 * Determines whether the prompt is enabled.
	 */
	Enabled: boolean;
	/**
	 * Missing Documentation
	 */
	HideByDefault: boolean;
	/**
	 * Title text
	 */
	Title: string;
	/**
	 * Subtitle text
	 */
	Subtitle: string;
	/**
	 * Determines the size of the prompt.
	 */
	Scale: number;
	/**
	 * Determines the maximum distance from the prompt to the player for the prompt to be visible.
	 */
	MaxDistance: number;
	/**
	 * Missing Documentation
	 */
	LineOfSightThreshold: number;
	/**
	 * Determines the time for the interaction button to be held down for the prompt to be interacted with.
	 */
	ActivationTime: number;
	/**
	 * Determines if parent needs to be hovered over for the prompt to be visible.
	 */
	UseParentForVisibility: boolean;
	/**
	 * Determines if the player should be facing the interaction prompt for it to be shown.
	 */
	RequireFacing: boolean;
	/**
	 * Players that this interaction prompt is hidden for.
	 */
	HiddenFor: Player[];
	/**
	 * Progress of the prompt interaction, between 0 and 1.
	 */
	Progress: number;
	/**
	 * Hides the prompt for a player.
	 */
	HideFor(player: Player) : undefined;
	/**
	 * Unhides the prompt for a player.
	 */
	ShowFor(player: Player) : undefined;
	/**
	 * Fires when prompt is interacted with
	 */
	readonly Interacted: PTSignal<(player: Player) => void>;
}

/**
 * IntValue is an object that holds an integer value.
 */
declare class IntValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: number;
}

/**
 * InstanceValue is an object that holds an Instance value.
 */
declare class InstanceValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: Instance;
}

/**
 * Instance is the base class of all classes. Every class derives from it and has all properties, events and functions Instance has.
 */
declare class Instance extends NetworkedObject {
	/**
	 * Defines the parent of this instance in the hierarchy.
	 */
	Parent: Instance;
	/**
	 * Determine if children is editable, this is to be used if this instance is a Linked model. Only used in creator.
	 */
	EditableChildren: boolean;
	/**
	 * Tags associated with this instance.
	 */
	Tags: string[];
	/**
	 * Determines if this instance should be saved during the saving process. Useful for addons that wants to create a temporary instance.
	 */
	Archivable: boolean;
	/**
	 * Gets all descendants of this instance.
	 */
	GetDescendants() : Instance[];
	/**
	 * Finds a child of this instance by name.
	 */
	FindChild(name: string) : Instance;
	/**
	 * Wait for children to be added.
	 */
	WaitChild(name: string, timeoutSec?: number) : Instance;
	/**
	 * Finds a child of this instance by class name.
	 */
	FindChildByClass(className: string) : Instance;
	/**
	 * Find first child with the specified tag
	 */
	FindChildWithTag(tag: string) : Instance;
	/**
	 * Finds a descendant of this instance by path.
	 */
	FindDescendant(path: string) : Instance;
	/**
	 * Get children with the specified tag
	 */
	GetChildrenWithTag(tag: string) : Instance[];
	/**
	 * Get descendants with the specified tag
	 */
	GetDescendantsWithTag(tag: string) : Instance[];
	/**
	 * Find ancestor by the specified class name
	 */
	FindAncestorByClass(className: string) : Instance;
	/**
	 * Find child by its index (index for this function starts from 0)
	 */
	FindChildByIndex(index: number) : Instance;
	/**
	 * Move children to specified index (index for this function starts from 0)
	 */
	MoveChild(child: Instance, index: number) : undefined;
	/**
	 * Gets all children of this instance.
	 */
	GetChildren() : Instance[];
	/**
	 * Gets all children of this instance that are of the specified class.
	 */
	GetChildrenOfClass(className: string) : Instance[];
	/**
	 * Determines if this instance is an ancestor of the given instance.
	 */
	IsAncestorOf(instance: Instance) : boolean;
	/**
	 * Determines if this instance is a descendant of the given instance.
	 */
	IsDescendantOf(instance: Instance) : boolean;
	/**
	 * Determines if this instance is a descendant of the given class.
	 */
	IsDescendantOfClass(className: string) : boolean;
	/**
	 * Creates a new instance of the specified class.
	 */
	static New(className: string, parent?: Instance) : Instance;
	/**
	 * Adds a tag to this instance.
	 */
	AddTag(tag: string) : undefined;
	/**
	 * Removes a tag from this instance.
	 */
	RemoveTag(tag: string) : undefined;
	/**
	 * Checks if this instance has the specified tag.
	 */
	HasTag(tag: string) : boolean;
	/**
	 * Reparent this instance to another instance
	 */
	Reparent(to: Instance) : undefined;
	/**
	 * Gets the parent of this instance.
	 */
	GetParent() : Instance;
	/**
	 * Sets the parent of this instance.
	 */
	SetParent(newParent: Instance) : undefined;
	/**
	 * Fires when child has been added to this instance
	 */
	readonly ChildAdded: PTSignal<(instance: Instance) => void>;
	/**
	 * Fires when child has been removed from this instance (either via reparent or delete)
	 */
	readonly ChildRemoved: PTSignal<(instance: Instance) => void>;
	/**
	 * Fires when child is being deleted from this instance
	 */
	readonly ChildDeleting: PTSignal<(instance: Instance) => void>;
	/**
	 * Fires when child has been deleted from this instance
	 */
	readonly ChildDeleted: PTSignal<(instance: Instance) => void>;
	/**
	 * Fires when given a tag.
	 */
	readonly TagAdded: PTSignal<(string: string) => void>;
	/**
	 * Fires when a tag is removed.
	 */
	readonly TagRemoved: PTSignal<(string: string) => void>;
}

/**
 * Insert is a class used for inserting user-generated models into your game via scripts.
 */
declare interface InsertService extends Instance {
	/**
	 * Inserts a Default NPC
	 */
	DefaultNPC() : NPC;
	/**
	 * Initialize default NPC with the DefaultCharacter and sounds
	 */
	InitializeDefaultNPC(npc: NPC) : undefined;
	/**
	 * Inserts a Default PolytorianModel
	 */
	DefaultCharacter() : PolytorianModel;
	/**
	 * Inserts a model with the specified ID.
	 */
	ModelAsync(id: number) : Instance;
	/**
	 * Inserts clothing with the specified ID.
	 */
	ClothingAsync(id: number) : Clothing;
	/**
	 * Inserts an accessory with the specified ID.
	 */
	AccessoryAsync(id: number) : Accessory;
	/**
	 * Inserts a new tool with the specified ID
	 */
	ToolAsync(id: number) : Tool;
}

declare const InsertService: InsertService;

/**
 * InputService is a class used for retrieving user input data, such as the mouse and keyboard.
 */
declare interface InputService extends Instance {
	/**
	 * Indicates whether the game window is currently focused.
	 */
	readonly IsWindowFocused: boolean;
	/**
	 * Indicates whether the input device is a touchscreen.
	 */
	readonly IsTouchscreen: boolean;
	/**
	 * Indicates whether the game is currently focused.
	 */
	readonly IsGameFocused: boolean;
	/**
	 * Indicates whether an input is currently focused.
	 */
	readonly IsInputFocused: boolean;
	/**
	 * Indicates whether a gamepad is currently connected.
	 */
	readonly IsGamepadConnected: boolean;
	/**
	 * Indicates whether the game menu is currently opened.
	 */
	readonly IsMenuOpened: boolean;
	/**
	 * Determines whether the cursor is currently locked.
	 */
	CursorLocked: boolean;
	/**
	 * Determines whether the cursor is currently visible.
	 */
	CursorVisible: boolean;
	/**
	 * Change in mouse position since the last frame.
	 */
	readonly MouseDelta: Vector2;
	/**
	 * Indicates the current position of the mouse cursor.
	 */
	readonly MousePosition: Vector2;
	/**
	 * Indicates the width of the screen.
	 */
	readonly ScreenWidth: number;
	/**
	 * Indicates the height of the screen.
	 */
	readonly ScreenHeight: number;
	/**
	 * Vibrates the gamepad
	 */
	StartGamepadVibration(weakMagnitude: number, strongMagnitude: number, duration: number) : undefined;
	/**
	 * Stops vibrating the gamepad
	 */
	StopGamepadVibration() : undefined;
	/**
	 * Returns the 3D world-space position corresponding to the current mouse cursor location.
	 */
	GetMouseWorldPosition(ignoreList?: Instance[]) : Vector3;
	/**
	 * Returns the current Vector2 value of the action.
	 */
	GetVector2(actionName: string) : InputActionVector2;
	/**
	 * Returns true if the specified button is being held down.
	 */
	GetButton(actionName: string) : InputActionButton;
	/**
	 * Returns the value of the specified axis.
	 */
	GetAxis(actionName: string) : InputActionAxis;
	/**
	 * Bind a new Button Input Action
	 */
	BindButton(name: string) : InputActionButton;
	/**
	 * Bind new Axis Input Action
	 */
	BindAxis(name: string) : InputActionAxis;
	/**
	 * Bind new Vector2 Input Action
	 */
	BindVector2(name: string) : InputActionVector2;
	/**
	 * Fires when the mouse is moved
	 */
	readonly MouseMoved: PTSignal<(vector2: Vector2) => void>;
	/**
	 * Fires when the game has been focused
	 */
	readonly GameFocused: PTSignal<() => void>;
	/**
	 * Fires when the game has been unfocused
	 */
	readonly GameUnfocused: PTSignal<() => void>;
	/**
	 * Fires when gamepad is connected
	 */
	readonly GamepadConnected: PTSignal<() => void>;
	/**
	 * Fires when gamepad has been disconnected
	 */
	readonly GamepadDisconnected: PTSignal<() => void>;
	/**
	 * Fires when key has been pressed
	 */
	readonly KeyDown: PTSignal<(keyCode: KeyCode, boolean: boolean) => void>;
	/**
	 * Fires when key has been released
	 */
	readonly KeyUp: PTSignal<(keyCode: KeyCode, boolean: boolean) => void>;
	/**
	 * Fires when analog input has been changed
	 */
	readonly AxisValueChanged: PTSignal<(keyCode: KeyCode, number: number) => void>;
}

declare const InputService: InputService;

/**
 * A collection of Input Buttons
 */
declare class InputButtonCollection {
	/**
	 * Adds a new input button.
	 */
	AddButton(btn: InputButton) : undefined;
	/**
	 * Removes existing input button.
	 */
	RemoveButton(btn: InputButton) : undefined;
	/**
	 * Gets all input buttons.
	 */
	GetButtons() : InputButton[];
}

/**
 * InputButton is a class that represents a button KeyCode
 */
declare class InputButton {
	/**
	 * Key code for this button
	 */
	KeyCode: KeyCode;
	/**
	 * Creates a new button with this keycode.
	 */
	static New() : InputButton;
	/**
	 * Creates a new button with this keycode.
	 */
	static New(key: KeyCode) : InputButton;
}

/**
 * InputActionVector2 is a class that represents input action of Vector2 type.
 */
declare class InputActionVector2 extends InputAction {
	/**
	 * Collection of up inputs.
	 */
	Up: InputButtonCollection;
	/**
	 * Collection of down inputs.
	 */
	Down: InputButtonCollection;
	/**
	 * Collection of left inputs.
	 */
	Left: InputButtonCollection;
	/**
	 * Collection of right inputs.
	 */
	Right: InputButtonCollection;
	/**
	 * The value of this input
	 */
	readonly Value: Vector2;
}

/**
 * InputActionButton is a class that represents input action of button type.
 */
declare class InputActionButton extends InputAction {
	/**
	 * Collection of button inputs.
	 */
	Buttons: InputButtonCollection;
	/**
	 * Returns true if any of the buttons in the collection is currently being pressed.
	 */
	IsPressed: boolean;
	/**
	 * Returns the current analog input of the button.
	 */
	Weight: number;
	/**
	 * Fires when this button has been pressed
	 */
	readonly Pressed: PTSignal<() => void>;
	/**
	 * Fires when this button has been released
	 */
	readonly Released: PTSignal<() => void>;
}

/**
 * InputActionAxis is a class that represents input action of axis type.
 */
declare class InputActionAxis extends InputAction {
	/**
	 * Collection of negative inputs
	 */
	Negative: InputButtonCollection;
	/**
	 * Collection of positive inputs
	 */
	Positive: InputButtonCollection;
	/**
	 * The value of the input
	 */
	readonly Value: number;
}

/**
 * Base class for input action
 */
declare class InputAction {
}

/**
 * ImageSky is a class that is used to set a custom image skybox in the world. You can set the images used for the individual sides of the skybox by changing the image properties. Any image from the library can be used for the skybox.
 */
declare class ImageSky extends Sky {
	/**
	 * The image of the top side of the skybox.
	 */
	TopImage: ImageAsset;
	/**
	 * The image of the bottom side of the skybox.
	 */
	BottomImage: ImageAsset;
	/**
	 * The image of the left side of the skybox.
	 */
	LeftImage: ImageAsset;
	/**
	 * The image of the right side of the skybox.
	 */
	RightImage: ImageAsset;
	/**
	 * The image of the front side of the skybox.
	 */
	FrontImage: ImageAsset;
	/**
	 * The image of the back side of the skybox.
	 */
	BackImage: ImageAsset;
	/**
	 * Determines the texture filter mode.
	 */
	TextureFilter: TextureFilter;
}

/**
 * Base class for image assets
 */
declare class ImageAsset extends ResourceAsset {
}

/**
 * Image3D are objects that can have an image texture and are placed in the world.
 */
declare class Image3D extends Dynamic {
	/**
	 * Specifies the image of the Image3D.
	 */
	Image: ImageAsset;
	/**
	 * The scale of the texture on the Image3D.
	 */
	TextureScale: Vector2;
	/**
	 * The offset of the texture on the Image3D.
	 */
	TextureOffset: Vector2;
	/**
	 * Determines the color of the Image3D.
	 */
	Color: Color;
	/**
	 * Determines whether or not the Image3D should cast shadows.
	 */
	CastShadows: boolean;
	/**
	 * Determines whether or not the Image3D should be affected by lighting.
	 */
	Shaded: boolean;
	/**
	 * Determines whether or not the Image3D should always face the camera.
	 */
	FaceCamera: boolean;
	/**
	 * Determines whether the image renders on both sides.
	 */
	DoubleSided: boolean;
	/**
	 * Determines the texture filter mode.
	 */
	TextureFilter: TextureFilter;
}

/**
 * Class for interacting with IO in project, only usable with scripts with the respective permission.
 */
declare interface IOService extends Instance {
	/**
	 * Reads the buffer file from the given path.
	 */
	ReadBytesFromPath(path: string) : buffer;
	/**
	 * Reads the text file data from the given path.
	 */
	ReadTextFromPath(path: string) : string;
	/**
	 * Writes buffer data to the file in the project.
	 */
	WriteBytesToPath(path: string, bytes: buffer) : undefined;
	/**
	 * Writes the text file data to the path.
	 */
	WriteTextToPath(path: string, txt: string) : undefined;
	/**
	 * Lists all files in the project.
	 */
	ListProjectFiles() : string[];
	/**
	 * Reads the file data from the linked ID.
	 */
	ReadBytesFromID(id: string) : buffer;
	/**
	 * Gets the file path from the linked ID.
	 */
	GetPathFromID(indexID: string) : string;
}

declare const IOService: IOService;

/**
 * Http is a service used for HTTP communications and requests.
 */
declare interface HttpService extends Instance {
	/**
	 * Send a request using the `HttpRequestData`
	 */
	RequestAsync(data: HttpRequestData) : HttpResponseData;
	/**
	 * Sends a GET request to the specified URL.
	 */
	GetAsync(url: string, headers?: object) : string;
	/**
	 * Sends a POST request to the specified URL.
	 */
	PostAsync(url: string, body: string, headers?: object) : string;
	/**
	 * Sends a PUT request to the specified URL.
	 */
	PutAsync(url: string, body: string, headers?: object) : string;
	/**
	 * Sends a DELETE request to the specified url.
	 */
	DeleteAsync(url: string, body: string, headers?: object) : string;
	/**
	 * Sends a PATCH request to the specified url.
	 */
	PatchAsync(url: string, body: string, headers?: object) : string;
	/**
	 * Sends a GET request to the specified url, and return the response as buffer.
	 */
	GetBufferAsync(url: string, headers?: object) : buffer;
	/**
	 * Sends a POST request to the specified url, and return the response as buffer.
	 */
	PostBufferAsync(url: string, body: string, headers?: object) : buffer;
	/**
	 * Sends a PUT request to the specified url, and return the response as buffer.
	 */
	PutBufferAsync(url: string, body: string, headers?: object) : buffer;
	/**
	 * Sends a DELETE request to the specified url, and return the response as buffer.
	 */
	DeleteBufferAsync(url: string, body: string, headers?: object) : buffer;
	/**
	 * Sends a PATCH request to the specified url, and return the response as buffer.
	 */
	PatchBufferAsync(url: string, body: string, headers?: object) : buffer;
}

declare const HttpService: HttpService;

/**
 * HttpResponseData represents the result of an HTTP request.
 */
declare class HttpResponseData {
	/**
	 * Indicates whether the HTTP request completed successfully.
	 */
	readonly Success: boolean;
	/**
	 * The HTTP status code returned by the server.
	 */
	readonly StatusCode: number;
	/**
	 * A table containing the HTTP response headers returned by the server, represented as key-value pairs.
	 */
	readonly Headers: object;
	/**
	 * The response payload returned by the server as a string.
	 */
	readonly Body: string;
	/**
	 * The response payload returned by the server as a buffer.
	 */
	readonly Buffer: buffer;
}

/**
 * HttpRequestData represents the data required to construct an HTTP request
 */
declare class HttpRequestData {
	/**
	 * The target endpoint of the HTTP request.
	 */
	URL: string;
	/**
	 * The HTTP method used for the request.
	 */
	Method: HttpRequestMethod;
	/**
	 * The payload sent with the request.
	 */
	Body: string;
	/**
	 * A table of HTTP headers to include with the request, represented as key-value pairs.
	 */
	Headers: object;
	/**
	 * Creates and returns a new instance of `HttpRequestData`
	 */
	static New() : HttpRequestData;
}

/**
 * HookService is a collection of events that fire periodically.
 */
declare interface HookService extends Instance {
	/**
	 * Fires every frame.
	 */
	readonly Updated: PTSignal<(number: number) => void>;
	/**
	 * Fires before the world is rendered.
	 */
	readonly PreRendered: PTSignal<(number: number) => void>;
	/**
	 * Fires after the world is rendered.
	 */
	readonly PostRendered: PTSignal<(number: number) => void>;
	/**
	 * Fires on a physics update.
	 */
	readonly PhysicsUpdated: PTSignal<(number: number) => void>;
}

declare const HookService: HookService;

/**
 * Base class for hiddens
 */
declare class HiddenBase extends Instance {
}

/**
 * Hidden is a object used for hiding instances.
 */
declare interface Hidden extends HiddenBase {
}

declare const Hidden: Hidden;

/**
 * GradientSky is a class that is used to set a gradient skybox in the world.
 */
declare class GradientSky extends Sky {
	/**
	 * Determines the color emitting off the sun.
	 */
	SunDiscColor: Color;
	/**
	 * Determines the multiplier of the sun.
	 */
	SunDiscMultiplier: number;
	/**
	 * Determines the exponent of the sun.
	 */
	SunDiscExponent: number;
	/**
	 * Determines the color of the sun halo.
	 */
	SunHaloColor: Color;
	/**
	 * Determines the exponent of the sun halo.
	 */
	SunHaloExponent: number;
	/**
	 * Determines the contribution of the sun halo.
	 */
	SunHaloContribution: number;
	/**
	 * Determines the horizon line's color.
	 */
	HorizonLineColor: Color;
	/**
	 * Determines the horizon line's exponent.
	 */
	HorizonLineExponent: number;
	/**
	 * Determines how much the horizon line contributes.
	 */
	HorizonLineContribution: number;
	/**
	 * Determines the top color of the gradient.
	 */
	SkyGradientTop: Color;
	/**
	 * Determines the bottom color of the gradient.
	 */
	SkyGradientBottom: Color;
	/**
	 * Determines the gradient's exponent.
	 */
	SkyGradientExponent: number;
}

/**
 * GradientImageAsset is a class that provides gradient image that can be dynamically changed.
 */
declare class GradientImageAsset extends ImageAsset {
	/**
	 * The color series for this gradient
	 */
	Series: ColorSeries;
	/**
	 * Determines the width of this image
	 */
	Width: number;
	/**
	 * Determines the height of this image
	 */
	Height: number;
	/**
	 * Determines the fill mode of the gradient
	 */
	Fill: GradientImageFill;
	/**
	 * Determines the starting point of the gradient
	 */
	FillFrom: Vector2;
	/**
	 * Determines the ending point of the gradient
	 */
	FillTo: Vector2;
}

/**
 * Grabbable represents a object that can be dragged by user. It can be parented to Physical to give user ability to drag that object.
 */
declare class Grabbable extends Instance {
	/**
	 * Determines the force used to drag this object.
	 */
	Force: number;
	/**
	 * Determines how far this object can be dragged.
	 */
	MaxRange: number;
	/**
	 * Determines the max range that this object can be grabbed from.
	 */
	MaxGrabbableRange: number;
	/**
	 * Determines if dragging this object should affect physics.
	 */
	UseDragForce: boolean;
	/**
	 * Determines the permission mode for this grabber
	 */
	PermissionMode: GrabbablePermissionMode;
	/**
	 * Returns the current dragger
	 */
	readonly Dragger: Player;
	/**
	 * A predicate function deciding whether this player can grab this object. `PermissionMode` must be set to `GrabbablePermissionMode.Scripted`
	 * Example usage:
	 * ```lua
	 * grabbable.PermissionMode = Enums.GrabbablePermissionMode.Scripted
	 * grabbable.PermissionPredicate = function(player)
	 *   return player.Name == "Player1"
	 * end
	 * ```
	 */
	PermissionPredicate: () => void;
	/**
	 * Fires when this object has been grabbed
	 */
	readonly Grabbed: PTSignal<(player: Player) => void>;
	/**
	 * Fires when this object has been released
	 */
	readonly Released: PTSignal<(player: Player) => void>;
}

/**
 * GUI3D is a class that allows GUI to be displayed in a 3D space.
 */
declare class GUI3D extends Dynamic {
	/**
	 * Determines if this GUI3D should be affected by lighting.
	 */
	Shaded: boolean;
	/**
	 * Determines if this GUI3D always faces the camera.
	 */
	FaceCamera: boolean;
	/**
	 * Determines if the background should be transparent. Recommended to be set to false if transparent background is not needed.
	 */
	Transparent: boolean;
	/**
	 * Absolute size of this GUI3D
	 */
	readonly AbsoluteSize: Vector2;
}

/**
 * GUI is a class that is used to create a GUI.
 */
declare class GUI extends Instance {
	/**
	 * Determines whether the GUI is visible or not.
	 */
	Visible: boolean;
	/**
	 * Determines the ZIndex (layer) of the GUI.
	 */
	ZIndex: number;
	/**
	 * When enabled, the GUI space will not include the top inset.
	 */
	AvoidCoreUI: boolean;
}

/**
 * Base class for font assets
 */
declare class FontAsset extends ResourceAsset {
}

/**
 * Folder is similar to a model, used for storing objects in the place.
 */
declare class Folder extends Instance {
}

/**
 * FilterService is a service which processes and filter user inputs
 */
declare interface FilterService extends Instance {
	/**
	 * Filter a string
	 */
	Filter(input: string) : string;
}

declare const FilterService: FilterService;

/**
 * Represents a link to a file path in the file system
 */
declare class FileLinkAsset extends BaseAsset {
	/**
	 * The ID of the file
	 */
	LinkedID: string;
}

/**
 * Explosion is a deadly explosion killing players and applying force to parts at the given position.
 */
declare class Explosion extends Dynamic {
	/**
	 * Determines the radius of this explosion
	 */
	Radius: number;
	/**
	 * Determines the force of this explosion that will be applied to affected hits
	 */
	Force: number;
	/**
	 * Determines if this explosion should affect anchored parts or not
	 */
	AffectAnchored: boolean;
	/**
	 * Damage that is applied to the player
	 */
	Damage: number;
	/**
	 * Determines if welds are broken by this explosion
	 */
	AffectWelds: boolean;
	/**
	 * A predicate function deciding whether this part should be accepted or not    
	 * Example usage:
	 * ```lua
	 * explosion.AffectPredicate = function(hit)
	 *   -- always explode
	 *   return true
	 * end
	 * ```
	 */
	AffectPredicate: () => void;
	/**
	 * Fires when this explosion affects an instance
	 */
	readonly Touched: PTSignal<(instance: Instance) => void>;
}

/**
 * Environment is the primary object intended for storing active objects in the place.
 */
declare interface Environment extends Instance {
	/**
	 * Determines the current camera which the player is using to view the world.
	 */
	CurrentCamera: Camera;
	/**
	 * The direction and strength of gravity in the world.
	 */
	Gravity: Vector3;
	/**
	 * The height at which unanchored parts are destroyed when they fall below it.
	 */
	PartDestroyHeight: number;
	/**
	 * Determines whether or not to automatically build a navigation mesh for NPC pathfinding. This property is disabled by default so there are no performance issues with larger maps.
	 */
	AutoGenerateNavMesh: boolean;
	/**
	 * Casts a ray from origin with a specified direction and returns a RayResult for the first hit object.
	 */
	Raycast(origin: Vector3, direction: Vector3, maxDistance?: number, ignoreList?: Instance[]) : RayResult;
	/**
	 * Casts a ray from origin with a specified direction and returns a RayResult array for all hit objects.
	 */
	RaycastAll(origin: Vector3, direction: Vector3, maxDistance?: number, ignoreList?: Instance[]) : RayResult[];
	/**
	 * Returns a list of instances intersecting with the sphere in the given position and radius.
	 */
	OverlapSphere(origin: Vector3, radius: number, ignoreList?: Instance[]) : Instance[];
	/**
	 * Returns a list of instances intersecting with the box in the given position, size and rotation.
	 */
	OverlapBox(pos: Vector3, size: Vector3, rot: Vector3, ignoreList?: Instance[]) : Instance[];
	/**
	 * Rebuilds the navigation mesh which determines the empty space where NPCs can pathfind in.
	 */
	RebuildNavMesh() : undefined;
	/**
	 * Returns a point on the navigation mesh at the given position.
	 */
	GetPointOnNavMesh(toPoint: Vector3) : Vector3;
}

declare const Environment: Environment;

/**
 * Entity represents a physics object that's related to building blocks (inherited by Part and Mesh)
 */
declare class Entity extends RigidBody {
	/**
	 * The color of the entity.
	 */
	Color: Color;
	/**
	 * Determines whether the entity casts shadows.
	 */
	CastShadows: boolean;
	/**
	 * Determines whether the part can be used as a spawn location or not.
	 */
	IsSpawn: boolean;
}

/**
 * Dynamic is the base class where all objects with a position, rotation and scale derive from.
 */
declare class Dynamic extends Instance {
	/**
	 * The position of the object.
	 */
	Position: Vector3;
	/**
	 * The rotation of the object.
	 */
	Rotation: Vector3;
	/**
	 * The size of the object.
	 */
	Size: Vector3;
	/**
	 * The position of the object relative to its parent.
	 */
	LocalPosition: Vector3;
	/**
	 * The rotation of the object relative to its parent.
	 */
	LocalRotation: Vector3;
	/**
	 * The size of the object relative to its parent.
	 */
	LocalSize: Vector3;
	/**
	 * The rotation of the object represented as a quaternion.
	 */
	Quaternion: Quaternion;
	/**
	 * The local rotation of the object represented as a quaternion.
	 */
	LocalQuaternion: Quaternion;
	/**
	 * Determines whether the object can be selected in the Creator.
	 */
	Locked: boolean;
	/**
	 * The forward direction vector of the object.
	 */
	readonly Forward: Vector3;
	/**
	 * The right direction vector of the object.
	 */
	readonly Right: Vector3;
	/**
	 * The up direction vector of the object.
	 */
	readonly Up: Vector3;
	/**
	 * Orients the object to look at a target with a specified up vector.
	 */
	LookAt(target: any) : undefined;
	/**
	 * Orients the object to look at a target with a specified up vector.
	 */
	LookAt(target: any, up: Vector3) : undefined;
	/**
	 * Moves the transform in the direction and distance of translation.
	 */
	Translate(translation: Vector3) : undefined;
	/**
	 * Rotates the object around a point and axis by the specified angle.
	 */
	RotateAround(point: Vector3, axis: Vector3, angle: number) : undefined;
	/**
	 * Rotates the object by the specified Euler angles.
	 */
	Rotate(eulerAngles: Vector3) : undefined;
	/**
	 * Gets the bounding box of the object.
	 */
	GetBounds() : Bounds;
}

/**
 * Decals are objects that can have an image texture and are wrapped around other objects.
 */
declare class Decal extends Dynamic {
	/**
	 * The image texture applied to the decal.
	 */
	Image: ImageAsset;
	/**
	 * Energy multiplier for the decal.
	 */
	Energy: number;
	/**
	 * The color tint applied to the decal.
	 */
	Color: Color;
}

/**
 * Datastore (not to be confused with the Datastore data type) is a service used for storing data between place sessions.
 */
declare interface DatastoreService extends Instance {
	/**
	 * Attempts to get a Datastore object from the Datastore service.
	 */
	GetDatastore(key: string) : Datastore;
}

declare const DatastoreService: DatastoreService;

/**
 * Datastore is an object that represent datastore connection.
 */
declare class Datastore {
	/**
	 * The key identifying this Datastore connection.
	 */
	readonly Key: string;
	/**
	 * Retrieves a value from the datastore asynchronously using the specified key.
	 */
	GetAsync(key: string) : any;
	/**
	 * Stores a value in the datastore asynchronously using the specified key.
	 */
	SetAsync(key: string, value: any) : undefined;
	/**
	 * Removes a value from the datastore asynchronously using the specified key.
	 */
	RemoveAsync(key: string) : undefined;
	/**
	 * Disconnect this datastore connection, this should be called when you finish using the datastore.
	 */
	Disconnect() : undefined;
}

/**
 * CreatorService is the class that manages the creator. This class is only available in the creator.
 */
declare interface CreatorService {
	/**
	 * The interface
	 */
	readonly Interface: CreatorInterface;
	/**
	 * Current active game
	 */
	readonly CurrentGame: World;
	/**
	 * Returns true if local test is active
	 */
	readonly LocalTestActive: boolean;
	/**
	 * Fires when local testing starts
	 */
	readonly LocalTestStarted: PTSignal<() => void>;
	/**
	 * Fires when local testing ends
	 */
	readonly LocalTestStopped: PTSignal<() => void>;
}

declare const CreatorService: CreatorService;

/**
 * CreatorSelections is an object that manages selections in the game instance. This class is only available in the creator.
 */
declare interface CreatorSelections extends Instance {
	/**
	 * Select an instance
	 */
	Select(instance: Instance) : undefined;
	/**
	 * Select all children of the instance
	 */
	SelectChild(instance: Instance) : undefined;
	/**
	 * Get all selected instances
	 */
	GetSelected() : Instance[];
	/**
	 * Deselect the instance
	 */
	Deselect(instance: Instance) : undefined;
	/**
	 * Deselect all, then select the instance
	 */
	SelectOnly(instance: Instance) : undefined;
	/**
	 * Deselect all instances
	 */
	DeselectAll() : undefined;
	/**
	 * Check if instance has been selected
	 */
	HasSelected(instance: Instance) : boolean;
	/**
	 * Fires when an instance has been selected
	 */
	readonly Selected: PTSignal<(instance: Instance) => void>;
	/**
	 * Fires when an instance has been deselected
	 */
	readonly Deselected: PTSignal<(instance: Instance) => void>;
}

declare const CreatorSelections: CreatorSelections;

/**
 * CreatorInterface represent the user interface of the creator. This class is only available in the creator.
 */
declare class CreatorInterface {
	/**
	 * Returns the target tool mode
	 */
	readonly ToolMode: CreatorToolMode;
	/**
	 * Returns the target part color
	 */
	readonly TargetPartColor: Color;
	/**
	 * Returns the target part material
	 */
	readonly TargetPartMaterial: PartMaterial;
	/**
	 * Returns the move snapping value
	 */
	readonly MoveSnapEnabled: boolean;
	/**
	 * Returns whenever the move snapping is enabled by the user
	 */
	readonly MoveSnapping: number;
	/**
	 * Returns the move snapping value defined by the user
	 */
	readonly UserMoveSnapping: number;
	/**
	 * Returns whenever the rotate snapping is enabled by the user
	 */
	readonly RotateSnapEnabled: boolean;
	/**
	 * Returns the rotate snapping value
	 */
	readonly RotateSnapping: number;
	/**
	 * Returns the rotate snapping value defined by the user
	 */
	readonly UserRotateSnapping: number;
}

/**
 * CreatorHistory is a class that manages history (undo-redo) of this game instance. This class is only available in the creator.
 */
declare interface CreatorHistory extends Instance {
	/**
	 * Creates new action
	 */
	NewAction(title: string) : undefined;
	/**
	 * Add do callback
	 */
	AddDoCallback(callback: () => void) : undefined;
	/**
	 * Add undo callback
	 */
	AddUndoCallback(callback: () => void) : undefined;
	/**
	 * Commit the current action
	 */
	CommitAction() : undefined;
}

declare const CreatorHistory: CreatorHistory;

/**
 * CreatorGUI is an object that allows GUI to overlay on top of the viewport in the creator. This class is only available in the creator.
 */
declare class CreatorGUI extends Instance {
}

/**
 * CreatorContextService is a service that manage per game specific tools, such as Selections and History. This class is only available in the creator.
 */
declare interface CreatorContextService extends Instance {
}

declare const CreatorContextService: CreatorContextService;

/**
 * Service for managing addons
 */
declare interface CreatorAddons extends Instance {
	/**
	 * Register an addon
	 */
	Register(identifier: string) : AddonObject;
}

declare const CreatorAddons: CreatorAddons;

/**
 * CoreUI is a static class that allows for the toggling of certain core GUI.
 */
declare interface CoreUIService extends Instance {
	/**
	 * Determines the top inset of the UI.
	 */
	readonly TopInset: number;
	/**
	 * Determines what cursor is used when the player is ctrl-locked.
	 */
	CtrlLockCursor: CtrlLockCursor;
	/**
	 * Determines the maximum distance at which chat bubbles are rendered.
	 */
	ChatBubbleRenderDistance: number;
	/**
	 * Determines whether or not the user card (in the upper right hand corner above the leaderboard) is visible.
	 */
	UseUserCard: boolean;
	/**
	 * Determines whether or not the chat box is visible.
	 */
	UseChat: boolean;
	/**
	 * Determines whether or not the player's health bar is visible.
	 */
	UseHealthBar: boolean;
	/**
	 * Determines whether or not the player list/leaderboard is visible.
	 */
	UseLeaderboard: boolean;
	/**
	 * Determines whether or not the hot bar is visible.
	 */
	UseHotbar: boolean;
	/**
	 * Determines whether or not the backpack is togglable.
	 */
	UseBackpack: boolean;
	/**
	 * Determines whether or not the menu button is visible.
	 */
	UseMenuButton: boolean;
	/**
	 * Determines whether or not the emote wheel is visible.
	 */
	UseEmoteWheel: boolean;
	/**
	 * Determines whether or not the player can respawn.
	 */
	CanRespawn: boolean;
}

declare const CoreUIService: CoreUIService;

/**
 * ColorValue is an object that holds a Color value.
 */
declare class ColorValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: Color;
}

/**
 * Color series is a data type that represents a collection of color and points, also known as gradient.
 */
declare class ColorSeries {
	/**
	 * Returns the point count of this color series.
	 */
	readonly PointCount: number;
	/**
	 * Creates a color series from a color range
	 */
	static New() : ColorSeries;
	/**
	 * Creates a color series from a color range
	 */
	static New(min: Color, max: Color) : ColorSeries;
	/**
	 * Clear this ColorSeries
	 */
	Clear() : undefined;
	/**
	 * Sets the color at the specified point in the color series.
	 */
	SetColor(point: number, color: Color) : undefined;
	/**
	 * Removes the point at the specified index from the color series.
	 */
	RemovePoint(point: number) : undefined;
	/**
	 * Get all offsets
	 */
	GetOffsets() : number[];
	/**
	 * Get all colors
	 */
	GetColors() : Color[];
	/**
	 * Sets the offset at the specified point in the color series.
	 */
	SetOffset(point: number, offset: number) : undefined;
	/**
	 * Gets the color at the specified point in the color series.
	 */
	GetColor(point: number) : Color;
	/**
	 * Gets the offset at the specified point in the color series.
	 */
	GetOffset(point: number) : number;
	/**
	 * Add color point to the series with an offset.
	 */
	AddPoint(offset: number, color: Color) : number;
	/**
	 * Interpolates between colors in the series based on the parameter t.
	 */
	Lerp(t: number) : Color;
}

/**
 * ColorAdjustModifier is a LightingModifier that allows the adjustment of lighting
 */
declare class ColorAdjustModifier extends LightingModifier {
	/**
	 * Determines the brightness adjustment.
	 */
	Brightness: number;
	/**
	 * Determines the contrast adjustment.
	 */
	Contrast: number;
	/**
	 * Determines the saturation adjustment.
	 */
	Saturation: number;
	/**
	 * Determines the tint color.
	 */
	TintColor: Color;
}

/**
 * Color is a data type that represents a color.
 *   
 *   The alpha property is between 0 and 1. 0 is fully transparent and 1 is fully visible.
 */
declare class Color {
	/**
	 * Red color component
	 */
	R: number;
	/**
	 * Green color component
	 */
	G: number;
	/**
	 * Blue color component
	 */
	B: number;
	/**
	 * Alpha (opacity) color component
	 */
	A: number;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 */
	static New() : Color;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 */
	static New(d: number) : Color;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 */
	static New(r: number, g: number, b: number) : Color;
	/**
	 * Creates a new Color with the set R, G, B and A values
	 */
	static New(r: number, g: number, b: number, a: number) : Color;
	/**
	 * Returns a random color with an alpha value of 1.
	 */
	static Random() : Color;
	/**
	 * Creates a new Color from the specified RGBA value.
	 */
	static FromRGB(r: number, g: number, b: number, a?: number) : Color;
	/**
	 * Creates a new Color from the specified hex value.
	 */
	static FromHex(hex: string) : Color;
	/**
	 * Converts a Color value to its hexadecimal string representation.
	 */
	static ToHex(c: Color) : string;
	/**
	 * Creates a new Color from the specified HSV value.
	 */
	static FromHSV(h: number, s: number, v: number, a?: number) : Color;
	/**
	 * Linearly interpolates colors a and b by t.
	 */
	static Lerp(a: Color, b: Color, t: number) : Color;
}

/**
 * Clothing represents a clothing that can be applied to a PolytorianModel
 */
declare class Clothing extends Instance {
	/**
	 * The clothing texture to use
	 */
	Image: ImageAsset;
}

/**
 * ClientScript is a script that runs locally for each player. It can only see what the player can see.
 */
declare class ClientScript extends Script {
}

/**
 * Chat is a static class used for various actions regarding the chat.
 */
declare interface ChatService extends Instance {
	/**
	 * A callback function that filters chat messages before they are processed by the server, and displayed to other players.```lua
	 * Chat.ChatPredicate = function(plr: Player, msg: string)
	 *     if msg == "miau" then
	 *         Chat:UnicastMessage("no miau allowed", plr)
	 *         return false
	 *     end
	 *     return true
	 * end
	 * ```
	 * 
	 */
	ChatPredicate: () => void;
	/**
	 * Sends a chat message to all players.
	 */
	BroadcastMessage(msg: string) : undefined;
	/**
	 * Sends a chat message to a specific player.
	 */
	UnicastMessage(msg: string, plr: Player) : undefined;
	/**
	 * Fires when new chat message has been received from player
	 */
	readonly NewChatMessage: PTSignal<(player: Player, string: string) => void>;
	/**
	 * Fires when new message has been received from either `BroadcastMessage` or `UnicastMessage`
	 */
	readonly MessageReceived: PTSignal<(string: string) => void>;
	/**
	 * Fires when message has been declined by the server
	 */
	readonly MessageDeclined: PTSignal<() => void>;
}

declare const ChatService: ChatService;

/**
 * Base class for Character Models
 */
declare class CharacterModel extends Dynamic {
	/**
	 * Current state of this character.
	 */
	CurrentState: CharacterModelState;
	/**
	 * Current state animation speed of this character.
	 */
	CurrentSpeed: number;
	/**
	 * The animator for this character
	 */
	Animator: Animator;
	/**
	 * Missing Documentation
	 */
	PlayIdle() : undefined;
	/**
	 * Missing Documentation
	 */
	PlayWalk() : undefined;
	/**
	 * Missing Documentation
	 */
	PlayRun() : undefined;
	/**
	 * Missing Documentation
	 */
	PlayJump() : undefined;
	/**
	 * Missing Documentation
	 */
	PlayClimb() : undefined;
	/**
	 * Missing Documentation
	 */
	SetAnimSpeed(speed: number) : undefined;
	/**
	 * Missing Documentation
	 */
	SetState(newState: CharacterModelState) : undefined;
	/**
	 * Get attachment dynamic from this character
	 */
	GetAttachment(attachmentEnum: CharacterAttachment) : Dynamic;
}

/**
 * Service for capturing photos
 */
declare interface CaptureService extends Instance {
	/**
	 * Returns whether the capture is on cooldown.
	 */
	readonly OnCooldown: boolean;
	/**
	 * Determines if user/scripts can take a picture.
	 */
	CanCapture: boolean;
	/**
	 * Default capture overlay for all captures
	 */
	DefaultCaptureOverlay: UIField;
	/**
	 * Attaches a spectator camera at dynamic for use with spectator mode.
	 */
	SpectatorAttach: Dynamic;
	/**
	 * Take a photo at dynamic
	 */
	TakePhotoAtDynamic(dyn: Dynamic, photoSize?: Vector2, overlay?: UIField) : undefined;
	/**
	 * Take photo at `pos` for position and `rot` for rotation, optional `photoSize` defines the size, and optional UI `overlay` can be passed to include it in the result photo.
	 */
	TakePhotoAt(pos: Vector3, rot: Vector3, photoSize?: Vector2, overlay?: UIField) : undefined;
}

declare const CaptureService: CaptureService;

/**
 * Camera is a class that represents the local player's camera.
 */
declare class Camera extends Dynamic {
	/**
	 * The forward direction vector of the camera.
	 */
	readonly Forward: Vector3;
	/**
	 * Determines or returns the camera's current mode.
	 */
	Mode: CameraMode;
	/**
	 * Determines or returns the camera's field of view.
	 */
	FOV: number;
	/**
	 * Determines whether or not the camera should clip through walls.
	 */
	ClipThroughWalls: boolean;
	/**
	 * The camera's minimum distance from the target in Follow mode.
	 */
	MinDistance: number;
	/**
	 * Determines camera's maximum distance from the target in Follow mode.
	 */
	MaxDistance: number;
	/**
	 * Determines the distance between the camera and the target when the camera is in Follow mode.
	 */
	Distance: number;
	/**
	 * Determines the scroll move speed of the camera.
	 */
	ScrollSensitivity: number;
	/**
	 * Determines whether or not the camera should render in orthographic (2D) mode or not (3D).
	 */
	Orthographic: boolean;
	/**
	 * Determines whether or not to use lerping in Follow mode.
	 */
	FollowLerp: boolean;
	/**
	 * Determines the lerp speed of the camera when lerping is enabled.
	 */
	LerpSpeed: number;
	/**
	 * Determines the half-size of the camera when in orthographic mode.
	 */
	OrthographicSize: number;
	/**
	 * Determines the minimum distance from the camera for objects to render.
	 */
	Near: number;
	/**
	 * Determines the maximum distance from the camera for objects to render.
	 */
	Far: number;
	/**
	 * Determines the camera's offset from its position.
	 */
	PositionOffset: Vector3;
	/**
	 * Determines the camera's offset from its rotation.
	 */
	RotationOffset: Vector3;
	/**
	 * Returns whether or not the camera is in first person.
	 */
	readonly IsFirstPerson: boolean;
	/**
	 * Determine if camera can be ctrl locked.
	 */
	CanLock: boolean;
	/**
	 * Multipler for camera sensitivity
	 */
	SensitivityMultiplier: number;
	/**
	 * Current sensitivity of the camera
	 */
	readonly Sensitivity: number;
	/**
	 * Determines the horizontal movement speed of the camera in Follow mode.
	 */
	HorizontalSpeed: number;
	/**
	 * Determines the vertical move speed of the camera.
	 */
	VerticalSpeed: number;
	/**
	 * Determines the lerp amount when scrolling
	 */
	ScrollLerpSpeed: number;
	/**
	 * Determine if camera is in Ctrl lock mode
	 */
	CtrlLocked: boolean;
	/**
	 * Determine if camera should always be in locked mode
	 */
	AlwaysLocked: boolean;
	/**
	 * The target of Follow mode
	 */
	Target: Dynamic;
	/**
	 * Check if position is in the camera's view.
	 */
	IsPositionInView(pos: Vector3) : boolean;
	/**
	 * Check if position is behind the camera's view.
	 */
	IsPositionBehind(pos: Vector3) : boolean;
	/**
	 * Cast a ray from the camera at the specified ViewportPoint (Vector2 with components with values in range of 0 - 1 describing how far a point is to the right and to the top of the screen) into the game world
	 */
	ViewportPointToRay(pos: Vector2, ignoreList?: Instance[], maxDistance?: number) : RayResult;
	/**
	 * Cast a ray from the camera at screen point into the game world
	 */
	ScreenPointToRay(pos: Vector2, ignoreList?: Instance[], maxDistance?: number) : RayResult;
	/**
	 * Transforms `pos` from viewport space into screen space.
	 */
	ViewportToScreenPoint(pos: Vector2) : Vector2;
	/**
	 * Transforms `pos` from viewport space into world space.
	 */
	ViewportToWorldPoint(pos: Vector2) : Vector3;
	/**
	 * Transforms `pos` from world space into viewport space.
	 */
	WorldToViewportPoint(pos: Vector3) : Vector2;
	/**
	 * Transforms `pos` from world space into screen space.
	 */
	WorldToScreenPoint(pos: Vector3) : Vector2;
	/**
	 * Transforms `pos` from screen space into viewport space.
	 */
	ScreenToViewportPoint(pos: Vector2) : Vector2;
	/**
	 * Transforms `pos` from screen space into world space.
	 */
	ScreenToWorldPoint(pos: Vector2) : Vector3;
	/**
	 * Fires when camera has entered first person
	 */
	readonly FirstPersonEntered: PTSignal<() => void>;
	/**
	 * Fires when camera has exited first person
	 */
	readonly FirstPersonExited: PTSignal<() => void>;
}

/**
 * Font asset that's built-in with the client
 */
declare class BuiltInFontAsset extends FontAsset {
	/**
	 * Target font to use
	 */
	FontPreset: FontPreset;
	/**
	 * Font weight for this font
	 */
	FontWeight: FontWeight;
	/**
	 * Font style for this font
	 */
	FontStyle: FontStyle;
}

/**
 * Audio asset that's built-in with the client
 */
declare class BuiltInAudioAsset extends AudioAsset {
	/**
	 * The target audio to use
	 */
	AudioPreset: BuiltInAudioPreset;
}

/**
 * Represents a bounding box in 3D space.
 */
declare class Bounds {
	/**
	 * Indicates the center point of the bounds.
	 */
	readonly Center: Vector3;
	/**
	 * Determines the size of the bounds.
	 */
	Size: Vector3;
	/**
	 * Indicates the extents of the bounds.
	 */
	readonly Extents: Vector3;
	/**
	 * The origin point
	 */
	readonly Start: Vector3;
	/**
	 * The ending point
	 */
	End: Vector3;
	/**
	 * Indicates the volume of the bounds.
	 */
	readonly Volume: number;
	/**
	 * Creates a new Bounds object with the specified position and size.
	 */
	static New() : Bounds;
	/**
	 * Creates a new Bounds object with the specified position and size.
	 */
	static New(position: Vector3, size: Vector3) : Bounds;
	/**
	 * Calculates the closest point on the bounds to the specified point.
	 */
	static ClosestPoint(bounds: Bounds, point: Vector3) : Vector3;
	/**
	 * Returns whether the bounds contain the specified point.
	 */
	static Contains(bounds: Bounds, point: Vector3) : boolean;
	/**
	 * Expands the bounds by the specified amount.
	 */
	static Encapsulate(bounds: Bounds, point: Vector3) : Bounds;
	/**
	 * Expands the bounds by the specified amount.
	 */
	static Expand(bounds: Bounds, amount: number) : Bounds;
	/**
	 * Determines whether the bounds intersect with another bounds.
	 */
	static Intersects(bounds: Bounds, other: Bounds) : boolean;
	/**
	 * Returns the overlap of the two bounds.
	 */
	static Intersection(bounds: Bounds, other: Bounds) : Bounds;
	/**
	 * Sets the minimum and maximum points of the bounds.
	 */
	static SetMinMax(bounds: Bounds, min: Vector3, max: Vector3) : Bounds;
	/**
	 * Calculates the distance from the bounds to the specified point.
	 */
	static Distance(bounds: Bounds, point: Vector3) : number;
	/**
	 * Calculates the squared distance from the bounds to the specified point.
	 */
	static SqrDistance(bounds: Bounds, point: Vector3) : number;
}

/**
 * BoolValue is a ValueBase that stores a boolean.
 */
declare class BoolValue extends ValueBase {
	/**
	 * The value of this object.
	 */
	Value: boolean;
}

/**
 * BodyRotation are objects that apply a force to their parent until they reach the target rotation.
 */
declare class BodyRotation extends Instance {
	/**
	 * Determines the target rotation that the body applies forces to get to.
	 */
	TargetRotation: Vector3;
	/**
	 * Determines how much force the body applies.
	 */
	Force: number;
	/**
	 * Determines how close the body has to be to the target rotation to stop applying forces to it.
	 */
	AcceptanceAngle: number;
	/**
	 * Sets target rotation to the given quaternion.
	 */
	SetQuaternion(quaternion: Quaternion) : undefined;
}

/**
 * BodyPosition are objects that apply a force to their parent until they reach the target position.
 */
declare class BodyPosition extends Instance {
	/**
	 * Determines the target position that the body applies forces to get to.
	 */
	TargetPosition: Vector3;
	/**
	 * Determines how much force the body applies.
	 */
	Force: number;
	/**
	 * Determines how close the body has to be to the target position to stop applying forces to it.
	 */
	AcceptanceDistance: number;
}

/**
 * BindableEvent is an event that can be called to communicate between scripts in the same boundary.
 */
declare class BindableEvent extends Instance {
	/**
	 * Invoke this event with parameters
	 */
	Invoke(par: any) : undefined;
	/**
	 * Fires when this event has been invoked
	 */
	readonly Invoked: PTSignal<() => void>;
}

/**
 * Base class for all assets
 */
declare class BaseAsset extends NetworkedObject {
}

/**
 * Abstract class for audio
 */
declare class AudioAsset extends ResourceAsset {
}

/**
 * Service for managing/loading assets
 */
declare interface AssetsService extends Instance {
	/**
	 * Retrieve `FileLinkAsset` with the specified path
	 */
	GetFileLinkByPath(path: string) : FileLinkAsset;
	/**
	 * Retrieve `FileLinkAsset` with the specified ID
	 */
	GetFileLinkByID(id: string) : FileLinkAsset;
}

declare const AssetsService: AssetsService;

/**
 * WIP class
 */
declare class Animator extends Instance {
	/**
	 * Determines the currently playing animation name
	 */
	CurrentAnimation: string;
	/**
	 * Play animation
	 */
	PlayAnimation(animationKey: string) : undefined;
	/**
	 * Play one-shot animation
	 */
	PlayOneShotAnimation(animationKey: string) : undefined;
	/**
	 * Stop current animation
	 */
	StopAnimation() : undefined;
	/**
	 * Stop one-shot animation
	 */
	StopOneShotAnimation() : undefined;
}

/**
 * AddonToolItem represents a tool item in the tools menu of the addon.
 */
declare class AddonToolItem {
	/**
	 * Fires when this tool item has been pressed
	 */
	readonly Pressed: PTSignal<() => void>;
}

/**
 * AddonObject represents an addon in the creator. This object serves as the main interface for addon developers to interact with the addon system.
 */
declare class AddonObject {
	/**
	 * The identifier for this addon.
	 */
	readonly Identifier: string;
	/**
	 * The display name of the addon. This name will appear in the tools menu.
	 */
	AddonName: string;
	/**
	 * Determines the addon icon.
	 */
	AddonIcon: PTImageAsset;
	/**
	 * Prompt the user to request for permissions
	 */
	static RequestPermissions(perms: AddonPermission[]) : undefined;
	/**
	 * Create a new tool item with text.
	 */
	CreateToolItem(txt: string) : AddonToolItem;
	/**
	 * Fires when cleanup has been requested by the creator, this is usually fired when updating the addon.
	 */
	readonly CleanupReceived: PTSignal<() => void>;
}

/**
 * Service for managing achievements
 */
declare interface AchievementsService extends Instance {
	/**
	 * Determine if the achievement sound effect should play when user receives an achievement
	 */
	UseAchievementSound: boolean;
	/**
	 * Determine if achievement toast should show when user receives an achievement
	 */
	NotifyAchievements: boolean;
	/**
	 * Award achievement to the target user asynchronously.
	 */
	AwardAsync(userID: number, achievementID: number) : undefined;
	/**
	 * Check if the target user has the achievement, asynchronously.
	 */
	HasAchievementAsync(userID: number, achievementID: number) : boolean;
	/**
	 * Fires when the local player got an achievement
	 */
	readonly GotAchievement: PTSignal<(number: number) => void>;
}

declare const AchievementsService: AchievementsService;

/**
 * Accessory represents an attachable object that can be equipped by a CharacterModel.
 */
declare class Accessory extends Dynamic {
	/**
	 * Specifies the character attachment point
	 */
	TargetAttachment: CharacterAttachment;
}

declare namespace Enums {
	const enum VerticalAlignment {
		Top,
		Middle,
		Bottom,
	}

	const enum UIScrollMode {
		Disabled,
		Auto,
		AlwaysShow,
		NeverShow,
	}

	const enum UIMode {
		Default,
		GUI3D,
	}

	const enum UIMaskMode {
		Disabled,
		ClipOnly,
		ClipAndDraw,
	}

	const enum UILayoutAlignment {
		Start,
		Center,
		End,
	}

	const enum TweenTransition {
		Linear,
		Sine,
		Quint,
		Quart,
		Quad,
		Expo,
		Elastic,
		Cubic,
		Circ,
		Bounce,
		Back,
		Spring,
	}

	const enum TweenDirection {
		In,
		Out,
		InOut,
		OutIn,
	}

	const enum TextureFilter {
		Nearest,
		NearestNoMipmaps,
		Linear,
		LinearNoMipmaps,
	}

	const enum TextTrimming {
		None,
		Character,
		Word,
		CharacterEllipsis,
		WordEllipsis,
	}

	const enum SoundAttenuationMode {
		Disabled,
		Linear,
		Squared,
		Logarithmic,
	}

	const enum SkyboxPreset {
		Day1,
		Day2,
		Day3,
		Day4,
		Day5,
		Day6,
		Day7,
		Morning1,
		Morning2,
		Morning3,
		Morning4,
		Night1,
		Night2,
		Night3,
		Night4,
		Night5,
		Sunset1,
		Sunset2,
		Sunset3,
		Sunset4,
		Sunset5,
	}

	const enum ShadowQuality {
		Off,
		Low,
		Medium,
		High,
		Ultra,
	}

	const enum RenderingMethod {
		Standard,
		Performance,
		Compatibility,
		Auto,
	}

	const enum PlayerRotationMode {
		Automatic,
		CameraLocked,
		Movement,
		MovementCtrlLockOnly,
	}

	const enum PlayerMovementMode {
		Default,
		Scripted,
	}

	const enum ParticleSimulationSpace {
		Local,
		World,
	}

	const enum ParticleOrientation {
		FaceCamera,
		FaceCameraFixedY,
	}

	const enum ParticleEmissionShape {
		Point,
		Sphere,
		SphereSurface,
		Box,
		Ring,
	}

	const enum PartShape {
		Brick,
		Sphere,
		Cylinder,
		Cone,
		Wedge,
		Corner,
		Bevel,
		Concave,
		Truss,
		Frame,
		Octant,
		Torus,
		BeveledCorner,
		ConcaveCorner,
		TriangleCorner,
		TriangleConcaveCorner,
	}

	const enum PartMaterial {
		SmoothPlastic,
		Brick,
		Concrete,
		Dirt,
		Fabric,
		Grass,
		Ice,
		Marble,
		Metal,
		MetalGrid,
		MetalPlate,
		Neon,
		Planks,
		Plastic,
		Plywood,
		RustyIron,
		Sand,
		Sandstone,
		Snow,
		Stone,
		Wood,
	}

	const enum MsaaScale {
		Disabled,
		X2,
		X4,
		X8,
	}

	const enum MeshCollisionType {
		Bounds,
		Convex,
		Exact,
	}

	const enum MeshAnimationType {
		Normal,
		Looped,
		PingPong,
		OneShot,
		OneShotImpluse,
	}

	const enum KeyCode {
		None,
		Space,
		Exclam,
		QuotedBl,
		Numbersign,
		Dollar,
		Percent,
		Ampersand,
		Apostrophe,
		ParenLeft,
		Parenright,
		Asterisk,
		Plus,
		Comma,
		Minus,
		Period,
		Slash,
		Key0,
		Key1,
		Key2,
		Key3,
		Key4,
		Key5,
		Key6,
		Key7,
		Key8,
		Key9,
		Colon,
		Semicolon,
		Less,
		Equal,
		Greater,
		Question,
		At,
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q,
		R,
		S,
		T,
		U,
		V,
		W,
		X,
		Y,
		Z,
		BracketLeft,
		Backslash,
		BracketRight,
		Asciicircum,
		Underscore,
		QuoteLeft,
		BraceLeft,
		Bar,
		BraceRight,
		Asciitilde,
		Yen,
		Section,
		GamepadA,
		GamepadB,
		GamepadX,
		GamepadY,
		GamepadBack,
		GamepadGuide,
		GamepadStart,
		GamepadLeftStick,
		GamepadRightStick,
		GamepadLeftShoulder,
		GamepadRightShoulder,
		GamepadDpadUp,
		GamepadDpadDown,
		GamepadDpadLeft,
		GamepadDpadRight,
		GamepadPaddle1,
		GamepadPaddle2,
		GamepadPaddle3,
		GamepadPaddle4,
		GamepadTouchpad,
		MouseLeft,
		MouseRight,
		MouseMiddle,
		MouseWheelUp,
		MouseWheelDown,
		MouseWheelLeft,
		MouseWheelRight,
		MouseXbutton1,
		MouseXbutton2,
		GamepadAxisLeftX,
		GamepadAxisLeftY,
		GamepadAxisRightX,
		GamepadAxisRightY,
		GamepadAxisTriggerLeft,
		GamepadAxisTriggerRight,
		MouseAxisX,
		MouseAxisY,
		Special,
		Escape,
		Tab,
		Backtab,
		Backspace,
		Enter,
		KpEnter,
		Insert,
		Delete,
		Left,
		Up,
		Right,
		Down,
		PageUp,
		PageDown,
		Shift,
		Ctrl,
		Meta,
		Alt,
		CapsLock,
		NumLock,
		ScrollLock,
		F1,
		F2,
		F3,
		F4,
		F5,
		F6,
		F7,
		F8,
		F9,
		F10,
		F11,
		F12,
		Menu,
		Hyper,
		KpMultiply,
		KpDivide,
		KpSubtract,
		KpPeriod,
		KpAdd,
		Kp0,
		Kp1,
		Kp2,
		Kp3,
		Kp4,
		Kp5,
		Kp6,
		Kp7,
		Kp8,
		Kp9,
		Unknown,
	}

	const enum ImageType {
		Asset,
		AssetThumbnail,
		WorldThumbnail,
		UserAvatar,
		UserAvatarHeadshot,
		GuildIcon,
		GuildBanner,
		PlaceIcon,
	}

	const enum ImageStretchMode {
		Stretch,
		Centered,
		Covered,
	}

	const enum HttpRequestMethod {
		Get,
		Post,
		Put,
		Delete,
		Patch,
	}

	const enum HorizontalAlignment {
		Left,
		Center,
		Right,
	}

	const enum GraphicsPreset {
		Low,
		Medium,
		High,
		Ultra,
		Photo,
		Custom,
	}

	const enum GradientImageFill {
		Linear,
		Radial,
		Square,
	}

	const enum GrabbablePermissionMode {
		None,
		Everyone,
		Scripted,
	}

	const enum ForceMode {
		Force,
		Acceleration,
		Impulse,
		VelocityChange,
	}

	const enum FontWeight {
		Thin,
		ExtraLight,
		Light,
		Regular,
		Medium,
		SemiBold,
		Bold,
		ExtraBold,
		Black,
	}

	const enum FontStyle {
		Normal,
		Italic,
	}

	const enum FontPreset {
		SourceSans,
		PressStart2P,
		Montserrat,
		RobotoMono,
		Rubik,
		Poppins,
		Domine,
		Fredoka,
		ComicNeue,
		Orbitron,
		Papyrus,
		ComicSansMS,
		JetBrainsMono,
	}

	const enum DominantAxis {
		Width,
		Height,
	}

	const enum CtrlLockCursor {
		None,
		Chevron,
		Stereotypical,
		StereotypicalDot,
		Tactical,
		Dot,
		TacticalDot,
		Plus,
		X,
	}

	const enum CreatorToolMode {
		Select,
		Move,
		Rotate,
		Scale,
		Paint,
		Brush,
	}

	const enum ClientPlatform {
		Desktop,
		Mobile,
		VR,
	}

	const enum CharacterModelState {
		Idle,
		Walking,
		Running,
		Jumping,
		Climbing,
	}

	const enum CharacterAttachment {
		Head,
		UpperTorso,
		LowerTorso,
		ShoulderLeft,
		ShoulderRight,
		ElbowLeft,
		ElbowRight,
		HandLeft,
		HandRight,
		LegLeft,
		LegRight,
		KneeLeft,
		KneeRight,
		FootLeft,
		FootRight,
	}

	const enum CameraMode {
		Follow,
		Free,
		Scripted,
	}

	const enum BuiltInAudioPreset {
		Jump,
		Explosion,
	}

	const enum BorderMode {
		Inset,
		Middle,
		Outline,
	}

	const enum BlendMode {
		Mix,
		Add,
		Subtract,
		Multiply,
	}

	const enum AspectRatioScaleType {
		FitContainer,
		FitMaxSize,
		NoLimit,
	}

	const enum AmbientSource {
		Skybox,
		Color,
	}

	const enum AddonPermission {
		IORead,
		IOWrite,
	}

}
type VerticalAlignment = Enums.VerticalAlignment;
type UIScrollMode = Enums.UIScrollMode;
type UIMode = Enums.UIMode;
type UIMaskMode = Enums.UIMaskMode;
type UILayoutAlignment = Enums.UILayoutAlignment;
type TweenTransition = Enums.TweenTransition;
type TweenDirection = Enums.TweenDirection;
type TextureFilter = Enums.TextureFilter;
type TextTrimming = Enums.TextTrimming;
type SoundAttenuationMode = Enums.SoundAttenuationMode;
type SkyboxPreset = Enums.SkyboxPreset;
type ShadowQuality = Enums.ShadowQuality;
type RenderingMethod = Enums.RenderingMethod;
type PlayerRotationMode = Enums.PlayerRotationMode;
type PlayerMovementMode = Enums.PlayerMovementMode;
type ParticleSimulationSpace = Enums.ParticleSimulationSpace;
type ParticleOrientation = Enums.ParticleOrientation;
type ParticleEmissionShape = Enums.ParticleEmissionShape;
type PartShape = Enums.PartShape;
type PartMaterial = Enums.PartMaterial;
type MsaaScale = Enums.MsaaScale;
type MeshCollisionType = Enums.MeshCollisionType;
type MeshAnimationType = Enums.MeshAnimationType;
type KeyCode = Enums.KeyCode;
type ImageType = Enums.ImageType;
type ImageStretchMode = Enums.ImageStretchMode;
type HttpRequestMethod = Enums.HttpRequestMethod;
type HorizontalAlignment = Enums.HorizontalAlignment;
type GraphicsPreset = Enums.GraphicsPreset;
type GradientImageFill = Enums.GradientImageFill;
type GrabbablePermissionMode = Enums.GrabbablePermissionMode;
type ForceMode = Enums.ForceMode;
type FontWeight = Enums.FontWeight;
type FontStyle = Enums.FontStyle;
type FontPreset = Enums.FontPreset;
type DominantAxis = Enums.DominantAxis;
type CtrlLockCursor = Enums.CtrlLockCursor;
type CreatorToolMode = Enums.CreatorToolMode;
type ClientPlatform = Enums.ClientPlatform;
type CharacterModelState = Enums.CharacterModelState;
type CharacterAttachment = Enums.CharacterAttachment;
type CameraMode = Enums.CameraMode;
type BuiltInAudioPreset = Enums.BuiltInAudioPreset;
type BorderMode = Enums.BorderMode;
type BlendMode = Enums.BlendMode;
type AspectRatioScaleType = Enums.AspectRatioScaleType;
type AmbientSource = Enums.AmbientSource;
type AddonPermission = Enums.AddonPermission;
