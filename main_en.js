const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

const dinnerMenus = [
  { name: "Chicken", searchTerm: "fried chicken" },
  { name: "Pizza", searchTerm: "pizza" },
  { name: "Pork Belly", searchTerm: "pork belly" },
  { name: "Jokbal", searchTerm: "jokbal" },
  { name: "Bossam", searchTerm: "bossam" },
  { name: "Jajangmyeon", searchTerm: "jajangmyeon" },
  { name: "Jjamppong", searchTerm: "jjamppong" },
  { name: "Tangsuyuk", searchTerm: "tangsuyuk" },
  { name: "Sushi", searchTerm: "sushi" },
  { name: "Sashimi", searchTerm: "sashimi" },
  { name: "Tteokbokki", searchTerm: "tteokbokki" },
  { name: "Sundae", searchTerm: "sundae" },
  { name: "Fried food", searchTerm: "fried food" },
  { name: "Kimchi Jjigae", searchTerm: "kimchi jjigae" },
  { name: "Doenjang Jjigae", searchTerm: "doenjang jjigae" },
  { name: "Budae Jjigae", searchTerm: "budae jjigae" },
  { name: "Pasta", searchTerm: "pasta" },
  { name: "Steak", searchTerm: "steak" },
  { name: "Hamburger", searchTerm: "hamburger" },
  { name: "Sandwich", searchTerm: "sandwich" }
];

function recommendMenu() {
  menuDisplayContainer.innerHTML = '';
  const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
  const selectedMenu = dinnerMenus[randomIndex];
  
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item');
  menuItemDiv.textContent = selectedMenu.name;
  
  menuDisplayContainer.appendChild(menuItemDiv);

  const menuImage = document.createElement('img');
  const encodedSearchTerm = selectedMenu.searchTerm.replace(/ /g, "+");
  menuImage.src = `https://source.unsplash.com/400x300/?${encodedSearchTerm}`;
  menuImage.classList.add('menu-image');
  menuDisplayContainer.appendChild(menuImage);
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
