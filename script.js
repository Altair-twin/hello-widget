const countEl = document.getElementById('count');
const messageEl = document.getElementById('message');
const completeCountEl = document.getElementById('completeCount');
const btn = document.getElementById('helloBtn');

const fullText = 'Hello';
let currentLength = 0;
let completeCount = 0;

btn.addEventListener('click', () => {
  currentLength++;
  if (currentLength > fullText.length) {
    currentLength = 1;
  }

  countEl.innerHTML = ''; // 一度クリア
  for (let i = 0; i < currentLength; i++) {
    const span = document.createElement('span');
    span.textContent = fullText[i];
    
    // ランダムな角度と距離で初期位置
    const angle = Math.random() * 360;
    const distance = 80;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    span.style.transform = `translate(${x}px, ${y}px) rotate(30deg)`;
    span.style.opacity = 0;
    
    // アニメーション開始（遅延）
    setTimeout(() => {
      span.style.transform = 'translate(0, 0) rotate(0deg)';
      span.style.opacity = 1;
    }, 10);
    
    span.classList.add('bounce');
    countEl.appendChild(span);
  }

  if (currentLength === fullText.length) {
    completeCount++;
  }
  completeCountEl.textContent = `Hello taps: ${completeCount}`;
});
