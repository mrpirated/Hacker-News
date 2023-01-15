import moment from "moment";

const getTime = (timeStamp) => {
	return moment.utc(timeStamp).local().startOf("seconds").fromNow();
};

export default getTime;
