#Taro 开发的基本知识
>  React 可以使用 ... 拓展操作符来传递属性，但在 Taro 中你不能这么做
> Taro组件的Props不能接受JSF或者组件, 组件名是什么，引入的时候也要叫什么
> 但如果需要存储不用于视觉输出的东西，则可以手动向类中添加其他字段。 

## 组件的相关说明
> Taro 的组建是一个纯的JS类,

### 一些属性
+ 类的属性
  + defaultProps 
+ 实例属性
  + props   只读属性,不可修改
  + state
  + config  官方说明是小程序独属

### 创建方法

```
class ClassName extends Component {
    // 必须
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

>react不同，没有暴露createClass方法

### 生命周期

#### 装载 Mounting

+ constructor()
+ componentWillMount()
+ render()
+ componentDidMount()

#### 更新 Updating

+ componentWillReceiveProps()
+ shouldComponentUpdate()
+ componentWillUpdate()
+ render()
+ componentDidUpdate()

#### 卸载(Unmounting)

+ componentWillUnmount()

#### 其他API

+ setState()
> 该操作是一个异步操作, this.setState(params, callBack)

+ forceUpdate()
> 这两个API均会引起组建的自动更新

## 路由相关说明
> 在 Taro 中，路由功能是默认自带的，不需要开发者进行额外的路由配置

### 基本步骤

1. 我们只需要在入口文件的 config 配置中指定好 pages，
2. 通过 Taro 提供的 API 来跳转到目的页面

### 相关 API 说明
> 以下所有的 API 小程序均支持，部分支持H5和RN

|API                          |promise|H5  | 小程序 | RN    |
|------:|------:|------:|------:|------:|
|Taro.navigateTo(OBJECT)      | 支持  |支持 | 支持 | 支持 |
|Taro.redirectTo(OBJECT)      | 支持  |支持 | 支持 | 支持 |
|Taro.switchTab(OBJECT)       | 支持  |不支持 | 支持 | 支持 |
|Taro.navigateBack(OBJECT)    | 支持  |支持 | 支持 | 支持 |
|Taro.reLaunch(OBJECT)        | 支持  |不支持 | 支持 | 支持 |
|Taro.getCurrentPages(OBJECT) | 支持  |不支持 | 支持 | 不支持 |

##### OBJECT参数说明
> 个人感觉这边的接口是倾向于小程序的，故OBJECT也应该是倾向于小程序的

```
{
  url: '',
  success: function(){},
  fail: function(){},
  complete: function(){},
}
```

> 小程序中的说明：<br/>
> url : 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'<br/>
> url中的参数可以通过 ```this.$router.params``` 但是只可以在目标页的 componentWillMount 生命周期里获取入参
> 其余三个就是回调函数

## 尺寸说明
> 在 Taro 中尺寸单位建议使用```px```、 ```百分比 %``` 。Taro 默认会对所有单位进行转换。
> 微信小程序的时候，尺寸将默认转换为 100rpx，当转成H5时将默认转换为以 rem 为单位的值。
> 若是不希望进行转换，则将px进行大写即可，当然也可以修改配置文件

上述只是对于样式文件的修改，对于行内样式需要通过 ```Taro.pxTransform(10) // 小程序：rpx，H5：rem```进行转换

## 事件渲染

+ Taro 事件绑定属性的命名采用驼峰式写法
+ 在 Taro 中另一个不同是你不能使用 ```catchEvent``` 的方式阻止事件冒泡。你必须明确的使用 ```stopPropagation```
+ 参数的传递 使用bind：```this.deleteRow.bind(this, id)```
+ 方法中的参数: 事件对象e要放在最后

## Ref 的使用
> Refs 提供了一种访问在 render 方法中创建的 DOM 节点（小程序原生组件）或 Taro 组件实例的方式。

### 创建 Refs
> 两种方式: 使用字符串创建 ref 和 通过函数创建 ref

+ 使用字符串创建 ```ref```
> 通过字符串创建 ```ref``` 只需要把一个字符串的名称赋给 ```ref``` prop, 然后就可以通过```this.refs.'name'```的方式获取。

+ 通过函数创建 ref
> 官方推荐

```
  refCat = (node) => this.cat = node // `this.cat` 会变成 `Cat` 组件实例的引用

  render () {
    return <Cat ref={this.refCat} />
  }
```

## 消息机制
> ```Taro``` 提供了 ```Taro.Events``` 来实现消息机制。使用时需要先实例化。

```
import Taro, {Events} from '@tarojs/taro'

const events = new Events()

// 监听一个事件，接受参数
events.on('eventName', (arg) => {
  // doSth
})

// 监听同个事件，同时绑定多个handler
events.on('eventName', handler1)
events.on('eventName', handler2)
events.on('eventName', handler3)

// 触发一个事件，传参
events.trigger('eventName', arg)

// 触发事件，传入多个参数
events.trigger('eventName', arg1, arg2, ...)

// 取消监听一个事件
events.off('eventName')

// 取消监听一个事件某个handler
events.off('eventName', handler1)

// 取消监听所有事件
events.off()
```

全局消息中心

```
import Taro from '@tarojs/taro'

Taro.eventCenter.on
Taro.eventCenter.trigger
Taro.eventCenter.off
```

## 内置环境变量
> 用于判断当前编译类型，目前有 weapp / h5 / rn 三个取值，可以通过这个变量来书写对应一些不同环境下的代码，
> 在编译时会将不属于当前编译类型的代码去掉，只保留当前编译类型下的代码，

### 例子
> 在小程序和 H5 端分别引用不通过资源

```
if (process.env.TARO_ENV === 'weapp') {
  require('path/to/weapp/name')
} else if (process.env.TARO_ENV === 'h5') {
  require('path/to/h5/name')
}
```

## Redux
> 详细配置见<a href="https://nervjs.github.io/taro/redux.html">官方文档</a>

在相关配置完成后, redux就可以在页面（或者组件）中进行使用<br/>
我们将通过 tarojs/redux 提供的 connect 方法将 redux 与我们的页面进行连接。

```
// src/pages/index/index.js
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

import { add, minus, asyncAdd } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='todo'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
      </View>
    )
  }
}
```
> 官方给的案例

connect 方法接受两个参数 ```mapStateToProps``` 与 ```mapDispatchToProps```
+ mapStateToProps: 函数类型，接受最新的 ```state``` 作为参数，用于将 ```state``` 映射到组件的 ```props```
+ mapDispatchToProps: 函数类型，接受最新的 ```state``` 作为参数，用于将 ```state``` 映射到组件的 ```props```
