import { News } from '../App';
import api from './api';

export const getMostPopular = (props: {
	filter: string;
	setMostPopular: (value: React.SetStateAction<News[]>) => void;
}) => {
	try {
		api
			.get(
				`/top-headlines?${
					props.filter ? `category=${props.filter}&` : ''
				}country=us&sortBy=popularity&apiKey=9e86e971dca140efbe266096d372c74b`
			)
			.then((response) => props.setMostPopular(response.data.articles))
			.catch((err) => {
				console.error('ops! ocorreu um erro' + err);
			});
	} catch (error) {
		console.log(error);
	}
};
