export default {
    "default": {
        "control": {
            "type": "text"
        }
    },
    "close": {
        "description": "Closes the Menu.",
        "table": {
            "category": "methods"
        }
    },
    "showAt": {
        "description": "Shows the Menu near the opener element.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "opener",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "the element that the popover is shown at"
                }
            ]
        }
    },
    "before-close": {
        "description": "Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "escPressed",
                    "type": "boolean",
                    "description": "Indicates that <code>ESC</code> key has triggered the event."
                }
            ]
        }
    },
    "item-click": {
        "description": "Fired when an item is being clicked.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "object",
                    "description": "The currently clicked menu item."
                },
                {
                    "name": "text",
                    "type": "string",
                    "description": "The text of the currently clicked menu item."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.3.0"
};
//# sourceMappingURL=argTypes.js.map