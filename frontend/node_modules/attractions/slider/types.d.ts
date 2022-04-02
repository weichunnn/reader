export declare type TickConfig = {
    mode: 'none';
} | {
    mode: 'steps';
    step: number;
    subDensity?: number;
} | {
    mode: 'values';
    values: number[];
    subDensity?: number;
};
export declare type RangeBehavior = 'free' | 'block' | 'push';
export declare type SliderState = {
    value: number;
    activeHandle: number;
    min: number;
    max: number;
    sliderActive: boolean;
};
export declare type Tooltips = 'active' | 'always' | 'never';
//# sourceMappingURL=types.d.ts.map