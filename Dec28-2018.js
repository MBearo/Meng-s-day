const _meng={
  sleep:()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        _meng.sleepy=false
        if ('没压力'){
          resolve('舒服');
        } else {
          reject('没睡好');
        }
      }, 1000);
    })
  },
  sleepy:false
}

_meng.sleep().then(value=>{
  _meng.sleep()
  _meng.sleepy=true
}).catch(error=>{
  _meng.sleep()
  _meng.sleepy=true
})