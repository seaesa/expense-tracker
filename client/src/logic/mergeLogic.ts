export type ObjectProps = {
	month?: string;
	buyed?: number;
	limit?: number;
};
export type ChartProps = {
	visitors?: number;
	E;
	browser?: string;
	fill?: string;
};
export type WrapObjectProps = {
	[key: string]: ObjectProps | ChartProps;
};
export const mergeObject = <T extends WrapObjectProps>(firstObject: T, secondObject: T) => {
	return Object.keys(firstObject).reduce((previousValue, currentValue) => {
		previousValue[currentValue] = {
			...firstObject[currentValue],
			...secondObject[currentValue],
		};
		return previousValue;
	}, {} as WrapObjectProps);
};
export const convertObjectToArray = <T extends WrapObjectProps>(object: T) => {
	return Object.keys(object).map((key) => ({ ...object[key] }));
};
