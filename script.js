document.addEventListener('DOMContentLoaded', function() {
    
    function animateButton(button) {
       
        button.classList.add('animate__animated', 'animate__bounceIn');
        
       
        button.addEventListener('animationend', () => {
            button.classList.remove('animate__animated', 'animate__bounceIn');
        }); //  ensures the event listener is called only once
    }

   
    const startButton = document.getElementById('startbutton');
    const stopButton = document.getElementById('stopbutton');

    startButton.addEventListener('click', function() {
        animateButton(startButton);
    });

    stopButton.addEventListener('click', function() {
        animateButton(stopButton);
    });
});
        // Animation code ends here // 


const randomcolor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for( let i = 0 ; i < 6 ; i++){
          color += hex[Math.floor(Math.random() * 16 )];
    }
    return color;

}
console.log(randomcolor())


    const startChangingColor = document.getElementById('startbutton');
    const stopChangingColor = document.getElementById('stopbutton');
    const maindivee = document.getElementById('maindiv')
    let stopstuff;
    const start = function(){

        stopstuff =  setInterval(()=>{
            maindivee.style.backgroundColor = randomcolor();
        } , 1000)
        
    }

    const stop = function(){
        clearInterval(stopstuff)
    }
    
    startChangingColor.addEventListener('click' ,start )

    stopChangingColor.addEventListener('click', stop)