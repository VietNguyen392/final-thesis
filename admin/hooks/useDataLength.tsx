import React, { useEffect, useState } from 'react';
import { routes } from 'utils/routes';
import { getAllUserProfile, getHotelList } from 'utils/service';
export const useDataLength = () => {
  const [state, setState] = useState({
    userList: [],
    hotelList: [],
  });
  const { userList, hotelList } = state;
  useEffect(() => {
    getAllUserProfile().then((res) => {
      setState((o) => ({
        ...o,
        userList: res?.data?.user?.map((item: any) => {
          return {
            id: item?._id,
            name: item?.fullName,
          };
        }),
      }));
    });
  }, []);
  useEffect(() => {
    getHotelList().then((res) => {
      setState((o) => ({
        ...o,
        hotelList: res?.data?.map((item: any) => {
          return {
            id: item?.id,
            name: item?.hotel_name,
          };
        }),
      }));
    });
  }, []);
  return {
    userList: userList.length,
    hotelList: hotelList.length,
  };
};
