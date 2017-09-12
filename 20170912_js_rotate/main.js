(function(){

    var container = document.querySelector('.container');

    var centerX = container.offsetLeft + container.offsetWidth/2;
    var centerY = container.offsetTop + container.offsetHeight/2;

    var backImg = document.querySelector('.container .backImg');
    var borderLine = document.querySelector('.container .borderLine');
    var wordsBox = document.querySelector('.container .box');
    var words = document.querySelector('.container .words');

    var timer1;
    var timer2;
    var timer3;
    var timer4;
    var timer5;
    var timer6;

    var sudu = 200;

    /**
     * 
     * @param {number} x 鼠标的x坐标 
     * @param {number} y 鼠标的y坐标
     */
    var setAllPosition = function(x,y,rate){
        var perX = rate*(x - centerX)/container.offsetWidth;
        var perY = rate*(y - centerY)/container.offsetHeight;

        backImg.style.transform = 'rotateY('+(15*perX)+'deg) rotateX('+(-15*perY)+'deg)';
        
        borderLine.style.transform = backImg.style.transform;
        borderLine.style.left = 15+10*perX+'px';
        borderLine.style.top = 15+10*perY+'px';
        
        // words.style.transform = backImg.style.transform;
        words.style.left = 15*perX+'px';
        words.style.top = 15*perY+'px';
    }

    container.onmousemove = function(e){
        wordsBox.style.bottom = '22px';
        wordsBox.style.opacity = '1';
        borderLine.style.opacity = "1";
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        backImg.style.transition = ' opacity 0.5s';
        borderLine.style.transition = 'opacity 0.5s';
        words.style.transition = 'opacity 0.5s';
        setAllPosition(e.clientX,e.clientY,1);
    }

    container.onmouseout = function(e){
        wordsBox.style.bottom = '-10px';
        wordsBox.style.opacity = '0';
        borderLine.style.opacity = "0";
        
        var tas = 'opacity 0.5s' +',transform '+sudu/1000 +'s'+',left '+sudu/1000 +'s'+',top '+sudu/1000 +'s';
        backImg.style.transition = tas;
        borderLine.style.transition = tas;
        words.style.transition = tas;

        setAllPosition(e.clientX,e.clientY,-0.8);

        timer1 = setTimeout(function(){
            setAllPosition(e.clientX,e.clientY,0.7);
            timer2 = setTimeout(function(){
                setAllPosition(e.clientX,e.clientY,-0.6);
                timer3 = setTimeout(function(){
                    setAllPosition(e.clientX,e.clientY,0.5);
                    timer4 = setTimeout(function(){
                        setAllPosition(e.clientX,e.clientY,-0.3);
                        timer5 = setTimeout(function(){
                            setAllPosition(e.clientX,e.clientY,0.1);
                            timer6 = setTimeout(function(){
                                setAllPosition(e.clientX,e.clientY,0);
                            },sudu)
                        },sudu)
                    },sudu)
                },sudu)
            },sudu)
        },sudu)



    }

})()