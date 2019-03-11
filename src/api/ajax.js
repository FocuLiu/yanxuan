import axios from 'axios'

export default function ajax (url, data = {} , method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    //执行异步文件
    if (method === 'GET') {
      promise = axios.get(url , {params: data})
    }else {
      promise = axios.post(url , data)
    }
    promise.then(response => {
      //请求成功,调用reslove
      resolve(response.data)
    }).catch(error => {
      // 请求失败调用reject
      // reject(error)
      // 统一处理请求错误, 外面使用async/await不用使用try来处理错误
      alert('请求出错' , error.msg);
    })
  })
}
//请求登陆
  async function login () {
    const result = await ajax('/login', {name: 'Tom', pwd: '123'}, 'POST')
  }
