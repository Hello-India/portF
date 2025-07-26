const cursor = document.querySelector('.cursor');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX, y = e.clientY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  outer.style.top = y + "px";
  outer.style.left = x + "px";
  inner.style.top = y + "px";
  inner.style.left = x + "px";
});

document.addEventListener('mousedown', () => {
  cursor.classList.add("pointer");
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove("pointer");
});

document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
});
