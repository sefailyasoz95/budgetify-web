import ThemeToggleButton from "./ThemeToggleButton";

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='flex w-full items-center justify-between lg:px-5 px-3 lg:py-2 py-1 self-center border-b-2 dark:border-b-slate-900 border-b-slate-200'>
			<div className='flex flex-col lg:flex-row lg:items-end lg:gap-x-1'>
				<span className='text-colors font-semibold lg:text-2xl text-xl tracking-wider'>Budgetify</span>
				<small className='text-colors text-xs tracking-normal font-medium'>Track Your Budget Easily</small>
			</div>
			<ThemeToggleButton />
		</div>
	);
};

export default Header;
