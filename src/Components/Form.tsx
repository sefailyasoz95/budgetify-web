import { useForm } from "react-hook-form";
import { Budget } from "../Utils/types";
import { formatDate } from "../Utils/helpers";
import { useBudget } from "../Hooks/useBudgets";
type Props = {};

const Form = (props: Props) => {
	const { addItem } = useBudget();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
		setValue,
	} = useForm<Budget>({
		defaultValues: {
			amount: undefined,
			date: undefined,
			description: "",
			id: undefined,
		},
	});

	const handleOnSubmit = (data: Budget) => {
		addItem({ ...data, type: data.amount < 0 ? "expense" : "income", id: new Date().getTime().toString() });
		reset();
		setValue("date", formatDate(new Date()));
	};
	return (
		<form onSubmit={handleSubmit(handleOnSubmit)} className='flex flex-col w-full gap-y-2 mb-5 items-center'>
			<div className='input-group'>
				<label className={`${errors.amount ? "text-red-600" : "text-colors"} font-medium`} htmlFor='amount'>
					Amount
				</label>
				<input
					id='amount'
					type='number'
					placeholder='Amount'
					{...register("amount", { required: true })}
					className={`input-classes border-2 ${errors.amount ? "border-red-600 animate-shake" : "border-transparent"}`}
				/>
			</div>
			<div className='input-group'>
				<label className={`${errors.description ? "text-red-600" : "text-colors"} font-medium`} htmlFor='description'>
					Description
				</label>
				<input
					id='description'
					type='text'
					placeholder='Description'
					{...register("description", { required: true })}
					className={`input-classes border-2 ${
						errors.description ? "border-red-600 animate-shake" : "border-transparent"
					}`}
				/>
			</div>
			<div className='input-group'>
				<label className={`${errors.date ? "text-red-600" : "text-colors"} font-medium`} htmlFor='date'>
					Date
				</label>
				<input
					id='date'
					type='datetime-local'
					placeholder='Date'
					{...register("date", { required: true })}
					className={`input-classes border-2 ${errors.date ? "border-red-600 animate-shake" : "border-transparent"}`}
				/>
			</div>
			<button className='p-[3px] mt-5 relative'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg' />
				<div className='px-8 py-2 bg-slate-900 rounded-[6px] font-medium relative group transition duration-200 text-white hover:bg-transparent'>
					Save
				</div>
			</button>
		</form>
	);
};

export default Form;
