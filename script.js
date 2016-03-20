var extendend =false;
var stack = [];
var adresses = ["http://mrztone.github.io/one.html", "http://mrztone.github.io/two.html", "http://mrztone.github.io/three.html", "http://mrztone.github.io/four.html"];
//var adresses = ["one.html", "two.html", "three.html","four.html"]

// ***************BUTTONS******************
/*
$(document).ready(function(){
document.getElementById("ONE").addEventListener('click', function(e){
	$("main").load(adresses[0]);
},false);
});

$(document).ready(function(){
    $("#TWO").click(function(){
        $("main").load(adresses[1]);
    });
});

$(document).ready(function(){
    $("#THREE").click(function(){
     	$("main").load(adresses[2]);
    });
});

$(document).ready(function(){
    $("#FOUR").click(function(){
     	$("main").load(adresses[3]);
    });
});
*/


//*****************************************

function changeHistory()
{
	var index = Number(window.location.hash[1]);
	console.log(index);

	if(extendend)
	{
		if(index)
		{
			$("main").load(adresses[index-1]);
		}
		else
		{
			location.reload();
		}
	}
	else
	{
		if(index)
		{
			showPage();
		}
	}
}


function showPage()
{
	if (!extendend)
	{

		var bckgrnd=document.getElementsByTagName('header')[0];
		var bar=document.getElementsByTagName('nav')[0];
		var i=1;
		var innerinterval;

		moveBar(bar);

		var interval = setInterval(function() 
		{
			heightstring= (95-i)+"vw";
			margnstring=(23-(i-63)*(22/27))+"vw";

			bckgrnd.style.height = heightstring;
			if(i>63)
			{
				bar.style.marginTop =margnstring;
			}
			if(i==63)
			{
				innerinterval = setInterval(function()
				{
					heightstring= (95-i)+"vw";
					margnstring=(23-(i-63)*(22/27))+"vw";

					bckgrnd.style.height = heightstring;
					bar.style.marginTop =margnstring;
					if(i==90)
					{
						extendend=true;
						showMain(document.getElementsByTagName('main')[0]);

						$("main").load(adresses[Number(window.location.hash[1])-1]);
						
						clearInterval(interval);
						clearInterval(innerinterval);
					}
					++i;
				} , 15);
			}
			if(i==90)
			{
				extendend=true;
				showMain(document.getElementsByTagName('main')[0]);
				
				clearInterval(innerinterval);
				clearInterval(interval);
			}

			++i;
		} ,10);
	}
}

	function change(obj,col1, col2) 
	{
		obj.style.background=col1;
		obj.style.color=col2;
	}

	function moveBar(bar)
	{
		var i=0;
		interval = setInterval(function() 
		{
			bar.style.marginLeft= 14+i+"vw";
			if(i==14)
			{
				clearInterval(interval);
			}
			++i;
		} , 20);	
	}

	function showMain(obj)
	{
		var i=1;
		obj.style.visibility="visible";
		var interval= setInterval(function()
		{
			obj.style.opacity=0.01*i+"";
			if(i==100)
			{
				clearInterval(interval);
			}
			++i;
		}, 10);
	}