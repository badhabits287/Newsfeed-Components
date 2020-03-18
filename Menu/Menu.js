/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
// */
// // attempt 2 

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');
const body = document.querySelector('body');
body.style.background = 'grey';
header.style.color = ' black';
header.style.marginLeft = '200px';


function openMenu(arr) {

  const nav = document.createElement('nav');
  const list = document.createElement('ul');
  nav.style.color = 'Black';
  nav.style.width = '200px';
  nav.style.border = '2px solid white';
  nav.style.borderRadius = ' 20px';
  

  menuItems.forEach((link) => {
    const item = document.createElement('nav');
    item.style.borderRadius = ' 20px';
    item.style.border = '1px solid white';
    item.style.padding = '10px';
    item.style.margin = '10px';
    item.textContent = link;
    list.append(item);
    item.style.cursor = 'pointer';
  })

  nav.classList.add('.menu');


  menuButton.addEventListener('mouseover', (e) => {
    nav.appendChild(list);

  })
  nav.addEventListener('mouseleave', (e) => {
    nav.removeChild(list);
  })
  return nav;

}

header.append(openMenu(menuItems));
