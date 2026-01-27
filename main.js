const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.querySelector('#generate-btn');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const body = document.body;

function generateLottoNumbers() {
  lottoNumbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  
  sortedNumbers.forEach((number, index) => {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = number;
    
    // Assign color based on number range
    if (number <= 10) {
        numberDiv.style.backgroundColor = '#fbc400';
    } else if (number <= 20) {
        numberDiv.style.backgroundColor = '#69c8f2';
    } else if (number <= 30) {
        numberDiv.style.backgroundColor = '#ff7272';
    } else if (number <= 40) {
        numberDiv.style.backgroundColor = '#aaa';
    } else {
        numberDiv.style.backgroundColor = '#b0d840';
    }

    numberDiv.style.animationDelay = `${index * 0.1}s`;
    lottoNumbersContainer.appendChild(numberDiv);
  });
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

generateBtn.addEventListener('click', generateLottoNumbers);
themeToggleBtn.addEventListener('click', toggleTheme);


// Initial generation
generateLottoNumbers();
