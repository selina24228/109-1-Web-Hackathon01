var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var last_select = -1;

//Add EventListener to cells, clicks->background-color=black.
for(var i=0; i<cells.length; ++i) {
    cells[i].addEventListener('click', function(){
		this.style.backgroundColor = "#000000";
		this.style.color = "white";
		if(last_select > 0){
			cells[last_select-4].style.backgroundColor="white";
			cells[last_select-4].style.color="black";
		}
		last_select = this.innerHTML.split('\n')[0];
	})
}

function filledCell(){
	if(last_select < 0){
		alert("Please select one date first!!!");
	}
	else{
		cells[last_select-4].innerHTML = last_select+'\n<span style="color:'+color.value+'">'+input.value+'<span>';
		input.value = '';
	}
}

input.addEventListener('keypress', function(e){
	if(e.code =='Enter' && input.value != ''){
		filledCell()
	}
})


button.addEventListener('click', function(){
	filledCell()
})



//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}