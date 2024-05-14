export default {
    "selectionMode": {
        "control": "select",
        "options": [
            "None",
            "Single",
            "SingleStart",
            "SingleEnd",
            "SingleAuto",
            "Multiple",
            "Delete"
        ]
    },
    "separators": {
        "control": "select",
        "options": [
            "All",
            "Inner",
            "None"
        ]
    },
    "growing": {
        "control": "select",
        "options": [
            "Button",
            "Scroll",
            "None"
        ]
    },
    "accessibleRole": {
        "control": "select",
        "options": [
            "List",
            "Menu",
            "Tree",
            "ListBox"
        ]
    },
    "listItems": {
        "control": {
            "type": false
        }
    },
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<ListItemBase | ListItemGroup>"
            }
        }
    },
    "header": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<HTMLElement>"
            }
        }
    },
    "item-click": {
        "description": "Fired when an item is activated, unless the item's `type` property\nis set to `Inactive`.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "The clicked item."
                }
            ]
        }
    },
    "item-close": {
        "description": "Fired when the `Close` button of any item is clicked\n\n**Note:** This event is only applicable to list items that can be closed (such as notification list items),\nnot to be confused with `item-delete`.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the item about to be closed."
                }
            ]
        }
    },
    "item-toggle": {
        "description": "Fired when the `Toggle` button of any item is clicked.\n\n**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the toggled item."
                }
            ]
        }
    },
    "item-delete": {
        "description": "Fired when the Delete button of any item is pressed.\n\n**Note:** A Delete button is displayed on each item,\nwhen the component `selectionMode` property is set to `Delete`.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the deleted item."
                }
            ]
        }
    },
    "selection-change": {
        "description": "Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "Array<ListItemBase>",
                        "references": [
                            {
                                "name": "ListItemBase",
                                "package": "@ui5/webcomponents",
                                "module": "dist/ListItemBase.js"
                            }
                        ]
                    },
                    "name": "selectedItems",
                    "_ui5privacy": "public",
                    "description": "An array of the selected items."
                },
                {
                    "type": {
                        "text": "Array<ListItemBase>",
                        "references": [
                            {
                                "name": "ListItemBase",
                                "package": "@ui5/webcomponents",
                                "module": "dist/ListItemBase.js"
                            }
                        ]
                    },
                    "name": "previouslySelectedItems",
                    "_ui5privacy": "public",
                    "description": "An array of the previously selected items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "tagName": "ui5-list"
};
//# sourceMappingURL=argTypes.js.map