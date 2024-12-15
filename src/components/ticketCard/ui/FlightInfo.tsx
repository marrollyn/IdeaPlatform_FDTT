import Typography from '@mui/material/Typography';
import { getDate } from '../../utils/getDay';

interface FlightInfoProps {
    time: string;
    airport: string;
    airportName: string;
    date: string;
}

export default function FlightGenInfo({ time, airport, airportName, date }: FlightInfoProps) {
    return (
        <div>
            <Typography
                sx={{
                    color: 'text.secondary', textTransform: 'uppercase',
                    fontSize: '36px', alignSelf: 'flex-start'
                }}>
                {time}
            </Typography>
            <Typography
                sx={{
                    color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', alignSelf: 'flex-start'
                }}>
                {airport}, {airportName}
            </Typography>
            <Typography
                sx={{
                    color: 'rgb(152, 150, 150)', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', alignSelf: 'flex-start'
                }}>
                {getDate(date)}
            </Typography>
        </div>
    );
};
