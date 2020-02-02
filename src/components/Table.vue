<template>
  <div class="table">
    <ul class="table-header">
      <li class="item-stress">地区</li>
      <li class="item-stress">新增</li>
      <li>累计确诊</li>
      <li>治愈</li>
      <li>死亡</li>
    </ul>
    <ul class="table-body">
      <li v-for="(item, index) in data" :key="index" class="table-province" @click="expandLine(item.pinyin)">
        <div class="item-stress">{{item.name}}</div>
        <div class="item-stress">{{item.today.confirm}}</div>
        <div>{{item.total.confirm}}</div>
        <div>{{item.total.heal}}</div>
        <div>{{item.total.dead}}</div>
        <ul :id='item.pinyin' class="table-expand table-expand-hidden">
          <li v-for="(it, idx) in item.children" :key="idx" class="table-city">
            <div class="item-stress">{{it.name}}</div>
            <div class="item-stress">{{it.today.confirm}}</div>
            <div>{{it.total.confirm}}</div>
            <div>{{it.total.heal}}</div>
            <div>{{it.total.dead}}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: [Object, Array]
  },
  methods: {
    expandLine (pinyin) {
      const targetDom = document.getElementById(pinyin)

      if (targetDom.classList.contains('table-expand-hidden')) {
        targetDom.classList.remove('table-expand-hidden')
        targetDom.classList.add('table-expand-show')
      } else {
        targetDom.classList.remove('table-expand-show')
        targetDom.classList.add('table-expand-hidden')
      }
    }
  }
}
</script>
