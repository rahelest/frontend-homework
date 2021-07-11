import styled from '@emotion/styled'
import MenuLink from './MenuLink'
import Companies from './Companies'
import _colors from './stylesheets/variables/_colors'

const DropdownMenu = () => (
  <Dropdown>
    <Companies />

    <Group>
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
        href="https://eagronom.com/en/mobile-app/"
      />

      <MenuLink
        text="Community"
        icon="people"
        href="https://www.facebook.com/pg/eagronom/community/"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
        href="https://help.eagronom.com/en/"
      />
    </Group>

    <Group>
      <MenuLink
        text="Settings"
        icon="settings"
        href="/settings"
      />

      <LogoutLink
        text="Log out"
        icon="exit_to_app"
        href="/log-out"
      />
    </Group>
  </Dropdown>
)

export default DropdownMenu

const Dropdown = styled.div`
  background: ${_colors.white};
  border: 1px solid #dcdce0;
  box-shadow: 0 2px 8px rgba(51, 51, 51, 0.24);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  min-width: 302px;

  position: absolute;
  top: 70px;
  right: 14px;
`

const Group = styled.div`
  border-top: 1px solid #e2e2e2;
  padding: 4px 0 3px;
`
const LogoutLink = styled(MenuLink)`
  color: ${_colors.red};
`
