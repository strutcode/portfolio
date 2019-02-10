import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'

function nLenArray(n: number) : number[] {
  return Array(n).fill(0).map((_, i) => i)
}

describe('Views', () => {
  describe('About', () => {
    const component = (About as any).sealedOptions

    it('mounts', () => {
      const wrapper = mount(About, {
        stubs: {
          Hexagon: true,
          RouterLink: true,
        },
      })
    })

    it('provides a short list of confidences', () => {
      const confidencesShort = component.computed.confidencesShort.get
      const context = { confidences: nLenArray(20) }

      expect(confidencesShort.call(context)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  })
})
