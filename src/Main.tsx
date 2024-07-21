import Header from "./Components/Header";
import { useTheme } from "./Hooks/useTheme";

type Props = {};

const Main = (props: Props) => {
	const { toggleTheme } = useTheme();
	return (
		<div className='w-11/12 min-h-[90vh] flex flex-col md:w-3/5 xl:md:w-2/5 rounded-lg shadow-gray-700 dark:shadow-gray-500 shadow-lg dark:bg-slate-300 bg-slate-900'>
			<Header />
		</div>
	);
};

export default Main;
