import { useIsPresent, motion, AnimatePresence } from "framer-motion";
import { useBudget } from "../Hooks/useBudgets";
import BudgetItem from "./BudgetItem";

type Props = {};

const BudgetListing = (props: Props) => {
	const { items } = useBudget();

	return (
		<div className='overflow-y-scroll no-scrollbar'>
			<AnimatePresence>
				{items.length > 0 ? (
					items.map((item, index) => <BudgetItem item={item} key={index} />)
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
							delay: 1,
						}}
						className='text-xl font-medium text-center mt-10'>
						You haven't add any items yet!
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default BudgetListing;
