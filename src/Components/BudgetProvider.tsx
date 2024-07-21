import { ReactNode, useState } from "react";
import { Budget } from "../Utils/types";
import { BudgetContext } from "../Context/BudgetContext";

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [items, setItems] = useState<Budget[]>([]);

	const addItem = (item: Budget) => {
		localStorage.setItem("itemList", JSON.stringify([...items, item]));
		setItems((prevItems) => [...prevItems, item]);
	};

	const updateItem = (updatedItem: Budget) => {
		setItems((prevItems) => {
			const updatedItemList = prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item));
			localStorage.setItem("itemList", JSON.stringify(updatedItemList));
			return updatedItemList;
		});
	};

	const deleteItem = (id: string) => {
		setItems((prevItems) => {
			const filteredItems = prevItems.filter((item) => item.id !== id);
			localStorage.setItem("itemList", JSON.stringify(filteredItems));
			return filteredItems;
		});
	};

	const getItemList = () => {
		const itemList = JSON.parse(localStorage.getItem("itemList") ?? "");
		if (itemList.length) {
			setItems(itemList);
		}
	};

	return (
		<BudgetContext.Provider value={{ items, addItem, updateItem, deleteItem, getItemList }}>
			{children}
		</BudgetContext.Provider>
	);
};
