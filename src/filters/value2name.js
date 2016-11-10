import map from 'array-map'
import find from 'array-find'

// 例子
// { value: '__' } => '北京市 南山区 中关村'
export default function (value, list) {
  let rs = map(value, (one, index) => {
    return find(list, item => {
      return item.value === one
    })
  })
  return map(rs, one => {
    return one.name
  }).join(' ').replace('--', '')
}
