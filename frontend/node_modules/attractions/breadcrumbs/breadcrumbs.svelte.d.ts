/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BreadcrumbsProps {
  /**
   * The list of segments to be displayed.
   * @default []
   */
  items?: Array<{ href?: string; text: string }>;

  /**
   * The separator between segments.
   * @default '/'
   */
  separator?: string;
}

export default class Breadcrumbs extends SvelteComponentTyped<
  BreadcrumbsProps,
  {},
  { item: { item: any }; separator: {} }
> {}
