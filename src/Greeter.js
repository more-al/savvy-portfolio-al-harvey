export default function nameChecker(){
    var name = prompt('Please enter your name');
    
    if(name === ''){
        nameChecker();
    }
    else{
        document.querySelector('#header h1').innerHTML = `Welcome To My Portfolio ${name}`;
    }
}
