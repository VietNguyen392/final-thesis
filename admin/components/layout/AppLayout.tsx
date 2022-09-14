import React, { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
const AppLayout = ({ children }: { children?: ReactNode }) => {
  return <AppShell padding="md">{children}</AppShell>;
};

export default AppLayout;
