import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Sinon from 'sinon'
import VeeValidate from 'vee-validate'
import FormField from '@/components/FormField.vue'

const localVue = createLocalVue()
localVue.use(VeeValidate)

describe('Components', () => {
  describe('FormField', () => {
    it('mounts', () => {
      const wrapper = mount(FormField, {
        sync: false,
        localVue,
        attrs: { name: 'test' },
      })
    })

    it('provides a v-model', () => {
      const { proxy } = (FormField as any).sealedOptions.computed
      const context = { value: 'test', $emit: Sinon.stub() }

      expect(proxy.get.call(context)).to.equal('test')

      proxy.set.call(context, 'test2')
      expect(context.$emit.firstCall.args).to.eql(['input', 'test2'])
    })

    it('supports additional input types', () => {
      const wrapper = mount(FormField, {
        localVue,
        sync: false,
        attrs: {
          name: 'test',
          type: 'textarea',
        },
      })

      expect(wrapper.find('textarea').exists()).to.be.true
    })

    it('passes additional attributes to the native input', () => {
      const wrapper = mount(FormField, {
        localVue,
        sync: false,
        attrs: {
          name: 'test',
          placeholder: 'Native attribute',
        },
      })

      const input = wrapper.find('input')

      expect(input.exists()).to.be.true
      expect(input.attributes('placeholder')).to.equal('Native attribute')
    })

    it('supports validations', () => {
      const wrapper = mount(FormField, {
        localVue,
        sync: false,
        attrs: {
          name: 'test',
          validate: 'email',
        },
      })
      const input = wrapper.find('input')
      const element = input.element as HTMLInputElement

      element.value = 'test'
      input.trigger('input')

      expect(wrapper.find('.error').exists()).to.be.true
    })
  })
})
