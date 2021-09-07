const {get} = require('./base')
export function getBanner(){
  return get('/api/banner', {type:1})
}
export function getPlaylist(){
  return get('/api/playlist', {limit:15})
}