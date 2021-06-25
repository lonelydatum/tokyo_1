import {size, frameEnd, init, read} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	

	const tl = init("300x250")

	const tlStar = new TimelineMax()
	const TOTAL = 6
	for(let i=1; i<=TOTAL; i++){
		const percent = (i/TOTAL) * .5
		tlStar.from(`.star${i}`, .4, {scale:0, ease: Back.easeOut}, percent)
	}

	tl.add(tlStar)
	tl.from(".high", .3, {opacity:0})

	tl.from(".t1", .3, {opacity:0}, "+=.5")
	tl.to(".t1", .3, {opacity:0}, "+=2")
	tl.from(".t2", .3, {opacity:0})

	tl.from(".cta", .3, {opacity:0, y:"+=30"}, "+=.5")

// CustomBounce.create("myBounce", {strength:0.7, squash:3});

}


start()


module.exports = {};

