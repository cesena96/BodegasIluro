import wine1 from '../assets/pricing/wine1.avif';
import wine2 from '../assets/pricing/wine2.jpg';
import wine3 from '../assets/pricing/wine3.avif';
import wine4 from '../assets/pricing/wine4.avif';
import wine5 from '../assets/pricing/wine5.jpg';
import wine6 from '../assets/pricing/wine6.avif';
import wine7 from '../assets/pricing/wine7.avif';
import wine8 from '../assets/pricing/wine8.jpg';

export const WINE_TYPES = ['red', 'white', 'rose', 'sparkling'];

export const WINES = [
    { id: 1, name: 'Iluro Negre', type: 'red', region: 'Alella', year: 2019, price: 38, image: wine1 },
    { id: 2, name: 'Cepa Vella', type: 'red', region: 'Priorat', year: 2016, price: 95, image: wine2 },
    { id: 3, name: 'Laietana Reserva', type: 'red', region: 'Penedès', year: 2018, price: 32, image: wine3 },
    { id: 4, name: 'Pansa Blanca', type: 'white', region: 'Alella', year: 2021, price: 29.5, image: wine4 },
    { id: 5, name: 'Mar de Vinya', type: 'white', region: 'Penedès', year: 2020, price: 34, image: wine5 },
    { id: 6, name: "Rosa d'Ànfora", type: 'rose', region: 'Alella', year: 2022, price: 27, image: wine6 },
    { id: 7, name: 'Brut Iluro Gran Reserva', type: 'sparkling', region: 'Cava', year: 2017, price: 36, image: wine7 },
    { id: 8, name: 'Brut Nature Gran Reserva', type: 'sparkling', region: 'Cava', year: 2014, price: 64, image: wine8 },
];