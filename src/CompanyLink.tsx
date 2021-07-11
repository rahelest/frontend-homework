import { Company } from './types'
import styled from '@emotion/styled'
import { rgba } from 'emotion-rgba'
import _colors from './stylesheets/variables/_colors'

type ExtraProp = {
  isSelected?: boolean
}

const CompanyLink = ({ name, isSelected }: Company & ExtraProp) => {
  if (isSelected) {
    return (
      <SelectedName>
        {name} <i className="material-icons-outlined">check</i>
      </SelectedName>
    )
  }

  return <Name>{name}</Name>
}

export default CompanyLink

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.2px;
  line-height: 20px;

  padding: 12px 7px 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${_colors.grey1};
  }

  &:active {
    background-color: ${_colors.grey2};
  }
`

const SelectedName = styled(Name)`
  background-color: ${rgba(_colors.green, 0.1)};
  color: ${_colors.darkGreen};
  cursor: default;

  i {
    font-size: 20px;
  }

  &:hover,
  &:active {
    background-color: ${rgba(_colors.green, 0.2)};
  }
`
