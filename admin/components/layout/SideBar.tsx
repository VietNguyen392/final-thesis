import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Avatar, Text, Group } from '@mantine/core';
import {
  IconSettings,
  IconDoor,
  IconLogout,
  IconWorld,
  IconLayoutDashboard,
  IconUsers,
  IconChartInfographic,
} from '@tabler/icons';
import useStyles from 'hooks/useStyles';
import { useAuth } from 'hooks';
const data = [
  { id: 1, link: '/home', label: 'Bảng điều khiển', icon: IconLayoutDashboard },
  { id: 2, link: '/setting', label: 'Quản lý người dùng', icon: IconUsers },
  { id: 3, link: '', label: 'quản lý phòng', icon: IconDoor },
  { id: 4, link: '', label: 'quản lý địa điểm', icon: IconWorld },
  { id: 5, link: '', label: 'thống kê', icon: IconChartInfographic },
  { id: 6, link: '', label: 'cài đặt', icon: IconSettings },
];

export function NavbarChild() {
  const [state, setState] = useState({
    active: 1,
  });
  const { active } = state;
  // const {user}=useAuth()
  const { classes, cx } = useStyles();
  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.id === active,
      })}
      href={item.link}
      key={item.id}
      onClick={(event) => {
        event.preventDefault();
        setState((o) => ({ ...o, active: item.id }));
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span style={{ textTransform: 'capitalize' }}>{item.label}</span>
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
            <IconLogout size={15} stroke={1.5} />
          </Group>
        </div>
      </Navbar.Section>
    </>
  );
}
