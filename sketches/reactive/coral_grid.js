// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//port
//by Carson Berry
//https://cbrrrry.github.io/

a.setBins(10)
osc(2, .5, () => a.fft[5]*2)
    .kaleid([3,4,5,7,8,9,10].fast(0.01))
    .color(0.5, 0.3)
    .colorama(0.4)
    .rotate(0.9,() => a.fft[1]*4)
    .modulateRotate(o0,()=>Math.sin(time) * 0.0003)
    .modulate(o0, 0.99)
    .scale(0.8).modulate(o0, () => a.fft[0]*0.5)
    .out(o0)

