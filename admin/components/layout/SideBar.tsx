import React from 'react';
import { useStyles } from '../../hooks';
import { Navbar,Group,ScrollArea,Button } from '@mantine/core';
import { IconLayoutDashboard } from '@tabler/icons';
const SideBar = () => {
const {classes}=useStyles()
  return <div>
   <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
         <h1 style={{fontSize:'5em'}}>ADMIN</h1>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        {/* <div className={classes.linksInner}>{links}</div> */}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        /> */}
      </Navbar.Section>
    </Navbar>
  </div>;
};

export default SideBar;
