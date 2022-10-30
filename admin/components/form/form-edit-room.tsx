import React, { useState, useEffect } from 'react';
import {
  TextInput,
  Button,
  Group,
  Box,
  Paper,
  Grid,
  Select,
  NumberInput,
  Image,
  Textarea,
  MultiSelect,
  ScrollArea,
} from '@mantine/core';
import useSWR from 'swr';
import { IHotel, patchData, getData } from 'utils';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { showNotification } from '@mantine/notifications';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons';
import TextEdit from '../common/TextEdit';
import { useForm } from '@mantine/form';

interface FormProps {
  data: any;
  closeDawer: () => void;
}
const FormEditRoom: React.FC<FormProps> = ({ data, closeDawer }) => {
  const [ftList, setFtList] = useState([]);
  const [searchFeatures, setSearchFeatures] = useState('');
  const form = useForm({
    initialValues: {
      data,
    },
  });
  const { mutate } = useSWR('get-roomList');
  async function editRoom(value: any) {
    try {
      const res = await patchData(`/api/hotel/${data.roomID}`, value);
      if (res.status === 200) {
        showNotification({
          title: 'Thành công',
          message: 'Success',
          color: 'blue',
        });
        closeDawer();
        await mutate('get-roomList');
      }
    } catch (error: any) {
      showNotification({ title: 'Lỗi', message: error.data.msg, color: 'red' });
    }
  }
  useEffect(() => {
    const controller = new AbortController();
    getData('/api/get-company').then((res) =>
      setFtList(
        res?.data?.map((x: any) => {
          return {
            // ftId: x._id,
            label: x?.company_name,
            value: x?.company_name,
          };
        }),
      ),
    );
    return () => controller.abort();
  }, []);

  return (
    <Paper
      component="form"
      onSubmit={form.onSubmit((value) => editRoom(value))}
    >
      <Grid grow>
        <Grid.Col span={4}>
          <Box>
            <TextInput
              label="Tên phòng"
              {...form.getInputProps('room_name')}
              withAsterisk
              defaultValue={data.roomName}
            />
            <Select
              label="Hạng Phòng"
              data={[
                { value: 'Normal', label: 'Bình dân' },
                { value: 'Medium', label: 'Trung bình' },
                { value: 'Luxury', label: 'Cao cấp' },
              ]}
              {...form.getInputProps('room_type')}
              defaultValue={data.roomType}
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
              defaultValue={data.roomLocate}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box>
            <NumberInput
              label="Giá tiền"
              {...form.getInputProps('room_price')}
              defaultValue={data.roomPrice}
            />
            <MultiSelect
              data={ftList}
              clearable
              searchable
              searchValue={searchFeatures}
              onSearchChange={setSearchFeatures}
              {...form.getInputProps('featured')}
              label="Dịch vụ"
              defaultValue={data.roomFeature}
            />
          </Box>
        </Grid.Col>
      </Grid>
      {/* <Box>
        {
      data.roomPhoto?.map((img:any,index:number)=><Image src={img}key={index}/>)
    }
      </Box> */}
      <Box style={{ paddingTop: '10px' }}>
        <TextEdit
          {...form.getInputProps('desc')}
          defaultValue={data.roomDesc}
        />
      </Box>
      <Button style={{ width: '100%', marginTop: '10px' }} type="submit">
        Sửa
      </Button>
    </Paper>
  );
};

export default FormEditRoom;
