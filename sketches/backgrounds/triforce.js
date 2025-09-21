// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Perpetual elevator buttons - Triforce version
// By Khoparzi (modified by cbrrrry)
// http://khoparzi.com

(shape(3)).add(osc(1,0.5,1), 1)
	.add(o1, () => (Math.sin(time/4) * 0.7 + 0.1))
	.diff(shape(3).scale(0.5).rotate(Math.PI))
// 	.repeat(5)
  	.scale(()=>Math.sin(time / 16)).rotate(0, -0.1)
	.out(o1)
	
src(o1)
  .rotate(0,0.1)
  .out()
