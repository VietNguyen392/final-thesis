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
  List,
  Text,
  MultiSelect,
  NumberInput,
  FileInput,
  Image,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import {
  Dropzone,
  DropzoneProps,
  IMAGE_MIME_TYPE,
  FileWithPath,
} from '@mantine/dropzone';
import { createHotel } from 'utils/service';
import TextEdit from 'components/common/TextEdit';
import { IHotel } from 'utils/interface';
import { checkImage, imageUpload } from 'utils';
const FormAddHotel = () => {
  const [files, setFiles] = React.useState('');
  const [img, setImg] = React.useState<FileWithPath[]>([]);
  const theme = useMantineTheme();
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
    // const imgCheck=checkImage(img)
    // console.log(imgCheck);

    // if(imgCheck) return showNotification({title:'Lỗi',message:imgCheck,color:'red'})
    const Imgurl = await imageUpload(img);
    form.setFieldValue('photo', Imgurl.url);
  };
  function testMulti() {
    setImg;
    console.log('ok');
  }
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
          </Box>
        </Grid.Col>
      </Grid>
      <Box sx={{ paddingTop: '10px' }}>
        <Dropzone
          multiple
          onDrop={setImg}
          onReject={() =>
            showNotification({
              title: 'Lỗi',
              message: 'không hỗ trợ',
              color: 'red',
            })
          }
          accept={IMAGE_MIME_TYPE}
          maxSize={1024 * 1024}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload
                size={50}
                stroke={1.5}
                color={
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === 'dark' ? 4 : 6
                  ]
                }
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size={50}
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Tải ảnh lên
              </Text>
            </div>
          </Group>
        </Dropzone>
        <SimpleGrid
          cols={4}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          mt={previews.length > 0 ? 'xl' : 0}
        >
          {previews}
        </SimpleGrid>
      </Box>
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
