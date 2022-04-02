/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropdownShellProps {
  /**
   * Controls whether the dropdown content is shown or hidden.
   * @default false
   */
  open?: boolean;
}

export default class DropdownShell extends SvelteComponentTyped<
  DropdownShellProps,
  { change: CustomEvent<{ value: boolean }> },
  { default: { toggle: () => void } }
> {
  /**
   * A callback to toggle the open state of the dropdown.
   */
  toggle: () => void;
}
