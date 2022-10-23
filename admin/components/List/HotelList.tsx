import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import {
  Table,
  ScrollArea,
  Button,
  Drawer,
  Modal,
  Image,
  Box,
} from '@mantine/core';
import useStyles from 'hooks/useStyles';
import { Carousel } from '@mantine/carousel';
import { FormEditRoom } from '../form';
import { deleteRoom, getHotelList, IHotel, ListType } from 'utils';
import { showNotification } from '@mantine/notifications';
import { IconTrash, IconBallpen } from '@tabler/icons';
import Loading from '../common/loading';
interface ListProps {
  listData?: IHotel[];
  onGetId: (roomId: string) => void;
}

const HotelList: React.FC<ListProps> = ({ listData, onGetId }) => {
  const [state, setState] = useState({
    openDrawer: false,
    scrolled: false,
    openModal: false,
    roomID: '',
  });
  const { openDrawer, scrolled, openModal, roomID } = state;
  const { classes, cx } = useStyles();
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

  const list = listData?.map((item: ListType) => (
    <tr key={item.roomID}>
      <td>{item.roomName}</td>
      <td>{item.roomType}</td>
      <td>{item.roomPrice}</td>
      <td>{item.roomLocate}</td>
      <td>{item.roomFeature}</td>
      <td>
        {/* <Carousel sx={{ width: 200, height: 120 }} loop>
          {item.roomPhoto?.map((n: any, index: number) => {
            return (
              <Carousel.Slide key={index}>
                <Image
                  src={n}
                  radius="md"
                  alt="photo"
                  width={200}
                  height={120}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel> */}
      </td>
      <td>
        <div
          dangerouslySetInnerHTML={{
            __html: item.roomDesc,
          }}
        />
      </td>

      <td>
        <Button
          onClick={() => setState((o) => ({ ...o, openDrawer: true }))}
          sx={{ marginRight: 4 }}
        >
          <IconBallpen />
          Edit
        </Button>
        <Button color="red" onClick={() => onGetId(item.roomID)}>
          <IconTrash />
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Box>
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) =>
          setState((o) => ({ ...o, scrolled: y !== 0 }))
        }
      >
        <Table sx={{ minWidth: 700 }}>
          <thead
            className={cx(classes.tableHeader, {
              [classes.scrolled]: scrolled,
            })}
          >
            <tr>
              <th>Tên</th>
              <th>Hạng</th>
              <th>Giá</th>
              <th>Vị trí</th>
              <th>Dịch vụ</th>
              <th>Gallery</th>
              <th>Mô tả</th>
              <th>Action</th>
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
        {/* <FormEditRoom
          data={data?.data}
          submitEdit={(e) => console.log({ ...e })}
        /> */}
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
    </Box>
  );
};

export default HotelList;
