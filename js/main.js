(() => {
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

        function onDown() {
            dragging = true;
            console.log("set to true")
        }

        function onUp() {
            dragging = false;
            console.log("set to false")
        }

        function onMove(event) {
            // console.log("on move called")
            if(dragging==true) {
                // console.log("dragging");
                let x = event.clientX - imageCon.getBoundingClientRect().left;
                console.log(x);
                
                if(x < min) {
                    x=min;
                } else if (x > max) {
                    x = max-10;
                }

                drag.style.left = x + "px";
                left.style.width = x + "px";
            }

    }

        drag.addEventListener('mousedown', onDown);
        document.body.addEventListener('mouseup', onUp);
        document.body.addEventListener('mousemove', onMove);

        
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 450; //how many still frames do we have?
    const images = []; // array to hold all of our images

    //object literal, that has a property of frame to hold the current frame
    const buds = {
        frame: 0
    }

    //run a for loop to populate our images array
    for (let i = 0; i < frameCount; i++) {
        // console.log(i);
        const img = new Image();
        //srting I am trying to create: images/explode_0017.webp
        img.src = `images/explode_${(i + 1).toString().padStart(4, '0')}.webp`;
        images.push(img);
    }

    // console.table(images);

    //we are not actually animating a DOM element, but rather an object which contains a frame count, as the user scrolls we increase the value by 1. We tell GreenSock there is a total of 449 frames to cycle though, so it know when to stop. GreenSock 
    gsap.to(buds, {
        frame: 449,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            markers: true,
            start: "top top"
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render)

    function render() {
        console.log(buds.frame);
        console.log(images[buds.frame]);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }


    

  
})();