import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
};

const ShimmerButton = ({ text, ...props }: Props) => {
	return (
		<button
			{...props}
			className={`
			inline-flex h-12 animate-shimmer items-center justify-center rounded-md border px-6 font-medium transition-colors focus:outline-none
			dark:hover:border-slate-800 dark:border-slate-600 dark:bg-[linear-gradient(110deg,#000103d5,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  dark:text-slate-200 dark:hover:text-slate-400
			hover:border-slate-800 border-slate-400 bg-[linear-gradient(110deg,#fff,45%,#dedede,55%,#fff)] text-slate-900 hover:text-slate-700
			`}>
			{text}
		</button>
	);
};

export default ShimmerButton;
