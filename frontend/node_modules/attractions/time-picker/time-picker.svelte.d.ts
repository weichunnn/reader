/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TimePickerProps {
  /**
   * A class string to pass down to the `TextField`.
   * @default null
   */
  inputClass?: string | false | null;

  /**
   * Hides the `now` button from the component.
   * @default false
   */
  hideNow?: boolean;

  /**
   * Aligns the dropdown content such that it opens to the top of the text field, extending up.
   * @default false
   */
  top?: boolean;

  /**
   * Aligns the dropdown with the right edge of the text field.
   * @default false
   */
  right?: boolean;

  /**
   * The currently selected time value. Even though a whole `Date` object is needed, only the time part will be considered.
   * @default null
   */
  value?: Date | null;

  /**
   * The format used to display time and consume input.
   * The `%`-specifiers are a subset of [C date format specifiers](http://www.cplusplus.com/reference/ctime/strftime/), with only `%H`, `%M`, `%S`, `%P` and `%p` allowed. `%P` stands for AM/PM, while `%p` stands for am/pm.
   * @default '%H:%M'
   */
  format?: string;

  /**
   * If the `%P` or `%p` modifier is used in the format, the dropdown will contain tabs to switch between AM and PM.
   * You may change the name of the radio group for these tabs to avoid collisions.
   * @default 'am-pm'
   */
  amPmTabName?: string;

  /**
   * The list of possible hours to choose from.
   * Defaults to `[1..12]` in 12 hours mode, or `[0..23]` in 24 hours mode.
   * Hint: use `range` from utils to generate a range of numbers.
   * @default [...rangeGenerator(f12hours ? 1 : 0, f12hours ? 13 : 24)]
   */
  hours?: Array<number>;

  /**
   * The list of possible minutes to choose from.
   * Defaults to `[0, 5, ..., 55]`.
   * Hint: use `range` from utils to generate a range of numbers.
   * @default [...rangeGenerator(0, 60, 5)]
   */
  minutes?: Array<number>;

  /**
   * The list of possible seconds to choose from.
   * Defaults to `[0, 5, ..., 55]` if seconds are included in the format, or `[]` otherwise.
   * Hint: use `range` from utils to generate a range of numbers.
   */
  seconds?: Array<number>;
}

export default class TimePicker extends SvelteComponentTyped<
  TimePickerProps,
  { change: CustomEvent<{ value: Date }> },
  {
    ["hours-label"]: {};
    ["minutes-label"]: {};
    ["now-icon"]: {};
    ["now-label"]: {};
    ["seconds-label"]: {};
  }
> {}
