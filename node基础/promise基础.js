const promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (true) {
      res('成功')
    }
    else {
      rej('失败')
    }
  }, 2000)
})

promise.then(result => {
  console.log(result);
})
.catch(result => {
  console.log(result);
})