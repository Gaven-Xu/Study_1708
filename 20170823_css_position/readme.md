# position

css属性

    static      静止定位
    relative    相对定位
    absolute    绝对定位
    fixed       固定定位

1. 除static以外的所有定位方式，都要结合top right bottom left四个属性来用,以后在学transition的时候，只有同属性，并且连续的值，才能过渡
2. 除static以外的所有定位方式，都支持z-index,z-index不支持小数和负数，不需要单位，越大越在上层
3. 其它所有的定位方式，z-index都比static的大


## relative

1. 相对原来的位置进行**偏移**，还占据原来的位置，不会对其它任何元素产生影响。原来的位置，作为“参照物”
2. left 代表 从left 往对立方向的偏移量

## absolute

1. 相对参照物的**距离**，不再占据原来的位置，下面的元素可以顶上去。从内往外找，找到第一个有position属性，并且不是static的祖先元素，以它作为参照物。一般，我们参照物设置position:relative
2. lelt 代表，距离参照物，左侧的距离

## fixed

其它各项与absolute一致，但是参照物是窗口