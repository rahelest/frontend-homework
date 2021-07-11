import { shallow } from 'enzyme'
import { CompanyLink } from './CompanyLink'

describe('<CompanyLink />', () => {
  const setSelectedCompanyIdMock = jest.fn()

  const render = (props) =>
    shallow(
      <CompanyLink
        company={{ id: 1, name: 'Dummy company' }}
        setSelectedCompanyId={setSelectedCompanyIdMock}
        {...props}
      />,
    )

  it('renders name when company is not selected', () => {
    expect(render({ isSelected: false })).toMatchSnapshot()
  })

  it('renders link with checkbox when company is selected', () => {
    expect(render({ isSelected: true })).toMatchSnapshot()
  })

  it('calls setSelectedCompanyId when company link is clicked', () => {
    const component = render({ isSelected: false })
    component.find('[data-test-company-link]').simulate('click')

    expect(setSelectedCompanyIdMock).toHaveBeenCalled()
  })
})
