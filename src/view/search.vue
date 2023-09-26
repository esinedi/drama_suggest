<template>
    <div :class="{'page': true, 'active': searchWhat}">
        <div class="box">
            <div class="title">
                站主历史剧推荐{{ Test.name }}
            </div>
            <div class="icons">
                <icon @click="getFlag(item)" v-for="(item, i) in years" :key="i" :item="item"></icon>
            </div>
            <input-icon @on-change="inputChange"></input-icon>
        </div>
        <div class="main" v-if="moviesList.length === 0">
            <div class="empty">
                无数据
            </div>
        </div>
        <div class="main" v-else>
            <card v-for="(item, i) in moviesList" :key="i" :movies="item"></card>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
// pinia 公共数据
import { useStore } from '@/store'
// 类型
import { yearsType, moviesType, searchType } from '@/store/type/year'
// 子组件
import card from '@/components/card.vue'
import Icon from '@/components/icon.vue'
import InputIcon from '@/components/input-icon.vue'
// 数据接口
import { getYearsList, getMoviesList } from '@/api/year'

// 类型继承 interface extends
interface flagType extends yearsType {
    flag: boolean
}
// 年代数据
const years = ref<flagType[]>([])
// 搜索数据列表
const moviesList = ref<moviesType[]>([])
// 搜索框数据
const searchText = ref('')
// 判断是否搜索
const searchWhat = ref<boolean>(false)

// 创建网页之后
onMounted(async ()=> {
    // 获取年代数据
    const { data } = await getYearsList()
    years.value = data.map((item: yearsType) => {
        return {
            ...item,
            flag: false
        }
    })
})
// 公共数据
const Test = useStore()

// 点击年代方法
const getFlag = (obj:flagType) => {
    const index = years.value.findIndex(item => item.yearsId === obj.yearsId)
    years.value[index].flag = !years.value[index].flag
    search(searchText.value)
}
// 接受子组件传出的搜索框值
const inputChange = (str:string) => {
    searchText.value = str
    search(searchText.value)
}

// 搜索方法
const search = (str: string) => {
    const obj:searchType = {
        yearsId: [],
        search: str
    }
    // 获取年代
    obj.yearsId = years.value.map(item => {
        if(item.flag) {
            return item.yearsId
        }
        return -1
    })
    obj.yearsId = obj.yearsId.filter(item => item !== -1)
    getMoviesList(obj).then((res) => {
        moviesList.value = res.data
        searchWhat.value = true
    })
}
</script>

<style lang="less" scoped>
.page{
    box-sizing: border-box;
    padding-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 1s;
    &.active {
        padding-top: 20px;
        .main {
            margin-top: 20px;
            opacity: 1;
        }
    }
}
.box {
    padding: 2rem 1rem;
    width: 440px;
    background: #fff;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s;
    .title{
        font-weight: 600;
        font-size: 20px;
        margin: 1rem 0;
    }
    .icons{
        display: flex;
        .button:last-child{
            margin-right: 0px;
        }
    }
}
.main {
    opacity: 0;
    padding: 2rem 1rem;
    width: 440px;
    max-height: 500px;
    background: #fff;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
    transition: all 1s;
    &::-webkit-scrollbar {
        width: 0;
    }
    .empty{
        font-weight: 600;
        font-size: 20px;
    }
}
</style>