import book from './book-open.svg';

export const Filters = (props: {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const arrayFilters = [
		{ name: 'Negócios', color: 'text-red-000', nameInEnglish: 'business' },
		{
			name: 'Entretenimento',
			color: 'text-yellow-000',
			nameInEnglish: 'entertainment',
		},
		{ name: 'Saúde', color: 'text-purple-200', nameInEnglish: 'health' },
		{ name: 'Geral', color: 'text-blue-000', nameInEnglish: 'general' },
		{ name: 'Ciência', color: 'text-blue-100', nameInEnglish: 'science' },
		{ name: 'Esportes', color: 'text-green-000', nameInEnglish: 'sports' },
		{ name: 'Tecnologia', color: 'text-purple-100', nameInEnglish: 'technology' },
	];

	return (
		<div
			className={`h-[116px] w-full lg:h-[46px] lg:bg-grey-000 ${
				window.location.pathname === '/' ? 'bg-white' : 'bg-grey-000'
			} flex flex-col lg:flex-row justify-center items-center gap-3`}
		>
			<div className='flex gap-4 items-center self-center'>
				<img src={book} alt='book' />
				<div className='lg:text-[15px] text-[12px] text-grey-100 font-bold'>
					Selecione um filtro:
				</div>
			</div>
			<div className='lg:flex lg:gap-7 grid grid-cols-4 items-center justify-items-center gap-y-2 lg:gap-y-0'>
				{arrayFilters.map((item, index, array) => (
					<div
						className={`flex items-center ${
							index === 4 || index === 5 || index === 6 ? 'pl-24 lg:pl-0' : ''
						} lg:gap-x-10`}
						key={item.name}
					>
						{item.name !== 'Negócios' ? (
							<div className='px-2 lg:px-0 text-grey-100 text-[9.91px]'>|</div>
						) : (
							''
						)}
						<div
							onClick={() => props.setFilter(item.nameInEnglish)}
							className={`${item.color} ${
								index === 4 || index === 5 || index === 6 ? 'mx-5 lg:mx-0' : ''
							} cursor-pointer text-[11.9px] lg:text-[15px] mx-5 lg:mx-0`}
						>
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
