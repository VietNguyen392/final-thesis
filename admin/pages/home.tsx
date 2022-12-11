import React from 'react';
import type { NextPage } from 'next';
import StatCard from 'components/common/StatCard';
import Invoice from 'components/common/Invoice';
import { useDataLength } from 'hooks';
import { SimpleGrid, Box, Stack, Accordion } from '@mantine/core';
import { UserList, RoomList, BookingList } from 'components/List';
const { Item, Control, Panel } = Accordion;

const Home: NextPage = () => {
  const { userList, hotelList, bookingList } = useDataLength();
  return (
    <>
      <Box>
        <Stack>

          <Accordion variant={'filled'}>
            <Item value={'user'}>
              <Control>
                <StatCard length={userList} listName="Người dùng" />
              </Control>
              <Panel>
                <UserList />
              </Panel>
            </Item>
            <Item value={'room'}>
              <Control>
                <StatCard length={hotelList} listName="Phòng" />
              </Control>
              <Panel>
                <RoomList />
              </Panel>
            </Item>
          </Accordion>
          <Accordion>
            <Item value={'booking'}>
              <Control>
                <StatCard
                  length={bookingList.length}
                  listName="Lịch đặt phòng"
                />
              </Control>
              <Panel>
                <BookingList />
              </Panel>
            </Item>
          </Accordion>

        </Stack>
        <div className={'invoice-group mt'}>
          <Invoice
            count={(bookingList[0] as any)?.invoice}
            title={'Tổng trong tháng'}
          />
          <Invoice count={34} title={'Tổng trong quý'} />
          <Invoice count={34 * 7} title={'Tổng trong năm'} />
        </div>
      </Box>
    </>
  );
};

export default Home;
