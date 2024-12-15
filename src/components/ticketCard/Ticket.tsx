import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import FlightGenInfo from './ui/FlightInfo';
import FlightStopsInfo from './ui/FlightStopsInfo';
import getCarrierIcon from '../utils/getCarrier';
import { currencyConvert } from '../utils/currencyConvert';
import { AppDispatch } from '../../services/store/store';
import { getRatesSelector, fetchCurrency, getCurrentCurrency } from '../../services/slices/currencySlice';

interface TicketCardProps {
    price: number;
    stops: number;
    timeDept: string;
    timeArrival: string;
    airportOrgn: string;
    airportOrgnName: string;
    dateOrgn: string;
    dateDest: string;
    airportDest: string;
    airportDestName: string;
    icon: string;
}

export default function TicketCard({ price, stops, timeDept, timeArrival, airportOrgn, airportOrgnName, airportDest, airportDestName, dateOrgn, dateDest, icon }: TicketCardProps) {

    const dispatch = useDispatch<AppDispatch>();

    const rates = useSelector(getRatesSelector);

    useEffect(() => {
        dispatch(fetchCurrency());
    }, [dispatch]);

    const currentCurrency = useSelector(getCurrentCurrency);

    currencyConvert({
        currency: currentCurrency,
        price: price,
        rateRUBtoEUR: rates.RUB,
        rateUSDtoEUR: rates.USD
    });


    const card = (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '250px',
                width: '100%',
                justifyContent: 'space-between',
                gap: '20px'
            }}>
                <img
                    src={getCarrierIcon(icon)}
                    alt='Plane Logo'
                    style={{
                        maxWidth: '200px',
                        width: '100%',
                        height: 'auto',
                        maxHeight: '50px',
                        objectFit: 'contain'
                    }}
                />
                <Button
                    variant='contained'
                    onClick={() => {alert('Продано! Пакуй чемоданы 😏')}}
                    sx={{ width: '100%', maxWidth: '175px', backgroundColor: '#FF5733', color: 'white', '&:hover': { backgroundColor: '#C70039' } }}
                >Купить за {currencyConvert({
                    currency: currentCurrency,
                    price: price,
                    rateRUBtoEUR: rates.RUB,
                    rateUSDtoEUR: rates.USD
                })}</Button>
            </Box>

            <Box sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '20px',
                width: '100%'
            }}>
                <div style={{ width: '100%', maxWidth: '160px', }}>
                    <FlightGenInfo
                        time={timeDept}
                        airport={airportOrgn}
                        airportName={airportOrgnName}
                        date={dateOrgn}
                    />
                </div>

                <div style={{ width: '100%', maxWidth: '160px', position: 'relative' }}>
                    <FlightStopsInfo stops={stops} />
                </div>

                <div style={{ width: '100%', maxWidth: '160px', }}>
                    <FlightGenInfo
                        time={timeArrival}
                        airport={airportDest}
                        airportName={airportDestName}
                        date={dateDest}
                    />
                </div>
            </Box>


        </React.Fragment>
    );

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '20px',
                height: '150px',
            }}
        >{card}</Card>
    );
}