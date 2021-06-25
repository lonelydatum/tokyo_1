
function player(speed=1){
	const tl = new TimelineMax()
	
	
	tl.add("start", 0)
	const total = 4
	// for(let i=total; i>0;i--){
	for(let i=1; i<=total;i++){
		const percent = i/total * .17
		
		let obj = {x:0, y:0, ease:Power4.easeOut}
		if(i!==total){
			obj = {...obj, opacity:0}
		}
		// console.log(percent);
		tl.to(`#player${i}`, .8*speed, obj, `start+=${percent}`)	
	}
	
	
	
	TweenLite.to(".ball", 1.2*speed, {x:0, y:0, ease:Power4.easeOut, delay:.17})
	return tl
}


export {player}