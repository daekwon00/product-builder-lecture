const menuDisplayContainer = document.querySelector('.menu-display');
const recommendBtn = document.querySelector('#recommend-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

const dinnerMenus = [
  { name: "치킨", searchTerm: "fried chicken" },
  { name: "피자", searchTerm: "pizza" },
  { name: "삼겹살", searchTerm: "pork belly" },
  { name: "족발", searchTerm: "jokbal" },
  { name: "보쌈", searchTerm: "bossam" },
  { name: "짜장면", searchTerm: "jajangmyeon" },
  { name: "짬뽕", searchTerm: "jjamppong" },
  { name: "탕수육", searchTerm: "tangsuyuk" },
  { name: "초밥", searchTerm: "sushi" },
  { name: "회", searchTerm: "sashimi" },
  { name: "떡볶이", searchTerm: "tteokbokki" },
  { name: "순대", searchTerm: "sundae" },
  { name: "튀김", searchTerm: "fried food" },
  { name: "김치찌개", searchTerm: "kimchi jjigae" },
  { name: "된장찌개", searchTerm: "doenjang jjigae" },
  { name: "부대찌개", searchTerm: "budae jjigae" },
  { name: "파스타", searchTerm: "pasta" },
  { name: "스테이크", searchTerm: "steak" },
  { name: "햄버거", searchTerm: "hamburger" },
  { name: "샌드위치", searchTerm: "sandwich" }
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
  menuImage.src = `https://source.unsplash.com/400x300/?${selectedMenu.searchTerm}`;
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
