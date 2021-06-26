const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}
const read = {
	t1:2
}

TweenLite.defaultEase = Power2.easeInOut



function init(TOTAL){
	
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const {w, h} = size

	const tlStar = new TimelineMax()
	
	for(let i=1; i<=TOTAL; i++){
		const percent = (i/TOTAL) * .5
		tlStar.from(`.star${i}`, .4, {opacity:0, scale:0, ease: Back.easeOut}, percent)
	}

	tl.add(tlStar)
	
	return tl
}

export {size, init, read}
// export {init}