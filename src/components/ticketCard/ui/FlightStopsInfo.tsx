import Typography from '@mui/material/Typography';
import PlaneIcon from '/plane_ticket.svg';
import getStops from '../../utils/getStops';

interface FlightStopsProps {
    stops: number;
}

export default function FlightStopsInfo({ stops }: FlightStopsProps) {

    return (
        <div style={{ position: 'relative' }}>
            <Typography
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    alignSelf: 'flex-start',
                    color: 'rgb(152, 150, 150)',
                    borderBottom: '1px solid rgb(152, 150, 150)', paddingBottom: '6px',
                    width: '79%'
                }}>
                {getStops(stops)}
            </Typography>
            <img
                src={PlaneIcon}
                alt='Plane Logo'
                style={{
                    position: 'absolute',
                    right: 0,
                    transform: 'translateY(-50%)',
                    maxWidth: '25px',
                    height: 'auto',
                    objectFit: 'contain'
                }}
            />
        </div>
    )
}