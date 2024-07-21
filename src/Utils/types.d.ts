export type Theme = "light" | "dark";
export interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

export interface Budget {
	id: string;
	description: string;
	amount: number;
	date: Date;
}

export interface BudgetContextType {
	budgets: Budget[];
	addBudget: (budget: Budget) => void;
	updateBudget: (budget: Budget) => void;
	deleteBudget: (id: string) => void;
	getBudgetList: () => void;
}
