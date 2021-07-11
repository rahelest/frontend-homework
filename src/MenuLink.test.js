import { shallow } from 'enzyme'
import { MenuLink } from './MenuLink'

describe('<MenuLink />', () => {
  const toggleDropdownMenuVisibilityMock = jest.fn()

  const render = (props = {}) =>
    shallow(
      <MenuLink
        icon="phone"
        text="Call me"
        href="/abc"
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
        {...props}
      />,
    )

  it('renders link', () => {
    expect(render()).toMatchSnapshot()
  })

  it('renders link with a provided target', () => {
    expect(render({ target: '_blank' })).toMatchSnapshot()
  })

  it('calls toggleDropdownMenuVisibility when link is clicked', () => {
    const component = render()
    component.find('[data-test-menu-link]').simulate('click')

    expect(toggleDropdownMenuVisibilityMock).toHaveBeenCalled()
  })
})
