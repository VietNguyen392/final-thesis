import React from 'react';
import type { NextPage } from 'next';
import { UserList } from 'components/List';
import StatCard from 'components/common/StatCard';
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
