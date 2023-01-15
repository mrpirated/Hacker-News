import moment from "moment";

const getTimeStamp = (query) => {
	switch (query) {
		case "Last 24h": {
			return moment().subtract(24, "h").format("X");
		}
		case "Past Week": {
			return moment().subtract(7, "d").format("X");
		}
		case "Past Year": {
			return moment().subtract(1, "y").format("X");
		}
		case "Past Month": {
			return moment().subtract(1, "m").format("X");
		}
		default: {
			moment().format("X");
		}
	}
	// return moment.utc(timeStamp).local().startOf("seconds").fromNow();
};

export default getTimeStamp;
