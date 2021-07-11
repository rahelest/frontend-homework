import { shallow } from 'enzyme'
import { DropdownLink } from './DropdownLink'

describe('<DropdownLink />', () => {
  const toggleDropdownMenuVisibilityMock = jest.fn()

  const render = (props) =>
    shallow(
      <DropdownLink
        selectedCompany={{ id: 1, name: 'Dummy company' }}
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
        {...props}
      />,
    )

  it('renders without dropdown menu', () => {
    expect(render({ isDropdownMenuVisible: false })).toMatchSnapshot()
  })

  it('renders with dropdown menu', () => {
    expect(render({ isDropdownMenuVisible: true })).toMatchSnapshot()
  })

  it('calls toggleDropdownMenuVisibility when nav link is clicked', () => {
    const component = render({ isDropdownMenuVisible: false })
    component.find('[data-test-nav-link]').simulate('click')

    expect(toggleDropdownMenuVisibilityMock).toHaveBeenCalled()
  })
})
