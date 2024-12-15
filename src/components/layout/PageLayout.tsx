import MenuCard from '../menu/MenuCard';
import TicketList from '../ticketList/TicketList';
import Box from '@mui/material/Box';

export default function PageLayout () {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            width: '100%'}}>
            <MenuCard/>
            <TicketList/>
        </Box>
    )
}