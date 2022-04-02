/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";
import { CheckboxProps } from "./checkbox.svelte";

export interface CheckboxGroupProps extends CheckboxProps {
  /**
   * A class string to add to the `<Checkbox>` components.
   * @default null
   */
  checkboxClass?: string | false | null;

  /**
   * A class string to assign to the labels' wrapping `<span>`s.
   * If this is not passed, the labels are not wrapped in a `<span>`.
   * @default null
   */
  labelClass?: string | false | null;

  /**
   * Designates the checkboxes as color choices.
   * Labels are ignored and values are expected to be `"#RRGGBB"`.
   * @default false
   */
  color?: boolean;

  /**
   * An array of items, where only the value field is required.
   * Must contain at least one value.
   */
  items?: Array<{
    value: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
  }>;

  /**
   * The name to assign to all checkboxes belonging to the same group.
   * Check [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname) for more information.
   */
  name?: string;

  /**
   * Places the labels to the left of the checkboxes.
   * @default false
   */
  labelsLeft?: boolean;

  /**
   * The maximum allowed number of checkboxes to select.
   */
  max?: number;

  /**
   * The text displayed in the tooltip when hovering over the checkboxes
   * after the maximum allowed selection has been reached.
   * Leaving it as `null` defaults to `Can only select ${max} value${s(max)}.`
   * @default null
   */
  maxReachedTooltip?: string | null;
}

export default class CheckboxGroup extends SvelteComponentTyped<
  CheckboxGroupProps,
  {
    change: CustomEvent<{
      value: string;
      checked: boolean;
      nativeEvent: Event;
    }>;
  },
  {}
> {}
