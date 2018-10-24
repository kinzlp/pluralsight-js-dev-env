import './index.css';

import numeral from 'numeral';

// Below is a tempory way to disable eslint
const courseValue = numeral(1000).format('$0,0.00'); //eslint-disable-line no-unused-vars

console.log(`I would pay ${courseValue} for this awesome couse`);
