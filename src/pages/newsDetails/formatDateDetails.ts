export const FormatDateDatails = (date: string) => {
	const day = date.substring(8, 10);
	const month = date.substring(5, 7).toString();
	const year = date.substring(0, 4);
	const hours = date.substring(11, 13);
	const min = date.substring(13, 16);
	return `${day}/${month}/${year} ${hours}h${min}`;
};
