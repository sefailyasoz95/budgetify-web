import { BudgetProvider } from "./Components/BudgetProvider";
import { ThemeProvider } from "./Components/ThemeProvider";
import Main from "./Main";

function App() {
	return (
		<ThemeProvider>
			<BudgetProvider>
				<div className='min-w-7xl min-h-screen flex items-center justify-center dark:bg-slate-900 bg-slate-300 dark:text-white'>
					<Main />
				</div>
			</BudgetProvider>
		</ThemeProvider>
	);
}

export default App;
