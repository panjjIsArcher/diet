import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { config } from "./config.js";
import FullScreenSwiper from "../../components/fullScreenSwiper/fullScreenSwiper";
import Btn from "../../components/button/btn";
import "./index.less";
import {themeColor} from "../../assets/js/themeColorChoose"
export default class Index extends Component {
  config
  constructor(props){
    super(props);
    this.state = {
      status:2,
      arr: [{title:'每日体重'},{title:'热量查询'},{title:"每月热量"}, {title:'我的'} ]
    }
  }
  render () {
    const { arr,status } = this.state;
    const btns = arr.map(el=> <Btn key={el.key}>{el.title}</Btn> )
    return (
      <View className='index'>
      {/* 首屏滑动 */}
        {/* <FullScreenSwiper /> */}
        <View className={`bg ${themeColor(status)}`}>
          {/* <Text>今日体重控制</Text> */}
          <View className='circle-box'>
            <View className='circle circle-first'></View>
            <View className='circle circle-opa circle-second'></View>
            <View className='circle circle-opa-second circle-third'></View>
          </View>
          {/* <View className='wave'>
            <View className='single-wave wave-move'></View>
          </View> */}
        </View>
        {/* 按钮组 */}
        <View className="btn-group">
          { btns }
        </View>
      </View>
    )
  }
}
