import { shallow } from 'enzyme'
import MenuLink from './MenuLink'

describe('<MenuLink />', () => {
  const render = (props = {}) =>
    shallow(<MenuLink icon="phone" text="Call me" href="/abc" {...props} />)

  it('renders link', () => {
    expect(render()).toMatchSnapshot()
  })

  it('renders link with a provided target', () => {
    expect(render({ target: '_blank' })).toMatchSnapshot()
  })
})
