/**
 * 在此处配置字体
 */
const BLOG = require('../src/blog.config')

const fontFamilies = {
  sans: [...(BLOG.CUSTOM_FONT ? BLOG.CUSTOM_FONT_SANS : []),
    '"JetBrains Mono"', '"Noto Sans SC"', '"PingFang SC"', '-apple-system', 'sans-serif'],
  serif: [...(BLOG.CUSTOM_FONT ? BLOG.CUSTOM_FONT_SERIF : []),
    'FZNewShuSong', '"Noto Serif SC"', 'SimSun', '"Times New Roman"', 'Times', 'serif',
    '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
  noEmoji: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'sans-serif'
  ]
}
module.exports = { fontFamilies }
