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
				}country=us&sortBy=popularity&apiKey=fab2071ecb9d4455afc38f5c6039086c`
			)
			.then((response) => props.setMostPopular(response.data.articles))
			.catch((err) => {
				console.error('ops! ocorreu um erro' + err);
			});
	} catch (error) {
		console.log(error);
	}
};
