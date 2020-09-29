const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');

hamburger.addEventListener('click', showNavigation);

function showNavigation() {
    if (navigation.style.display === "none") {
        navigation.style.display = "block";
    } else {
        navigation.style.display = "none";
    }
}