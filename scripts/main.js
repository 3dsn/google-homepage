var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google.gif') {
        myImage.setAttribute('src', 'images/dia-dos-namorados-law.gif');
    } else {
        myImage.setAttribute('src', 'images/google.gif');
    }
}

/*
var myForm = document.querySelector('form');

myPut = gSearch() {
    myForm.setAttribute('action', "https://www.google.com.br/search");
}

myImput = document.querySelector('imput');

myImput.onclick = function () {
    myPut.gSearch();
}
*/