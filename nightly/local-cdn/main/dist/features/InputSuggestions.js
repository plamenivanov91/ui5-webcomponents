import { ComponentFeature, registerComponentFeature } from "@ui5/webcomponents-base/dist/FeaturesRegistry.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import generateHighlightedMarkup from "@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js";
import List from "../List.js";
import SuggestionItem from "../SuggestionItem.js";
import Button from "../Button.js";
import Icon from "../Icon.js";
import { LIST_ITEM_POSITION, LIST_ITEM_GROUP_HEADER, } from "../generated/i18n/i18n-defaults.js";
import SuggestionItemGroup from "../SuggestionItemGroup.js";
/**
 * A class to manage the `Input` suggestion items.
 * @class
 * @private
 */
class Suggestions extends ComponentFeature {
    constructor(component, slotName, highlight, handleFocus) {
        super();
        // The component, that the suggestion would plug into.
        this.component = component;
        // Defines the items` slot name.
        this.slotName = slotName;
        // Defines, if the focus will be moved via the arrow keys.
        this.handleFocus = handleFocus;
        // Defines, if the suggestions should highlight.
        this.highlight = highlight;
        // An integer value to store the currently selected item position,
        // that changes due to user interaction.
        this.selectedItemIndex = -1;
    }
    onUp(e) {
        e.preventDefault();
        this._handleItemNavigation(false /* forward */);
        return true;
    }
    onDown(e) {
        e.preventDefault();
        this._handleItemNavigation(true /* forward */);
        return true;
    }
    onSpace(e) {
        if (this._isItemOnTarget()) {
            e.preventDefault();
            this.onItemSelected(this._selectedItem, true /* keyboardUsed */);
            return true;
        }
        return false;
    }
    onEnter(e) {
        if (this._isGroupItem) {
            e.preventDefault();
            return false;
        }
        if (this._isItemOnTarget()) {
            this.onItemSelected(this._selectedItem, true /* keyboardUsed */);
            return true;
        }
        return false;
    }
    onPageUp(e) {
        e.preventDefault();
        const isItemIndexValid = this.selectedItemIndex - 10 > -1;
        if (this._hasValueState && !isItemIndexValid) {
            this._focusValueState();
            return true;
        }
        this._moveItemSelection(this.selectedItemIndex, isItemIndexValid ? this.selectedItemIndex -= 10 : this.selectedItemIndex = 0);
        return true;
    }
    onPageDown(e) {
        e.preventDefault();
        const items = this._getItems();
        const lastItemIndex = items.length - 1;
        const isItemIndexValid = this.selectedItemIndex + 10 <= lastItemIndex;
        if (this._hasValueState && !items) {
            this._focusValueState();
            return true;
        }
        this._moveItemSelection(this.selectedItemIndex, isItemIndexValid ? this.selectedItemIndex += 10 : this.selectedItemIndex = lastItemIndex);
        return true;
    }
    onHome(e) {
        e.preventDefault();
        if (this._hasValueState) {
            this._focusValueState();
            return true;
        }
        this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = 0);
        return true;
    }
    onEnd(e) {
        e.preventDefault();
        const lastItemIndex = this._getItems().length - 1;
        if (this._hasValueState && !lastItemIndex) {
            this._focusValueState();
            return true;
        }
        this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = lastItemIndex);
        return true;
    }
    onTab() {
        if (this._isItemOnTarget()) {
            this.onItemSelected(this._selectedItem, true);
            return true;
        }
        return false;
    }
    toggle(bToggle, options) {
        const toggle = bToggle !== undefined ? bToggle : !this.isOpened();
        if (toggle) {
            this._getComponent().open = true;
        }
        else {
            this.close(options.preventFocusRestore);
        }
    }
    get _selectedItem() {
        return this._getNonGroupItems().find(item => item.selected);
    }
    _isScrollable() {
        const sc = this._getScrollContainer();
        return sc.offsetHeight < sc.scrollHeight;
    }
    close(preventFocusRestore = false) {
        const selectedItem = this._getItems() && this._getItems()[this.selectedItemIndex];
        this._getComponent().open = false;
        const picker = this._getPicker();
        picker.preventFocusRestore = preventFocusRestore;
        picker.open = false;
        if (selectedItem && selectedItem.focused) {
            selectedItem.focused = false;
        }
    }
    updateSelectedItemPosition(pos) {
        this.selectedItemIndex = pos;
    }
    onItemSelected(selectedItem, keyboardUsed) {
        const item = selectedItem;
        const nonGroupItems = this._getNonGroupItems();
        if (!item) {
            return;
        }
        this.accInfo = {
            isGroup: item.hasAttribute("ui5-suggestion-item-group"),
            currentPos: nonGroupItems.indexOf(item) + 1,
            listSize: nonGroupItems.length,
            itemText: item.text || "",
            additionalText: item.additionalText,
        };
        this._getComponent().onItemSelected(item, keyboardUsed);
        item.selected = false;
        item.focused = false;
        this._getComponent().open = false;
    }
    onItemSelect(item) {
        this._getComponent().onItemSelect(item);
    }
    /* Private methods */
    // Note: Split into two separate handlers
    onItemPress(e) {
        let pressedItem; // SuggestionListItem
        const isPressEvent = e.type === "ui5-item-click";
        // Only use the press e if the item is already selected, in all other cases we are listening for 'ui5-selection-change' from the list
        // Also we have to check if the selection-change is fired by the list's 'item-click' event handling, to avoid double handling on our side
        if ((isPressEvent && !e.detail.item.selected) || (this._handledPress && !isPressEvent)) {
            return;
        }
        if (isPressEvent && e.detail.item.selected) {
            pressedItem = e.detail.item;
            this._handledPress = true;
        }
        else {
            pressedItem = e.detail.selectedItems[0];
        }
        this.onItemSelected(pressedItem, false /* keyboardUsed */);
    }
    _onOpen() {
        this._applyFocus();
    }
    _onClose() {
        this._handledPress = false;
    }
    _applyFocus() {
        if (this.selectedItemIndex) {
            this._getItems()[this.selectedItemIndex]?.focus();
        }
    }
    _isItemOnTarget() {
        return this.isOpened() && this.selectedItemIndex !== null && this.selectedItemIndex !== -1 && !this._isGroupItem;
    }
    get _isGroupItem() {
        const items = this._getItems();
        if (!items || !items[this.selectedItemIndex]) {
            return false;
        }
        return items[this.selectedItemIndex].hasAttribute("ui5-suggestion-item-group");
    }
    isOpened() {
        return !!(this._getPicker()?.open);
    }
    _handleItemNavigation(forward) {
        if (!this._getItems().length) {
            return;
        }
        if (forward) {
            this._selectNextItem();
        }
        else {
            this._selectPreviousItem();
        }
    }
    _selectNextItem() {
        const itemsCount = this._getItems().length;
        const previousSelectedIdx = this.selectedItemIndex;
        if (this._hasValueState && previousSelectedIdx === -1 && !this.component._isValueStateFocused) {
            this._focusValueState();
            return;
        }
        if ((previousSelectedIdx === -1 && !this._hasValueState) || this.component._isValueStateFocused) {
            this._clearValueStateFocus();
            this.selectedItemIndex = -1;
        }
        if (previousSelectedIdx !== -1 && previousSelectedIdx + 1 > itemsCount - 1) {
            return;
        }
        this._moveItemSelection(previousSelectedIdx, ++this.selectedItemIndex);
    }
    _selectPreviousItem() {
        const items = this._getItems();
        const previousSelectedIdx = this.selectedItemIndex;
        if (this._hasValueState && previousSelectedIdx === 0 && !this.component._isValueStateFocused) {
            this.component.hasSuggestionItemSelected = false;
            this.component._isValueStateFocused = true;
            this.selectedItemIndex = 0;
            items[0].focused = false;
            if (items[0].hasAttribute("ui5-suggestion-item")) {
                items[0].selected = false;
            }
            return;
        }
        if (this.component._isValueStateFocused) {
            this.component.focused = true;
            this.component._isValueStateFocused = false;
            this.selectedItemIndex = 0;
            return;
        }
        if (previousSelectedIdx === -1 || previousSelectedIdx === null) {
            return;
        }
        if (previousSelectedIdx - 1 < 0) {
            if (items[previousSelectedIdx].hasAttribute("ui5-suggestion-item") || items[previousSelectedIdx].hasAttribute("ui5-suggestion-item-custom")) {
                items[previousSelectedIdx].selected = false;
            }
            items[previousSelectedIdx].focused = false;
            this.component.focused = true;
            this.component.hasSuggestionItemSelected = false;
            this.selectedItemIndex -= 1;
            return;
        }
        this._moveItemSelection(previousSelectedIdx, --this.selectedItemIndex);
    }
    _moveItemSelection(previousIdx, nextIdx) {
        const items = this._getItems();
        const currentItem = items[nextIdx];
        const previousItem = items[previousIdx];
        const nonGroupItems = this._getNonGroupItems();
        const isGroupItem = currentItem.hasAttribute("ui5-suggestion-item-group");
        if (!currentItem) {
            return;
        }
        this.component.focused = false;
        this._clearValueStateFocus();
        const selectedItem = this._getItems()[this.selectedItemIndex];
        this.accInfo = {
            isGroup: isGroupItem,
            currentPos: items.indexOf(currentItem) + 1,
            itemText: (isGroupItem ? selectedItem.headerText : selectedItem.text) || "",
        };
        if (currentItem.hasAttribute("ui5-suggestion-item") || currentItem.hasAttribute("ui5-suggestion-item-custom")) {
            this.accInfo.additionalText = currentItem.additionalText || "";
            this.accInfo.currentPos = nonGroupItems.indexOf(currentItem) + 1;
            this.accInfo.listSize = nonGroupItems.length;
        }
        if (previousItem) {
            previousItem.focused = false;
        }
        if (previousItem?.hasAttribute("ui5-suggestion-item") || previousItem?.hasAttribute("ui5-suggestion-item-custom")) {
            previousItem.selected = false;
        }
        if (currentItem) {
            currentItem.focused = true;
            if (!isGroupItem) {
                currentItem.selected = true;
            }
            if (this.handleFocus) {
                currentItem.focus();
            }
        }
        this.component.hasSuggestionItemSelected = true;
        this.onItemSelect(currentItem);
        if (!this._isItemIntoView(currentItem)) {
            const itemRef = this._isGroupItem ? currentItem.shadowRoot.querySelector("[ui5-li-group-header]") : currentItem;
            this._scrollItemIntoView(itemRef);
        }
    }
    _deselectItems() {
        const items = this._getItems();
        items.forEach(item => {
            if (item.hasAttribute("ui5-suggestion-item")) {
                item.selected = false;
            }
            item.focused = false;
        });
    }
    _clearItemFocus() {
        const focusedItem = this._getItems().find(item => item.focused);
        if (focusedItem) {
            focusedItem.focused = false;
        }
    }
    _isItemIntoView(item) {
        const rectItem = item.getDomRef().getBoundingClientRect();
        const rectInput = this._getComponent().getDomRef().getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (rectItem.top + Suggestions.SCROLL_STEP <= windowHeight) && (rectItem.top >= rectInput.top);
    }
    _scrollItemIntoView(item) {
        item.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "nearest",
        });
    }
    _getScrollContainer() {
        if (!this._scrollContainer) {
            this._scrollContainer = this._getPicker().shadowRoot.querySelector(".ui5-popup-content");
        }
        return this._scrollContainer;
    }
    /**
     * Returns the items in 1D array.
     *
     */
    _getItems() {
        const suggestionComponent = this._getComponent();
        return suggestionComponent.getSlottedNodes("suggestionItems").flatMap(item => {
            return item.hasAttribute("ui5-suggestion-item-group") ? [item, ...item.items] : [item];
        });
    }
    _getNonGroupItems() {
        return this._getItems().filter(item => !item.hasAttribute("ui5-suggestion-item-group"));
    }
    _getComponent() {
        return this.component;
    }
    _getList() {
        return this._getPicker().querySelector("[ui5-list]");
    }
    _getListWidth() {
        return this._getList()?.offsetWidth;
    }
    _getPicker() {
        return this._getComponent().shadowRoot.querySelector("[ui5-responsive-popover]");
    }
    get itemSelectionAnnounce() {
        if (!this.accInfo) {
            return "";
        }
        if (this.accInfo.isGroup) {
            return `${Suggestions.i18nBundle.getText(LIST_ITEM_GROUP_HEADER)} ${this.accInfo.itemText}`;
        }
        const itemPositionText = Suggestions.i18nBundle.getText(LIST_ITEM_POSITION, this.accInfo.currentPos || 0, this.accInfo.listSize || 0);
        return `${this.accInfo.additionalText} ${itemPositionText}`;
    }
    hightlightInput(text, input) {
        return generateHighlightedMarkup(text, input);
    }
    get _hasValueState() {
        return this.component.hasValueStateMessage;
    }
    _focusValueState() {
        this.component._isValueStateFocused = true;
        this.component.focused = false;
        this.component.hasSuggestionItemSelected = false;
        this.selectedItemIndex = 0;
        this.component.value = this.component.typedInValue;
        this._deselectItems();
    }
    _clearValueStateFocus() {
        this.component._isValueStateFocused = false;
    }
    _clearSelectedSuggestionAndaccInfo() {
        this.accInfo = undefined;
        this.selectedItemIndex = 0;
    }
    static get dependencies() {
        return [
            SuggestionItem,
            SuggestionItemGroup,
            List,
            Button,
            Icon,
        ];
    }
    static async define() {
        Suggestions.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
}
Suggestions.SCROLL_STEP = 60;
// Add suggestions support to the global features registry so that Input.js can use it
registerComponentFeature("InputSuggestions", Suggestions);
export default Suggestions;
//# sourceMappingURL=InputSuggestions.js.map