import React, { ReactNode } from 'react';
import {
  AppShell,
  Header,
  useMantineTheme,
  Burger,
  MediaQuery,
  Navbar,
  Text,
} from '@mantine/core';
import { IconUserCircle } from '@tabler/icons';
import { NavbarChild } from './SideBar';
const AppLayout = ({ children }: { children?: ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          height={650}
          width={{ sm: 250 }}
          hiddenBreakpoint="sm"
          hidden={!open}
          p="md"
        >
          <NavbarChild />
        </Navbar>
      }
      header={
        <Header height={60} p="md">
          <section
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={open}
                onClick={() => setOpen((o) => !o)}
                size="sm"
                color={theme.colors.blue[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text size="lg">Trang Quản Trị Viên</Text>
          </section>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
