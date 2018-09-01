#TaroDemo

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

