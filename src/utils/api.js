/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-10-28 19:41:25
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-14 15:38:41
 * @FilePath: \myblog\src\utils\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {get,post} from './request'
let apiFun = {};
let https = 'http://1.12.56.11';
apiFun.postLogin = p => post(`${https}/getListBySectionId/3`, p)
apiFun.getListById = p => get(`${https}/getListBySectionId/`, p)
apiFun.getMdContentById = p => get(`${https}/getMdContentById/`,p)
export default apiFun;