var extendend =false;

// ***************BUTTONS******************

$(document).ready(function(){
    $("#ONE").click(function(){
        $("#main").load("http://mrztone.github.io/one.html");
    });
});

$(document).ready(function(){
    $("#TWO").click(function(){
        $("#main").load("http://mrztone.github.io/two.html");
    });
});

$(document).ready(function(){
    $("#THREE").click(function(){
        $("#main").load("http://mrztone.github.io/three.html");
    });
});

$(document).ready(function(){
    $("#FOUR").click(function(){
        $("#main").load("http://mrztone.github.io/four.html");
    });
});

//*****************************************

function showPage()
{
	if (!extendend)
	{

		var bckgrnd=document.getElementById("start");
		var bar;
		for(var i=0;i<bckgrnd.childNodes.length;++i)
		{
			if(bckgrnd.childNodes[i].nodeName=="DIV")
			{
				bar =bckgrnd.childNodes[i];
			}
		}
		var i=1;
		var innerinterval;

		moveBar(bar);

		var interval = setInterval(function() 
		{
			var height= 100-i;
			var heightstring= height+"vh";
			var margn=93-i;
			var margnstring=margn+"vh";

			bckgrnd.style.height = heightstring;
			if(i>50)
			{
				bar.style.marginTop =margnstring;
			}

			if(i==15)
			{
				innerinterval = setInterval(function()
				{
					height= 100-i;
					heightstring= height+"vh";
					margn=93-i;
					margnstring=margn+"vh";

					bckgrnd.style.height = heightstring;
					if(i>50)
					{
						bar.style.marginTop =margnstring;
					}
					if(i==90)
					{
						extendend=true;
						showMain(document.getElementById("main"));
						
						clearInterval(interval);
						clearInterval(innerinterval);
					}

					i++;
				} , 10);
			}
			
			if(i==90)
			{
				extendend=true;
				showMain(document.getElementById("main"));
				
				clearInterval(innerinterval);
				clearInterval(interval);
			}

			i=i+1;

		} ,20);
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
			i++;
		}, 10);
	}