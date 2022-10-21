import React, { useState } from 'react';
import { Table, ScrollArea, Button, Drawer, Modal, Group } from '@mantine/core';
import { useStyles, useFetch } from 'hooks';
import { routes } from 'utils/routes';
import { IHotel } from 'utils/interface';
import FormAddHotel from 'components/form/FormAddHotel';
import { deleteRoom } from 'utils';
import { showNotification } from '@mantine/notifications';
const HotelList = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { classes, cx } = useStyles();
  const { datum } = useFetch(routes.api.hotel);
  const handleDelete = async (id: string) => {
    // setOpenModal(true)
    const result = await deleteRoom(id);
    if (result)
      return showNotification({
        title: 'Thông báo',
        message: 'Xóa thành công',
        color: 'blue',
      });
  };
  const list = (datum as any)?.data?.map((item: IHotel) => (
    <tr key={item._id}>
      <td>{item.hotel_name}</td>
      <td>{item.hotel_type}</td>
      <td>{item.city}</td>
      <td>{item.address}</td>
      <td>{item.distance}</td>
      <td>{item.featured.join(',')}</td>
      <td>
        <img src={item.photo} />
      </td>
      <td>
        <div
          dangerouslySetInnerHTML={{
            __html: item.desc,
          }}
        />
      </td>
      <td>
        <Button onClick={() => setOpen(true)}>Edit</Button>
      </td>
      <td>
        <Button color="red" onClick={() => setOpenModal(true)}>
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <div>
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
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
        opened={open}
        onClose={() => setOpen(false)}
        title="Edit"
        padding="xl"
        size="xl"
        overlayOpacity={0.55}
        overlayBlur={3}
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <FormAddHotel />
      </Drawer>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Xóa Phòng Này"
        centered
        size={'sm'}
      >
        Bạn có chắc chắn xóa
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color={'gray'} onClick={() => setOpenModal(false)}>
            Hủy
          </Button>
          <Button color={'red'}>Xóa</Button>
        </div>
      </Modal>
    </div>
  );
};

export default HotelList;
