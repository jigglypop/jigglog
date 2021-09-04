export default function getDateToString(date: Date) {
  const new_date = `${new Date(date).getFullYear()}/
   ${Number(new Date(date).getMonth()) + 1}/
   ${new Date(date).getDate()} 
   ${new Date(date).getHours()}:
   ${new Date(date).getMinutes()}`;
  return new_date;
}
