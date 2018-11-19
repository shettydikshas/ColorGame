var numSquares=6;
//var colors=generateRandomColors(6);
var colors=[];
var squares=document.querySelectorAll(".square");
//var pickedColor=pickColor();
var pickedColor;
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var title=document.getElementById("title");
var resetButton=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode")


///////////////////Definitios end here////////////////////////////
init();
function init()
{
	////////////////Loop Through Mode Buttons///////////////////////
for(var i=0;i<modeButtons.length;i++)
{
 modeButtons[i].addEventListener("click",function(){
 	modeButtons[0].classList.remove("selected");
 	modeButtons[1].classList.remove("selected");
 	this.classList.add("selected")
 	//figure out how many scores to show
 	if(this.textContent==="Easy"){
 		numSquares=3
 	}
 	else
 	{
 		numSquares=6;
 	}
 	reset();
 	//pick new colors
 	//pick a new picked color
 	//update page to reflect all changes
 })
}
for(var i=0;i<squares.length;i++)
{   
	//Add Initial colors to square
	//squares[i].style.backgroundColor=colors[i];
	    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    	
    	//grab color of clicked color
    	
    	var clickedColor=this.style.backgroundColor;

    	// compare with picked color
    	if(clickedColor===pickedColor)
    	{
    		message.textContent="Correct Answer!!!!!!";
    		changeColor(clickedColor);
    		resetButton.textContent="Play Again?"
    	}
    	else{
    		this.style.backgroundColor="#232323";
    		message.textContent="Try Again";
    	}
    });
}
reset();

}
resetButton.addEventListener("click",function(){
reset();

})

/////////Function declaration///////////////////////
///////////FUNCTIONS START HERE//////////
function changeColor(desiredColor)//.To change the colors of squares after getting right answer
{
	//change each square color to match given color , need to iterate through for loop
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=desiredColor;

	}
	title.style.backgroundColor=desiredColor;
	title.style.color="black";
}

function pickColor()// Random RGB Color Genrator
{
  var random=Math.floor(Math.random()*colors.length +1);
  return colors[random]
}
function generateRandomColors(num) // generate random colors to choose from
{
	//  make an array
	var arr=[];
	//add num random colors to that array

	for(var i=0;i<num;i++) // just to repeat same action num times
	{
    arr.push(randomColor())
	}
	//return that array
    return arr;
}
function randomColor()// to generate random color
{
// pick a red from 0 to 255
var red=Math.floor(Math.random()*256);
// pick a green from 0 to 255
var green=Math.floor(Math.random()*256);
// pick a blue from 0 to 255
var blue=Math.floor(Math.random()*256);

return "rgb("+red+", "+green+", "+blue+")"

}
function reset(){

	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change color display to new color
	//change message to empty string
	
	// change play again to new colors after clicking on text content
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	message.textContent="";
	//change colors of squares from the page
     for(var i =0; i < squares.length; i++) {
     	if(colors[i])
     	{
     		squares[i].style.display="block";
     		squares[i].style.backgroundColor=colors[i];
     	}
     	else
     	{
     		squares[i].style.display="none";
     	}
     }
     title.style.backgroundColor="steelblue";
     title.style.color="white";


}