import { useNavigate } from 'react-router-dom';
import { News } from '../../../App';
import { FormatDate } from '../formatDate';

export const Card = (props: {
	news: News;
	setName: React.Dispatch<React.SetStateAction<string>>;
	name: string;
}) => {
	const navigate = useNavigate();
	const onClickNews = () => {
		props.setName(props.news.source.name);
		navigate(`/news/${props.news.title}`);
	};

	return (
		<div
			onClick={() => onClickNews()}
			className={`shadow-md flex w-full flex-col lg:flex-row cursor-pointer bg-white ${
				window.location.pathname === '/' ? 'lg:bg-white' : 'lg:bg-grey-000'
			} py-3 lg:py-0`}
		>
			<div className='flex flex-col justify-between lg:my-10 mx-4 self-stretch'>
				<div className='font-normal lg:hidden flex text-grey-100 text-[15.55px] lg:text-xl'>
					{FormatDate(props.news.publishedAt)}
				</div>
				<div className='text-[23.32px] lg:text-3xl font-bold'>
					{props.news.title}
				</div>
				<div className='hidden lg:flex font-normal text-grey-100 text-[15.55px] lg:text-xl'>
					{FormatDate(props.news.publishedAt)}
				</div>
			</div>
			<div className='flex align-middle lg:mx-4 lg:h-[300px] py-4 lg:my-4 justify-items-start'>
				<img
					className='lg:w-[460px] w-[362.13px] ml-4 lg:ml-0 h-[290px] object-fill flex align-middle'
					src={props.news.urlToImage ? props.news.urlToImage : ''}
					alt='news'
				/>
			</div>
		</div>
	);
};
