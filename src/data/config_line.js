export default function buildLineConfig (xAxis, dataConfirm, dataSuspect, dataDead) {
  return {
    title: {
      text: '疫情累计趋势(人)'
    },
    legend: {
      data: ['累计确诊', '累计疑似', '累计死亡'],
      top: '25',
      left: '0'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: xAxis
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '累计确诊',
        type: 'line',
        smooth: true,
        data: dataConfirm
      },
      {
        name: '累计疑似',
        type: 'line',
        smooth: true,
        data: dataSuspect
      },
      {
        name: '累计死亡',
        type: 'line',
        smooth: true,
        data: dataDead
      }
    ]
  }
}
