let sort = document.querySelector(".sort-hidden")
let sortDist = document.querySelector(".sortDist-hidden")
let sortPat = document.querySelector(".sortPat-hidden")
let sortSp = document.querySelector(".sortSp-hidden")
let sortGe = document.querySelector(".sortGe-hidden")
let sortAg = document.querySelector(".sortAg-hidden")
let sortAv = document.querySelector(".sortAv-hidden")

function downList(){
    sort.classList.toggle("sort-visible")
}

function downListDist(){
    sortDist.classList.toggle("sortDist-visible")
}

function downLisPat(){
    sortPat.classList.toggle("sortPat-visible")
}

function downListSp(){
    sortSp.classList.toggle("sortSp-visible")
}

function downListGe(){
    sortGe.classList.toggle("sortGe-visible")
}

function downListAg(){
    sortAg.classList.toggle("sortAg-visible")
}

function downListAv(){
    sortAv.classList.toggle("sortAv-visible")
}

function expOut1(){
    setTimeout(function(){ downList() }, 200);
}
function expOut2(){
    setTimeout(function(){ downListDist() }, 200);
}
function expOut3(){
    setTimeout(function(){ downLisPat() }, 200);
}
function expOut4(){
    setTimeout(function(){ downListSp() }, 200);
}
function expOut5(){
    setTimeout(function(){ downListGe() }, 200);
}
function expOut6(){
    setTimeout(function(){ downListAg() }, 200);
}
function expOut7(){
    setTimeout(function(){ downListAv() }, 200);
}