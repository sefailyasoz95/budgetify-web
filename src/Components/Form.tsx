import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Budget } from "../Utils/types";
import moment from "moment";
import { formatDate } from "../Utils/helpers";
type Props = {};

const Form = (props: Props) => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<Budget>({
		defaultValues: {
			amount: 0,
			date: formatDate(new Date()),
			description: "",
			id: new Date().getTime().toString(),
		},
	});

	const handleOnSubmit = (data: FieldValues) => {};
	return (
		<form onSubmit={handleSubmit(handleOnSubmit)} className='flex flex-col w-full gap-y-2 items-center'>
			<div className='input-group'>
				<label className={`${errors.amount ? "text-red-600" : "text-colors"} font-medium`} htmlFor='amount'>
					Amount
				</label>
				<input
					id='amount'
					type='number'
					placeholder='Amount'
					{...register("amount", { required: true })}
					className={`input-classes ${errors.amount ? "border-red-600 animate-shake" : "border-transparent"}`}
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
					className={`input-classes ${errors.description ? "border-red-600 animate-shake" : "border-transparent"}`}
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
					className={`input-classes ${errors.date ? "border-red-600 animate-shake" : "border-transparent"}`}
				/>
			</div>
			<button className='p-[3px] relative'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg' />
				<div className='px-8 py-2 bg-slate-900 rounded-[6px] font-medium relative group transition duration-200 text-white hover:bg-transparent'>
					Save
				</div>
			</button>
		</form>
	);
};

export default Form;
