import value2name from 'src/filters/value2name'

describe('filters/value2name.js', () => {
  // 未完成
  it('value2name: [1, 12, 23]', () => {
    expect(value2name('南山区'))
      .to.equal('南山区')
  })
  // describe('name2value: [1, "arr", 23]', () => {
  //   it('array2String: [34]', () => {
  //     expect(array2String([1, 'arr', 23]))
  //       .to.equal('34')
  //   })
  // })
})
