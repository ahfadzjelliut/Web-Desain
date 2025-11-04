function ubahblog(act, blogtype) {
    var a, isiblog, pengubah;
    isiblog = document.getElementsByClassName("wdhblog");
    pengubah = document.getElementsByClassName("ubahan");
    for (a = 0; a < isiblog.length; a++) {
        isiblog[a].style.display = "none";
    }
    for (a = 0; a < pengubah.length; a++) {
        pengubah[a].className = pengubah[a].className.replace(" active", "");
    }
    document.getElementById(blogtype).style.display = "block";
    act.currentTarget.className += " active";
}
function tetapblog(blogtype) {
    isiblog = document.getElementsByClassName("wdhblog");
    document.getElementById(blogtype).style.display = "block";
}