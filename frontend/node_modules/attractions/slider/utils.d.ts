/**
 * Get position of mouse or touch event.
 * @param {boolean} vertical
 * @param {MouseEvent | TouchEvent} e
 * @returns {number}
 */
export function getPosition(vertical: boolean, e: MouseEvent | TouchEvent): number;
/**
 * Stop event propagation and cancel default operation.
 * @param {Event} e
 */
export function stopEvent(e: Event): void;
/**
 * Clamps the value to the provided min/max limits
 * @param {number} val
 * @param {{ min: number, max: number }} state
 * @returns {number}
 */
export function ensureValueInRange(val: number, { min, max }: {
    min: number;
    max: number;
}): number;
/**
 * Adjust resolution in-line with step.
 * @param {number} step
 * @returns {number}
 */
export function getPrecision(step: number): number;
/**
 * @template T A generic parameter that flows through to the return type.
 * @param {T} v A value.
 * @return {T} The same value.
 */
export function id<T>(v: T): T;
/**
 * Calculate all the possible values in the range.
 * @param {number} step The increment between each value and the next.
 * @param {{ min: number, max: number }} state The minimum and maximum values.
 * @returns {number[]} An array of all the possible values.
 */
export function getSteps(step: number, { min, max }: {
    min: number;
    max: number;
}): number[];
/**
 * Get the list of ticks depending on the ticks' `mode`.
 * @param {TickConfig} ticks The ticks configuration.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 */
export function getTickValues(ticks: TickConfig, min: number, max: number): number[];
/**
 * Get the subTick values depending on the density.
 * @param {TickConfig} ticks The ticks configuration.
 * @param {number} min
 * @param {number} max
 * @param {number[]} [tickValues=[]] The values of the major ticks (to avoid collision).
 * @returns {number[]}
 */
export function getSubTickPositions(ticks: TickConfig, min: number, max: number, tickValues?: number[] | undefined): number[];
/**
 * Find the closest step, including ticks, to the given value.
 * @param {number} val The value to find the closest step for.
 * @param {{ ticks: TickConfig, step: number, min: number, max: number }} state
 * @returns {number}
 */
export function getClosestPoint(val: number, { ticks, step, min, max }: {
    ticks: TickConfig;
    step: number;
    min: number;
    max: number;
}): number;
/**
 * Convert from slider value to percentage of the range [min .. max]
 * used for ticks too which are not an array value
 * @param {number} value
 * @param {{ min: number, max: number }} state
 * @returns {number}
 */
export function calcPercentOfRange(value: number, { min, max }: {
    min: number;
    max: number;
}): number;
/**
 * If using a single handle for the slider, give the user the value unnested.
 * @param {[number] | [number, number]} value
 * @returns {number | [number, number]}
 */
export function unnestSingle(value: [number] | [number, number]): number | [number, number];
/**
 * @param {number} val
 * @param {{ ticks: TickConfig, step: number, min: number, max: number }} stateWithTicks
 * @returns {number}
 */
export function ensureValuePrecision(val: number, stateWithTicks: {
    ticks: TickConfig;
    step: number;
    min: number;
    max: number;
}): number;
/**
 * Find the handle closest to the given value.
 * @param {number} value
 * @param {[number] | [number, number]} handleValues
 * @returns {number}
 */
export function getClosestHandle(value: number, handleValues: [number] | [number, number]): number;
export type State = import('./types').SliderState;
export type TickConfig = import('./types').TickConfig;
//# sourceMappingURL=utils.d.ts.map