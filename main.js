const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const categorySelect = document.querySelector('#category');
const cardIcon = document.querySelector('.card-icon');
const body = document.body;

const dinnerMenus = [
  { name: "치킨", category: "korean", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
  { name: "피자", category: "western", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { name: "삼겹살", category: "korean", image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&h=300&fit=crop" },
  { name: "족발", category: "korean", image: "https://images.unsplash.com/photo-1632558610168-b6f58fb021e8?w=400&h=300&fit=crop" },
  { name: "보쌈", category: "korean", image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop" },
  { name: "짜장면", category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop" },
  { name: "짬뽕", category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
  { name: "탕수육", category: "chinese", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop" },
  { name: "초밥", category: "japanese", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop" },
  { name: "회", category: "japanese", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
  { name: "떡볶이", category: "snack", image: "https://images.unsplash.com/photo-1541456286246-201062c00ada?w=400&h=300&fit=crop" },
  { name: "순대", category: "snack", image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=400&h=300&fit=crop" },
  { name: "튀김", category: "snack", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { name: "김치찌개", category: "korean", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop" },
  { name: "된장찌개", category: "korean", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
  { name: "부대찌개", category: "korean", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop" },
  { name: "파스타", category: "western", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
  { name: "스테이크", category: "western", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
  { name: "햄버거", category: "western", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { name: "샌드위치", category: "western", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" }
];

function getFilteredMenus() {
  const category = categorySelect.value;
  if (category === 'all') {
    return dinnerMenus;
  }
  return dinnerMenus.filter(menu => menu.category === category);
}

function recommendMenu() {
  const filteredMenus = getFilteredMenus();

  if (filteredMenus.length === 0) {
    menuDisplayContainer.innerHTML = '<p class="prompt-subtext">해당 카테고리에 메뉴가 없습니다</p>';
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredMenus.length);
  const selectedMenu = filteredMenus[randomIndex];

  // Hide card icon when showing menu
  if (cardIcon) {
    cardIcon.style.display = 'none';
  }

  menuDisplayContainer.innerHTML = '';

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
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light-mode');
    themeToggleBtn.textContent = '🌙';
  } else {
    localStorage.removeItem('theme');
    themeToggleBtn.textContent = '☀️';
  }
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light-mode') {
  body.classList.add('light-mode');
  themeToggleBtn.textContent = '🌙';
} else {
  themeToggleBtn.textContent = '☀️';
}

recommendBtn.addEventListener('click', recommendMenu);
themeToggleBtn.addEventListener('click', toggleTheme);
