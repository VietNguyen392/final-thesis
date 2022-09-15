import React from 'react';
import useStyles from 'hooks/useStyles';
import { Navbar, Group, ScrollArea, Button } from '@mantine/core';
import {
  IconLogout,
  IconSettings,
  IconAdjustments,
  IconLayoutDashboard,
  IconUsers,
} from '@tabler/icons';
import { Navigations } from 'utils/interface';
// let navigation: Navigations | any = new Array()
let navigation: any = [
  { link: '', label: 'Trang chủ', icon: IconLayoutDashboard },
  { link: '', label: 'Quản lý người dùng', icon: IconUsers },
  { link: '', label: 'Thiết lập', icon: IconSettings },
];
const SideBar = () => {
  const [active, setActive] = React.useState('Trang chủ');
  const { classes, cx } = useStyles();
  const links = navigation.map((item: string | any) => {
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>;
  });
  return (
    <>
      <Navbar height={700} width={{ sm: 300 }} p="md">
        <Navbar.Section grow>
          {/* <Group className={classes.header} position="apart">

          </Group> */}
          {links}
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default SideBar;
