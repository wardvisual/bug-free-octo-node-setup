import dotenv from 'dotenv-safe';

import add from '@src/math/add';

dotenv.config();

const app: string = 'Edward';

console.log(`${app} ${add(10)}`);
