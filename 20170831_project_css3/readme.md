# 关于做项目
## 分析UI图

    1. 第一原则是百分百还原UI图
    2. 百分百还原UI设计师的意图
    3. 累积常识（比如窗口尺寸改变，滚动条出现，用户异常行为）
    4. 提出自己的意见

## 效率

    1. 分析UI图，明确任务、技术难点
    2. Demo
    3. 累积经验（html结构，css起名规范，不污染，排版经验，预防可能出现的问题和修改）
    4. 调试

## 调试

    1. 看页面效果
    2. 看调试工具
        html对不对
        对应的css选择器有没有出现
        有没有出现多余的选择器
        css属性有没有拼写错误
        css属性有没有被覆盖
        是不是经典问题（浮动清除，定位，外边距合并）
    3. 找人
    4. 累积经验，多看文章

# css3

## border

    border-radius 圆角 px 50%

    box-shadow  盒子阴影 x轴偏移 y轴偏移 模糊大小 拓展大小 阴影颜色
    text-shadow 文字阴影 x轴偏移 y轴偏移 模糊大小 阴影颜色

    border-image
                        source                      slice   repeat
        border-image: url(./border-image.png)       30      round;

## background
## 文本效果

    text-shadow
    word-wrap 跟 white-warp区分开，前者叫单词换行，后者叫空格换行。word-wrap对中文没有意义

## 字体

    @font-face

```css
@font-face {
    font-family: blxqx;
    src: url('./blxqx_font.ttf');
}
.font{
    font: 24px/48px blxqx,Arial;
}
```

## transition
```css
    .font{
        font: 24px/48px blxqx,Arial;
        transition:all 2s ease 0s;
    }
    .font:hover{
        font-size:48px;
        color:#f00;
        transition:all 2s ease 1s;
    }
```
    1. 分为hover和非hover两种状态
    2. 可以分开控制，多条不同属性，不同时间，不同方式，不同延迟的过度
    3. 可以通过精准把握时间做出比较有意思的效果
    4. 过渡，必须有起始状态，终止状态，而且有中间连续状态

## transform
    所有的变形，默认都是以对象的中心来画x,y,z轴

    transform:translate(60px,60px)  平移 从左往右，从上往下
    transform:translate3D(60px,60px,60px)  平移 从左往右，从上往下
    transform:translateX(60px)  平移 从左往右，从上往下
    transform:translateY(60px)  平移 从左往右，从上往下
    transform:translateZ(60px)  平移 从左往右，从上往下

    transform: rotate(90deg);       Z轴旋转
    transform: rotate3d(1,0,1,45deg); x , z 旋转45deg, y不旋转
    transform: rotateZ(90deg);       Z轴旋转
    transform: rotateY(180deg);     
    transform: rotateX(180deg);     

    transform: scale(1);            放大，倍数
    transform: scaleX(1);            放大，倍数
    transform: scaleY(1);            放大，倍数
    transform: scale3d(1,2,3);       x 方向，1倍，y方向，2倍，z,倍

    transform: skew(10deg,10deg);   不做强制要求

## 3d / transform相关

    transform-origin: 修改 坐标远点位置，参数可以使 left rigt top bottom center

    transform-style 和 perspective 都是给父容器设置的

        transform-sytle 规定，子元素之间，按真实3D排列（表现），还是按网页平面表现（标签在后，则，在上一层）

        perspective 可以是一条css属性，也可以是transform属性里的一个方法

            perspective:300px;              给父容器设置，推荐 
            transform:perspective(300px);   直接给需要变形的元素设置

## animation / @keyframes 规则

```css
@keyframes donghua{
    0%{
        width:5px;
        height:5px;
    }
    100%{
        width:100px;
        height:100px;
    }
}

.box{
    animation:donghua 1s ease 1s infinite alternate;
    /*        动画名字 执行时间 时间曲线 动画开始的延迟时间 次数 是否反向*/
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
        <div class="box box4"></div>
    </div>
</body>
</html>
```

```css
.container{
	width: 400px;
	height: 400px;
	background: #000000;
	position: relative;
}
.box{
	width: 200px;
	height: 200px;
	background: hsla(0, 0%, 100%, 0.49);
	position: absolute;
}
.box{
	left: 0;
	top: 0;
	animation: move 2s ease-in-out  infinite;
}
.box1{
	background: #ffffff;
	animation-delay: -0s;
}
.box2{
	animation-delay: -0.5s;
}
.box3{
	animation-delay: -1s;
}
.box4{
	animation-delay: -1.5s;
}
@keyframes move{
	0%{
		left: 0;
		top: 0;
	}
	25%{
		left: 200px;
		top: 0;
	}
	50%{
		left: 200px;
		top: 200px;
	}
	75%{
		left: 0;
		top: 200px;
	}
	100%{
		left: 0;
		top: 0;
	}
}

```
animation-delay 可以是负值，负值可以结合延迟