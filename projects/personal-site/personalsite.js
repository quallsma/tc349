function changeSchool()
{
	element=document.getElementById('school')
	if (element.src.match("casstech"))
  	{
  		element.src="msu.jpeg";
  	}
	else
  	{
  		element.src="casstech.jpg";
  	}
}