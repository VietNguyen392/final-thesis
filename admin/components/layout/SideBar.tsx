import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Avatar, Text, Group, UnstyledButton } from '@mantine/core';
import {
  IconDoor,
  IconLogout,
  IconLayoutDashboard,
  IconBrandBooking,
  IconBuildingSkyscraper,
  IconAdjustmentsAlt,
} from '@tabler/icons';
import useStyles from 'hooks/useStyles';
import { useAuth } from 'hooks';
import { routes, Navigations } from 'utils';

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
  // {
  //   id: 3,
  //   link: routes.manageRoom,
  //   label: 'quản lý phòng',
  //   icon: IconDoor,
  // },
  {
    id: 4,
    link: routes.manageBooking,
    label: 'quản lý đặt phòng',
    icon: IconBrandBooking,
  },
  {
    id: 5,
    link: routes.setting,
    label: 'Cài đặt',
    icon: IconAdjustmentsAlt,
  },
];
type TypeNav = {
  onClose: () => void;
};
export function NavbarChild({ onClose }: TypeNav) {
  const { deAuthenticate } = useAuth();
  const router = useRouter();

  const { classes, cx } = useStyles();
  const links = navigations.map((item) => (
    <span
      className={cx(classes.link, {
        [classes.linkActive]: item.link === router.pathname,
      })}
      onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
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
            <Avatar radius="xl" />
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
