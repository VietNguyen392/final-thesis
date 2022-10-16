import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Avatar, Text, Group, UnstyledButton } from '@mantine/core';
import {
  IconDoor,
  IconLogout,
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
    label: 'Thống kê',
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
];
type TypeNav = {
  onClose: () => void;
};
export function NavbarChild({ onClose }: TypeNav) {
  const [state, setState] = useState({
    active: 1,
  });
  const { active } = state;
  const { deAuthenticate } = useAuth();

  const { classes, cx } = useStyles();
  const links = navigations.map((item) => (
    <span
      className={cx(classes.link, {
        [classes.linkActive]: item.id === active,
      })}
      onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        setState((o) => ({ ...o, active: item.id }));
        onClose();
      }}
      key={item.id}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />

      <Link href={item.link}>{item.label}</Link>
    </span>
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
              <Text>Admin</Text>
              <Text>admin@ad.com</Text>
            </div>
            <IconLogout size={15} stroke={1.5} onClick={() => deAuthenticate} />
          </Group>
        </div>
      </Navbar.Section>
    </>
  );
}
