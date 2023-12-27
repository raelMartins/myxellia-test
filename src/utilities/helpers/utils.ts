import { alphabet } from './placeholder_data';

export const generateColor = () => {
  const options = ['letter', 'number'];
  let color = `#`;
  for (let i = 0; i < 6; i++) {
    const pick_symbol = options[`${Math.floor(Math.random() * 2)}`];
    if (pick_symbol === 'letter') {
      color = color + alphabet[Math.floor(Math.random() * 6)];
    } else if (pick_symbol === 'number') {
      color = color + `${Math.floor(Math.random() * 10)}`;
    }
  }
};

export const generate_random_number_array = ({ length = 10, max = 100 }) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    const num = Math.round(Math.random() * max);
    arr.push(num);
  }

  return arr;
};
