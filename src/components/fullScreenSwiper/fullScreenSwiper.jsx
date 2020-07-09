import Taro , { Component } from '@tarojs/taro';
import { View, Image ,Text } from '@tarojs/components';
import "./fullScreenSwiper.less";

export default class FullScreenSwiper extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs:[
        { src:require("@/assets/img/wyj.jpg"), id:1 },
        { src:require("@/assets/img/wyj2.jpg"), id:2 },
        { src:require("@/assets/img/wyj3.jpg"), id:3 }
      ],
      ind:0
    }
  }
  changeImg= (index) => { //点击轮播点，可以切换轮播图
    if(index != this.state.ind){
      this.setState({
        ind:index
      })
    }
  } 
  touchMove= (e) => {
    console.log(e)
  }
  render(){
    const { imgs, ind } = this.state;
    //首屏轮播
    const Img = imgs.map((el,index) => <Image 
      className='img-li' 
      src={el.src} 
      key={el.id} 
      mode='scaleToFill'
      onTouchStart={()=>this.touchMove}
      style={
        {
          left:`${100*index}vh`
        }
      }
    ></Image>);
    //滑动按钮
    const btn = imgs.map( (el,index) => <Text 
      onClick={() => this.changeImg(index)} 
      key={el.id} 
      className={`mini-btn ${ind == index?'long-btn':''}`}
    ></Text> );
    return (
      <View>
        <View className='imgs'>{Img}</View>
        <View className='btn-group'> { btn } </View>
      </View>
    )
  }
  
}