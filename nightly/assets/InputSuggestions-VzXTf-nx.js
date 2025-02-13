import{ae as _,af as S,ag as v,a9 as c,ah as x,aa as o,ai as V,ac as m,aj as p,ak as I,al as P,am as C,an as T,ao as b,ap as w}from"./bundle.esm-0mOkVqwc.js";var g=function(r,e,t,s){var i=arguments.length,n=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,s);else for(var a=r.length-1;a>=0;a--)(l=r[a])&&(n=(i<3?l(n):i>3?l(e,t,n):l(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n};let h=class extends v{};g([_({default:!0,invalidateOnChildChange:!0,type:HTMLElement})],h.prototype,"items",void 0);h=g([S({tag:"ui5-suggestion-item-group"})],h);h.define();function O(r,e){return c(P,{class:this.classes.popover,hideArrow:!0,preventFocusRestore:!0,preventInitialFocus:!0,placement:"Bottom",horizontalAlign:"Start",tabindex:-1,style:this.styles.suggestionsPopover,onOpen:this._afterOpenPicker,onClose:this._afterClosePicker,onScroll:this._scroll,open:this.open,opener:this,accessibleName:this._popupLabel,children:[this._isPhone&&c(x,{children:[c("div",{slot:"header",class:"ui5-responsive-popover-header",children:[c("div",{class:"row",children:[o("span",{children:this._headerTitleText}),o(m,{class:"ui5-responsive-popover-close-btn",icon:V,design:"Transparent",onClick:this._closePicker})]}),o("div",{class:"row",children:o("div",{class:"input-root-phone native-input-wrapper",children:o(p,{class:"ui5-input-inner-phone",type:this.inputType,value:this.value,showClearIcon:this.showClearIcon,placeholder:this.placeholder,onInput:this._handleInput,onChange:this._handleChange})})})]}),this.hasValueStateMessage&&c("div",{class:this.classes.popoverValueState,style:this.styles.suggestionPopoverHeader,children:[o(I,{class:"ui5-input-value-state-message-icon",name:e.call(this)}),this.open&&r.call(this)]})]}),!this._isPhone&&this.hasValueStateMessage&&c("div",{slot:"header",class:{"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header--focused":this._isValueStateFocused,...this.classes.popoverValueState},style:this.styles.suggestionPopoverHeader,children:[o(I,{class:"ui5-input-value-state-message-icon",name:e.call(this)}),this.open&&r.call(this)]}),F.call(this),this._isPhone&&o("div",{slot:"footer",class:"ui5-responsive-popover-footer",children:o(m,{design:"Transparent",onClick:this._closePicker,children:"OK"})})]})}function F(){return o(C,{separators:this.suggestionSeparators,selectionMode:"Single",onMouseDown:this.onItemMouseDown,onItemClick:this._handleSuggestionItemPress,onSelectionChange:this._handleSelectionChange,children:o("slot",{})})}class u{get template(){return O}constructor(e,t,s,i){this.component=e,this.slotName=t,this.handleFocus=i,this.highlight=s,this.selectedItemIndex=-1}onUp(e,t){e.preventDefault();const s=!this.isOpened&&this._hasValueState&&t===-1?0:t;return this._handleItemNavigation(!1,s),!0}onDown(e,t){e.preventDefault();const s=!this.isOpened&&this._hasValueState&&t===-1?0:t;return this._handleItemNavigation(!0,s),!0}onSpace(e){return this._isItemOnTarget()?(e.preventDefault(),this.onItemSelected(this._selectedItem,!0),!0):!1}onEnter(e){return this._isGroupItem?(e.preventDefault(),!1):this._isItemOnTarget()?(this.onItemSelected(this._selectedItem,!0),!0):!1}onPageUp(e){e.preventDefault();const t=this.selectedItemIndex-10>-1;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,t?this.selectedItemIndex-=10:this.selectedItemIndex=0),!0)}onPageDown(e){e.preventDefault();const t=this._getItems(),s=t.length-1,i=this.selectedItemIndex+10<=s;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,i?this.selectedItemIndex+=10:this.selectedItemIndex=s),!0)}onHome(e){return e.preventDefault(),this._hasValueState?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=0),!0)}onEnd(e){e.preventDefault();const t=this._getItems().length-1;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=t),!0)}onTab(){return this._isItemOnTarget()?(this.onItemSelected(this._selectedItem,!0),!0):!1}toggle(e,t){(e!==void 0?e:!this.isOpened())?this._getComponent().open=!0:this.close(t.preventFocusRestore)}get _selectedItem(){return this._getNonGroupItems().find(e=>e.selected)}_isScrollable(){const e=this._getScrollContainer();return e.offsetHeight<e.scrollHeight}close(e=!1){const t=this._getItems()&&this._getItems()[this.selectedItemIndex];this._getComponent().open=!1;const s=this._getPicker();s.preventFocusRestore=e,s.open=!1,t&&t.focused&&(t.focused=!1)}updateSelectedItemPosition(e){this.selectedItemIndex=e}onItemSelected(e,t){const s=e,i=this._getNonGroupItems();s&&(this.accInfo={isGroup:s.hasAttribute("ui5-suggestion-item-group"),currentPos:i.indexOf(s)+1,listSize:i.length,itemText:s.text||"",additionalText:s.additionalText},this._getComponent().onItemSelected(s,t),s.selected=!1,s.focused=!1,this._getComponent().open=!1)}onItemSelect(e){this._getComponent().onItemSelect(e)}onItemPress(e){let t;const s=e.type==="ui5-item-click";s&&!e.detail.item.selected||this._handledPress&&!s||(s&&e.detail.item.selected?(t=e.detail.item,this._handledPress=!0):t=e.detail.selectedItems[0],this.onItemSelected(t,!1))}_onClose(){this._handledPress=!1}_isItemOnTarget(){return this.isOpened()&&this.selectedItemIndex!==null&&this.selectedItemIndex!==-1&&!this._isGroupItem}get _isGroupItem(){const e=this._getItems();return!e||!e[this.selectedItemIndex]?!1:e[this.selectedItemIndex].hasAttribute("ui5-suggestion-item-group")}isOpened(){var e;return!!((e=this._getPicker())!=null&&e.open)}_handleItemNavigation(e,t){this.selectedItemIndex=t,this._getItems().length&&(e?this._selectNextItem():this._selectPreviousItem())}_selectNextItem(){const e=this._getItems().length,t=this.selectedItemIndex;if(this._hasValueState&&t===-1&&!this.component._isValueStateFocused){this._focusValueState();return}(t===-1&&!this._hasValueState||this.component._isValueStateFocused)&&(this._clearValueStateFocus(),this.selectedItemIndex=-1),!(t!==-1&&t+1>e-1)&&this._moveItemSelection(t,++this.selectedItemIndex)}_selectPreviousItem(){const e=this._getItems(),t=this.selectedItemIndex;if(this._hasValueState&&t===0&&!this.component._isValueStateFocused){this.component.hasSuggestionItemSelected=!1,this.component._isValueStateFocused=!0,this.selectedItemIndex=0,e[0].focused=!1,e[0].hasAttribute("ui5-suggestion-item")&&(e[0].selected=!1);return}if(this.component._isValueStateFocused){this.component.focused=!0,this.component._isValueStateFocused=!1,this.selectedItemIndex=0;return}if(!(t===-1||t===null)){if(t-1<0){(e[t].hasAttribute("ui5-suggestion-item")||e[t].hasAttribute("ui5-suggestion-item-custom"))&&(e[t].selected=!1),e[t].focused=!1,this.component.focused=!0,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex-=1;return}this._moveItemSelection(t,--this.selectedItemIndex)}}_moveItemSelection(e,t){const s=this._getItems(),i=s[t],n=s[e],l=this._getNonGroupItems(),a=i.hasAttribute("ui5-suggestion-item-group");if(!i)return;this.component.focused=!1,this._clearValueStateFocus();const d=this._getItems()[this.selectedItemIndex];if(this.accInfo={isGroup:a,currentPos:s.indexOf(i)+1,itemText:(a?d.headerText:d.text)||""},(i.hasAttribute("ui5-suggestion-item")||i.hasAttribute("ui5-suggestion-item-custom"))&&(this.accInfo.additionalText=i.additionalText||"",this.accInfo.currentPos=l.indexOf(i)+1,this.accInfo.listSize=l.length),n&&(n.focused=!1),(n!=null&&n.hasAttribute("ui5-suggestion-item")||n!=null&&n.hasAttribute("ui5-suggestion-item-custom"))&&(n.selected=!1),i&&(i.focused=!0,a||(i.selected=!0),this.handleFocus&&i.focus()),this.component.hasSuggestionItemSelected=!0,this.onItemSelect(i),!this._isItemIntoView(i)){const f=this._isGroupItem?i.shadowRoot.querySelector("[ui5-li-group-header]"):i;this._scrollItemIntoView(f)}}_deselectItems(){this._getItems().forEach(t=>{t.hasAttribute("ui5-suggestion-item")&&(t.selected=!1),t.focused=!1})}_clearItemFocus(){const e=this._getItems().find(t=>t.focused);e&&(e.focused=!1)}_isItemIntoView(e){const t=e.getDomRef().getBoundingClientRect(),s=this._getComponent().getDomRef().getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight;let n=0;return this._hasValueState&&(n=this._getPicker().querySelector("[slot=header]").getBoundingClientRect().height),t.top+u.SCROLL_STEP<=i&&t.top>=s.top+n}_scrollItemIntoView(e){e.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}_getScrollContainer(){return this._scrollContainer||(this._scrollContainer=this._getPicker().shadowRoot.querySelector(".ui5-popup-content")),this._scrollContainer}_getItems(){return this._getComponent().getSlottedNodes("suggestionItems").flatMap(t=>t.hasAttribute("ui5-suggestion-item-group")?[t,...t.items]:[t])}_getNonGroupItems(){return this._getItems().filter(e=>!e.hasAttribute("ui5-suggestion-item-group"))}_getComponent(){return this.component}_getList(){return this._getPicker().querySelector("[ui5-list]")}_getListWidth(){var e;return(e=this._getList())==null?void 0:e.offsetWidth}_getPicker(){return this._getComponent().shadowRoot.querySelector("[ui5-responsive-popover]")}get itemSelectionAnnounce(){if(!this.accInfo)return"";if(this.accInfo.isGroup)return`${u.i18nBundle.getText(T)} ${this.accInfo.itemText}`;const e=u.i18nBundle.getText(b,this.accInfo.currentPos||0,this.accInfo.listSize||0);return`${this.accInfo.additionalText} ${e}`}hightlightInput(e,t){return w(e,t)}get _hasValueState(){return this.component.hasValueStateMessage}_focusValueState(){this.component._isValueStateFocused=!0,this.component.focused=!1,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex=0,this.component.value=this.component.typedInValue,this._deselectItems()}_clearValueStateFocus(){this.component._isValueStateFocused=!1}_clearSelectedSuggestionAndaccInfo(){this.accInfo=void 0,this.selectedItemIndex=0}}u.SCROLL_STEP=60;p.SuggestionsClass=u;export{u as default};
