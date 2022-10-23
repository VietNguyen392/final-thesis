import React, { ReactNode, useEffect } from 'react';
import {
  AppShell,
  Header,
  useMantineTheme,
  Burger,
  MediaQuery,
  Navbar,
  Text,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks';
import { IconUserCircle } from '@tabler/icons';
import { NavbarChild } from './SideBar';
import { routes } from 'utils';
import ScrollTop from 'components/common/ScrollTop';
const AppLayout = ({ children }: { children?: ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useMantineTheme();
  const { isAuth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isAuth) {
      router.replace(routes.login);
    }
  }, [isAuth, router]);
  return (
    <>
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
            <NavbarChild onClose={() => setOpen(false)} />
          </Navbar>
        }
        header={
          <Header height={60} p="md">
            <section
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
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
              <Text size="lg">Trang Quản Trị Viên </Text>
            </section>
          </Header>
        }
      >
        {children}
        <ScrollTop />
      </AppShell>
    </>
  );
};

export default AppLayout;
