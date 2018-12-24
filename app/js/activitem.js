var menuList = document.querySelector(".main-nav__list");
console.log(menuList);
menuList.addEventListener("click", active(event));

function active(event){
	console.log(event.target);
/*	var location = window.location.href;
	var link = event.target.href;
	if(location == link){
		li.classList.add("site-list__active");
	}*/
}