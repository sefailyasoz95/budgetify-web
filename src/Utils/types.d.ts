export type Theme = "light" | "dark";
export interface ThemeContextType {
	theme?: Theme;
	toggleTheme: () => void;
}

export interface Budget {
	id: string;
	description: string;
	amount: number;
	date: string;
}

export interface BudgetContextType {
	items: Budget[];
	addItem: (budget: Budget) => void;
	updateItem: (budget: Budget) => void;
	deleteItem: (id: string) => void;
	getItemList: () => void;
}
