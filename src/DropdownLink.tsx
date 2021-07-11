import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Company, ReduxState } from './types'
import { getIsDropdownMenuVisible, getSelectedCompany } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

import DropdownMenu from './DropdownMenu'

type ReduxProps = {
  selectedCompany: Company
  isDropdownMenuVisible: boolean
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({
  selectedCompany,
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
}: ReduxProps & DispatchProps) => (
  <>
    <div className="nav__link" onClick={toggleDropdownMenuVisibility} data-test-nav-link>
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">
          Elon Musk
        </div>

        <div className="nav__link-subtext">
          {selectedCompany.name}
        </div>
      </div>

      <i className="material-icons-outlined nav__link-icon">
        settings
      </i>
    </div>

    {isDropdownMenuVisible && <DropdownMenu />}
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    // @ts-ignore
    selectedCompany: getSelectedCompany,
    isDropdownMenuVisible: getIsDropdownMenuVisible,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
