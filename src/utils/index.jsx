import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

const customFetch = axios.create({
  baseURL: productionUrl,
});

const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

// const formatPrice = (price) => {
//   const dollarsAmount = new Intl.NumberFormat('se-SE', {
//     style: 'currency',
//     currency: 'SEK',
//   }).format((price / 100).toFixed(2));
//   return dollarsAmount;
// };

const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {' '}
        {amount}{' '}
      </option>
    );
  });
};

export { customFetch, formatPrice, generateAmountOptions };
