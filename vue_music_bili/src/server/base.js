const axios = require('axios')

export function get(url, params){
  return axios.get(url, {params}).then((res)=>{
    const data = res.data
    return data.result
  }).catch((err)=>{
    console.log(err);
  })
}