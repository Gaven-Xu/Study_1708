var son = document.getElementById('Son');
var sonTop = 0;
var sonLeft = 0;

setInterval(function(){

    var hv = Math.random()*20-10;
    if(!(sonTop<10&&hv<0)&&!(sonTop>250&&hv>0)){
        sonTop+=hv;
        son.style.top = sonTop + 'px';
    }

    var xv = Math.random()*20-10;
    if(!(sonLeft<10&&xv<0)&&!(sonLeft>360&&xv>0)){
        sonLeft+=xv;
        son.style.left = sonLeft + 'px';
    }

},10);

// var month = prompt('请输入你想查询的月份');

// switch(month){
//     // ===
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":{
//         console.log('您查询的月份有31天');
//         break;
//     }
//     case "2":{
//         console.log("如果今年是闰年，则2月份有29天，否则，只有28天");
//         break;
//     }
//     case "4":
//     case "6":
//     case "9":
//     case "11":{
//         console.log("您查询的月份只有30天");
//         break;
//     }
// }


// 1 3 5 7 8 10 12
// 4 6 9 11
// 2
    

// if( sonLeft>360 || sonTop>260) || sonLeft<0 || sonTop<0 ){ } 

// var max = function(a,b,c){
//     var result = (a>b)?(a>c)?a:c:(b>c)?b:c; 
//     console.log(result);                       
// }

// var min = function(a,b,c){
//     var result = (a<b)  ?  (a<c)?a:c  :  (b<c)?b:c ;
//     console.log(result);              
// }

var qiuYueShu = function(fenzi){
    var count = 0;
    for(var n=2;n<fenzi;n++){
        if(fenzi%n==0){
            count++;
        }
    }
    return count+2;
}

for(var i=2;i<=100;i++){
    // i%10==7?console.log(i):{};
    if(qiuYueShu(i)==5){
        console.log(i+"有5个约数")
    }
}
// 4
// 9999

/**
 * 取某个数的任意一位
 * @param {number} number  用来计算的数字 
 * @param {number} n       需要取的第几位
 *  //678/10 % 10
    //678/100 % 10
    //1678/1000 % 10
    // 任何数字的任何位置，parseInt(n/1000)%10
 */
var quWei = function(number,n){
    var limit = Math.pow(10,n-1);
    if(number>=limit){
        return parseInt(number/limit)%10;
    }else{
        alert('您的数字:'+number+'位数不够'+n+"位")
    }
}

for(var i=100;i<=999;i++){
    var n1,n2,n3;
    var a3 = quWei(i,3);
    var a2 = quWei(i,2);
    var a1 = quWei(i,1);
    if(Math.pow(a3,3)+Math.pow(a2,3)+Math.pow(a1,3)===i){
        console.log("数字"+i+"是一个水仙花数");
    }
}

/**
 * 
 * @param {number} n 我要计算几位数的 自幂数 
 * @param {number} i 一个n位数,从最小数，到最大数
 * @param {number} miHe 一个n位数的，每一位的n次方的和
 */
var ziMiShu = function(n){ // n = 3
    for(var i=Math.pow(10,n-1);i<Math.pow(10,n);i++){
        // i = 123
        var miHe = 0;
        for(var j=1;j<=n;j++){
            var tmp = quWei(i,j); // 取到的一位数
            miHe += Math.pow(tmp,n); // 0 + 27 ;  27+8; 35+1;  36
        }
        if(miHe===i){
            console.log("数字"+i+"是一个自幂数");
        }
    }
}