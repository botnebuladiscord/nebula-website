function search(){
    var input, text, subtitle, searchlist;
    input = document.getElementById('search');
    text = input.value.toUpperCase();
    subtitle = document.getElementById('subtitle');
    searchlist = Array.prototype.slice.call(subtitle.children);
    searchlist.shift()
    for (var element of searchlist){
        if (element.children[0].id.toUpperCase().indexOf(text) > -1) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    }
}

function clickHandler(element){
    var elements = document.getElementsByClassName(element.currentTarget.id);
    for (var element of elements){
        if (element.style.display == "block"){
            element.style.display = "none";
            element.parentElement;
            element.parentElement.children[0].children[0].children[0].children[1].children[0].style.display = "block";
            element.parentElement.children[0].children[0].children[0].children[1].children[1].style.display = "none";
        }
        else{
            element.style.display = "block";
            element.parentElement.children[0].children[0].children[0].children[1].children[1].style.display = "block";
            element.parentElement.children[0].children[0].children[0].children[1].children[0].style.display = "none";
        }
    }
}

var elements = document.getElementsByClassName('command-content');
for (var element of elements){
    element.addEventListener('click', clickHandler);
}

var searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', search);