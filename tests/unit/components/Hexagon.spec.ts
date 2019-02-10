import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Hexagon from '@/components/Hexagon.vue'

describe('Components', () => {
  describe('Hexagon', () => {
    const component = (Hexagon as any).sealedOptions

    it('mounts', () => {
      const wrapper = mount(Hexagon)
    })

    it('creates a 100 unit hexagon', () => {
      const context = { size: 100, borderSize: 0 }

      let points = component.computed.points.get.call(context)
      expect(points).to.equal('100,50 74.99989396362729,93.30133140917715 24.99978792770432,93.3011477485325 1.3492424955074966e-9,49.99963267948969 25.000424146390348,6.69848493251515 75.00053017961483,6.699035914449105')

      points = component.computed.points.get.call({ ...context, vertical: true })
      expect(points).to.equal('93.30123957914695,75.00005301813015 49.99981633974485,99.99999999966269 6.69857676137687,74.99973490878712 6.698944082666181,24.999628873876095 50.00055098076548,3.0358009439623856e-9 93.30160689576235,25.00058320190514')
    })

    it('offsets points according to border size', () => {
      const context = { size: 100, borderSize: 4 }

      const points = component.computed.points.get.call(context)
      expect(points).to.equal('98,50 73.99989820508219,91.56927815281007 25.999796410596147,91.5691018385912 2.0000000012952768,49.9996473723101 26.000407180534737,8.430545535214549 74.00050897243024,8.431074477871142')

      const borderSize = component.computed.borderSize.get.call({ border: 10, size: 200 })
      expect(borderSize).to.equal(5)
    })

    it('sizes the element correctly', () => {
      const computedStyle = component.computed.computedStyle.get.call({ size: 200 })
      expect(computedStyle).to.eql({ width: '200px', height: '200px' })

      const wrapper = mount(Hexagon)
      const style = wrapper.element.style

      expect(style.width).to.equal('140px')
      expect(style.height).to.equal('140px')
    })
  })
})
