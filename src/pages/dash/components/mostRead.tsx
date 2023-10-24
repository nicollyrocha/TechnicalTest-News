import { News } from '../../../App';
import { Card } from './card';

export const MostRead = (props: {
	news: News[];
	setName: React.Dispatch<React.SetStateAction<string>>;
	name: string;
	search: String;
}) => {
	return (
		<div className='flex flex-col w-full lg:w-10/12 gap-16 items-center align-middle text-start'>
			{!props.search ? (
				<div className='w-full text-xl font-bold hidden lg:flex'>
					Mais lidas da semana
				</div>
			) : (
				''
			)}
			<div className='flex flex-col gap-7'>
				{props.news.map((item) =>
					item.title !== '[Removed]' ? (
						<div key={item.title}>
							<Card news={item} setName={props.setName} name={props.name} />
						</div>
					) : null
				)}
			</div>
		</div>
	);
};
