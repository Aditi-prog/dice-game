const frandomnum = Math.floor(Math.random() * 6) + 1;
const fdiceimg = "dice" + frandomnum + ".png";
document.querySelectorAll("img")[0].setAttribute("src",fdiceimg);
const srandomnum = Math.floor(Math.random() * 6) + 1;
const sdiceimg = "dice" + srandomnum + ".png";
document.querySelectorAll("img")[1].setAttribute("src",sdiceimg);

if(frandomnum > srandomnum) {
    document.querySelector(".result h1").innerHTML = 'player 1 is winner';
}
else if(frandomnum < srandomnum) {
    document.querySelector(".result h1").innerHTML = "player 2 is winner";

}
else {
document.querySelector(".result h1").innerHTML = "draw";
}