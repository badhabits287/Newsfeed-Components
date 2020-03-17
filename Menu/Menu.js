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
  
*/

const createMenu = menuItems => {
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  menuItems.forEach(el => {
    let item = document.createElement('li');
    item.textContent = el;
    ul.appendChild(item);
  });

  menu.classList.add('menu');

  menu.appendChild(ul);



  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menu.classList.contains('menu--open');

    menu.classList.toggle('menu--open');
  });

  return menu;
};

const header = document.querySelector('.header');

header.appendChild(createMenu(menuItems));

// function menuCreate(menuData) {
//   // 1-  def new elements
//   const menu = document.createElement('div')
//   menu.classList.add ('menu');
//   const list = document.createElement('ul');
//   const menuButton = document.querySelector('.menu-button');
//   // 2-   class names
//   menuButton.classList.add('menu-button');
//   // 3- structure of the elements
//   menu.append(list);
//   // 3- loop to create menu elements 
//   menuData.forEach(info => {
//     const menuItems = document.createElement('li');
//     menuItems.textContent = info;
//     list.append(menuItems);
//   });
//   // 5- add event listener 
//   menuButton.addEventListener("click", () => {
//     console.log("clicked", event.target);
//     menu.classList.toggle('menu--open');
//   });}