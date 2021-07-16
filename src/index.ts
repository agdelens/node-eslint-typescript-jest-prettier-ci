import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

console.log(add(3, 5));
console.log(process.env.NAME);
