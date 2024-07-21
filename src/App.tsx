import { BudgetProvider } from "./Components/BudgetProvider";
import { ThemeProvider } from "./Components/ThemeProvider";
import Main from "./Main";

function App() {
	return (
		<ThemeProvider>
			<BudgetProvider>
				<div className='min-w-7xl min-h-screen flex items-center justify-center bg-colors '>
					<Main />
				</div>
			</BudgetProvider>
		</ThemeProvider>
	);
}

export default App;
