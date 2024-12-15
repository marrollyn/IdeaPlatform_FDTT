export function getDate(date: string) {

    const [day, month, year] = date.split('.');

    const fullYear = year.length === 2 ? `20${ year }` : year;

    const dateResult = new Date(Number(fullYear), Number(month) - 1, Number(day)); 
    
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const dayOfWeek = daysOfWeek[dateResult.getDay()];

    return (`${ day }.${ month }.${ fullYear }, ${ dayOfWeek }`);

}