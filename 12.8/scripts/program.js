window.onload = function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
				document.body.scrollTop || 0;
	var page3 = $("about");
	var aboutImg = $("ulImg1");
	var imgLi = aboutImg.children;
	var spanImg = $("spanImg1");
	var img1 = $("Img1");
	var img2 = $("Img2");
	var ul = $("list");
	var li1 = ul.children;
	console.log(aboutImg);
	window.onscroll = function(){
	    if(li1[3].scrollTop = li1[3].offsetTop){
		    img1.style.animation = "xuan 1s linear 0s 1";
		    img2.style.animation = "xuan 1s linear 0s 1";
	    }
	}
}
