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
				<label className='text-colors' htmlFor='amount'>
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
				<label className='text-colors' htmlFor='description'>
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
				<label className='text-colors' htmlFor='date'>
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
		</form>
	);
};

export default Form;
