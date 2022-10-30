import React from 'react';
import type { NextPage } from 'next';
import StatCard from 'components/common/StatCard';
import { useAuth, useDataLength } from 'hooks';
import {
  SimpleGrid,
  Box,
  Container,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { getUserById } from 'utils';
const Home: NextPage = () => {
  const { userList, hotelList } = useDataLength();

  return (
    <>
      <Box>
        <Stack>
          <StatCard length={userList} listName="Người dùng" />
          <StatCard length={hotelList} listName="Phòng" />
          <StatCard length={12} listName="Lịch đặt phòng" />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
