import { ReactNode, useState } from "react";
import { Budget } from "../Utils/types";
import { BudgetContext } from "../Context/BudgetContext";

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [budgets, setBudgets] = useState<Budget[]>([]);

	const getBudgetList = () => {
		const budgetList = JSON.parse(localStorage.getItem("budgetList") ?? "");
		if (budgetList.length) {
			setBudgets(budgetList);
		}
	};

	const addBudget = (budget: Budget) => {
		localStorage.setItem("budgetList", JSON.stringify([...budgets, budget]));
		setBudgets((prevBudgets) => [...prevBudgets, budget]);
	};

	const updateBudget = (updatedBudget: Budget) => {
		setBudgets((prevBudgets) => {
			const updatedBudgetList = prevBudgets.map((budget) => (budget.id === updatedBudget.id ? updatedBudget : budget));
			localStorage.setItem("budgetList", JSON.stringify(updatedBudgetList));
			return updatedBudgetList;
		});
	};

	const deleteBudget = (id: string) => {
		setBudgets((prevBudgets) => {
			const filteredBudgets = prevBudgets.filter((budget) => budget.id !== id);
			localStorage.setItem("budgetList", JSON.stringify(filteredBudgets));
			return filteredBudgets;
		});
	};

	return (
		<BudgetContext.Provider value={{ budgets, addBudget, updateBudget, deleteBudget, getBudgetList }}>
			{children}
		</BudgetContext.Provider>
	);
};
