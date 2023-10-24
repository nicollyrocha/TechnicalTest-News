import { useParams } from 'react-router-dom';
import { News } from '../../App';
import { FormatDateDatails } from './formatDateDetails';
import { ChangeEvent, KeyboardEvent } from 'react';
import { Header } from '../../components/header/header';

export const NewsDetails = (props: {
	news: News[];
	name: string;
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	search: string;
	onSearchByKeyPress: (ev: KeyboardEvent<HTMLDivElement>) => void;
	handleChangeSearch: (
		ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}) => {
	const param = useParams();

	const newsToShow = props.news.filter((item) => item.title === param.name);

	return (
		<div className='flex flex-col align-middle'>
			<Header
				filter={props.filter}
				setFilter={props.setFilter}
				handleChangeSearch={props.handleChangeSearch}
				onSearchByKeyPress={props.onSearchByKeyPress}
				search={props.search}
				news={props.news}
			/>
			<div className='w-10/12 flex flex-col self-center py-10 gap-4'>
				<div className='lg:text-4xl text-[20.63px] font-bold'>
					{newsToShow[0] ? newsToShow[0].title : ''}
				</div>
				<div className='text-grey-100 text-[9.48px] lg:text-xl font-medium'>
					{newsToShow[0] ? newsToShow[0].description : ''}
				</div>
				<div className='lg:text-[16px] text-[7.9px] font-bold'>
					Por
					{newsToShow[0] && newsToShow[0].author
						? ` ${newsToShow[0].author}, Raion`
						: ' Raion'}
					<div className='text-grey-100 font-normal'>
						{newsToShow[0] ? FormatDateDatails(newsToShow[0].publishedAt) : ''}
					</div>
				</div>
				<div className='w-full my-3 border border-solid border-grey-200' />
				<img
					src={
						newsToShow[0] && newsToShow[0].urlToImage ? newsToShow[0].urlToImage : ''
					}
					alt='img'
				/>
				<div className='lg:text-lg text-[9.48px] font-medium'>
					{newsToShow[0] ? newsToShow[0].content : ''}
				</div>
			</div>
		</div>
	);
};
