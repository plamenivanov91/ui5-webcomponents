declare const _default: {
    selectedItem: {
        control: {
            type: boolean;
        };
    };
    default: {
        control: {
            type: string;
        };
    };
    "selection-change": {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                description: string;
            }[];
        };
    };
};
export default _default;
export declare const componentInfo: {
    package: string;
    since: string;
};
export type StoryArgsSlots = {
    default: string;
};