import Mock from 'mockjs'
import cateList from './feilei_list'

Mock.mock('/catelist',{
  code: 0,
  data:cateList
})
