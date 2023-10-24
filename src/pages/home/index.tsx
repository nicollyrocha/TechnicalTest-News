import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { News } from '../../App';
import { Dash } from '../dash';
import { Header } from '../../components/header/header';

export const Home = (props: {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	mostPopular: News[];
	news: News[];
	setName: React.Dispatch<React.SetStateAction<string>>;
	name: string;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	onSearchByKeyPress: (ev: KeyboardEvent<HTMLDivElement>) => void;
	handleChangeSearch: (
		ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}) => {
	const [openSearch, setOpenSearch] = useState(false);
	return (
		<div
			className={`bg-grey-000 lg:bg-white flex flex-col gap-7 align-baseline w-full`}
		>
			<Header
				filter={props.filter}
				setFilter={props.setFilter}
				handleChangeSearch={props.handleChangeSearch}
				onSearchByKeyPress={props.onSearchByKeyPress}
				search={props.search}
				news={props.news}
				openSearch={openSearch}
				setOpenSearch={setOpenSearch}
				setSearch={props.setSearch}
			/>
			<Dash
				mostPopular={props.mostPopular}
				news={props.news}
				setName={props.setName}
				name={props.name}
				filter={props.filter}
				search={props.search}
			/>
		</div>
	);
};
