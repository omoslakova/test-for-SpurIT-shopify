
const incredibleAnim = document
.getElementsByClassName("collapsible__content")[0]
.animate(
  { opacity: ["0", "1"] },
  { duration: 200, fill: "both" }
);

const magicBtn = document.getElementsByClassName("collapsible__button")[0];

magicBtn.addEventListener("click", () => {
if (incredibleAnim.playState === "paused") {
  incredibleAnim.play();
} else {
  incredibleAnim.reverse();
}
});

magicBtn.addEventListener("click", function handleClick() {
  const initialText = "Скрыть содержимое";

  if (magicBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    magicBtn.textContent = "Показать содержимое";
  } else {
    magicBtn.textContent = initialText;
  }
});





/*const btn = document.getElementsByClassName('collapsible__button');

btn[0].addEventListener('click', function handleClick() {
  const initialText = 'Скрыть содержимое';

  if (btn[0].textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn[0].textContent = 'Показать содержимое';
  } else {
    btn[0].textContent = initialText;
  }
});




const anim = document
  .getElementsByClassName("collapsible__content")
  .animate(
    { width: ["0px", "800px"] },
    { duration: 250, fill: "both", easing: "ease-out" }
  );

anim[0].pause();

document.getElementsByClassName("collapsible__button").addEventListener("click", () => {
  if (anim[0].playState === "paused") {
    anim[0].play();
  } else {
    anim[0].reverse();
  }
});

anim[0].onfinish = (evt) => {
  console.log(
    "animation completed",
    evt.currentTime === 0 ? "closed" : "opened"
  );
};









const anim = document
.getElementsByClassName("collapsible__content")[0]
.animate(
  { width: ["0px", "800px"] },
  { duration: 250, fill: "both", easing: "ease-out" }
);

anim.pause();

document.getElementsByClassName("collapsible__button")[0].addEventListener("click", () => {
if (anim.playState === "paused") {
  anim.play();
} else {
  anim.reverse();
}
});




I am the best


const anim = document
.getElementsByClassName("collapsible__content")[0]
.animate(
  { opacity: ["0", "1"] },
  { duration: 250, fill: "both", easing: "ease-out" }
);

document.getElementsByClassName("collapsible__button")[0].addEventListener("click", () => {
if (anim.playState === "paused") {
  anim.play();
} else {
  anim.reverse();
}
});








const anim = document
.getElementsByClassName("collapsible__content")[0]
.animate(
  { opacity: ["0", "1"] },
  { duration: 250, fill: "both", easing: "ease-out" }
);


document.getElementsByClassName("collapsible__button")[0].addEventListener("click", () => {
if (anim.playState === "paused") {
  anim.play();
} else {
  anim.reverse();
}
});

const btn = document.getElementsByClassName('collapsible__button')[0];

btn.addEventListener('click', function handleClick() {
  const initialText = 'Скрыть содержимое';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Показать содержимое';
  } else {
    btn.textContent = initialText;
  }
});

*/





