var count = 0;

function handleClick() {
    count += 1;
    document.getElementById("main-container").textContent = count.toString();
}
