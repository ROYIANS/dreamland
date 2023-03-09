/*
 * 过期
 * @Author: ROYIANS
 * @Date: 2023/2/8 15:55
 * @Description:
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
export default function initRem() {
  // 基准大小
  const baseSize = 190;
  // 设置 rem 函数
  const setRem = () => {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    const width = document.documentElement.clientWidth || document.body.clientWidth;
    const scale = width <= 640 ? width/1920 : 640/1920;
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  }
  // 初始化
  setRem()
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem()
  }
}
