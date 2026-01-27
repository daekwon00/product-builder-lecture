const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

const dinnerMenus = [
  "Chicken", "Pizza", "Pork Belly", "Jokbal", "Bossam",
  "Jajangmyeon", "Jjamppong", "Tangsuyuk", "Sushi", "Sashimi",
  "Tteokbokki", "Sundae", "Fried food", "Kimchi Jjigae", "Doenjang Jjigae",
  "Budae Jjigae", "Pasta", "Steak", "Hamburger", "Sandwich"
];

function recommendMenu() {
  menuDisplayContainer.innerHTML = '';
  const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
  const selectedMenu = dinnerMenus[randomIndex];
  
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item');
  menuItemDiv.textContent = selectedMenu;
  
  menuDisplayContainer.appendChild(menuItemDiv);

  if (selectedMenu === "Pizza") {
    const pizzaImage = document.createElement('img');
    pizzaImage.src = 'pizza-5275191_1920.jpg';
    pizzaImage.classList.add('menu-image');
    menuDisplayContainer.appendChild(pizzaImage);
  }
}

function toggleTheme() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark-mode') {
  body.classList.add('dark-mode');
}

recommendBtn.addEventListener('click', recommendMenu);
themeToggleBtn.addEventListener('click', toggleTheme);

// Initial recommendation
recommendMenu();
