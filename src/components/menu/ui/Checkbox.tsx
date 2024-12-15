import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStop, selectOnlyStop, getStopsSelector } from '../../../services/slices/ticketsSlice';

export default function CheckboxMenu() {
    const dispatch = useDispatch();
    const stops = useSelector(getStopsSelector);

    const options = [
        { label: 'Все', value: null },
        { label: 'Без пересадок', value: 0 },
        { label: '1 пересадка', value: 1 },
        { label: '2 пересадки', value: 2 },
        { label: '3 пересадки', value: 3 }
    ];

    const handleCheckboxChange = (value: number | null) => {
        dispatch(toggleStop(value));
    };

    const handleOnlyButtonClick = (value: number | null) => {
        dispatch(selectOnlyStop(value));
    };

    return (
        <FormGroup>
            <Typography sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', alignSelf: 'flex-start' }}>
                количество пересадок
            </Typography>
            {options.map((option, index) => (
                <div key={index}
                    className='hover-effect'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '8px',
                        justifyContent: 'space-between',
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox
                            checked={stops.includes(option.value)}
                            onChange={() => handleCheckboxChange(option.value)}
                        />}
                        label={option.label} />
                    <Button
                        onClick={() => handleOnlyButtonClick(option.value)}
                        size='small'
                        sx={{ textDecoration: 'uppercase' }}>
                        только
                    </Button>
                </div>
            ))}
        </FormGroup>
    );
}
