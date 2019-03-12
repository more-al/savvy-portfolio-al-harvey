import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');


function render(state){
    root.innerHTML = ` 
    ${Navigation(state.links)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;

    router.updatePageLinks();
}

function handleNavigation(params){
    var destination = startCase(params.page);

    render(State[destination]);
}

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();

// fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => console.log(json));

axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => console.log(response.data));
