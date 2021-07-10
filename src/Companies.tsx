import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies } from './selectors'

import CompanyLink from './CompanyLink'
import styled from '@emotion/styled'
import _colors from './stylesheets/variables/_colors'

type ReduxProps = {
  companies: Array<Company>,
}

export const Companies = ({ companies }: ReduxProps) => (
  <>
    <Title>Your companies</Title>

    {companies.map((company) => <CompanyLink key={company.id} {...company} />)}
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  })
)(Companies)

const Title = styled.div`
  color: ${_colors.grey6};
  font-weight: bold;
  padding: 13px 15px 5px;
  text-transform: uppercase;
`
