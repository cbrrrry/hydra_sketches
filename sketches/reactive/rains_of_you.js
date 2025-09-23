// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

//rains of you
//by cbrrrry

// Initialize the camera
s0.initCam()

// Display camera with radial/fisheye warping

src(s0)
  .posterize(10)
  .modulate(
    // Create a radial pattern that warps from center outward
    gradient(10).repeat(-6,-3,).kaleid(Math.sin(time)*10).repeat(50*Math.tan(time*0.5))
    .scale(0.8)
  , 0.09) // warp strength
  .mask(
    // Animated, shape-changing raindrops
    shape(40, 
      () => 0.9 + Math.sin(time * 2) * 0.1, // pulsing size
      () => Math.sin(time * 1.5) * 0.3 + 0.8 // changing roundness (makes them more oval/teardrop)
    )
    // Make them drip downward
    .scroll(0, () => time * 0.1)
    // Add some horizontal drift
    .scroll(() => Math.sin(time * 0.5) * 0.02, 0)
  )
  .repeat(2,1)
  .modulate(osc(.1, 0.2))
  .out()
