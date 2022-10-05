import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Avatar, Text, Group, UnstyledButton } from '@mantine/core';
import {
  IconSettings,
  IconDoor,
  IconLogout,
  IconWorld,
  IconLayoutDashboard,
  IconBrandBooking,
  IconBuildingSkyscraper,
} from '@tabler/icons';
import useStyles from 'hooks/useStyles';
import { useAuth } from 'hooks';
import { routes } from 'utils/routes';
const navigations = [
  {
    id: 1,
    link: routes.home,
    label: 'Bảng điều khiển',
    icon: IconLayoutDashboard,
  },
  {
    id: 2,
    link: routes.manageHotel,
    label: 'quản lý khách sạn',
    icon: IconBuildingSkyscraper,
  },
  {
    id: 3,
    link: routes.manageRoom,
    label: 'quản lý phòng',
    icon: IconDoor,
  },
  {
    id: 4,
    link: routes.manageBooking,
    label: 'quản lý đặt phòng',
    icon: IconBrandBooking,
  },
  // { id: 5, link: routes.stat, label: 'thống kê', icon: IconChartInfographic },
  // { id: 6, link: routes.setting, label: 'cài đặt', icon: IconSettings },
];

export function NavbarChild() {
  const [state, setState] = useState({
    active: 1,
  });
  const { deauthenticate } = useAuth();
  const { active } = state;
  // const {user}=useAuth()
  const { classes, cx } = useStyles();
  const links = navigations.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.id === active,
      })}
      onClick={(event) => {
        event.preventDefault();
        setState((o) => ({ ...o, active: item.id }));
      }}
      key={item.id}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />

      <Link href={item.link}>{item.label}</Link>
    </a>
  ));

  return (
    <>
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <div className={classes.user}>
          <Group>
            <Avatar
              src={
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
              }
              radius="xl"
            />
            <div style={{ flex: 1 }}>
              <Text>Name</Text>
              <Text>abc@email.com</Text>
            </div>
            <IconLogout size={15} stroke={1.5} onClick={deauthenticate} />
          </Group>
        </div>
      </Navbar.Section>
    </>
  );
}
