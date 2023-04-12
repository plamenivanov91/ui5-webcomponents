export default {
    "filterItems": {
        "control": {
            "type": "text"
        }
    },
    "sortItems": {
        "control": {
            "type": "text"
        }
    },
    "setConfirmedSettings": {
        "description": "Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called \"before-open\", this can be used as trigger point. The object should have the following format: <code> {sortOrder: \"Ascending\", sortBy: \"Name\", filters: [{\"Filter 1\": [\"Some filter 1\", \"Some filter 2\"]}, {\"Filter 2\": [\"Some filter 4\"]}]} </code>",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "settings",
                    "type": "Object",
                    "optional": false,
                    "parameterProperties": {
                        "sortOrder": {
                            "name": "sortOrder",
                            "type": "string",
                            "optional": false,
                            "description": "sort order"
                        },
                        "sortBy": {
                            "name": "sortBy",
                            "type": "string",
                            "optional": false,
                            "description": "sort by"
                        },
                        "filters": {
                            "name": "filters",
                            "type": "Object[]",
                            "optional": false,
                            "description": "filters"
                        }
                    },
                    "description": "predefined settings."
                }
            ]
        }
    },
    "show": {
        "description": "Shows the dialog.",
        "table": {
            "category": "methods"
        }
    },
    "cancel": {
        "description": "Fired when cancel button is activated.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "sortOrder",
                    "type": "String",
                    "description": "The current sort order selected."
                },
                {
                    "name": "sortBy",
                    "type": "String",
                    "description": "The currently selected <code>ui5-sort-item</code> text attribute."
                },
                {
                    "name": "sortByItem",
                    "type": "HTMLElement",
                    "description": "The currently selected <code>ui5-sort-item</code>."
                },
                {
                    "name": "sortDescending",
                    "type": "Boolean",
                    "description": "The selected sort order (true = descending, false = ascending)."
                },
                {
                    "name": "filterItems",
                    "type": "Array",
                    "description": "The selected filters items."
                }
            ]
        }
    },
    "confirm": {
        "description": "Fired when confirmation button is activated.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "sortOrder",
                    "type": "String",
                    "description": "The current sort order selected."
                },
                {
                    "name": "sortBy",
                    "type": "String",
                    "description": "The currently selected <code>ui5-sort-item</code> text attribute."
                },
                {
                    "name": "sortByItem",
                    "type": "HTMLElement",
                    "description": "The currently selected <code>ui5-sort-item</code>."
                },
                {
                    "name": "sortDescending",
                    "type": "Boolean",
                    "description": "The selected sort order (true = descending, false = ascending)."
                },
                {
                    "name": "filterItems",
                    "type": "Array",
                    "description": "The selected filters items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.16"
};
//# sourceMappingURL=argTypes.js.map