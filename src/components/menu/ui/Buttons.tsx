import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCurrency } from '../../../services/slices/currencySlice';
import { RootState } from '../../../services/store/store';


export default function ButtonsMenu() {

    const dispatch = useDispatch();

    const selected = useSelector((state: RootState) => state.currency.current);

    const handleButtonClick = (value: string) => {
        dispatch(toggleCurrency(value));
    };

    const currencies = ['RUB', 'USD', 'EUR'];

    return (
        <Box
            sx={{
                padding: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <Typography sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', alignSelf: 'flex-start' }}>
                валюта
            </Typography>
            <ButtonGroup variant='outlined' sx={{ padding: '0px', width: '100%' }}>
                {currencies.map(currency => (
                    <Button
                        key={currency}
                        sx={{ width: '100%' }}
                        onClick={() => handleButtonClick(currency)}
                        variant={selected === currency ? 'contained' : 'outlined'}
                    >
                        {currency}
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    );
}
