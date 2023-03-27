// крок 1
const circles = document.querySelectorAll('.circle');

// крок 2-3
circles.forEach(circle => {
  const anim = circle.getAttribute('data-anim');
  circle.classList.add(anim);
});

// крок 4
// перевірити застосування анімацій можна візуально, спостерігаючи за змінами на сторінці при наведенні на елементи