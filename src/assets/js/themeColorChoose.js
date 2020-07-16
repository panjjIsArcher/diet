const themeColor = (status) => {
  if(status == 1){
    return 'bg-color-blue'
  }else if(status == 2){
    return 'bg-color-orange'
  }else{
    return 'bg-color-green'
  }

}
export {
  themeColor
}