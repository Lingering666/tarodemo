"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Taro 是一定要引入的


// 这里的组件是 Taro 的组件 , View 即使用不到也最好引入
// 组件的命名规范符合首字母大写的驼峰命名法

// 通过import 语句引入静态文件, 特别说明的是本地图片在使用前一定要引入

/**
 * Taro 的页面同样是继承自 Component 组件基类，
 * 每一个页面都拥有自己配置 config，这个配置参考自微信小程序的页面配置，
 * 在编译成小程序时，将会生成跟页面JS文件同名的 json 配置文件；
 * 在编译成 H5 时，config 配置中 navigationBarTitleText 将会被用来设置当前页面的标题。
 *
 * 组建与页面的关系，两者类似，组建少了部分方法，
 * 多了componentWillReceiveProps
 * 表示当父组件（或页面）发生更新时将带动子组件进行更新时调用的方法
 */
var ContentComponent = function (_BaseComponent) {
  _inherits(ContentComponent, _BaseComponent);

  function ContentComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContentComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContentComponent.__proto__ || Object.getPrototypeOf(ContentComponent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContentComponent, [{
    key: "_constructor",


    /***********************************/
    /*        生命周期  钩子函数        */

    /***********************************/
    /**
     * 可以基于属性来初始化状态
     * @param props props
     */
    value: function _constructor(props) {
      _get(ContentComponent.prototype.__proto__ || Object.getPrototypeOf(ContentComponent.prototype), "_constructor", this).call(this, props);
    }

    // 小程序中的onLaunch方法会带有一个options的参数，
    // 在Taro中可以使用this.\$router.params的方式访问
    /**
     * 程序在被挂载之前触发, WebSocket 订阅不要再这边执行 推荐使用constructor()来替代。
     * 在微信小程序中这一生命周期方法对应 app 的 onLaunch
     */

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}

    /**
     * 渲染函数 必须要有,
     * JSX 中不能出现js表达式，换句话说就是不能出现 if for之类的语句
     * 但是可以在{}中使用一些简单的表达式达到条件渲染以及循环列表渲染
     * 循环列表渲染的时候一定要加上KEY(兄弟节点中要唯一)
     * boolean, undefined, Null是有效的children，但是并不会被渲染
     * @returns {XML} JSX
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      Object.assign(this.__state, {});
      return this.__state;
    }

    /**
     * 程序挂载之后触发 适合从服务器端加载数据 在该方法里 setState() 将会触发重新渲染。
     * 在微信小程序中这一生命周期方法对应 app 的 onReady
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}

    /**
     * 组建在取消挂载之前触发 对应小程序中的onUnload
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}

    /**
     * 组建展示之后触发
     * 在微信小程序中这一生命周期方法对应 onShow，在H5中同样实现
     */

  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}

    /**
     * 组建在隐藏后触发
     * 在微信小程序中这一生命周期方法对应 onHide，在H5中同样实现
     */

  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}

    /**
     * 装载的组件接收到新属性前调用, 要比较this.props 和 nextProps的，
     * 状态的改变最好通过this.setState() 进行改变
     * @param nextProps
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.props = nextProps;
    }

    /**
     * 组建更新前触发, 小程序中是否有效, 官方没有具体说明, 待验证
     */

  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {}

    /**
     * 组建更新后触发, 小程序中是否有效, 官方没有具体说明, 待验证
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}

    /*******************************/
    /*        小程序专属函数        */

    /*******************************/
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     * 多作用于下拉刷新操作(我猜的)
     */

  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {}

    /**
     * 页面上拉触底事件的处理函数
     * 多作用于上拉加载的操作
     */

  }, {
    key: "onReachBottom",
    value: function onReachBottom() {}

    /**
     * 用户点击右上角转发
     */

  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {}

    /**
     * 页面滚动触发事件的处理函数
     */

  }, {
    key: "onPageScroll",
    value: function onPageScroll() {}

    /**
     * 当前是 tab 页时，点击 tab 时触发
     */

  }, {
    key: "onTabItemTap",
    value: function onTabItemTap() {}

    /***********************************/
    /*           普通函数定义           */
    /***********************************/

  }]);

  return ContentComponent;
}(_index.Component);

ContentComponent.properties = {};
ContentComponent.$$events = [];
exports.default = ContentComponent;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ContentComponent));