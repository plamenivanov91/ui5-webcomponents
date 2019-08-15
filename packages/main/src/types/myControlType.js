import DataType from "@ui5/webcomponents-base/dist/types/DataType.js";

const myControlTypes = {

	Positive: "Positive",

	Negative: "Negative",
};

class myControlType extends DataType {
	static isValid(value) {
		return !!myControlTypes[value];
	}
}

myControlType.generataTypeAcessors(myControlTypes);

export default myControlType;
