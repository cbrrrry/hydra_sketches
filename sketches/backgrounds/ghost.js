await s0.initImage("https://static.vecteezy.com/system/resources/previews/010/330/087/non_2x/halloween-elements-transparent-free-png.png");

a.show()
a.setBins(5)
src(s0)
  .scale(.1, 1, 
         () => window.innerWidth/window.innerHeight)
  .scroll(1, 20, ()=>a.fft(0)*0.1, ()=>a.fft(3)*0.0001)
  .brightness(.10)
//   .saturate(4)
  .modulateScrollY(osc(9, .1).rotate(0, .3))
  .add(osc(9, ()=>a.fft(0)*.01, Math.PI / 2)
       .modulatePixelate(voronoi(), 
                         [9, 27].ease('easeInOutCubic').fast(.9))
      .rotate(0, -.3), .5)
  .out()
