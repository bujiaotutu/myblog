/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-10-16 21:41:57
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-10-16 22:28:23
 * @FilePath: \myblog\src\utils\exportTime.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function getDateTime(){
    // 格式化日对象
    var date = new Date();
    var sign2 = ":";
    var year = date.getFullYear() // 年
    var month = date.getMonth() + 1; // 月
    var day = date.getDate(); // 日
    var hour = date.getHours(); // 时
    var minutes = date.getMinutes(); // 分
    var seconds = date.getSeconds() //秒
    var weekArr = ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var week = weekArr[date.getDay()];
    // 给一位数的数据前面加 “0”
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (day >= 0 && day <= 9) {
      day = "0" + day;
    }
    if (hour >= 0 && hour <= 9) {
      hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
      minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
      seconds = "0" + seconds;
    }
    return {dataTime:year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds,
            year:year,
            month:month,
            day:day,
            hour:hour,
            minutes:minutes,
            seconds:seconds,
            week:week};
}