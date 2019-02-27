import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';

var State = {
    'Home': {
        'title': 'Wecome to My Savvy Coder Website'
    },
    'Blog': {
        'title': 'Thoughts that aren\'t on paper'
    },
    'Contact': {
        'title': 'Speak to me'
    },
    'Projects': {
        'title': 'Cool stuff I\'m doing'
    }

};


var root = document.querySelector('#root');


function render(state){
    var links;

    root.innerHTML = ` 
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
`;


    links = document.querySelectorAll('#navigation > ul > li > a');

    links[0].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[1].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[2].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });
}
render(State.Home);