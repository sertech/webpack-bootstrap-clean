import '../main.scss';

import _ from 'lodash';
import scroll from '../img/icon-blacklist.svg';

const testImg = document.getElementById('top-icon');
testImg.src = scroll;

console.log(_.join(['Index', 'module', 'loaded!'], ' > '));

console.log(
    'hello from webpack server dev server need to add watch files in dev server'
);
