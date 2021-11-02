let graduation = prompt("Veuillez entrer votre note.")

if ((graduation > 0)&&(graduation <=4)) {
    alert("Nul")
} else if ((graduation > 4)&&(graduation <=6)){
    alert("Moyen")
} else if ((graduation > 6)&&(graduation <=8)){
    alert("Assez bien")
} else if ((graduation > 8)&&(graduation <=9)){
    alert("Bien")
} else if (graduation == 10){
    alert("Excellent")
}