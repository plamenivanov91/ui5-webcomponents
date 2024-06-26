class DatePickerTestPage {
	constructor() {
		this.page = 'test/pages/DatePicker_test_page.html';
	}

	set id(id) {
		this._sut = id;
	}

	async getRoot() {
		return $(this._sut);
	}

	set page(url) {
		this._url = url;
	}

	async getPopover() {
		return browser.$(this._sut).shadow$("ui5-responsive-popover");
	}

	async getPopoverContent() {
		return browser.$(this._sut).shadow$("ui5-responsive-popover").shadow$("ui5-popover").shadow$(".ui5-popup-root");
	}

	async getCalendar() {
		const popover = await this.getPopover();
		return popover.$("ui5-calendar");
	}

	async getInput() {
		return browser.$(this._sut).shadow$("ui5-input");
	}

	async getInputPopover() {
		return browser.$(this._sut).shadow$("ui5-input").shadow$("ui5-popover");
	}

	async getInnerInput() {
		return browser.$(this._sut).shadow$("ui5-input").shadow$("input");
	}

	async hasIcon() {
		return browser.executeAsync(function(id, done) {
			done(!!document.querySelector(id).shadowRoot.querySelector("ui5-icon"));
		}, this._sut);
	}

	async getValueHelpIcon() {
		return browser.$(this._sut).shadow$("ui5-icon");
	}

	async getBtnPrev() {

		return browser.$(this._sut).shadow$("ui5-calendar").shadow$(`.ui5-calheader`).shadow$(`div[data-ui5-cal-header-btn-prev]`);
	}

	async getBtnNext() {

		return browser.$(this._sut).shadow$("ui5-calendar").shadow$(`.ui5-calheader`).shadow$(`div[data-ui5-cal-header-btn-next]`);
	}

	async getBtnYear() {

		return browser.$(this._sut).shadow$("ui5-calendar").shadow$(`.ui5-calheader`).shadow$(`div[data-ui5-cal-header-btn-year]`);
	}

	async getBtnMonth() {

		return browser.$(this._sut).shadow$("ui5-calendar").shadow$(`.ui5-calheader`).shadow$(`div[data-ui5-cal-header-btn-month]`);
	}

	async getDayPicker() {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`);
	}

	async getPickerDate(timestamp) {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`).shadow$(`div[data-sap-timestamp="${timestamp}"]`);
	}

	async getPickerMonth(timestamp) {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-monthpicker`).shadow$(`div[data-sap-timestamp="${timestamp}"]`);
	}

	async getPickerYear(timestamp) {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-yearpicker`).shadow$(`div[data-sap-timestamp="${timestamp}"]`);
	}

	async getFirstDisplayedDate() {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`).shadow$(`div.ui5-dp-item`);
	}

	async getFirstDisplayedYear() {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-yearpicker`).shadow$(`div.ui5-yp-item`);
	}

	async getDisplayedYear(index) {

		const items = await browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-yearpicker`).shadow$(`.ui5-yp-root`)
			.$$(".ui5-yp-item");

		return items[index];
	}

	async getDisplayedMonth(index) {

		const items = await browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-monthpicker`).shadow$(`.ui5-mp-root`)
			.$$(".ui5-mp-item");

		return items[index];
	}

	async getDisplayedDay(index) {

		const items = await browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`).shadow$(`.ui5-dp-root`).$(".ui5-dp-content").$$(".ui5-dp-item");

		return items[index];
	}

	async getDayPickerContent() {

		return browser.$(this._sut).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`).shadow$(`.ui5-dp-root`).$$(".ui5-dp-content > div");
	}

	async getDayPickerDayNames() {
		const dayNames = Array.from(await this.getDayPickerContent());
		return dayNames[0].$$("div");
	}

	async getDayPickerDatesRow(index) {
		const data = Array.from(await this.getDayPickerContent());
		return data[index].$$("div");
	}

	async getDayPickerNumbers() {
		return Array.from(await this.getDayPickerContent());
	}

	async isValid(value) {
		return browser.executeAsync((id, value, done) => {
			done(document.querySelector(id).isValid(value));
		}, this._sut, value);
	}

	async isPickerOpen() {
		return browser.executeAsync((id, done) => {
			done(document.querySelector(id).open);
		}, this._sut);
	}

	async openPicker() {
		return browser.executeAsync((id, done) => {
			done(document.querySelector(id).open = true);
		}, this._sut);
	}

	async closePicker() {
		return browser.executeAsync((id, done) => {
			done(document.querySelector(id).open = false);
		}, this._sut);
	}

	async open() {
		await browser.url(this._url);
	}
}

export default new DatePickerTestPage();
