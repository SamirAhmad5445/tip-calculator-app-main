/*
  this challenge from frontendmentor: (https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX)
  the main idea of splitter is to split and caculate
  the quantity which every person has to pay with a tip
*/

// this for the buttons, each button has tip percentage 
const buttons = document.querySelectorAll('.btn');  // HTML:line 28

// those for input type number
const billInput = document.querySelector('#bill');  // HTML:line 22
const customTipInput = document.querySelector('#customTip');  // HTML:line 33
const numberOfPeopleInput = document.querySelector('#numberOfPeople');  // HTML:line 39

// those are 2 spans to modify the innerHTML to the computed value
const totalResult = document.querySelector('.total-result span');  // HTML:line 50
const tipResult = document.querySelector('.tip-result span');  // HTML:line 46

// a buttn to reset the splitter
const resetButton = document.querySelector('#reset');  // HTML:line 52
let buttonTipActive = false;  // boolean flag for buttons
let customTipActive = false;  // boolean flag for customTipInput

/*
  write a javascript program for the splitter:
    the program includes:
      1.  an eventLisener to add class "active" to a button when click and remove the 
          class "active" when clicks another buttom or usimg the customTipInput (note: use the
          boolean flag).
          
      2.  a function to calculate the total price and the total tip per person.

      3.  an eventLisener for the billInput, customTipInput, numberOfPeopleInput when 
          'input' and use the prevuous function.

      3.  an eventLisener on the resetButton when 'click' to reset the splitter or 
          refreashing the page.
*/