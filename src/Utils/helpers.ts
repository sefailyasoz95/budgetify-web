export const formatDate = (date: Date) => {
	const pad = (n: number) => (n < 10 ? "0" + n : n);
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1); // Months are zero-based
	const day = pad(date.getDate());
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());

	return `${year}-${month}-${day}T${hours}:${minutes}`;
};
