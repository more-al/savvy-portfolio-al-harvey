import Navigation from './src/Navigation';

var originalContent = document.body.innerHTML;

var name;

var blankCheck = function blankCheck(){
    if(name === ''){
        name = prompt('TELL ME YOUR NAME!!!!');
        
        blankCheck();
    }
};

var nameChecker = function nameChecker(){
    name = prompt('Please enter your name');
    
    blankCheck();
    
    document.querySelector('#header h1').innerHTML = `Welcome To My Portfolio ${name}`;
};

nameChecker();

document.body.innerHTML = ` 
    ${Navigation}
    ${originalContent}
`;