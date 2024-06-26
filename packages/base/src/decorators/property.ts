import type UI5Element from "../UI5Element.js";
import type { Property } from "../UI5ElementMetadata.js";

/**
 * Returns a property decorator.
 *
 * @param { Property } propData
 * @returns { PropertyDecorator }
 */
const property = (propData?: Property): PropertyDecorator => {
	return (target: any, propertyKey: string | symbol) => {
		const ctor = target.constructor as typeof UI5Element;

		if (!Object.prototype.hasOwnProperty.call(ctor, "metadata")) {
			ctor.metadata = {};
		}

		const metadata = ctor.metadata;
		if (!metadata.properties) {
			metadata.properties = {};
		}

		const propsMetadata = metadata.properties;
		if (!propsMetadata[propertyKey as string]) {
			propsMetadata[propertyKey as string] = propData ?? {};
		}
	};
};

export default property;
