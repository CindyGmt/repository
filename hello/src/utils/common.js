export default {
    getDate(){
        let nowDate = new Date()
        let Y = nowDate.getFullYear()
        let m = nowDate.getMonth() + 1
        let M = m > 9 ?  m : '0' + m
        let d = nowDate.getDate()
        let D = d > 9 ? d : '0' + d
        let h = nowDate.getHours()
        let H = h > 9 ? h : '0' + h
        let mm = nowDate.getMinutes()
        let MM = mm > 9 ? mm : '0' + mm
        let ss = nowDate.getSeconds()
        let SS = ss > 9 ? ss : '0' + ss
        let date = `${Y}-${M}-${D} ${H}:${MM}:${SS}`
        return date
    }
}