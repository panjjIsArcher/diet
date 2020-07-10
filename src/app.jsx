import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
class App extends Component {
  config = {
    pages: [ 
      'pages/home/home',
      'pages/index/index',//第一项默认是首页
     
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarTitleText: 'diet',//导航标题
      navigationBarTextStyle: 'white',//导航字体颜色
      navigationBarBackgroundColor:"#000" ,//导航背景色
      enablePullDownRefresh:true //是否开启下拉页面刷新
    },
    tabBar:{
      borderStyle:'white',
      position:'bottom',
      color:"#000",
      selectedColor:"#02A7F0",
      backgroundColor:"#fff",
      list:[
        { text:'首页', pagePath: 'pages/index/index' },
        { text:'家', pagePath: 'pages/index/index' },
      ]
    }
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}
Taro.render(<App />, document.getElementById('app'))
