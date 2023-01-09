// Question: https://leetcode.com/problems/reformat-date/

// Input: date = "20th Oct 2052"
// Output: "2052-10-20"
// Status: InProgress

let months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function getTheMonth(month: string) {
  for (const [key, value] of Object.entries(months)) {
    if (month === `${key}`) {
      return value;
    }
  }
}

function getDay(day: string) {
  let date = day.slice(0, -2);
  if (date.length === 1) {
    return `0${date}`;
  }
  return date;
}

function reformatDate(date: string): string {
  let dateSplit = date.split(" ");
  let result: string = `${dateSplit[2]}-${getTheMonth(dateSplit[1])}-${getDay(
    dateSplit[0]
  )}`;
  return result;
}

console.log(reformatDate("20th Oct 2052"));
