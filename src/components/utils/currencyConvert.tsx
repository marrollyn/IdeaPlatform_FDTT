interface CurrencyConvertArgs {
    currency: string;
    price: number;
    rateRUBtoEUR?: number | undefined;
    rateUSDtoEUR?: number | undefined;
}

export function currencyConvert({ currency, price, rateRUBtoEUR, rateUSDtoEUR }: CurrencyConvertArgs) {

    let result = 0;

    let symbol = '';

    switch (currency) {
        case 'RUB':
            result = price;
            symbol = '₽';
            break;
        case 'EUR':
            if (rateRUBtoEUR === undefined) {
                throw new Error('rateRUBtoEUR is required for EUR conversion');
            }
            result = price / rateRUBtoEUR;
            symbol = '€';
            break;
        case 'USD':
            if (rateRUBtoEUR === undefined || rateUSDtoEUR === undefined) {
                throw new Error('Both rateRUBtoEUR and rateUSDtoEUR are required for USD conversion');
            }
            result = price / rateRUBtoEUR * rateUSDtoEUR;
            symbol = '$';
            break;
    }
    return `${Math.round(result)} ${symbol}`;
}


