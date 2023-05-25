<template>
  <div>
    <svg :style="{ width: width, height: height }">
      <use xlink-href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // xlink-href属性前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  // svg属性名字
  name: String,
  // 接收父组件传入的颜色属性
  color: {
    type: String,
    default: ''
  },
  // 接收父组件传来的宽度
  width: {
    type: String,
    default: '16px'
  },
  // 接收父组件传来的高度
  height: {
    type: String,
    default: '16px'
  }
})
</script>

<style lang="less" scoped></style>
