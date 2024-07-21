import BudgetListing from "./Components/BudgetListing";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { motion } from "framer-motion";
import { useBudget } from "./Hooks/useBudgets";
import { useEffect, useMemo } from "react";
import AnimatedCounter from "./Components/AnimatedCounter";
const Main: React.FC = () => {
	const { items, getItemList } = useBudget();
	const currentBudget = useMemo(() => {
		return items.reduce((prev, curr) => prev + Number(curr.amount), 0);
	}, [items]);
	useEffect(() => {
		getItemList();
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
				delay: 0.5,
			}}
			className='w-11/12 h-[95vh] no-scrollbar overflow-x-hidden flex flex-col md:w-3/5 xl:md:w-2/5 rounded-xl shadow-custom bg-colors-opposite'>
			<Header />
			<div className='flex flex-col w-full items-center justify-center my-2'>
				<span className='lg:text-7xl text-5xl text-colors'>
					$
					<AnimatedCounter to={currentBudget} />
				</span>
				<span className='lg:text-3xl text-xl text-colors '>Current Budget</span>
			</div>
			<Form />
			<BudgetListing />
		</motion.div>
	);
};

export default Main;
