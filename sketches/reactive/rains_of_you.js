// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

//rains of you
//by cbrrrry

// Initialize the camera
s0.initCam()

// Display camera with radial/fisheye warping
src(s0)
  .modulate(
    // Create a radial pattern that warps from center outward
    gradient(10).repeat(-10,-10,).kaleid(11).repeat(50)
    .scale(0.8)
  , 0.1) // warp strength
  .mask(shape(40, 0.9)).repeat(3,1).modulate(osc(0.1, 0.2))
  .out()
