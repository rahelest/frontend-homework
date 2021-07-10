import { Company } from './types'
import styled from '@emotion/styled'

const CompanyLink = ({ name }: Company) => (
  <Name>{name}</Name>
)

export default CompanyLink

const Name = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.2px;
  padding: 12px 16px;

  &:hover {
    background-color: ${_colors.grey1};
  }

  &:active {
    background-color: ${_colors.grey2};
  }
`
