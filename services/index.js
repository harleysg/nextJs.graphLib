export function dateFormate(dateString) {
	if (dateString) {
		const date = new Date(dateString);
		const dayWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		][date.getDay()];
		const numberDay = date.getDate();
		const month = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		][date.getMonth()];
		const year = date.getFullYear();
		const ordinalBy = function (number) {
			if (number > 3 && number < 21) {
				return "th";
			}
			switch (number % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		};
		return (
			<>
				<span ae-date="dayWeek">{dayWeek}</span>,
				<span ae-date="month"> {month}</span>
				<span ae-date="numberDay">
					{" "}
					{numberDay}
					<sup ae-date="ordinal">{ordinalBy(numberDay)}</sup>
				</span>
				,<span ae-date="year"> {year}</span>
			</>
		);
	}

	return "";
}
