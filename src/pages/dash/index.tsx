import { News } from '../../App';
import { MostRead } from './components/mostRead';
import { MostRecent } from './components/mostRecent';

export const Dash = (props: {
	mostPopular: News[];
	news: News[];
	setName: React.Dispatch<React.SetStateAction<string>>;
	name: string;
	filter: string;
	search: string;
}) => {
	return (
		<div className='grid grid-cols-1 gap-5 justify-items-center pb-10'>
			{!props.search ? (
				<>
					<MostRecent
						filter={props.filter}
						news={props.news}
						setName={props.setName}
						name={props.name}
					/>
					<div className='hidden lg:flex w-10/12 my-3 border border-solid border-grey-200' />
				</>
			) : (
				''
			)}
			<MostRead
				news={props.mostPopular}
				setName={props.setName}
				name={props.name}
				search={props.search}
			/>
		</div>
	);
};
