import React from "react";
import { Budget } from "../Utils/types";
import { useIsPresent, motion, useMotionValue, useTransform } from "framer-motion";
import moment from "moment";

type Props = {
	item: Budget;
};

const BudgetItem = ({ item }: Props) => {
	const isPresent = useIsPresent();
	const animations = {
		initial: { scale: 0, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0, opacity: 0 },
		transition: { type: "spring", stiffness: 900, damping: 40 },
	};

	return (
		<motion.div
			layout
			style={{ position: isPresent ? "static" : "absolute" }}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={animations.transition}
			variants={animations}
			className={`border-l-4 font-medium my-2 items-end justify-between py-1 flex flex-row px-2 w-11/12 mx-auto ${
				item.type === "expense" ? "border-l-red-600" : "border-l-green-600"
			}`}>
			<div className='flex flex-col'>
				<span className='text-xl'>{item.description}</span>
				<span className='text-lg'>{Math.abs(item.amount)}</span>
			</div>
			<span className='min-w-fit text-xs'>{moment(item.date).fromNow()}</span>
		</motion.div>
	);
};

export default BudgetItem;
