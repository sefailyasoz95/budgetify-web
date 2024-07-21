import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../Hooks/useTheme";

type Props = {};

const ThemeToggleButton = (props: Props) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<button onClick={toggleTheme} className='relative p-5 overflow-hidden'>
			<span
				className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ${
					theme === "dark" ? "translate-y-0 translate-x-0 opacity-100" : "-translate-y-14 opacity-0"
				}`}>
				<SunIcon className='lg:w-10 w-7 lg:h-10 h-7 text-yellow-500' />
			</span>
			<span
				className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ${
					theme === "light" ? "translate-y-0 translate-x-0 opacity-100" : "translate-y-14 opacity-0"
				}`}>
				<MoonIcon className='lg:w-10 w-7 lg:h-10 h-7 text-blue-700' />
			</span>
		</button>
	);
};

export default ThemeToggleButton;
