import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsSelector, fetchTickets, getStopsSelector } from '../../services/slices/ticketsSlice';
import { AppDispatch } from '../../services/store/store';
import TicketCard from '../ticketCard/Ticket';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Ticket } from '../../types';

export default function TicketList() {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const stops = useSelector(getStopsSelector)
    const tickets = useSelector(getTicketsSelector);

    useEffect(() => {
        const loadTickets = async () => {
            setLoading(true);
            await dispatch(fetchTickets());
            setLoading(false);
        };
        if (!tickets.length) {
            loadTickets();
        }
    }, [tickets, dispatch]);

    useEffect(() => {

    }, []);

    function filteredTickets(): Ticket[] {
        if (Array.isArray(stops) && stops.length > 0) {
            if (stops.length === 1 && stops[0] === null) {
                return tickets; 
            }
            const result = tickets.filter(ticket => stops.includes(ticket.stops));
            return result.sort((a, b) => a.stops - b.stops);
        }
        return tickets; 
    }

    const filteredByStopsTicketsList = filteredTickets();
    const filteredTicketsList = filteredByStopsTicketsList.slice().sort((a, b) => a.price - b.price);

    return (
        <Box style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px',
            width: '100%', maxWidth: '800px'
        }}>
            {loading ? (
                <Typography sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', alignSelf: 'flex-start', width: '100%' }}>
                    Загрузка...
                </Typography>
            ) : (
                filteredTicketsList.map((ticket, index) => (
                    <div key={index} style={{ width: '100%' }}>
                        <TicketCard
                            price={ticket.price}
                            stops={ticket.stops}
                            timeDept={ticket.departure_time}
                            timeArrival={ticket.arrival_time}
                            airportOrgn={ticket.origin}
                            airportOrgnName={ticket.origin_name}
                            dateOrgn={ticket.departure_date}
                            dateDest={ticket.arrival_date}
                            airportDest={ticket.destination}
                            airportDestName={ticket.destination_name}
                            icon={ticket.carrier}
                        />
                    </div>
                ))
            )}
        </Box>
    )

}