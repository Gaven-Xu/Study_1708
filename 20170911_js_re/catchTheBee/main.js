(function(){

    var Bee = document.querySelector('#Bee');
    var ChatBox = document.querySelector('#Bee .chat');
    var time = null;
    var clearChat = function(){
        ChatBox.innerHTML = "";
    }
    var chatArray = ['1','2','3','4','5','6','7','8','9'];
    var lastIndex;

    Bee.addEventListener('mouseover',function(){

        var x = Math.random()*(window.innerWidth-80);
        var y = Math.random()*(window.innerHeight-80);
        Bee.style.left = x+'px';
        Bee.style.top = y+'px';

        clearTimeout(time);
        do{
            var index = parseInt(Math.random()*chatArray.length);
        }while(index===lastIndex);
        ChatBox.innerHTML = chatArray[index];
        lastIndex = index;
        time = setTimeout(clearChat,2000);

    })

})()
