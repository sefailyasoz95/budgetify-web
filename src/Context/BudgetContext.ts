import { createContext } from "react";
import { BudgetContextType } from "../Utils/types";

export const BudgetContext = createContext<BudgetContextType | undefined>(undefined);
