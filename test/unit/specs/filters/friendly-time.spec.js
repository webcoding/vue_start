import friendlyTime from 'src/filters/friendly-time'

describe('filters/friendly-time.js', () => {
  describe('filters: friendlyTime', () => {
    it('friendlyTime: 50', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 50)))
        .to.equal('刚刚')
    })
    it('friendlyTime: 100', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 100)))
        .to.equal('1分钟前')
    })
    it('friendlyTime: 300', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 300)))
        .to.equal('5分钟前')
    })
    it('friendlyTime: 37000', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 3700)))
      .to.equal('1小时前')
    })
    it('friendlyTime: 37000', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 37000)))
      .to.equal('10小时前')
    })
    it('friendlyTime: 86500*1+200', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 86500 * 2 - 100)))
        .to.equal('昨天')
    })
    it('friendlyTime: 86500*2', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 86500 * 2 - 100)))
        .to.equal('2天前')
    })
    it('friendlyTime: 86500*15', () => {
      expect(friendlyTime(parseInt(Date.now() / 1000 - 86500 * 2 - 100)))
        .to.equal('2周前')
    })
  })
})
