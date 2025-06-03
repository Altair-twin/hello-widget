document.addEventListener('DOMContentLoaded', () => {
  const countEl = document.getElementById('count');
  const messageEl = document.getElementById('message');
  const completeCountEl = document.getElementById('completeCount');
  const btn = document.getElementById('helloBtn');
  const fullText = 'Hello';
  let currentLength = 0;
  let completeCount = 0;

  countEl.textContent = '';

  btn.addEventListener('click', () => {
    currentLength++;
    if (currentLength > fullText.length) {
      currentLength = 1;
    }

    countEl.innerHTML = '';
    for (let i = 0; i < currentLength; i++) {
      const span = document.createElement('span');
      span.textContent = fullText[i];
      span.style.display = 'inline-block';
      countEl.appendChild(span);
    }

    const spans = countEl.querySelectorAll('span');
    spans.forEach(span => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 50 + Math.random() * 100;

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      const rotate = (Math.random() - 0.5) * 1440;

      span.style.transition = 'none';
      span.style.transform = translate(${x}px, ${y}px) rotate(${rotate}deg) scale(1.5);
      span.style.opacity = '0';

      setTimeout(() => {
        span.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        span.style.transform = 'translate(0,0) rotate(0deg) scale(1)';
        span.style.opacity = '1';
      }, 50);
    });

    if (currentLength === fullText.length) {
      completeCount++;
    }

    completeCountEl.textContent = Hello taps: ${completeCount};
    messageEl.textContent = Let’s build Hello together!;
  });
});
