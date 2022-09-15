import React, { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import SideBar from './SideBar';
const AppLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <AppShell padding="md" navbar={<SideBar />}>
      {children}
    </AppShell>
  );
};

export default AppLayout;
