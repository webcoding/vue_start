import name2value from 'src/filters/name2value'

describe('filters/name2value.js', () => {
  // 未完成
  it('name2value: [1, 12, 23]', () => {
    expect(name2value('南山区'))
      .to.equal('南山区')
  })
  // describe('name2value: [1, "arr", 23]', () => {
  //   it('array2String: [34]', () => {
  //     expect(array2String([1, 'arr', 23]))
  //       .to.equal('34')
  //   })
  // })
})
