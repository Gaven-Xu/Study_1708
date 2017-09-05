# 网站项目

    前端                  后端 
    客户端                 服务端
    

    前台                  后台
    给用户看的部分         产品的管理系统，它同样具有前端和后端


    通常开发中，前端代码和后端代码并不能独立


    代码混写

    前端代码    服务端脚本/模板引擎      服务端代码
    html       php                     php
    html       jsp/velocity            java

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php echo('<div>123</div>'); ?> php
    <div><?php date();?></div>

    <?php for(10){?>
        <div></div>
    <?php}?>
    
</body>
</html>
```
    
# wordpress

## wamp环境

    wamp amp环境集成软件
    windows     apache      mysql       php
                            moria       运行环境
                网站服务     数据库服务
                iis

    http://localhost:80                 website
    http://localhost:3306               mysql
    http://localhost/phpmyadmin/        mysql管理页面
    数据库名字，还没起
    数据库用户名 root
    数据库密码 

## wordpress文件

style.css   系统指定的文件，各页面共用的css文件，其头部注释，包含了本主题（themes）的基本信息  

index.php   系统指定的，最基础页面，任何页面缺失的时候，都会用它代替。因此，该页面必须包含主循环

header.php  系统指定的php文件，用来写各个页面共用的头部 get_header()

footer.php  系统指定的php文件，用来写各个页面共用的底部 get_footer()

home.php    系统指定页面，首页

archive.php 系统指定页面，分类页面

single.php  系统指定的单页面文件，用来显示文章详情

page.php    系统指定的，默认单页模板，可以自己创建自定义的模板

## 文件拆分
```php
<?php include('header.php')?>
<!-- 

<html>
    <head>  ->  
 -->

a 网站元信息
<?php include('nav.php')?>
<!-- 
    </head>
    <body>
 -->

b
<?php include('footer.php')?>
<!-- 
    </body>
</html>
 -->
```
