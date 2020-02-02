<template>
  <div>
    <div class="data-statement">
      <div class="statement-title">全国疫情状况</div>
      <div class="update-time">截止 {{updateTime}}</div>
      <div class="shuoming" @click="handleModal"><span>数据说明</span></div>
    </div>

    <e-summary :total="total" :today="today"></e-summary>

    <figure>
      <e-charts
        ref="map"
        :options="map"
        :init-options="initOptions"
        autoresize
        @click="handleClick"
      ></e-charts>
    </figure>

    <figure>
      <e-charts
        ref="line"
        :options="chinaDayList"
        :init-options="initOptions"
        autoresize
        @click="handleClick"
      ></e-charts>
    </figure>

    <div class="section-title">国内病例</div>
    <e-table :data="table"></e-table>
  </div>
</template>

<script>
import buildMapData from '../data/map'
import EAlert from '../components/Alert'
import ETable from '../components/Table.vue'
import ECharts from '../components/ECharts.vue'
import ESummary from '../components/Summary.vue'
import { getNameByPinyin, getPinyinByName } from '../data/zhen'

export default {
  components: {
    ETable,
    ECharts,
    ESummary
  },
  data () {
    return {
      updateTime: '',
      today: {},
      total: {},
      map: {},
      table: [],
      chinaDayList: null,
      provinceName: '',
      initOptions: {
        renderer: 'canvas'
      }
    }
  },
  methods: {
    handleClick (params) {
      let provincePinyin = getPinyinByName(params.name)
      this.$router.push(`/${provincePinyin}`)
    },
    handleModal () {
      EAlert({
        title: '数据说明',
        msg: `
          <div>
            <div>0. 数据爬取自【腾讯新闻】,在原有基础上增加了“省”一级的疫情地图。(仅供学习研究，<a href="https://github.com/border-1px/2019-nCov">[查看源代码]</a>)</div><br>
            <div>以下内容为腾讯数据声明：</div>
            <div>1. 全部数据来源于国家卫健委、各省卫健委以及权威媒体报道。</div><br>
            <div>2. 腾讯新闻的统计方法如下：</div>
            <div>
              a. 国家卫健委公布数据时，全国总数与国家卫健委保持一致。<br>
              b. 各省卫健委陆续公布数据，如果各省数据总和已经超过之前国家卫健委总数，则切换为直接使用各省数据总和。
            </div><br>
            <div>3. 国家卫健委及各省卫健委公布数据的发布时间和统计时间段各不相同，比如国家卫健委公布了最新全国数据，而各省还没有公布各自最新数据，故而会在部分时段出现国家总数不等于分省数据之和。</div>
          </div>
        `
      })
    }
  },
  created () {
    let province = this.$route.path.substr(1)
    this.provinceName = getNameByPinyin(province)
    const {
      updateTime,
      total,
      map,
      table,
      chinaDayList,
      today
    } = buildMapData(this.provinceName)

    this.chinaDayList = chinaDayList
    this.updateTime = updateTime
    this.today = today
    this.total = total
    this.table = table
    this.map = map
  }
}
</script>
