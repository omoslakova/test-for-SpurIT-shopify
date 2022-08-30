const incredibleAnim = document
    .getElementsByClassName("collapsible__content")[0]
    .animate(
        {opacity: ["0", "1"]},
        {duration: 200, fill: "both"}
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



