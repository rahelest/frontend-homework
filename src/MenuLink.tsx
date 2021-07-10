import styled from '@emotion/styled'
import _colors from './stylesheets/variables/_colors'

type Props = {
  text: string,
  icon: string,
  className?: string
}

const MenuLink = ({ icon, text, className }: Props) => (
  <Link className={className}>
    <i className="material-icons-outlined">
      {icon}
    </i>

    {text}
  </Link>
)

export default MenuLink

const Link = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  padding: 6px 16px;
  margin: 4px 0;
  letter-spacing: 0.1px;


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
