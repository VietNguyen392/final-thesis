import React from 'react';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import {
  TextInput,
  Button,
  Group,
  Box,
  Paper,
  Grid,
  Select,
  FileButton,
  List,
  Text,
  MultiSelect,
  NumberInput,
  FileInput,
} from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { createHotel } from 'utils/service';
import TextEdit from 'components/common/TextEdit';
import { IHotel } from 'utils/interface';
import { checkImage, imageUpload } from 'utils';
const FormAddHotel = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const form = useForm({
    initialValues: {
      hotel_name: '',
      hotel_type: '',
      city: '',
      address: '',
      photo: '',
      distance: undefined,
      rooms: undefined,
      desc: '',
      featured: [],
    },
  });
  const handleImageUp = async (img: File) => {
    let url: string = '';
    if (img) {
      const checkImg = checkImage(img);
      if (checkImg)
        return showNotification({
          title: 'Thông báo',
          message: checkImg,
          color: 'red',
        });
      let hotel_img = await imageUpload(img);
      url = hotel_img.url;
    }
  };

  async function onCreateHotel(data: IHotel) {
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
      onSubmit={form.onSubmit((value) => onCreateHotel(value))}
    >
      <Grid grow>
        <Grid.Col span={4}>
          <Box>
            <TextInput
              label="Tên phòng"
              {...form.getInputProps('hotel_name')}
              withAsterisk
            />
            <Select
              label="Hạng Phòng"
              data={[
                { value: 'Normal', label: 'Bình dân' },
                { value: 'Medium', label: 'Trung bình' },
                { value: 'Luxury', label: 'Cao cấp' },
              ]}
              {...form.getInputProps('hotel_type')}
            />
            <Select
              data={[
                { value: 'Hướng ra Biển', label: 'Hướng ra biển' },
                { value: 'Hướng ra núi', label: 'Hướng ra núi' },
                { value: 'Hướng ra vịnh', label: 'Hướng ra vịnh ' },
              ]}
              label="Hướng Phòng"
              {...form.getInputProps('city')}
              withAsterisk
            />
            <TextInput
              label="Address"
              {...form.getInputProps('address')}
              withAsterisk
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box>
            <NumberInput label="Giá tiền" {...form.getInputProps('distance')} />
            <NumberInput
              label="Number of Room"
              {...form.getInputProps('rooms')}
              withAsterisk
            />
            <MultiSelect
              data={[
                { value: 'Xe đưa đón', label: 'Xe đưa đón' },
                { value: 'Buffet', label: 'Buffet' },
                { value: 'Người phục vụ riêng', label: 'Người phục vụ riêng' },
              ]}
              {...form.getInputProps('featured')}
              label="Features"
            />
            <FileInput
              label="Upload files"
              placeholder="Upload files"
              multiple
            />
          </Box>
        </Grid.Col>
      </Grid>
      <Box style={{ paddingTop: '10px' }}>
        <TextEdit {...form.getInputProps('desc')} />
      </Box>
      <Button style={{ width: '100%', marginTop: '10px' }} type="submit">
        Submit
      </Button>
    </Paper>
  );
};

export default FormAddHotel;
