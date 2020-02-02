import ECharts from '../components/ECharts.vue'
import { getPinyinByName } from '../data/zhen'
import buildLineConfig from './config_line'
import buildMapConfig from './config_map'
import chinaMap from '../data/china.json'
import area from './area.json'

export default function buildMapData (province) {
  const mapData = {
    updateTime: area.lastUpdateTime,
    total: null,
    today: null,
    map: null,
    table: null,
    isProvince: false,
    chinaDayList: null
  }

  const provinces = area.areaTree[0].children
  const provincePinyin = getPinyinByName(province)
  const result = []

  if (province) {
    let provinceMap = require(`echarts/map/js/province/${provincePinyin}`)
    ECharts.registerMap(provincePinyin, provinceMap)

    const index = provinces.findIndex(p => {
      return p.name === province
    })

    mapData.isProvince = true
    mapData.total = provinces[index]['total']
    mapData.today = provinces[index]['today']
    mapData.table = provinces[index]['children']

    provinces[index]['children'].forEach(city => {
      result.push({
        name: city.cityName,
        value: city.total.confirm
      })
    })

    mapData.map = buildMapConfig(province, result)
  } else {
    ECharts.registerMap('china', chinaMap)

    provinces.forEach(p => {
      result.push({
        name: p.name,
        value: p.total.confirm
      })
    })

    const xAxis = []
    const dataConfirm = []
    const dataSuspect = []
    const dataDead = []
    area.chinaDayList.forEach(day => {
      xAxis.push(day.date)
      dataConfirm.push(day.confirm)
      dataSuspect.push(day.suspect)
      dataDead.push(day.dead)
    })

    mapData.total = area.chinaTotal
    mapData.today = area.chinaAdd
    mapData.table = area.areaTree[0].children
    mapData.map = buildMapConfig(province, result)
    mapData.chinaDayList = buildLineConfig(xAxis, dataConfirm, dataSuspect, dataDead)
  }

  return mapData
}
