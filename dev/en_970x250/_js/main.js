import {size, frameEnd, init, read} from '../../_common/js/common.js'



function start(){
	
	const TOTAL = 6
	const tl = init(TOTAL)

	

	const tlStar = new TimelineMax()

	// for(let i=1; i<=TOTAL; i++){
	// 	const percent = (i/TOTAL) * .2
	// 	tlStar.to(`.star${i}`, .4, {scale:0, ease: Power3.easeOut}, percent)
	// }

	
	// tl.add(tlStar)
	
	tl.from(".high", .3, {opacity:0}, "-=.6")

	tl.from(".t1", .3, {opacity:0}, "+=0")
	tl.to(".t1", .3, {opacity:0}, `+=${read.t1}`)
	tl.from(".t2", .3, {opacity:0})
	tl.to([".high", ".t2"], .3, {opacity:0}, `+=${read.t2}`)

	tl.add("end", "+=.1")
	tl.from(".cta", .3, {opacity:0}, "end+=.5")
	tl.from(".logo", .3, {opacity:0}, "end")
	
	
	tl.set(".cta2", {visibility:"visible", opacity:0})

	

}


start()


module.exports = {};

