
const meng = {
  isSleepy: false,
  sleep: _ => {
    meng.isSleepy = false
  },
  getUp: _ => {
    meng.isSleepy = true
  },
  newDay:_=>{
    setInterval(() => {
      meng.isSleepy ? meng.sleep() : meng.getUp()
    }, Math.random() * 36000);

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

const bear={
  whatAreYouDoing:_=>{
    setInterval(() => {
      bear.dosth()
    }, Math.random() * 3600);
  },
  dosth:_=>{
    console.log('what are you doing?')
    console.log(`${meng.isSleepy?'I\'m sleepy':'...'}`)
  }
}

meng.newDay()
bear.whatAreYouDoing()
