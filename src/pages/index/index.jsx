import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { config } from "./config.js";
import FullScreenSwiper from "../../components/fullScreenSwiper/fullScreenSwiper";
import "./index.less";

console.log(config)
export default class Index extends Component {
  config
  constructor(props){
    super(props);
    const state = {}
  }
  render () {
    return (
      <View className='index'>
      {/* 首屏滑动 */}
        {/* <FullScreenSwiper /> */}
        <View className='bg'>
          {/* <Text>今日体重控制</Text> */}
          <View className='circle-box'>
            <View className='circle circle-first'></View>
            <View className='circle circle-opa circle-second'></View>
            <View className='circle circle-opa-second circle-third'></View>
          </View>
          <View className='wave'>
            <View className='single-wave wave-move'></View>
          </View>
        </View>
      </View>
    )
  }
}
