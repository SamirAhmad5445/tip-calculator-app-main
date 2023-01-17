// this for the buttons, each button has tip percentage 
const buttons = document.querySelectorAll('.btn');

// those for input type number
const billInput = document.querySelector('#bill');
const customTipInput = document.querySelector('#customTip');
const numberOfPeopleInput = document.querySelector('#numberOfPeople');

// those are 2 spans to modify the innerHTML to the computed value
const totalResult = document.querySelector('.total-result span');
const tipResult = document.querySelector('.tip-result span');

// a buttn to reset the splitter
const resetButton = document.querySelector('#reset');
let buttonTipActive = false;  // boolean flag for buttons
let customTipActive = false;  // boolean flag for customTipInput

// to activate the button which  is been clicked
buttons.forEach(button=> {
  button.addEventListener('click', ()=> {
    // deactivate the rest of the button
    buttonsDeactivate();
    button.classList.add('active');
    customTipInput.classList.remove('active');
    // to determine the tip from the button
    buttonTipActive = true; // we using tip from a button
    customTipActive = false;
    splitter();
  });
});

// this function come in handy to write less code
const buttonsDeactivate = function() {
  buttons.forEach(button=> {
    button.classList.remove('active');
  });
};

// this is the main course
const splitter = function() {
  // can't splitter the bill if there's no people, right?
  if(numberOfPeopleInput.value == '' || numberOfPeopleInput.value == 0) {
    resetOutput();
    return;
  }
  // how much we should tip?
  let tip = 0;
  // if we use the customTipInpute then
  if(customTipActive) {
    tip = customTipInput.value; // well do this
  } else if(buttonTipActive) {
    tip = document.querySelector('.active').innerHTML.slice(0,-1);
  }
  // retrieve the bill and the numberOfPeople
  let bill = billInput.value;
  let numberOfPeople = numberOfPeopleInput.value;
  // tip = bill * tip% 
  // total/person = (bill + tip) / numberOfPeople
  totalResult.innerHTML = Number.parseFloat((+bill + (+tip / 100) * +bill) / numberOfPeople).toFixed(2);
  // tip/person = tip / numberOfPeople
  tipResult.innerHTML = Number.parseFloat(((+tip / 100) * bill) / numberOfPeople).toFixed(2);
};

billInput.addEventListener('input', () => {
  if(numberOfPeopleInput.value != 0) {
    splitter();
  }
});

customTipInput.addEventListener('input', () => {
  buttonsDeactivate();
  customTipInput.classList.add('active');
  customTipActive = true; // now we used the customTipInput
  buttonTipActive = false;
  if(numberOfPeopleInput.value != 0) {
    splitter();
  }
});

numberOfPeopleInput.addEventListener('input', () => {
  // numberOfPeopleInput.classList.add('modified'); // to the future
  splitter();
});

// from here no need comments, every thing is clear and streat forword
const resetOutput = function() {
  tipResult.innerHTML = "0.00";
  totalResult.innerHTML = "0.00";
};

const resetInput = function() {
  // numberOfPeopleInput.classList.remove('modified');
  numberOfPeopleInput.value = '';
  customTipInput.value = '';
  billInput.value = '';
};

resetButton.addEventListener('click', () => {
  resetOutput();
  resetInput();
  buttonsDeactivate();
  customTipInput.classList.remove('active');
  customTipActive = false;
  buttonTipActive = false;
});