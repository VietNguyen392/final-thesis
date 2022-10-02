import React, { useState } from 'react';
import { Table, ScrollArea, Button, Drawer } from '@mantine/core';
import { useStyles, useFetch } from 'hooks';
import { routes } from 'utils/routes';
import { IHotel } from 'utils/interface';
import FormAddHotel from 'components/form/FormAddHotel';
const HotelList = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles();
  const { datum } = useFetch(routes.api.getHotelList);
  const list = (datum as any)?.data?.map((item: IHotel) => (
    <tr key={item._id}>
      <td>{item.hotel_name}</td>
      <td>{item.hotel_type === 'Medium' ? 'Trung bình' : 'bình thường'}</td>
      <td>{item.city}</td>
      <td>{item.address}</td>
      <td>{item.distance}</td>
      <td>{item.title}</td>
      <td>
        <Button onClick={() => setOpen(true)}>Edit</Button>
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
              <th>Title</th>
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
    </div>
  );
};

export default HotelList;
