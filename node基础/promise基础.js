// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       res('成功')
//     }
//     else {
//       rej('失败')
//     }
//   }, 2000)
// })

// promise.then(result => {
//   console.log(result);
// })
//   .catch(result => {
//     console.log(result);
//   })

function promise() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      if (false) {
        res('成功')
      } else {
        rej('失败')
      }
    }, 1000)
  })
}

promise().then(function (result) {
  console.log(result);
}).catch(function (err) {
  console.log(err);
})