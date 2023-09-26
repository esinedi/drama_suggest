<template>
    <div :class="{ 'button': true, 'active': item.flag}">
        <!-- @click="iconClick()" -->
        {{ item.yearsName }}
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
// 年代类型
import { yearsType } from '@/store/type/year'


// 类型继承 interface extends
interface flagType extends yearsType {
    flag: boolean
}

// 接收父组件的值
const props = defineProps<{
    item: flagType
}>()
</script>

<style lang="less" scoped>
.button {
    --color: #560bad;
    font-family: inherit;
    width: 6em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px 0px;
    margin-right: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
    cursor: pointer;
    &.active {
        color: #fff;
        background: var(--color);
    }
    &.before {
        top: -30px;
        left: -30px;
    }
}

.button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
}

.button:hover {
    color: #fff;
}

.button:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
}

.button:hover:before {
    top: -30px;
    left: -30px;
}
</style>