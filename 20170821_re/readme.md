<!-- TOC -->

- [1. 元素，块元素，行内元素](#1-元素块元素行内元素)
    - [1.1. 字体标签](#11-字体标签)
- [2. CSS](#2-css)
- [3. css:font属性](#3-cssfont属性)
    - [3.1. 相关属性](#31-相关属性)
        - [3.1.1. 注意：能不能使用该属性，让元素，相对外容器，上下居中](#311-注意能不能使用该属性让元素相对外容器上下居中)
- [4. 盒模型](#4-盒模型)
    - [4.1. padding](#41-padding)
    - [4.2. margin](#42-margin)
        - [4.2.1. 注意经典问题，外边距坍塌、外边距合并](#421-注意经典问题外边距坍塌外边距合并)
    - [4.3. border](#43-border)
- [5. overflow](#5-overflow)
- [6. 作业](#6-作业)

<!-- /TOC -->
# 1. 元素，块元素，行内元素

1. 块元素

    设置宽高，可以直接生效
    从上到下排
    默认宽度，百分之百

2. 行内元素

    默认设置高宽无效
    从左到右
    默认宽度，内容宽度

## 1.1. 字体标签

b strong
i
u
del
sub
sup

# 2. CSS

```css
选择器{
    属性名:属性值;
}
```

    * 通配符选择器
    div 标签选择器，选择所有的该标签
    .item class选择器
    # id选择器

# 3. css:font属性

    所有电脑浏览器，默认字体大小16px
    chrome浏览器，最小支持12px，所以一般font-size不要小于它

    font-size
            单位    px
            em      从内往外找，找到最近的，具有font-size属性的标签，作为参照物
            rem     root em 使用html标签作为参照物，可以用来进行手机端等比放大

            这里提到的参照物，用来设置font-size属性
            但是，使用em或者rem的，不一定是font-size属性

    line-height
            设置行高，文字会在行高里面上下居中，因此这也是我们做上下居中的重要方法之一

    font-family
            字体
            逗号隔开，
            中文要加引号
            英文直接写

            css3 可以设置自定义字体，这个字体，用户的电脑不需要安装
        
    font-weight
            400-900
            normal < 500 < bold

            常设置bold，或者不设置

    font-style
            italic      让支持斜体的字体，按斜体显示
            oblique     倾斜体，如果不支持倾斜体，则用italic代替

    

```css
.box{
    font:italic bold 24px/48px "宋体",Arial;
}
```

## 3.1. 相关属性
    color               设置字体颜色
    text-align          相对于外容器,文字左右对齐 left center right

    vertical-align      文字与文字之间，文字垂直对齐 top middle bottom

    text-indent         首行缩进


    white-space: nowrap;        换行：不换行
    width: 100px;               宽度
    overflow: hidden;           内容超出：隐藏
    text-overflow: ellipsis;    文字超出：省略符。 默认叫clip，裁剪
    一组属性，实现，超出文字，用省略号显示
    
### 3.1.1. 注意：能不能使用该属性，让元素，相对外容器，上下居中

# 4. 盒模型

    content(width,height)     padding     border      margin

    标准盒模型：一个盒子的尺寸，是 content+padding+border
                                padding 和 border 都是往外撑开

    怪异盒模型（不要轻易使用）：盒子的尺寸，就是设置的width和height
                                padding 和 border 向内挤压，直到padding和border的和，超过了width和height


## 4.1. padding

    padding:20px                   上
    padding:10px 40px;             上，右
    padding:10px 40px 20px;        上，右，下
    padding:10px 20px 30px 40px;   上，右，下，左

    缺省值，用对称方向填充

## 4.2. margin

    格式与padding一模一样

### 4.2.1. 注意经典问题，外边距坍塌、外边距合并

    1. 相邻元素，相邻的margin会合并
    2. 父元素margin，与内部第一个或最后一个元素的margin
    3. 空元素，没有height、min-height、border、padding的空元素，自己的margin会与自己的合并

```html
<div class="father">
    <div class="son">

    </div>
</div>
```

```css
.father{
    width: 200px;
    height: 200px;
    background-color: #880;
}
.son{
    width: 100px;
    height: 100px;
    background-color: #f00;
}   
```

1. father元素，设置overflow:hidden(野路子)
2. padding 1px 、 border-width 1px 、空元素 height 1px(不完美)
3. 增加空元素 overflow hidden(近似完美)
4. 伪元素 模仿空元素,给父元素的::before伪元素写

```css
    .clear-top::before,.clear-top:before {
        content: "";
        display: block;
        overflow: hidden;
    }
    .clear-bottom::after,.clear-bottom:after{
        content:"";
        display: block;
        overflow: hidden;
    }
```

## 4.3. border
    边框

    border:3px solid #f00;

    border-top:3px solid #f00;

    border-width:10px 20px 30px 40px
    border-style:
    border-color:

    border-top-color:
    
# 5. overflow

    可以展开为overflow-x overflow-y，分别是横向和纵向 

    hidden      超出隐藏
    visible     默认，超出显示
    scroll      超出，滚动，会出现滚动条

    
# 6. 作业

彭宇航：
    不看代码，自己把上次的复选框练习写出来