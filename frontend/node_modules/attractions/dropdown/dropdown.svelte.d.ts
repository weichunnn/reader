/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropdownProps {
  /**
   * Aligns the dropdown content with the right edge of the shell.
   * @default false
   */
  right?: boolean;

  /**
   * Aligns the dropdown content such that it opens to the top of the shell, extending up.
   * @default false
   */
  top?: boolean;

  /**
   * Dropdown horizontal alignment relative to the shell.
   */
  horizontalAlignment?: string;

  /**
   * Dropdown vertical alignment relative to the shell.
   */
  verticalAlignment?: string;
}

export default class Dropdown extends SvelteComponentTyped<
  DropdownProps,
  {},
  { default: {} }
> {}
