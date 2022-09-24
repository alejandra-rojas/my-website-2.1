function changeColors() {
  document.body.style.background = 'black'; 
  document.getElementById('heead').style.backgroundColor = 'cyan';
  // document.getElementById('logo').style.transform = 'rotate(-180deg)'; - This has been accomplished with CSS

}

function changeColorsBack() {
    document.body.style.background = 'cyan';
    document.getElementById('heead').style.backgroundColor = 'var(--yellow)';
    // document.getElementById('logo').style.transform = 'rotate(0deg)'; - This has been accomplished with CSS
  }

function colorDelay() {
    document.body.style.background = 'black';
    document.getElementById('heead').style.color = 'red';
    setTimeout(() => document.body.style.background = '', 1500)
    setTimeout(() => document.getElementById('heead').style.color = '', 1500);
  }

logo.addEventListener('mouseover', changeColors);
logo.addEventListener('mouseout', changeColorsBack);
window.addEventListener('resize', colorDelay);


// setTimeout(() => document.getElementById('logo').style.background = '', 1500)

// function expandIntro() {
//     let myElement = document.createElement('p'); // create variable
//     myElement.innerHTML = ('Extra intro text. <a href:"">Hey</a>'); // set content
//     document.getElementById('extraIntro').appendChild(myElement); // appending it to new element 'content'
// }

// let button = document.getElementById('extraIntro');
// button.addEventListener('click', expandIntro);


function clickBox () {
    let readLess = document.getElementById('hide');
    readLess.classList.toggle('hide');

}

let readLess = document.getElementById('lessIntro');
readLess.addEventListener('click', clickBox);


// Modal 

// Get modal element
let modal = document.getElementById('simpleModal');
// Get open modal button
let modalBtn = document.getElementById('modalBtn');
//Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click',openModal);
//Listen for close click
closeBtn.addEventListener('click',closeModal);
//Listen for outside click
window.addEventListener('click',outsideClick);


//Function to open modal
function openModal(){
    modal.style.display = 'block';
}
//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}