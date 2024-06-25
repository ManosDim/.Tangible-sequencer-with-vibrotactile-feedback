function setup() {
    createCanvas(windowWidth, windowHeight);


    let Slider;
    const g = 20;
    for (var i = 0; i < 20; i++) {
        Slider(i) = createSlider()
        Slider.position(20, 20 + g)
        const g = g + g;
    }
}



function draw () {
        
    // Draw a white background with opacity
    background(0, 50);
    
    // Retreive the data being sent from render.cpp
    let sine = Bela.data.buffers[0];
   
    //let circlePosition = windowWidth/5;
        
    // Draw a circle whose size changes with the value received from render.cpp

    stroke(255);
    strokeWeight(10);
        
    for (var i = 0; i < 20; i++) {
      const Slider.value() = 30 * abs(sine[i]);
      //strokeWeight(thickness);
      //ellipse(circlePosition + (circlePosition*i), windowHeight / 2, 200, 200);
    }   
}