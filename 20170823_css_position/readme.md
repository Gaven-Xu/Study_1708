<!-- TOC -->

- [1. position](#1-position)
    - [1.1. relative](#11-relative)
    - [1.2. absolute](#12-absolute)
    - [1.3. fixed](#13-fixed)
- [2. 块元素居中](#2-块元素居中)
- [3. 行内元素居中](#3-行内元素居中)
- [4. 拓展](#4-拓展)
- [cursor](#cursor)

<!-- /TOC -->
# 1. position

css属性

    static      静止定位
    relative    相对定位
    absolute    绝对定位
    fixed       固定定位

1. 除static以外的所有定位方式，都要结合top right bottom left四个属性来用,以后在学transition的时候，只有同属性，并且连续的值，才能过渡
2. left优先级大于right，top大于bottom
3. 除static以外的所有定位方式，都支持z-index,z-index不支持小数和负数，不需要单位，越大越在上层
4. 其它所有的定位方式，z-index都比static的大


## 1.1. relative

1. 相对原来的位置进行**偏移**，还占据原来的位置，不会对其它任何元素产生影响。原来的位置，作为“参照物”
2. left 代表 从left 往对立方向的偏移量

## 1.2. absolute

1. 相对参照物的**距离**，不再占据原来的位置，下面的元素可以顶上去。从内往外找，找到第一个有position属性，并且不是static的祖先元素，以它作为参照物。一般，我们参照物设置position:relative
2. lelt 代表，距离参照物，左侧的距离
3. absolute 在元素未设置高宽，可以通过四个方向属性拉伸元素
4. 一旦元素absolute了，就会变成块元素，而且，无法通过display:block改回成行内元素 

## 1.3. fixed

其它各项与absolute一致，但是参照物是窗口

# 2. 块元素居中

    margin 可以让元素偏移，会对周围元素产生影响
    margin:0 auto; 可以实现左右居中

    absolute 在元素未设置高宽，可以通过四个方向属性拉伸元素


1. 父元素和子元素都已知高宽

    设置子元素，固定的margin
    设置父元素，固定的padding

2. 父元素高宽不确定，子元素已知高宽

    父元素，relative，子元素，absolute，left和top:50%，margin-left和margin-top分别是子元素一半的宽高

    子元素，relative，left和top:50%，margin-left和margin-top分别是子元素一半的宽高。（会继续占据原来的位置，因此不常用）

3. 父容器已知高宽，子元素不确定高宽
3. 父容器不确定高宽，子元素不确定高宽

```css
.father{
    position:relative;
}
.son{

    width:50px;
    height:50px;

    position:absolute;

    top:0;
    right:0;
    bottom:0;
    left:0;
    
    margin:auto;
}
```
    

# 3. 行内元素居中

    左右，用text-align
    上下，用line-height

    vertical-align

# 4. 拓展

```css
.center-container{
    text-align: center;
}
.center-container::before,.center-container::after{
    content:"";
    height: 100%;
}
.center-container::before,.center-container::after,.center-box{
    display: inline-block;
    vertical-align: middle;    
}
```
# cursor

光标

text        文本输入光标
default     默认光标
pointer     手势，点击光标，按钮，链接