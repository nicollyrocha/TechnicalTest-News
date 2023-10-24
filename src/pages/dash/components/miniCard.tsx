import { useNavigate } from 'react-router-dom';
import { News } from '../../../App';
import { FormatDate } from '../formatDate';

export const MiniCard = (props: {
	news: News;
	index: number;
	setName: React.Dispatch<React.SetStateAction<string>>;
	name: string;
}) => {
	const navigate = useNavigate();
	const onClickNews = () => {
		props.setName(props.news.source.name);
		navigate(`/news/${props.news.title}`);
	};

	return (
		<div className='flex flex-col'>
			{props.index !== 0 ? (
				<div className='w-11/12 my-3 border border-solid border-grey-200' />
			) : (
				''
			)}
			<div
				onClick={() => onClickNews()}
				className='flex flex-row gap-3 cursor-pointer'
			>
				<img
					className='w-44 h-24 object-fit'
					src={props.news.urlToImage ? props.news.urlToImage : ''}
					alt='news1'
				/>
				<div className='flex flex-col w-6/12'>
					<div className='text-xs text-grey-100'>
						{FormatDate(props.news.publishedAt)}
					</div>
					<div className='w-9/12 font-bold text-[15px]'>
						{props.news.title.length > 50
							? `${props.news.title.substring(0, 50)}...`
							: props.news.title}
					</div>
				</div>
			</div>
		</div>
	);
};
