/**
 * An action that sets the position styles of the slider's handle depending on the slider value.
 * @param {HTMLElement} node The handle element
 * @param {{active: boolean, vertical: boolean, value: number}} props
 */
export function handleStyle(node: HTMLElement, props: {
    active: boolean;
    vertical: boolean;
    value: number;
}): {
    update: ({ vertical, value, active }: {
        active: boolean;
        vertical: boolean;
        value: number;
    }) => void;
};
/**
 * Converts the current value range to styles on the range element
 * @param {HTMLElement} node The range element
 * @param {{value: [number] | [number, number], vertical: boolean, min: number, max: number}} props
 */
export function rangeStyle(node: HTMLElement, props: {
    value: [number] | [number, number];
    vertical: boolean;
    min: number;
    max: number;
}): {
    update: ({ value, vertical }: {
        value: [number] | [number, number];
        vertical: boolean;
    }) => void;
};
//# sourceMappingURL=actions.d.ts.map