import { shallow } from 'enzyme'
import MenuLink from './MenuLink'

describe('<MenuLink />', () => {
  it('renders link', () => {
    expect(shallow(<MenuLink icon="phone" text="Call me" href="/abc" />)).toMatchSnapshot()
  })

  it('renders link with a provided target', () => {
    expect(
      shallow(<MenuLink icon="phone" text="Call me" href="/abc" target="_blank" />),
    ).toMatchSnapshot()
  })
})
