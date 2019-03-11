import ajax from './ajax'
export const reqCateList = () => ajax('/catelist')

const BASE = '/api'
const url = 'http://m.you.163.com/topic/v1/find/recAuto.json?'

export const reqManuals = (page , size) => ajax(url + `page=${page}&size=${size}&&exceptIds=8250,8319,4035,8166,7852,1487,6965,6410,8303,8331,5867,3438,4037,4024,3463,2876,2747,3413,2081,2082,1487,7318,1004,5821,7696,7710,7949,6696`)
