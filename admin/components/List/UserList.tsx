import React, { useMemo, useState, useEffect } from 'react';
import { Text, Progress, Card } from '@mantine/core';
import { getUserProfile } from 'utils/service';
import StatCard from 'components/common/StatCard';
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
    });
  }, []);

  return (
    <>
      <StatCard length={listUser.length} listName="Người dùng" />
    </>
  );
};

export default UserList;
