import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Group,
  Box,
  Paper,
  Grid,
  Select,
  List,
  Text,
  MultiSelect,
  NumberInput,
  FileInput,
  Image,
  SimpleGrid,
  useMantineTheme,
  Textarea,
} from '@mantine/core';

import { IHotel } from 'utils';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { showNotification } from '@mantine/notifications';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons';
import TextEdit from '../common/TextEdit';
import { useForm } from '@mantine/form';
interface FormProps {
  data: IHotel;
  submitEdit: (data: any) => void;
}
const FormEditRoom: React.FC<FormProps> = ({ data, submitEdit }) => {
  const form = useForm({
    initialValues: {
      data,
    },
  });
  return (
    <Paper
      component="form"
      onSubmit={form.onSubmit((value) => submitEdit(value))}
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

            <Textarea {...form.getInputProps('featured')} label="Dịch vụ" />
          </Box>
        </Grid.Col>
      </Grid>
      {/*<Box sx={{ paddingTop: '10px' }}>*/}
      {/*  <Dropzone*/}
      {/*    multiple*/}
      {/*    onDrop={setImg}*/}
      {/*    onReject={() =>*/}
      {/*      showNotification({*/}
      {/*        title: 'Lỗi',*/}
      {/*        message: 'không hỗ trợ',*/}
      {/*        color: 'red',*/}
      {/*      })*/}
      {/*    }*/}
      {/*    accept={IMAGE_MIME_TYPE}*/}
      {/*    maxSize={1024 * 1024}*/}
      {/*  >*/}
      {/*    <Group*/}
      {/*      position="center"*/}
      {/*      spacing="xl"*/}
      {/*      style={{ minHeight: 220, pointerEvents: 'none' }}*/}
      {/*    >*/}
      {/*      <Dropzone.Accept>*/}
      {/*        <IconUpload*/}
      {/*          size={50}*/}
      {/*          stroke={1.5}*/}
      {/*          color={*/}
      {/*            theme.colors[theme.primaryColor][*/}
      {/*              theme.colorScheme === 'dark' ? 4 : 6*/}
      {/*            ]*/}
      {/*          }*/}
      {/*        />*/}
      {/*      </Dropzone.Accept>*/}
      {/*      <Dropzone.Reject>*/}
      {/*        <IconX*/}
      {/*          size={50}*/}
      {/*          stroke={1.5}*/}
      {/*          color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}*/}
      {/*        />*/}
      {/*      </Dropzone.Reject>*/}
      {/*      <Dropzone.Idle>*/}
      {/*        <IconPhoto size={50} stroke={1.5} />*/}
      {/*      </Dropzone.Idle>*/}

      {/*      <div>*/}
      {/*        <Text size="xl" inline>*/}
      {/*          Tải ảnh lên*/}
      {/*        </Text>*/}
      {/*      </div>*/}
      {/*    </Group>*/}
      {/*  </Dropzone>*/}
      {/*  <SimpleGrid*/}
      {/*    cols={4}*/}
      {/*    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}*/}
      {/*    mt={previews.length > 0 ? 'xl' : 0}*/}
      {/*  >*/}
      {/*    {previews}*/}
      {/*  </SimpleGrid>*/}
      {/*</Box>*/}
      <Box style={{ paddingTop: '10px' }}>
        <TextEdit {...form.getInputProps('desc')} />
      </Box>
      <Button style={{ width: '100%', marginTop: '10px' }} type="submit">
        Sửa
      </Button>
    </Paper>
  );
};

export default FormEditRoom;
