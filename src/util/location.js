/*
 * @Author: ROYIANS
 * @Date: 2023/3/9 17:16
 * @Description:
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
function getLocation() {
  return new Promise((resolve) => {
    let location = {
      longitude: false,
      latitude: false
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // 显示地理信息
        location = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }
        resolve(location)
      }, (err) => {
        // 错误处理
        switch (err.code) {
          case 1:
            alert("位置服务被拒绝。");
            break;

          case 2:
            alert("暂时获取不到位置信息。");
            break;

          case 3:
            alert("获取信息超时。");
            break;

          default:
            alert("未知错误。");
            break;
        }
        resolve(location)
      })
    } else {
      alert("你的浏览器不支持使用HTML5来获取地理位置信息");
      resolve(location)
    }
  })
}

module.exports = { getLocation }
