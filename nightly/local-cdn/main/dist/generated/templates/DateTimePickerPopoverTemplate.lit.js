/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-responsive-popover" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${ifDefined(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${ifDefined(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-before-open="${ifDefined(this.onResponsivePopoverBeforeOpen)}">${this.showHeader ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-dt-picker-content ${classMap(this.classes.picker)}"><${scopeTag("ui5-calendar", tags, suffix)} class="ui5-dt-cal ${classMap(this.classes.dateTimeView)}" id="${ifDefined(this._id)}-calendar" primary-calendar-type="${ifDefined(this._primaryCalendarType)}" secondary-calendar-type="${ifDefined(this.secondaryCalendarType)}" format-pattern="${ifDefined(this._formatPattern)}" .selectionMode="${ifDefined(this._calendarSelectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" .calendarWeekNumbering="${ifDefined(this.calendarWeekNumbering)}" @ui5-selection-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-show-month-view="${ifDefined(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${ifDefined(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${ifDefined(this._calendarCurrentPicker)}">${repeat(this._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-calendar", tags, suffix)}>${!this.phone ? block4.call(this, context, tags, suffix) : undefined}${this.showTimeView ? block5.call(this, context, tags, suffix) : undefined}</div>${this.showFooter ? block6.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}> ` : html `<ui5-responsive-popover id="${ifDefined(this._id)}-responsive-popover" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${ifDefined(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${ifDefined(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-before-open="${ifDefined(this.onResponsivePopoverBeforeOpen)}">${this.showHeader ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-dt-picker-content ${classMap(this.classes.picker)}"><ui5-calendar class="ui5-dt-cal ${classMap(this.classes.dateTimeView)}" id="${ifDefined(this._id)}-calendar" primary-calendar-type="${ifDefined(this._primaryCalendarType)}" secondary-calendar-type="${ifDefined(this.secondaryCalendarType)}" format-pattern="${ifDefined(this._formatPattern)}" .selectionMode="${ifDefined(this._calendarSelectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" .calendarWeekNumbering="${ifDefined(this.calendarWeekNumbering)}" @ui5-selection-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-show-month-view="${ifDefined(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${ifDefined(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${ifDefined(this._calendarCurrentPicker)}">${repeat(this._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</ui5-calendar>${!this.phone ? block4.call(this, context, tags, suffix) : undefined}${this.showTimeView ? block5.call(this, context, tags, suffix) : undefined}</div>${this.showFooter ? block6.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover> `; }
function block1(context, tags, suffix) { return html `${this.phone ? block2.call(this, context, tags, suffix) : undefined}`; }
function block2(context, tags, suffix) { return suffix ? html `<div class="ui5-dt-picker-header"><${scopeTag("ui5-segmented-button", tags, suffix)} class="ui5-dt-picker-toggle-button"><${scopeTag("ui5-toggle-button", tags, suffix)} key="Date" ?pressed="${this.showDateView}" @click="${this._dateTimeSwitchChange}">${ifDefined(this.btnDateLabel)}</${scopeTag("ui5-toggle-button", tags, suffix)}><${scopeTag("ui5-toggle-button", tags, suffix)} key="Time" ?pressed="${this.showTimeView}" @click="${this._dateTimeSwitchChange}">${ifDefined(this.btnTimeLabel)}</${scopeTag("ui5-toggle-button", tags, suffix)}></${scopeTag("ui5-segmented-button", tags, suffix)}></div>` : html `<div class="ui5-dt-picker-header"><ui5-segmented-button class="ui5-dt-picker-toggle-button"><ui5-toggle-button key="Date" ?pressed="${this.showDateView}" @click="${this._dateTimeSwitchChange}">${ifDefined(this.btnDateLabel)}</ui5-toggle-button><ui5-toggle-button key="Time" ?pressed="${this.showTimeView}" @click="${this._dateTimeSwitchChange}">${ifDefined(this.btnTimeLabel)}</ui5-toggle-button></ui5-segmented-button></div>`; }
function block3(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-date", tags, suffix)} value="${ifDefined(item)}"></${scopeTag("ui5-date", tags, suffix)}>` : html `<ui5-date value="${ifDefined(item)}"></ui5-date>`; }
function block4(context, tags, suffix) { return html `<span class="ui5-dt-picker-separator"></span>`; }
function block5(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-time-selection-clocks", tags, suffix)} id="${ifDefined(this._id)}-time-sel" class="ui5-dt-time ${classMap(this.classes.dateTimeView)}" format-pattern="${ifDefined(this._formatPattern)}" value="${ifDefined(this._timeSelectionValue)}" @ui5-change="${ifDefined(this.onTimeSelectionChange)}" ._calendarType="${ifDefined(this._primaryCalendarType)}"></${scopeTag("ui5-time-selection-clocks", tags, suffix)}>` : html `<ui5-time-selection-clocks id="${ifDefined(this._id)}-time-sel" class="ui5-dt-time ${classMap(this.classes.dateTimeView)}" format-pattern="${ifDefined(this._formatPattern)}" value="${ifDefined(this._timeSelectionValue)}" @ui5-change="${ifDefined(this.onTimeSelectionChange)}" ._calendarType="${ifDefined(this._primaryCalendarType)}"></ui5-time-selection-clocks>`; }
function block6(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-dt-picker-footer ${classMap(this.classes.footer)}"><${scopeTag("ui5-button", tags, suffix)} id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${this._submitDisabled}" @click="${this._submitClick}">${ifDefined(this.btnOKLabel)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${this._cancelClick}">${ifDefined(this.btnCancelLabel)}</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-dt-picker-footer ${classMap(this.classes.footer)}"><ui5-button id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${this._submitDisabled}" @click="${this._submitClick}">${ifDefined(this.btnOKLabel)}</ui5-button><ui5-button id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${this._cancelClick}">${ifDefined(this.btnCancelLabel)}</ui5-button></div>`; }
export default block0;
//# sourceMappingURL=DateTimePickerPopoverTemplate.lit.js.map