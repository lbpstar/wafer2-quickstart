const { mysql } = require('../qcloud')


  
  //mysql('user').insert({ fid: '2', open_id: '2', fname: '1', phone_no: '2' })
  //console.log(`执行了`)
module.exports = async function (ctx, next) {
    //ctx.state.data = { msg: 'Hello World' }
    //mysql('user').insert({ fid: '2', open_id: '2', fname: '1', phone_no: '2' })
    //ctx.state.data = mysql.select().table('users')
  //await mysql.select('fname').from('user').then(res => {
  await mysql('user').insert({ fid: '2', open_id: '2', fname: '1', phone_no: '2' }).then(res => {
    ctx.state.data = res;
  });
  }


