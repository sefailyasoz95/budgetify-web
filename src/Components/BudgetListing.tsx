import { useIsPresent, motion, AnimatePresence } from "framer-motion";
import { useBudget } from "../Hooks/useBudgets";
import BudgetItem from "./BudgetItem";

type Props = {};

const BudgetListing = (props: Props) => {
	const { items } = useBudget();

	return (
		<AnimatePresence>
			{items.map((item, index) => (
				<BudgetItem item={item} key={index} />
			))}
		</AnimatePresence>
	);
};

export default BudgetListing;
