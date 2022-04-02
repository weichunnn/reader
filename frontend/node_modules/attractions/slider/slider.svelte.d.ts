/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SliderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  min?: number;

  max?: number;

  /**
   * @default 1
   */
  step?: number;

  /**
   * @default false
   */
  vertical?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  value?: number | [number, number];

  /**
   * Defines the ticks that appear on the slider track.
   * In `'step'` mode, the value step is used to add a tick at that interval.
   * In `'values'` mode, a list of all the values where ticks should be placed is provided (from min to max).
   * `subDensity` creates sub-ticks with a number that represents a percent interval on a 0-100 scale, e.g. 3 is every 3 percent.
   * In order for sub-ticks to be in sync with with ticks, the tick should be a multiple of the sub-ticks.
   * @default { mode: 'none', }
   */
  ticks?: import("./types").TickConfig;

  /**
   * @default 'block'
   */
  rangeBehavior?: import("./types").RangeBehavior;

  /**
   * @default 'never'
   */
  tooltips?: import("./types").Tooltips;
}

export default class Slider extends SvelteComponentTyped<
  SliderProps,
  {
    change: CustomEvent<number | [number, number]>;
    focus: CustomEvent<void>;
    blur: CustomEvent<void>;
  },
  {
    ["rail-content"]: {};
    ["tick-value"]: { value: number };
    ["tooltip-content"]: { value: number };
  }
> {}
