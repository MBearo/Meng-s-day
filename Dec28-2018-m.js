
const meng = {
  isSleepy: false,
  sleep: _ => {
    meng.isSleepy = false
  },
  getUp: _ => {
    meng.isSleepy = true
  },
  init:_=>{
    setInterval(() => {
      meng.isSleepy ? meng.sleep() : meng.getUp()
    }, Math.random() * 10000);
    
    Object.defineProperty(meng, 'isSleepy', {
      get: _ => {
        return isSleepy;
      },
      set: value => {
        isSleepy = value;
      }
    });
    
    meng.isSleepy = false;
  },
}


module.exports=meng