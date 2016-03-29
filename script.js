var extendend =false;

function changeHistory()
{
	var adress = window.location.hash;
	adress = adress.replace('#', '') + ".html";
	if(adress[0]=="P")
	{
		adress = "projects.html";
	}
	adress = "http://mrztone.github.io/" + adress;

	if(extendend)
	{
		if(adress!="http://mrztone.github.io/.html")
		{
			$("main").load(adress);
		}
		else
		{
			location.reload();
		}
	}
	else
	{
		if(adress!="http://mrztone.github.io/.html")
		{
			hideTitle
			showPage(adress);
		}
	}
}


function showPage(adress)
{
	if (!extendend)
	{
		extendend=true;
		var bckgrnd=document.getElementsByTagName('header')[0];
		var bar=document.getElementsByTagName('nav')[0];
		var i=1;

		hideTitle();

		var interval = setInterval(function() 
		{
			heightstring= (95-i)+"vw";
			navString=(23-(i-63)*(22/27))+"vw";

			bckgrnd.style.height = heightstring;
			if(i>63)
			{
				bar.style.top =navString;
			}
			if(i==63)
			{
				var innerinterval = setInterval(function()
				{
					heightstring= (95-i)+"vw";
					navString=(23-(i-63)*(22/27))+"vw";

					bckgrnd.style.height = heightstring;
					bar.style.top =navString;
					if(i>=90)
					{
						$("main").load(adress);
						clearInterval(innerinterval);
					}
					++i;
				} , 15);
			}
			if(i>=90)
			{
				moveBar(bar);
				show(document.getElementsByTagName('main')[0]);
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
		bar.style.left= 23+i+"vw";
		if(i==23)
		{
			clearInterval(interval);
		}
		++i;
	} , 22);	
}

function show(obj)
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

function hideTitle()
{
	var obj = document.getElementById("Title");
	var i=1;
	var interval= setInterval(function()
	{
		obj.style.opacity= (1.0 -0.01*i)+"";
		if(i==100)
		{
			obj.style.visibility="hidden";
			show(document.getElementById("reset"));
			clearInterval(interval);
		}
		++i;
	}, 10);	
}