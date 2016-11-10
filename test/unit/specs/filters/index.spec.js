import {host, timeAgo} from 'src/filters/index'

describe('filters/index.js', () => {
  describe('filters: timeAgo', () => {
    it('timeAgo: 200', () => {
      expect(timeAgo(parseInt(Date.now() / 1000 - 200)))
        .to.equal('3 minutes')
    })
    it('timeAgo: 3700', () => {
      expect(timeAgo(parseInt(Date.now() / 1000 - 3700)))
        .to.equal('1 hour')
    })
    it('timeAgo: 86500*2', () => {
      expect(timeAgo(parseInt(Date.now() / 1000 - 86500 * 2)))
        .to.equal('2 days')
    })
  })
  describe('filters: host', () => {
    it('host: http://www.baidu.com', () => {
      expect(host('https://www.baidu.com'))
        .to.equal('baidu.com')
    })
    it('host: http://m.baidu.com', () => {
      expect(host('https://m.baidu.com'))
        .to.equal('m.baidu.com')
    })
  })
})
