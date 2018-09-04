# less(常用语法) 快速开始
> 简介: Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。<br/>
> Less 可以运行在 Node 或浏览器端。

css 最好少嵌套

兼容css的语法

## 字符集的申明
> 在使用less的时候首先要在开头添加less的字符集 例如 ```@charset 'utf-8';```
## 注释

+ css中的 /**/
+ // 注解, 该注解在编译的时候会被忽略

## 变量

+ 申明: 使用@去申明变量 ```@bg : #000```
+ 使用: ```{background: @bg}```
+ 作用域 : 生效范围

## map
> less 版本高于3.5
```
#colors(){
  primary: blue;
  success: green;
  warn: yellow;
  info: #bce8f1;
}

.btn{
  .btn-info{
    color: #color[info];
  }
  .btn-warn{
    color: #color[warn];
  }
  .btn-success{
    color: #color[success];
  }
  .btn-primary{
    color: #color[primary];
  }
}
``` 

## 混合
> 引入其他申明的样式的内容, 常应用于浏览器兼容方面的写法

+ 基本使用

```
@padding:15px;
.box{
  padding: @padding;
}
.box2{
  .box; // 这个就叫混合
  padding-bottom: 20px;
}
```

+ 带参

  + 基本用法
  
  ```
  // 接上面的例子
  .box3(@border_width){
    border: @border_width solid #edfabc;
  }
  
  .box4{
    .box3(20px);
  }
  ```
  
  + 默认值
  
  ```
  // 接上面的例子
  .box5(@border_width:10px){
    border: @border_width solid #edfabc;
  }
  
  .box6{
    .box5(20px);
  }
  ```
  
## arguments 变量
> 用的不是很多， 作用就是引入全部的变量(定义的) 

## 匹配模式
> 类似于if判断，但不完全是

```
.triangle{
  width: 0px;
  height: 0px;
  overflow:hidden;
  border-width:10px;
  border-color: red transparent transparent transparent; // 朝上，朝哪边，其余边都透明
  border-style: solid dashed dashed dashed ; // 这个处理是解决IE6浏览器的
}

// 匹配模式
.triangles(bottom, @w:5px, @c:#ccc){
  width: 0px;
  height: 0px;
  overflow:hidden;
  border-width:@w;
  border-color: @c transparent transparent transparent;
  border-style: solid dashed dashed dashed ; // 这个处理是解决IE6浏览器的
}
.triangles(top, @w:5px, @c:#ccc){
  width: 0px;
  height: 0px;
  overflow:hidden;
  border-width:@w;
  border-color: transparent transparent @c transparent;
  border-style:  dashed dashed solid dashed ; // 这个处理是解决IE6浏览器的
}
.triangles(left, @w:5px, @c:#ccc){
  width: 0px;
  height: 0px;
  overflow:hidden;
  border-width:@w;
  border-color:  transparent @c transparent transparent;
  border-style:  dashed solid dashed dashed ; // 这个处理是解决IE6浏览器的
}
.triangles(right, @w:5px, @c:#ccc){
  width: 0px;
  height: 0px;
  overflow:hidden;
  border-width:@w;
  border-color:  transparent transparent transparent @c;
  border-style:  dashed dashed dashed solid; // 这个处理是解决IE6浏览器的
}

.triangle-top{
  .triangle(top);
}
// 对于上面代码重复的部分可以使用
triangles(@_, @w:5px, @c:#ccc){
  // 重复代码
  // 例子中就可以是width、height、overflow的属性
}

```

## 运算
> 基本的四则运算 颜色 像素都可以进行运算，但常用的还是长度的四则运算


## 嵌套
> 常用的是对伪类 子类的嵌套

```
.list{
  background: #ccc;
  list-style: none;
  padding: 0;
  // 下面进行嵌套
  li{
    color: #555;
  }
  a{
    color: #987;
    // &是指的上一层选择器，这里也就是 a
    &:hover{
      cursor: pointer;
    }
  }
  span{
    font-size: 5px;
  }
}
```

## 避免编译
> 使用```~'内容'``` 的方式让less不去编译内容。

## import
> ```@import url``` 的方式可以导入url中的less文件

## extend
```
// 就是形成这样的css
a,li,span{
  font-size: 5px;
}
a{
  &:extend(span);
  // 下面还可一些其他的样式
  color: blue;
}
span{
  font-size: 5px;
}
```
