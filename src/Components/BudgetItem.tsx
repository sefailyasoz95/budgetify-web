import { Budget } from "../Utils/types";
import { motion, usePresence } from "framer-motion";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useBudget } from "../Hooks/useBudgets";

type Props = {
	item: Budget;
};

const BudgetItem = ({ item }: Props) => {
	const { deleteItem } = useBudget();
	const [isPresent, safeToRemove] = usePresence();
	const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };
	const animations = {
		layout: true,
		initial: "out",
		style: {},
		animate: isPresent ? "in" : "out",
		whileTap: "tapped",
		variants: {
			in: { scaleY: 1, opacity: 1 },
			out: { scaleY: 0, opacity: 0, zIndex: -1 },
			tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
		transition,
	};
	const handleDelete = () => deleteItem(item.id);
	return (
		<motion.div
			{...animations}
			className={`border-l-8 border rounded-lg budget-item font-medium my-5 justify-between py-1 flex flex-row px-2 w-11/12 mx-auto ${
				item.type === "expense" ? "border-l-red-600 border-red-600" : "border-l-green-600 border-green-600"
			} ${isPresent ? "static" : "absolute"}`}>
			<div className='flex flex-col relative'>
				<span className='text-xl text-colors'>{item.description}</span>
				<span className='text-lg text-colors'>${Math.abs(item.amount)}</span>
			</div>
			<div className='flex flex-col items-end justify-between'>
				<TrashIcon
					className='w-6 h-6 text-red-600 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'
					onClick={handleDelete}
				/>
				<div />
				<span className='min-w-fit text-colors text-xs'>{moment(item.date).fromNow()}</span>
			</div>
		</motion.div>
	);
};

export default BudgetItem;
