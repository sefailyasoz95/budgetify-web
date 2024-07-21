import Form from "./Components/Form";
import Header from "./Components/Header";
import { motion } from "framer-motion";
const Main: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
				delay: 0.5,
			}}
			className='w-11/12 min-h-[95vh] flex flex-col md:w-3/5 xl:md:w-2/5 rounded-lg shadow-gray-700 dark:shadow-gray-500 shadow-lg bg-colors-opposite'>
			<Header />
			<div className='flex flex-col w-full items-center justify-center my-2'>
				<span className='lg:text-7xl text-5xl text-colors'>$100.00</span>
				<span className='lg:text-3xl text-xl text-colors '>Current Budget</span>
			</div>
			<Form />
		</motion.div>
	);
};

export default Main;
