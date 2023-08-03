function toggleSidebar() {
    var element = document.getElementsByClassName("sidebar")[0]
    if (getComputedStyle(element).display == "none"){
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
}