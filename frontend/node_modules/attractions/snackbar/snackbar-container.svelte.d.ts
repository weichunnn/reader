/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type SnackbarPositions = typeof import("./snackbar-positions").default;

export interface SnackbarContainerProps {
  /**
   * The position of the snackbar stack inside the container.
   */
  position?: SnackbarPositions[keyof SnackbarPositions];
}

export default class SnackbarContainer extends SvelteComponentTyped<
  SnackbarContainerProps,
  {},
  {
    default: {
      showSnackbar: <Props extends Record<string, any>>(options: {
        component: import("svelte").SvelteComponentTyped<Props>;
        props: Props;
        duration: number;
      }) => {
        close: () => void;
        expired: Promise<boolean>;
      };
    };
  }
> {
  /**
   * Show the snackbar with the given options
   */
  showSnackbar: <Props extends Record<string, any>>(options: {
    component: import("svelte").SvelteComponentTyped<Props>;
    props: Props;
    duration: number;
  }) => {
    close: () => void;
    expired: Promise<boolean>;
  };
}
