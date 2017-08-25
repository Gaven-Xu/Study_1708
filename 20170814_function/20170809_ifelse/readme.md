<!-- TOC -->

- [1. 分支（条件分支语句）](#1-分支条件分支语句)
    - [1.1. if else](#11-if-else)
    - [1.2. switch](#12-switch)
    - [1.3. 三目运算](#13-三目运算)
- [2. for循环](#2-for循环)

<!-- /TOC -->
# 1. 分支（条件分支语句）

```js
if(true){

}else if(){

}else if(){

}else{

}


switch(){
    case 条件:{

    }
    case 条件2:{
        
    }
}


(3<5)?console.log(3):console.log(5);
```
## 1.1. if else
## 1.2. switch
## 1.3. 三目运算
条件 ? 如果满足条件，执行这里的代码 : 否则执行这里的代码

switch的特点，默认，如果满足"条件"，执行后面所有的代码；
所以，常见的写法，要加break，终止代码

case的条件，必须是字符串，只有switch的内容，正好等于该字符串，则进入对应的代码

# 2. for循环
```js
for(初始化计数器；继续运行的条件；计数器变化){
}

for(var i=0;i<10;i++){
    console.log(i)
}
```