function expandIntro() {
    let myElement = document.createElement('p'); // create variable
    myElement.innerHTML = ('Extra intro text. <a href:"">Hey</a>'); // set content
    document.getElementById('extraIntro').appendChild(myElement); // appending it to new element 'content'
}

let button = document.getElementById('extraIntro');
button.addEventListener('click', expandIntro);



// document.body.style.background = 'red'; // make the background red
// setTimeout(() => document.body.style.background = '', 3000); // return back




function changeColors() {
  document.body.style.background = 'var(--green)';
  document.getElementById('heead').style.backgroundColor = 'cyan';
  document.getElementById('logo').style.transform = 'rotate(-180deg)';

}

function changeColorsBack() {
    document.body.style.background = 'cyan';
    document.getElementById('heead').style.backgroundColor = 'var(--pink)';
    document.getElementById('logo').style.transform = 'rotate(0deg)';
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