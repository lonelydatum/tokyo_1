import {size, frameEnd, init, read} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	

	const tl = init(3)



	
	tl.from(".high", .3, {opacity:0})

	tl.from(".t1", .3, {opacity:0}, "+=.5")
	tl.to(".t1", .3, {opacity:0}, `+=${read.t1}`)
	tl.from(".t2", .3, {opacity:0})

	
	tl.add("end", "+=.5")
	tl.from(".cta", .3, {opacity:0, y:"-=10"}, "end")
	tl.to(".logo", .3, {y:"+=20"}, "end")
	tl.set(".cta2", {visibility:"visible", opacity:0})
	// tl.gotoAndPlay(3)


}


start()


module.exports = {};

