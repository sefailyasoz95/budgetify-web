import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='flex w-full items-center justify-between px-5 py-2 self-center border-b-2 dark:border-b-slate-900 border-b-slate-300'>
			<div className='flex flex-col lg:flex-row lg:items-end lg:gap-x-1'>
				<span className='dark:text-slate-900 text-slate-300 font-semibold text-2xl tracking-wider'>Budgetify</span>
				<small className='dark:text-slate-700 text-slate-400 text-xs tracking-normal font-medium'>
					Track Your Budget Easily
				</small>
			</div>
			<ThemeToggleButton />
		</div>
	);
};

export default Header;
