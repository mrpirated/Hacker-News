const Paginate = (data, rowsPerPage) => {
	var newData = [];
	var i = 0;
	var temp = [];
	data.forEach((item) => {
		temp.push(item);
		i++;
		if (i == rowsPerPage) {
			newData.push(temp);
			temp = [];
			i = 0;
		}
	});
	return newData;
};
export default Paginate;
