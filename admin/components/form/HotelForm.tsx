import React, { useEffect, useState, useMemo } from 'react';
import { useForm } from '@mantine/form';
import useSWR from 'swr';
import { showNotification } from '@mantine/notifications';
import {
  TextInput,
  Button,
  Box,
  Paper,
  Grid,
  Select,
  MultiSelect,
  NumberInput,
  Image,
  Stack,
  Text,
  Modal,
} from '@mantine/core';
import UploadImage from '../common/UploadImage';
import TextEdit from '../common/TextEdit';
import {
  createHotel,
  getFeatureList,
  imageUpload,
  IHotel,
  getHotelList,
  deleteRoom,
} from 'utils';
import { FileWithPath } from '@mantine/dropzone';
import { HotelList } from '../List';
type ftList = {
  company_name: string;
};
const HotelForm = () => {
  const [state, setState] = useState({
    roomList: [] as IHotel[],
    img: [] as FileWithPath[],
    rowID: '',
    openModal: false,
  });
  const { img, roomList, rowID, openModal } = state;
  const [searchFeatures, setSearchFeatures] = useState('');
  const form = useForm<IHotel>({
    initialValues: {
      room_name: '',
      room_type: '',
      location: '',
      photo: [],
      room_price: undefined,
      desc: '',
      featured: [],
    },
  });
  const { data, mutate } = useSWR('get-roomList', getHotelList);
  const previews = img.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  const handleImageUp = async (img: File[]) => {
    setState((p) => ({ ...p, img: img }));
    const res = await imageUpload(img);
    const urls = res?.map((i) => i.url);
    form.setFieldValue('photo', urls);
  };

  async function handleCreateRoom(data: IHotel) {
    try {
      const res = await createHotel(data);
      if (res.status === 200)
        showNotification({
          title: 'Thông báo',
          message: 'Thành công',
          color: 'blue',
        });
      form.reset();
      setState((p) => ({
        ...p,
        img: [],
        roomList: [res?.data as IHotel, ...roomList],
      }));
      mutate('get-roomList');
    } catch (error: any) {
      showNotification({
        color: 'red',
        title: 'Thông báo',
        message: `${error.response.data.msg}`,
      });
    }
  }
  const handleConfirmDelete = (id: string) => {
    setState((o) => ({ ...o, openModal: true, rowID: id }));
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
      mutate('get-roomList');
    }
  };
  const listRoom = data?.data?.map((item: IHotel) => {
    return {
      roomID: item._id,
      roomName: item.room_name,
      roomType: item.room_type,
      roomPrice: item.room_price,
      roomPhoto: item.photo,
      roomLocate: item.location,
      roomDesc: item.desc,
      roomFeature: item.featured,
    };
  });

  return (
    <Box>
      <Stack>
        <Paper
          component="form"
          onSubmit={form.onSubmit((value) => handleCreateRoom(value))}
          sx={{ marginRight: '10px' }}
        >
          <Grid grow>
            <Grid.Col span={4}>
              <Box>
                <TextInput
                  label="Tên phòng"
                  {...form.getInputProps('room_name')}
                  withAsterisk
                />
                <Select
                  label="Hạng Phòng"
                  data={[
                    { value: 'Normal', label: 'Bình dân' },
                    { value: 'Medium', label: 'Trung bình' },
                    { value: 'Luxury', label: 'Cao cấp' },
                  ]}
                  {...form.getInputProps('room_type')}
                />
                <Select
                  data={[
                    { value: 'Hướng ra Biển', label: 'Hướng ra biển' },
                    { value: 'Hướng ra núi', label: 'Hướng ra núi' },
                    { value: 'Hướng ra vịnh', label: 'Hướng ra vịnh ' },
                  ]}
                  label="Hướng Phòng"
                  {...form.getInputProps('location')}
                  withAsterisk
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box>
                <NumberInput
                  label="Giá tiền"
                  {...form.getInputProps('room_price')}
                />

                {/* <MultiSelect
                data={featureList}
                clearable
                searchable
                searchValue={searchFeatures}
                onSearchChange={setSearchFeatures}
                {...form.getInputProps('featured')}
                label="Dịch vụ"
              /> */}
              </Box>
            </Grid.Col>
          </Grid>
          <UploadImage
            image={previews}
            onUpload={(files) => handleImageUp(files)}
            // isLoad={loadImg}
          />
          <Box style={{ paddingTop: '10px' }}>
            <TextEdit {...form.getInputProps('desc')} />
          </Box>
          <Button style={{ width: '100%', marginTop: '10px' }} type="submit">
            Thêm Mới
          </Button>
        </Paper>
        <hr />

        <Text size={'xl'} weight={700}>
          Danh sách
        </Text>
        <HotelList listData={listRoom} onGetId={handleConfirmDelete} />
      </Stack>
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
          <Button color={'red'} onClick={() => handleDelete(rowID)}>
            Xóa
          </Button>
        </div>
      </Modal>
    </Box>
  );
};

export default HotelForm;