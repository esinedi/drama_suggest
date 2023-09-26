// 年代信息
export type yearsType = {
    yearsId: number,
    yearsName: string,
}

// 电视剧数据类型
export type moviesType = {
    moviesId: number,
    yearsId: number,
    title: string,
    performer: string[],
    director: string,
    time: string,
    content: string
}

// 搜索类型
export type searchType = {
    yearsId: number[],
    search: string
}