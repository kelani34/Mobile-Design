document.addEventListener('click', function (e) {
    if (document.getElementById('showlist').contains(e.target)) {
        document.getElementById("menu").style.display = 'block';
    }
})

