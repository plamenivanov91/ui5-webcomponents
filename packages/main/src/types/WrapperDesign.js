import DataType from "@ui5/webcomponents-base/dist/types/DataType.js";

/**
 * Different types of Button.
 */
const ButtonTypes = {

	/**
	 * accept type (green button)
	 */
	Positive: "Positive",

	/**
	 * reject style (red button)
	 */
	Negative: "Negative",
};

class WrapperDesign extends DataType {
	static isValid(value) {
		return !!ButtonTypes[value];
	}
}

WrapperDesign.generataTypeAcessors(ButtonTypes);

export default WrapperDesign;
