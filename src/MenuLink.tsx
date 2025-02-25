import styled from '@emotion/styled'
import _colors from './stylesheets/variables/_colors'
import { connect } from 'react-redux'
import { toggleDropdownMenuVisibility } from './actions'

type Props = {
  text: string
  icon: string
  href: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  className?: string
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void
}

export const MenuLink = ({
  icon,
  text,
  href,
  target = '_self',
  className,
  toggleDropdownMenuVisibility,
}: Props & DispatchProps) => (
  <Link
    className={className}
    href={href}
    target={target}
    onClick={toggleDropdownMenuVisibility}
    data-test-menu-link
  >
    <i className="material-icons-outlined">{icon}</i>

    {text}
  </Link>
)

export default connect(undefined, { toggleDropdownMenuVisibility })(MenuLink)

const Link = styled.a`
  align-items: center;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  padding: 6px 16px;
  margin: 4px 0;
  letter-spacing: 0.1px;
  text-decoration: none;

  i {
    font-size: 20px;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${_colors.grey1};
  }

  &:active {
    background-color: ${_colors.grey2};
  }
`
