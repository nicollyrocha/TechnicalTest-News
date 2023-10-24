import { ChangeEvent, KeyboardEvent } from 'react';
import { News } from '../../App';
import arrow from './arrow-left.svg';
import { SearchBar } from './components/searchBar';
import searchIconWhite from './search white.svg';
import { Filters } from './components/filters';
import { useNavigate } from 'react-router-dom';

export const Header = (props: {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	handleChangeSearch: (
		ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onSearchByKeyPress: (ev: KeyboardEvent<HTMLDivElement>) => void;
	search: string;
	news: News[];
	openSearch?: boolean;
	setOpenSearch?: React.Dispatch<React.SetStateAction<boolean>>;
	setSearch?: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col'>
			<div
				className={`bg-purple-300 h-[112px] justify-items-center items-center ${
					window.location.pathname !== '/'
						? 'flex flex-row justify-around'
						: 'grid grid-cols-3 justify-between'
				} w-full`}
			>
				{window.location.pathname !== '/' ? <></> : <div></div>}
				{window.location.pathname !== '/' ? (
					<div className='flex gap-5'>
						<div
							onClick={() => navigate(-1)}
							className='rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center'
						>
							<img src={arrow} alt='arrow' />
						</div>
						<div
							className={`${
								window.location.pathname !== '/' ? 'lg:flex hidden' : 'hidden lg:flex'
							} text-white text-[26.05px] font-bold font-montaguSlab`}
						>
							Raion News
						</div>
					</div>
				) : (
					<></>
				)}
				{props.openSearch && props.openSearch === true ? (
					<></>
				) : (
					<div
						className={`text-white text-[26.05px] font-bold font-montaguSlab self-center justify-self-center ${
							window.location.pathname !== '/' ? 'flex' : 'flex lg:hidden'
						}`}
					>
						Geral
					</div>
				)}
				{window.location.pathname === '/' ? (
					<div className='text-white hidden lg:flex text-[26.05px] font-bold font-montaguSlab self-center justify-self-center'>
						Raion News
					</div>
				) : (
					<></>
				)}
				<div className='flex justify-end'>
					<SearchBar
						search={props.search}
						handleChangeSearch={props.handleChangeSearch}
						onSearchByKeyPress={props.onSearchByKeyPress}
						openSearch={props.openSearch}
						setOpenSearch={props.setOpenSearch}
						setSearch={props.setSearch}
					/>
					{(props.openSearch && props.openSearch === true) ||
					window.location.pathname !== '/' ? (
						<></>
					) : (
						<img
							onClick={() => (props.setOpenSearch ? props.setOpenSearch(true) : {})}
							className='lg:hidden flex'
							src={searchIconWhite}
							alt='search-icon-white'
						/>
					)}
				</div>
			</div>
			<Filters filter={props.filter} setFilter={props.setFilter} />
		</div>
	);
};
