import { ChangeEvent, KeyboardEvent } from 'react';
import searchIcon from '../search.svg';
import closeIcon from './close.svg';

export const SearchBar = (props: {
	handleChangeSearch: (
		ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onSearchByKeyPress: (ev: KeyboardEvent<HTMLDivElement>) => void;
	search: string;
	setSearch?: React.Dispatch<React.SetStateAction<string>>;
	openSearch?: boolean;
	setOpenSearch?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const onClickClose = () => {
		if (props.setOpenSearch && props.setSearch) {
			props.setOpenSearch(false);
			props.setSearch('');
		} else {
		}
	};

	return (
		<div
			className={`bg-purple-400 rounded-2xl h-[38px] w-[230px] ${
				props.openSearch && props.openSearch === true ? 'flex' : 'hidden'
			} lg:flex items-center justify-around`}
		>
			<input
				value={props.search}
				onChange={props.handleChangeSearch}
				onKeyDown={props.onSearchByKeyPress}
				className='bg-purple-400 border-none shadow-none outline-none text-white'
			/>
			{props.openSearch && props.openSearch === true ? (
				<img
					onClick={() => onClickClose()}
					className='w-7 cursor-pointer'
					src={closeIcon}
					alt='close'
				/>
			) : (
				<img src={searchIcon} alt='search-icon' />
			)}
		</div>
	);
};
