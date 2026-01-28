const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

const dinnerMenus = [
  { name: "Chicken", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
  { name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { name: "Pork Belly", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop" },
  { name: "Jokbal", image: "https://images.unsplash.com/photo-1583224994076-b9c9d247a456?w=400&h=300&fit=crop" },
  { name: "Bossam", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop" },
  { name: "Jajangmyeon", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop" },
  { name: "Jjamppong", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
  { name: "Tangsuyuk", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop" },
  { name: "Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop" },
  { name: "Sashimi", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
  { name: "Tteokbokki", image: "https://images.unsplash.com/photo-1635963662853-f0ef28d04b45?w=400&h=300&fit=crop" },
  { name: "Sundae", image: "https://images.unsplash.com/photo-1583224994076-b9c9d247a456?w=400&h=300&fit=crop" },
  { name: "Fried food", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { name: "Kimchi Jjigae", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop" },
  { name: "Doenjang Jjigae", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
  { name: "Budae Jjigae", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop" },
  { name: "Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
  { name: "Steak", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
  { name: "Hamburger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { name: "Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" }
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
  menuImage.src = selectedMenu.image;
  menuImage.alt = selectedMenu.name;
  menuImage.classList.add('menu-image');
  menuImage.onload = () => menuImage.classList.add('loaded');
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
