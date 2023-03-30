//Рандомный id
function getRandomId(){
    return +(1+Math.random()*(1e6-1)).toFixed();
}
//День недели
function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
} 
//конвертация даты
function convertDate(date){
    return date.toLocaleString("default", { year: "numeric" })+'-'+date.toLocaleString("default", { month: "2-digit" })+'-'+date.toLocaleString("default", { day: "2-digit" });
}

