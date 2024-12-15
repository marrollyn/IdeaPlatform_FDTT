export default function getStops(stops: number) {
    let result = '';
    switch (stops) {
        case 0:
            result = 'без пересадок';
            break;
        case 1:
            result = '1 пересадка';
            break;
        case 2:
            result = '2 пересадки';
            break;
        case 3:
            result = '3 пересадки';
            break;
    }
    return result;
}