import array2String from 'src/filters/array2String'

describe('filters/array2String.js', () => {
  describe('array2String: [1, "arr", 23]', () => {
    it('array2String: [1, 12, 23]', () => {
      expect(array2String([1, 'arr', 23]))
        .to.equal('1 arr 23')
    })
    it('array2String: [34]', () => {
      expect(array2String([1, 'arr', 23]))
        .to.equal('34')
    })
  })
})
