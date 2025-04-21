export const formatDateToYYYYMMDD = (date) => {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
	const dd = String(date.getDate()).padStart(2, "0");

	return `${yyyy}-${mm}-${dd}`;
};

export const formatDateToMMDD = (date) => {
	const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
	const dd = String(date.getDate()).padStart(2, "0");

	return `${mm}-${dd}`;
};

export const formatHour = (hour) => {
	if (hour < 10) {
		return `0${hour}:00`;
	}
	return `${hour}:00`;
};
