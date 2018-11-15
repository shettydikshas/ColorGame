var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickedColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var title=document.getElementById("title")


///////////////////Definitios end here////////////////////////////


colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{   
	//Add Initial colors to square
	squares[i].style.backgroundColor=colors[i];
	    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    	
    	//grab color of clicked color
    	
    	var clickedColor=this.style.backgroundColor;

    	// compare with picked color
    	if(clickedColor===pickedColor)
    	{
    		message.textContent="Correct Answer!!!!!!";
    		changeColor(clickedColor);
    	}
    	else{
    		this.style.backgroundColor="#232323";
    		message.textContent="Try Again";
    	}
    });
}

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

function pickedColor()// Random RGB Color Genrator
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