function fn(callback) {
  setTimeout(() => {
    callback('2秒后的黑叶猴')
  }, 2000);
}

fn((n) => {console.log(n)})
