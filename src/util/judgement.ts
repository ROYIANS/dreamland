/*
 * @Author: ROYIANS
 * @Date: 2023/3/9 19:34
 * @Description:
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
/**
 * 判断是否客户端
 * @returns {boolean}
 */
export const isBrowser = () => typeof window !== 'undefined'

/**
 * 判断是否移动端
 * @returns {boolean}
 */
export const isPortableDevice = () => !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

/**
 * 判断是否苹果设备
 * @returns {boolean}
 */
export const isApple = () => !/iPhone|iPad|iPod|Mac/i.test(navigator.userAgent)
