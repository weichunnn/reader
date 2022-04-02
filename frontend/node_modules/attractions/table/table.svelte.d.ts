/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Header {
  text: string;
  value: string;
  align?: "start" | "center" | "end";
}

export interface Item {
  [value: string]: string | number;
}

export interface TableProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["table"]> {
  /**
   * The labels for the column headers.
   *
   * Each column header is an object with the following fields:
   * - `text` is the text to display;
   * - `value` is the name of the field to take from each object in `items` to put in this column;
   * - `align` is the alignment of the text in the column (`"start" | "center" | "end"`) and defaults to `"start"`.
   * @default []
   */
  headers?: Array<Header>;

  /**
   * The actual data displayed in the table rows.
   * The keys of the objects have to belong to the `value`s of the headers.
   * @default []
   */
  items?: Array<Item>;

  /**
   * Whether the table rows should have alternating background colors.
   * @default true
   */
  alternatingRows?: boolean;
}

export default class Table extends SvelteComponentTyped<
  TableProps,
  {},
  {
    ["header-item"]: { header: any };
    item: { header: Header; item: Item };
    row: { item: Item };
  }
> {}
