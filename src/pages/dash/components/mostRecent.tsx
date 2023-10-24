import { News } from '../../../App';
import React from 'react';
import { MiniCard } from './miniCard';
import { useNavigate } from 'react-router-dom';

export const MostRecent = (props: {
	news: News[];
	setName: React.Dispatch<React.SetStateAction<string>>;
	name: string;
	filter: string;
}) => {
	const navigate = useNavigate();
	const newsAvailable = props.news.filter(
		(item) => item.title !== '[Removed]' && item.urlToImage
	);
	const newsToShow = newsAvailable.slice(1, 5);

	const onClickNews = () => {
		props.setName(newsAvailable[0].source.name);
		navigate(`/news/${newsAvailable[0].title}`);
	};

	return (
		<div className='lg:flex lg:flex-row gap-10 xxl:w-full w-10/12 hidden'>
			<div onClick={() => onClickNews()} className='relative cursor-pointer'>
				<div className='absolute bottom-10 left-0 text-white font-bold text-3xl px-9'>
					{newsToShow[0] ? newsToShow[0].title : ''}
				</div>
				<div className='absolute bottom-5 left-[87%] text-white text-sm px-5'>
					Hoje
				</div>
				<img
					className='w-[780px] h-[465px] object-fit'
					src={
						newsToShow[0] && newsToShow[0].urlToImage ? newsToShow[0].urlToImage : ''
					}
					alt='news'
				/>
			</div>
			<div className='relative w-4/12'>
				{newsToShow
					? newsToShow.map((item, index, arr) => (
							<div key={item.title}>
								<MiniCard
									news={item}
									index={index}
									setName={props.setName}
									name={props.name}
								/>
							</div>
					  ))
					: ''}
			</div>
		</div>
	);
};
