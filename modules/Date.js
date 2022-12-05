const createDate = (DateTime) => {
  const dateContainer = document.querySelector('#current-date');
  const date = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
  dateContainer.innerHTML = date;
};
export default createDate;