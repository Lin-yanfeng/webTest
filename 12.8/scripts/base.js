// dom树查找元素函数封装
function $(id) {
	return document.getElementById(id);
}

//共享onload事件
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
