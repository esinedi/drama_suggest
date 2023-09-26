// 批量导入mock模块
let mockMoudles: any[] = []
// 导入同一文件夹下的mock数据
const modules = import.meta.globEager('./*.ts');
Object.keys(modules).forEach(i => {
  mockMoudles.push(i)
})
// 导出数据
export default mockMoudles