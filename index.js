import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import { startCase } from 'lodash';

var State = {
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Wecome to My Savvy Coder Website'
    },
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Thoughts that aren\'t on paper'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ],
        'title': 'Speak to me'
    },
    'Projects': {
        'links': [ 'Home', 'Contact', 'Blog' ],
        'title': 'Cool stuff I\'m doing'
    }

};


var root = document.querySelector('#root');
var render;

function handleNavigation(event){
    var destination = lodash.startCase(event.target.textcontent);
    
    event.preventDefault();

    render(State[destination]);
}

render = function render(state){
    var links;
    var i = 0;

    root.innerHTML = ` 
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
`;


    links = document.querySelectorAll('#navigation > ul > li > a');

    while(i < links.length){
        links[i].addEventListener('click', handleNavigation);

        i++;
    }
};
render(State.Home);