import Taro , { Component } from '@tarojs/taro';
import { View, Image ,Text } from '@tarojs/components';
import "./btn.less";
export default class Btn extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { children } = this.props;
    return (<View className="btn">
      { children }
    </View>)
  }
}