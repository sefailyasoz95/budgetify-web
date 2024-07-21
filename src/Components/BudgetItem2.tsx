import React from "react";
import { Budget } from "../Utils/types";
import { useIsPresent, motion, useMotionValue, useTransform } from "framer-motion";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/24/solid";

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
	const x = useMotionValue(0);
	const backgroundColor = useTransform(
		x,
		[-100, 0],
		["#f87171", "#ffffff"] // Tailwind's red-400 and white
	);
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
			}`}
			drag='x'
			dragConstraints={{ left: -100, right: 0 }}
			onDragEnd={(event, info) => {
				if (info.point.x < -80) {
					// onRemove(item);
				}
			}}>
			<div className='flex flex-col'>
				<span className='text-xl'>{item.description}</span>
				<span className='text-lg'>{Math.abs(item.amount)}</span>
			</div>
			<span className='min-w-fit text-xs'>{moment(item.date).fromNow()}</span>
			<div className='absolute inset-y-0 w-fit -right-14 flex items-center pl-4'>
				<TrashIcon className='w-6 h-6 text-red-600' />
			</div>
		</motion.div>
	);
};

export default BudgetItem;
