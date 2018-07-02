//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    imgUrls: [
     "https://thumbnail0.baidupcs.com/thumbnail/340890e760b20efd69e128b9426fa354?fid=346474898-250528-463010661958150&time=1527930000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-pmcxvp%2FAxQ%2Fw%2B2wDVHkDxsirrFs%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=83073290753941423&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
      "https://thumbnail0.baidupcs.com/thumbnail/0265904cf7a050894cba65a7a5d1cb77?fid=346474898-250528-317082770147625&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-btjgcIx5di2reO%2F329rpJJNfZKA%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511892099965826670&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
      "https://thumbnail0.baidupcs.com/thumbnail/3af9e31433537f7dc8acc888e76de797?fid=346474898-250528-87197638634354&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-sCMcjYiMqJhGK9EbXwIvU7wl3hs%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511903474612388915&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
      "https://thumbnail0.baidupcs.com/thumbnail/dcd3a432576b423f161d3c784e6d9b1b?fid=346474898-250528-248580715158615&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-J9gjUdRaQ7cZEroG2KDisbAnZWQ%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511912656524125031&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video"
    ],
    news:[
      {
        "imageUrl":"",
        "title":"天网地网水网环保“一网打尽”？",
        "content":"垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类"
      },
      {
        "imageuil": "",
        "title": "从污泥入手，让黑臭水“脱胎换骨”",
        "content": "垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类"
      },
      {
        "imageuil": "",
        "title": "天网地网水网环保“一网打尽”？",
        "content": "垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类"
      }
    ],
    course: [
      {
        "imageUrl": "https://thumbnail0.baidupcs.com/thumbnail/1d2cd41cda458556969175cf0e514fd6?fid=346474898-250528-530124040380395&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KrTtVBlAfs74NNepPMf%2FykpdSiM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511950719515293613&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
        "num":"666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher":"老路的第二次音频课程",
        "description":"高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "https://thumbnail0.baidupcs.com/thumbnail/1d2cd41cda458556969175cf0e514fd6?fid=346474898-250528-530124040380395&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KrTtVBlAfs74NNepPMf%2FykpdSiM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511950719515293613&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "https://thumbnail0.baidupcs.com/thumbnail/1d2cd41cda458556969175cf0e514fd6?fid=346474898-250528-530124040380395&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KrTtVBlAfs74NNepPMf%2FykpdSiM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511950719515293613&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "https://thumbnail0.baidupcs.com/thumbnail/1d2cd41cda458556969175cf0e514fd6?fid=346474898-250528-530124040380395&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KrTtVBlAfs74NNepPMf%2FykpdSiM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511950719515293613&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "https://thumbnail0.baidupcs.com/thumbnail/1d2cd41cda458556969175cf0e514fd6?fid=346474898-250528-530124040380395&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KrTtVBlAfs74NNepPMf%2FykpdSiM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511950719515293613&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "https://thumbnail0.baidupcs.com/thumbnail/1d2cd41cda458556969175cf0e514fd6?fid=346474898-250528-530124040380395&time=1527818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KrTtVBlAfs74NNepPMf%2FykpdSiM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3511950719515293613&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      }
     
    ]

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
