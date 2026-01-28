const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

const dinnerMenus = [
  { name: "치킨", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
  { name: "피자", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { name: "삼겹살", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop" },
  { name: "족발", image: "https://images.unsplash.com/photo-1583224994076-b9c9d247a456?w=400&h=300&fit=crop" },
  { name: "보쌈", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop" },
  { name: "짜장면", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop" },
  { name: "짬뽕", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
  { name: "탕수육", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop" },
  { name: "초밥", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop" },
  { name: "회", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
  { name: "떡볶이", image: "https://images.unsplash.com/photo-1635963662853-f0ef28d04b45?w=400&h=300&fit=crop" },
  { name: "순대", image: "https://images.unsplash.com/photo-1583224994076-b9c9d247a456?w=400&h=300&fit=crop" },
  { name: "튀김", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { name: "김치찌개", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop" },
  { name: "된장찌개", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
  { name: "부대찌개", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop" },
  { name: "파스타", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
  { name: "스테이크", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
  { name: "햄버거", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { name: "샌드위치", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" }
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
