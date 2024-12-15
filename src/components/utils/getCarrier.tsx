import AeroflotIcon from '/aeroflot_logo.svg';
import BritishIcon from '/britishAirways_logo.svg';
import S7Icon from '/s7_logo.svg';
import TurkishIcon from '/turkishAirlines_logo.svg';

export default function getCarrierIcon(carrier: string) {

    let result = null;

    switch (carrier) {
        case 'TK':
            result = TurkishIcon;
            break;
        case 'SU':
            result = AeroflotIcon;
            break;
        case 'S7':
            result = S7Icon;
            break;
        case 'BA':
            result = BritishIcon;
            break;
        default:
            return undefined;
    }
    return result;
}