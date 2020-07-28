/**
 * 日期格式化函数
 * @param {*} time 时间戳
 */
export function formatDate(time){
    if(!time){
        return ""
    }
    let date  = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +
    ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}
/**
 * 防抖函数
 * @param {function} fn 执行函数
 * @param {number} delay 延迟时间  
 */
export function debounce(fn,delay){
    let timer = null 
    return ()=>{
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)
    }
}