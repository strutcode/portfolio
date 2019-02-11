import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Sinon, { SinonStub } from 'sinon'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Contact from '@/views/Contact.vue'

// const axiosMock = new MockAdapter(axios)

describe('Views', () => {
  describe('Contact', () => {
    let wrapper: ReturnType<typeof shallowMount>

    before(() => {
      Sinon.stub(axios, 'get')
    })

    after(() => {
      Sinon.restore()
    })

    beforeEach(() => {
      wrapper = shallowMount(Contact)
    })

    it('submits data to the form API', () => {
      wrapper.setData({
        email: 'test@test.com',
        title: 'Hello',
        message: 'Hello world',
      })

      wrapper.find('form').trigger('submit')

      expect((axios.get as SinonStub).firstCall.args[1]).to.eql({
        params: {
          ifq: '',
          submit: 'Submit',
          'entry.1544901689': wrapper.vm.$data.email,
          'entry.591775328': wrapper.vm.$data.title,
          'entry.1380670021': wrapper.vm.$data.message,
        },
      })
    })
  })
})
