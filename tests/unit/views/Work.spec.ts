import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Work from '@/views/Work.vue'

describe('Views', () => {
  describe('Work', () => {
    const component = (Work as any).sealedOptions

    it('mounts', () => {
      const wrapper = mount(Work)
    })

    it('provides the current item', () => {
      const context = {
        index: 0,
        entries: [0, 1, 2, 3],
      }
      const currentEntry = component.computed.currentEntry.get

      expect(currentEntry.call(context)).to.equal(0)

      context.index = 3
      expect(currentEntry.call(context)).to.equal(3)
    })

    it('wraps indexes correctly', () => {
      const context = {
        index: 0,
        entries: [0, 1, 2, 3],
      }

      component.methods.prev.call(context)
      expect(context.index).to.equal(3)

      context.index = 3
      component.methods.next.call(context)
      expect(context.index).to.equal(0)
    })
  })
})
