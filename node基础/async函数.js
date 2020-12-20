async function fn() {
  return '徐毅叶'
}

async function fun() {
  const a = await fn()
  console.log(a);
}

fun()