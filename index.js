import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
// import nameChecker from './src/Greeter';

var home = {
    'title': 'Welcome to my Savvy Coders website!'
};

var blog = {
    'title': 'Welcome to my blog!'
};

var contact = {
    'title': 'Welcome to my contact!'
};

var projects = {
    'title': 'Welcome to my projects!'
};

var root = document.querySelector('#root');

function render(state){
    root.innerHTML = ` 
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
`;
}
render(home);
// nameChecker();

document.querySelector('#navigation a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(home);
});

document.querySelector('#navigation li:nth-child(1) > a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(blog);
});

document.querySelector('#navigation li:nth-child(2) > a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(contact);
});

document.querySelector('#navigation li:nth-child(3) > a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(projects);
});