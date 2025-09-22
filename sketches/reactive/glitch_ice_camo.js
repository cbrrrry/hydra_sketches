// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// disintegration
// by Ritchse, modified by cbrrrry
// instagram.com/ritchse
a.show()
a.setBins(5)
a.setSmooth(0.87)
bpm = 40
osc(5,.02).modulate(noise(()=> a.fft[3]*6),.22).diff(o0)
  	.modulateScrollY(osc(2).modulate(voronoi(()=> a.fft[2]*Math.sin()).rotate(()=> a.fft[4]*0.2),.11))
//   	.modulateScrollX(osc(.02).modulate(noise(()=> a.fft[2]*Math.sin()).rotate(0.2),.11))
	.scale(()=> ((0.4+a.fft[0])*0.8)).color(0.99,1.014,1)
  	.out()

