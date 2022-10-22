import React from 'react';
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
  useMantineTheme,
  Image,
} from '@mantine/core';
import UploadImage from '../common/UploadImage';
import TextEdit from '../common/TextEdit';
import { IHotel } from 'utils/interface';
import { createHotel, getFeatureList, imageUpload } from 'utils';
import { FileWithPath } from '@mantine/dropzone';
const FormAddHotel = () => {
  const [searchFeatures, setSearchFeatures] = React.useState('');
  const [img, setImg] = React.useState<FileWithPath[]>([]);

  const form = useForm({
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
  const { data } = useSWR('get-feature', getFeatureList);
  const featureList = data?.data?.map((ft: any) => ({
    ftname: ft.company_name,
  }));
  const selectData = featureList?.map((ir: any) => ({
    value: ir.ftname,
    label: ir.ftname,
  }));
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
    const imgUrl = await imageUpload(img);
    setImg(img);
    form.setFieldValue('photo', imgUrl.url);
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
    } catch (error: any) {
      showNotification({
        color: 'red',
        title: 'Thông báo',
        message: `${error.response.data.msg}`,
      });
    }
  }
  return (
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

            <MultiSelect
              data={selectData}
              clearable
              searchable
              searchValue={searchFeatures}
              onSearchChange={setSearchFeatures}
              {...form.getInputProps('featured')}
              label="Dịch vụ"
            />
          </Box>
        </Grid.Col>
      </Grid>
      <UploadImage
        image={previews}
        onUpload={(files) => handleImageUp(files)}
      />
      <Box style={{ paddingTop: '10px' }}>
        <TextEdit {...form.getInputProps('desc')} />
      </Box>
      <Button style={{ width: '100%', marginTop: '10px' }} type="submit">
        Thêm Mới
      </Button>
    </Paper>
  );
};

export default FormAddHotel;
