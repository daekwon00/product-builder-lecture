const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

const dinnerMenus = [
  "치킨", "피자", "삼겹살", "족발", "보쌈",
  "짜장면", "짬뽕", "탕수육", "초밥", "회",
  "떡볶이", "순대", "튀김", "김치찌개", "된장찌개",
  "부대찌개", "파스타", "스테이크", "햄버거", "샌드위치"
];

function recommendMenu() {
  menuDisplayContainer.innerHTML = '';
  const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
  const selectedMenu = dinnerMenus[randomIndex];
  
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item');
  menuItemDiv.textContent = selectedMenu;
  
  menuDisplayContainer.appendChild(menuItemDiv);
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
