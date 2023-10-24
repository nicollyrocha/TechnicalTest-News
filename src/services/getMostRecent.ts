import { News } from '../App';
import api from './api';

export const getMostRecent = (props: {
	filter: string;
	setNews: (value: React.SetStateAction<News[]>) => void;
}) => {
	try {
		api
			.get(
				`/top-headlines?${
					props.filter ? `category=${props.filter}&` : ''
				}country=us&sortBy=publishedAt&apiKey=fab2071ecb9d4455afc38f5c6039086c`
			)
			.then((response) => props.setNews(response.data.articles))
			.catch((err) => {
				console.error('ops! ocorreu um erro' + err);
			});
	} catch (error) {
		console.log(error);
	}
};
