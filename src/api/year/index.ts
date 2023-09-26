import service from "@/utils/axios";
import { searchType } from '@/store/type/year'

// 获取时代接口
export function getYearsList () {
    return service({
        method:'get',
        url:'/work/years'
    })
}

// 获取电视剧数据接口
export function getMoviesList (data: searchType) {
    return service({
        method:'post',
        url:'/work/movies',
        data: data
    })
}