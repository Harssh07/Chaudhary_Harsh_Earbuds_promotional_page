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

      

    //Hamburger menu
    
    (function(){

        let button = document.querySelector("#button");
        let burgerCon = document.querySelector("#burger-con");
    
        function hamburgerMenu() {
            burgerCon.classList.toggle("slide-toggle");
            button.classList.toggle("expanded");
        };
    
        button.addEventListener("click", hamburgerMenu, false);		
    })();

  
});


  
