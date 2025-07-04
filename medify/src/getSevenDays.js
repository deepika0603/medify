const getNext7DatesFromToday = () => {
    const today = new Date();
    const dates = [];
  
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate.toDateString());
    }
  
    return dates;
  };
  
  // console.log(getNext7DatesFromToday());
  
  export default getNext7DatesFromToday;