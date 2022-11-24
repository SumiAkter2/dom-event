//2 .
    function makeRed() {
        document.body.style.backgroundColor = 'red' ;
    }

 ///2.   //////handle blue button click by setting function name:
const blueButton =document.getElementById("make-blue-button");
blueButton.onclick=makeblue;

function makeblue(){
    document.body.style.backgroundColor='blue';
}
//3.  ////anonymous function:
const greenButton = document.getElementById('make-green-button');
greenButton.onclick= function (){
    document.body.style.backgroundColor='green';
}
//4.  //addeventlistener(most usable):
 
const goldenButton =document.getElementById('make-goldenrod-button');
goldenButton.addEventListener('click', makeGolden);
function makeGolden(){
    document.body.style.backgroundColor="goldenrod";
}
//5.  //semelar to addlistener:
const hotpinkButton =document.getElementById('make-hotpink-button');
hotpinkButton.addEventListener('click', function makeHotpink(){
    document.body.style.backgroundColor='hotpink';
})

//6. //direct sortcut:
document.getElementById('make-lightblue-button').addEventListener('click', function (){
    document.body.style.backgroundColor='lightblue';
})