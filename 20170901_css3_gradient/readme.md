# Gradient
默认都是等距分布
linear-gradient，radial-gradient 色标，颜色位置，用百分比表示

## linear-gradient
```css
.box{
    background-image:linear-gradient(0deg,#00f,#0f0,#f00);
}
```

## radial-gradien
径向渐变，默认不是正圆，按照容器尺寸扭曲
可以通过两组属性控制
circle ellipse
closest-side farthest-corner
```css
.box{
    background-image:radial-gradient(ellipse farthest-corner,#00f 0%,#0f0 50%,#f00 100%);
}
```

# Repeating Gradient
repeating-linear-gradient，repeating-radial-gradient 色标，颜色位置，用px或者其他具体值表示


transparent 透明色