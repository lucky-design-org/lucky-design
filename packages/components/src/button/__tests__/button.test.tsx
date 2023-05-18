import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'

import Button from '../button.vue'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  test('create', () => {
    const wrapper = mount(() => <Button type="primary" />)

    expect(wrapper.classes()).toContain('primary')
  })

  it('size', () => {
    const wrapper = mount(() => <Button size="lg" />)

    expect(wrapper.classes()).toContain('lg')
  })

  it('plain', () => {
    const wrapper = mount(() => <Button plain={true} />)

    expect(wrapper.classes()).toContain('plain')
  })

  it('round', () => {
    const wrapper = mount(() => <Button shape="round" />)
    expect(wrapper.classes()).toContain('round')
  })

  it('circle', () => {
    const wrapper = mount(() => <Button shape="circle" />)

    expect(wrapper.classes()).toContain('circle')
  })

  test('render text', () => {
    const wrapper = mount(() => <Button>{{ default: () => AXIOM }}</Button>)

    expect(wrapper.text()).toEqual(AXIOM)
  })

  it('disabled', async () => {
    const wrapper = mount(() => <Button disabled={true} />)

    expect(wrapper.classes()).toContain('disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
