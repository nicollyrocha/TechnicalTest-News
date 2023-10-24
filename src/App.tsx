import './App.css';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { NewsDetails } from './pages/newsDetails';
import { getMostPopular } from './services/getMostPopular';
import { getMostRecent } from './services/getMostRecent';

export type News = {
	author: string | null;
	content: string;
	description: string | null;
	publishedAt: string;
	source: {
		id: string;
		name: string;
	};
	title: string;
	url: string;
	urlToImage: string | null;
	category: string;
};

function App() {
	const [filter, setFilter] = useState('');
	const [news, setNews] = useState<News[]>([]);
	const [mostPopular, setMostPopular] = useState<News[]>([]);
	const [name, setName] = useState('');
	const [search, setSearch] = useState('');

	const onSearchByKeyPress = (ev: KeyboardEvent<HTMLDivElement>) => {
		if ([13].includes(ev.charCode || ev.which) && search.length > 0)
			setSearch(search);
	};

	const handleChangeSearch = (
		ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSearch(ev.target.value);
	};

	const filteredNews = news.filter((item) =>
		item.title.toLowerCase().includes(search.toLowerCase())
	);

	const filteredMostPopular = mostPopular.filter((item) =>
		item.title.toLowerCase().includes(search.toLowerCase())
	);

	useEffect(() => {
		getMostPopular({ filter: filter, setMostPopular: setMostPopular });
	}, [filter]);

	useEffect(() => {
		getMostRecent({ filter: filter, setNews: setNews });
	}, [filter]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							filter={filter}
							mostPopular={filteredMostPopular}
							news={filteredNews}
							setFilter={setFilter}
							setName={setName}
							name={name}
							onSearchByKeyPress={onSearchByKeyPress}
							handleChangeSearch={handleChangeSearch}
							search={search}
							setSearch={setSearch}
						/>
					}
				/>
				<Route
					path='/news/:name'
					element={
						<NewsDetails
							news={news}
							name={name}
							filter={filter}
							setFilter={setFilter}
							onSearchByKeyPress={onSearchByKeyPress}
							handleChangeSearch={handleChangeSearch}
							search={search}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
