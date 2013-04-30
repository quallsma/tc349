function changeSchool()
{
	element=document.getElementById('school')
	if (element.src.match("casstech"))
  	{
  		element.src="/images/msu.jpeg";
  	}
	else
  	{
  		element.src="/images/casstech.jpg";
  	}
}

