await s0.initImage("https://static.vecteezy.com/system/resources/previews/010/330/087/non_2x/halloween-elements-transparent-free-png.png");

a.show()
a.setBins(5)
a.setSmooth(0.2)
a.setCutoff( cutoff = 3)
src(s0)
  .scale(.1, 1,
         () => window.innerWidth/window.innerHeight)
  .scroll(1, 10,0.1, 0.001)
  .brightness( ()=>a.fft[0]*1)
  .saturate(4)
  .modulateScrollY(osc(9, .1).rotate(0, .3))
  .modulatePixelate( osc( 0.2), ()=>a.fft[4]*10000)
  .add(osc(9, .01, Math.PI / 2)
       .modulatePixelate(voronoi(),
                         [9, 27].ease('easeInOutCubic').fast(.9))
      .rotate(0, -.3), .5)
  .out()

