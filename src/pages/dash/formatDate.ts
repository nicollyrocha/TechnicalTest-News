export const FormatDate = (date: string) => {
	const months = [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	];
	const day = date.substring(8, 10);
	const month = date.substring(5, 7).toString();
	const monthString = months[Number(month)];
	const year = date.substring(0, 4);
	return `${monthString} ${day}, ${year}`;
};
