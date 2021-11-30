import './less/index.less'

const body = document.querySelector('body');

function changeBackground(){
     
    if(body.classList != 'blue'){
        body.classList.add('blue');
        body.style.backgroundColor = 'blue';
        body.classList.remove('white');
    }
 else
    if (body.classList != 'white'){
        body.classList.add('white');
        body.classList.remove('blue');
        body.style.backgroundColor = 'white';
    }
        
}
// Your code goes here!
body.addEventListener('click', changeBackground);

const header = document.querySelector('header');
header.classList.add('white');
function changeHeader(){

    if (header.classList != 'black'){
        header.classList.add('black');
        header.classList.remove('white');
        header.style.color = 'orange';
        header.style.backgroundColor = 'black';
    }else
    if (header.classList != 'white'){
        header.classList('white');
        header.classList.remove('black');
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
    }
}

header.addEventListener('mouseover', changeHeader);