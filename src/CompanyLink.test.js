import { shallow } from 'enzyme'
import { CompanyLink } from './CompanyLink'

describe('<CompanyLink />', () => {
  const render = (props) =>
    shallow(<CompanyLink company={{ id: 1, name: 'Dummy company' }} {...props} />)

  it('renders name when company is not selected', () => {
    expect(render({ isSelected: false })).toMatchSnapshot()
  })

  it('renders link with checkbox when company is selected', () => {
    expect(render({ isSelected: true })).toMatchSnapshot()
  })
})
