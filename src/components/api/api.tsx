import { TicketsResponse } from '../../types';

export const getTicketsApi = (): Promise<TicketsResponse> => {
    return fetch('/mocks/ticketsData.json', {
    }).then((res) => {
        if (!res.ok) {
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
        return res.json();
    });
    
};

export const getCurrencyApi = async () => {
    return fetch('/mocks/currencyRates.json', {
    }).then((res) => {
        if (!res.ok) {
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
        return res.json();
    });
}

// ограниченное количество запросов
// export const getCurrencyApi = async () => {
//     const url = 'http://data.fixer.io/api/latest?access_key=4ade2bd7a2d2f5c0e56e3188384a34f6';
//     const options = {
//         method: 'GET',
//     };

//     try {
//         const response = await fetch(url, options);

//         if (!response.ok) {
//             throw new Error(`Ошибка: ${response.status}`);
//         }

//         const result = await response.json(); 
//         return result; 

//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//         throw error; 
//     }
// };
