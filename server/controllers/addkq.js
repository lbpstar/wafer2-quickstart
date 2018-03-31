const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
  //if (ctx.state.$wxInfo.loginState) {
  //ctx.state.data = ctx.state.$wxInfo.userinfo
  //ctx.state.data['time'] = Math.floor(Date.now() / 1000)
  //await mysql('kaoqin').insert({ fid: '2', open_id: '2', fname: '1', phone_no: '2' }).then(res => {
  //ctx.state.data = res;
  //});
  //}
  if (ctx.state.$wxInfo.loginState === 1) {
    // loginState 为 1，登录态校验成功
    ctx.state.data = ctx.state.$wxInfo.userinfo
  } else {
    ctx.state.code = -1
  }
}



