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
import shallow from 'zustand/shallow';
const navigations = [
  {
    id: 1,
    link: routes.home,
    label: 'Bảng điều khiển',
    icon: IconLayoutDashboard,
  },
  {
    id: 2,
    link: routes.manageRoom,
    label: 'quản lý phòng khách sạn',
    icon: IconBuildingSkyscraper,
  },
  {
    id: 3,
    link: routes.manageBooking,
    label: 'quản lý đơn đặt phòng',
    icon: IconBrandBooking,
  },
  {
    id: 4,
    link: routes.setting,
    label: 'Cài đặt',
    icon: IconAdjustmentsAlt,
  },
];
type TypeNav = {
  onClose: () => void;
};
export function NavbarChild({ onClose }: TypeNav) {
  const router = useRouter();
  const auth = useAuth();
  const data = auth.user.user;
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
              {/* <Text>{data.fullName}</Text>
              <Text>{data.email}</Text> */}
            </div>
            <IconLogout
              size={15}
              stroke={1.5}
              onClick={() => auth.logout(auth.user.access_token)}
            />
          </Group>
        </div>
      </Navbar.Section>
    </>
  );
}
