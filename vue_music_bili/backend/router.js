// 后端服务
const axios = require('axios')
const baseUrl = 'http://47.103.29.206:3000'
const default_CODE_OK = 200
const CODE_OK = 0
function registerRouter(app) {
  registerBanner(app)
  registerPlaylist(app)
}
// 拿到banner轮播图数据
function registerBanner(app) {
  app.get('/api/banner', (req, res) => {
    const params = req.query
    axios.get(`${baseUrl}/banner`, { params }).then((result) => {
      const resData = result.data
      // console.log(resData);
      // console.log(result);
      if (resData.code == default_CODE_OK) {
        const bannerList = resData.banners
        const banners = []
        for (let i = 0; i < 5; i++) {
          const bannerItem = {}
          bannerItem.pic = bannerList[i].pic
          bannerItem.targetId = bannerList[i].targetId
          bannerItem.targetType = bannerList[i].targetType
          bannerItem.titleColor = bannerList[i].titleColor
          bannerItem.typeTitle = bannerList[i].typeTitle
          bannerItem.url = bannerList[i].url
          banners.push(bannerItem)
        }
        res.json({
          code: CODE_OK,
          result: banners
        })
      } else {
        res.json('出错了')
      }
    })
  })
}

// 歌单数据
function registerPlaylist(app) {
  app.get('/api/playlist', (req, res) => {
    const params = req.query
    axios.get(`${baseUrl}/top/playlist/highquality`, { params }).then((result) => {
      const resData = result.data
      // console.log(resData);
      // console.log(result);
      if (resData.code == default_CODE_OK) {
        const playlists = resData.playlists
        const playlistArr = []
        for (let i = 0; i < playlists.length; i++) {
          const playlistItem = {}
          playlistItem.name = playlists[i].name
          playlistItem.id = playlists[i].id
          playlistItem.coverImgUrl = playlists[i].coverImgUrl
          playlistItem.copywriter = playlists[i].copywriter
          playlistArr.push(playlistItem)
        }
        res.json({
          code: CODE_OK,
          result: playlistArr
        })
      } else {
        res.json('出错了')
      }
    })
  })
}
module.exports = registerRouter