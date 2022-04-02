/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionSectionControl {
  close: () => void;
  toggle: () => void;
}

export interface AccordionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {
  /**
   * Setting this to true allows multiple panels to be open at the same time.
   * @default false
   */
  multiple?: boolean;
}

export default class Accordion extends SvelteComponentTyped<
  AccordionProps,
  {},
  {
    default: {
      closeOtherPanels: (e: CustomEvent<AccordionSectionControl>) => void;
    };
  }
> {}
