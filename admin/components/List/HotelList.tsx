import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { Table, ScrollArea, Button, Drawer, Modal, Image } from '@mantine/core';
import useStyles from 'hooks/useStyles';

import { IHotel } from 'utils/interface';
import { FormEditRoom } from '../form';
import { deleteRoom, getHotelList } from 'utils';
import { showNotification } from '@mantine/notifications';
import { IconTrash, IconBallpen } from '@tabler/icons';
import Loading from '../common/loading';
const HotelList = () => {
  const [state, setState] = useState({
    roomList: [],
    openDrawer: false,
    scrolled: false,
    openModal: false,
    roomID: '',
  });
  const { roomList, openDrawer, scrolled, openModal, roomID } = state;
  const { classes, cx } = useStyles();
  const { data } = useSWR('get-roomList', getHotelList);
  if (!data) return <Loading />;
  const { mutate } = useSWRConfig();

  const handleConfirmDelete = (id: string) => {
    setState((o) => ({ ...o, openModal: true, roomID: id }));
  };
  const handleDelete = async (ID: string) => {
    const result = await deleteRoom(ID);
    if (result) {
      showNotification({
        title: 'Thông báo',
        message: 'Xóa thành công',
        color: 'blue',
      });
      setState((o) => ({ ...o, openModal: false }));
    }
  };

  const list = data?.data?.map((item: IHotel) => (
    <tr key={item._id}>
      <td>{item.room_name}</td>
      <td>{item.room_type}</td>
      <td>{item.room_price}</td>
      <td>{item.location}</td>
      <td>{item.featured.join(',')}</td>
      <td>
        {/*<img alt='photo' src={item.photo}/>*/}
        {item.photo.map((n, index) => {
          return (
            <Image
              src={n}
              key={index}
              radius="md"
              alt="photo"
              width={200}
              height={120}
            />
          );
        })}
      </td>
      <td>
        <div
          dangerouslySetInnerHTML={{
            __html: item.desc,
          }}
        />
      </td>
      <td>
        <Button onClick={() => setState((o) => ({ ...o, openDrawer: true }))}>
          <IconBallpen />
          Edit
        </Button>
      </td>
      <td>
        <Button color="red" onClick={() => handleConfirmDelete(item._id)}>
          <IconTrash />
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <div>
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) =>
          setState((o) => ({ ...o, scrolled: y !== 0 }))
        }
      >
        <Table sx={{ minWidth: 700 }}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>City</th>
              <th>Address</th>
              <th>Distance</th>
              <th>Image</th>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </ScrollArea>
      <Drawer
        opened={openDrawer}
        onClose={() => setState((o) => ({ ...o, openDrawer: false }))}
        title="Edit"
        padding="xl"
        size="xl"
        overlayOpacity={0.55}
        overlayBlur={3}
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <FormEditRoom
          data={data?.data}
          submitEdit={(e) => console.log({ ...e })}
        />
      </Drawer>
      <Modal
        opened={openModal}
        onClose={() => setState((o) => ({ ...o, openModal: false }))}
        title="Xác nhận"
        centered
        size={'xs'}
        withCloseButton={false}
        sx={{ textAlign: 'center' }}
      >
        Bạn có chắc chắn xóa
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            color={'gray'}
            onClick={() => setState((o) => ({ ...o, openModal: false }))}
          >
            Hủy
          </Button>
          <Button color={'red'} onClick={() => handleDelete(roomID)}>
            Xóa
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default HotelList;
