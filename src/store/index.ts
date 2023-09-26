import { defineStore } from 'pinia'
import { Names } from './stroe-name'

export const useStore = defineStore(Names.TEST, {
    state: () => {
        return {
            name: ''
        }
    },
    // computed 修饰值
    getters: {

    },
    // methods 同步异步都能操作
    actions: {

    }
})