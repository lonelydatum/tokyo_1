const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}
const read = {
	a:.5,
	b:2
}

const v2 = {
	a:0,
	b:2
}

TweenLite.defaultEase = Power2.easeInOut



function init(id){
	console.log(id);
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const {w, h} = size
	
	return tl
}

export {size, init, read, v2}
// export {init}