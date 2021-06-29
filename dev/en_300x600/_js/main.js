import {size, frameEnd, init, read} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	

	const tl = init(6)

	
	tl.from(".high", .3, {opacity:0})

	tl.from(".t1", .3, {opacity:0}, "+=.5")
	tl.to(".t1", .3, {opacity:0}, `+=${read.t1}`)
	tl.from(".t2", .3, {opacity:0})

	tl.from(".cta", .3, {opacity:0, y:"+=30"}, "+=.5")
	tl.set(".cta2", {visibility:"visible", opacity:0})



}


start()


module.exports = {};

