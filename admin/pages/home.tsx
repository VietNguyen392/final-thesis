import React from 'react';
import type { NextPage } from 'next';
import { UserList } from 'components/List';
import { useAuth } from 'hooks';
const Home: NextPage = () => {
  // const {user}=useAuth()

  return (
    <div>
      <UserList />
    </div>
  );
};

export default Home;
