var nameChecker = function(nameChecker){
    var name = prompt('Please enter your name');

    if(name === ''){
        name = prompt('TELL ME YOUR NAME!!!!');
    }
    else{
        document.querySelector('#header h1').innerHTML = `Welcome To My Portfolio ${name}`;
    }
};

nameChecker();
