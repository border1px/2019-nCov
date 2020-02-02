const PINYIN = ['hubei', 'guangdong', 'zhejiang', 'zhongqing', 'hunan', 'anhui', 'beijing', 'shanghai', 'henan', 'sichuan', 'shandong', 'guangxi', 'jiangxi', 'fujian', 'jiangsu', 'hainan', 'liaoning', 'shanxi', 'yunnan', 'tianjin', 'heilongjiang', 'hebei', 'shanxi', 'xianggang', 'guizhou', 'jilin', 'gansu', 'ningxia', 'taiwan', 'xinjiang', 'aomen', 'neimenggu', 'qinghai', 'xicang']
const NAME = ['湖北', '广东', '浙江', '重庆', '湖南', '安徽', '北京', '上海', '河南', '四川', '山东', '广西', '江西', '福建', '江苏', '海南', '辽宁', '陕西', '云南', '天津', '黑龙江', '河北', '山西', '香港', '贵州', '吉林', '甘肃', '宁夏', '台湾', '新疆', '澳门', '内蒙古', '青海', '西藏']

function getNameByPinyin (pinyin) {
  let index = PINYIN.indexOf(pinyin)

  if (index > -1) {
    return NAME[index]
  } else {
    return null
  }
}

function getPinyinByName (name) {
  let index = NAME.indexOf(name)

  if (index > -1) {
    return PINYIN[index]
  } else {
    return null
  }
}

export {
  getNameByPinyin,
  getPinyinByName
}
