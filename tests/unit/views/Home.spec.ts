import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Sinon from 'sinon'
import Home from '@/views/Home.vue'

describe('Views', () => {
  describe('Home', () => {
    it('mounts', () => {
      const initBackground = Sinon.stub()
      mount(Home, {
        methods: {
          initBackground,
        }
      })

      expect(initBackground.called).to.be.true
    })
  })
})
