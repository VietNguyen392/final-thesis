import React, { useMemo, useState, useEffect } from 'react';
import { Text, Progress, Card } from '@mantine/core';
import { getUserProfile } from 'utils/service';
const UserList = () => {
  const [state, setState] = useState({
    listUser: [],
  });
  const { listUser } = state;
  useEffect(() => {
    getUserProfile().then((res) => {
      setState((o) => ({
        ...o,
        listUser: res?.data?.user?.map((item: any) => {
          return {
            id: item?._id,
            name: item?.fullName,
          };
        }),
      }));
      console.log(listUser.length);
    });
  }, []);

  return (
    <>
      <Card
        withBorder
        radius="md"
        p="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Text size="xs" transform="uppercase" weight={700} color="dimmed">
          Số lượng người dùng
        </Text>
        <Text size="lg" weight={500}>
          {listUser.length}
        </Text>
        <Progress value={listUser.length} mt="md" size="lg" radius="xl" />
      </Card>
    </>
  );
};

export default UserList;
