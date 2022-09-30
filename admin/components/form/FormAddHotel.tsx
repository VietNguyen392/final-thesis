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
} from '@mantine/core';
import { createHotel } from 'utils/service';
import TextEdit from 'components/common/TextEdit';
import { IHotel } from 'utils/interface';
const FormAddHotel = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const form = useForm({
    initialValues: {
      hotel_name: '',
      hotel_type: '',
      city: '',
      address: '',
      photo: '',
      title: '',
      distance: '',
      rating: undefined,
      rooms: '',
      cheap: undefined,
      desc: '',
      featured: '',
    },
  });
  const onCreateHotel = async (data: any) => {
    try {
      const res = await createHotel(data);
      if (res.status === 200)
        showNotification({
          title: 'Thông báo',
          message: 'Thành công',
          color: 'blue',
        });
      form.onReset;
    } catch (error: any) {
      showNotification({
        color: 'red',
        title: 'Thông báo',
        message: 'Không thành công',
      });
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={form.onSubmit((value) => onCreateHotel(value))}
    >
      <Grid grow>
        <Grid.Col span={4}>
          <Box>
            <TextInput
              label="Hotel Name"
              {...form.getInputProps('hotel_name')}
            />
            <Select
              label="Hotel Type"
              data={[
                { value: 'Normal', label: 'Bình dân' },
                { value: 'Medium', label: 'Trung bình' },
                { value: 'Luxury', label: 'Cao cấp' },
              ]}
              {...form.getInputProps('hotel_type')}
            />
            <TextInput label="City" {...form.getInputProps('city')} />
            <TextInput label="Address" {...form.getInputProps('address')} />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box>
            <TextInput label="Title" {...form.getInputProps('title')} />
            <TextInput label="Distance" {...form.getInputProps('distance')} />
            <Box style={{ display: 'flex' }}>
              <TextInput label="Room" {...form.getInputProps('rooms')} />
              <TextInput
                label="Featured"
                style={{ marginLeft: '10px' }}
                {...form.getInputProps('featured')}
              />
            </Box>
            <div style={{ marginTop: '25px', display: 'flex' }}>
              <FileButton
                accept="image/png,image/jpeg"
                multiple
                onChange={setFiles}
              >
                {(props) => <Button {...props}>Upload image</Button>}
              </FileButton>
              {files.length > 0 && (
                <Text size="sm" mt="sm" mr={3}>
                  Picked files:
                </Text>
              )}

              <List size="sm" mt={5} withPadding>
                {files.map((file, index) => (
                  <List.Item key={index}>{file.name}</List.Item>
                ))}
              </List>
            </div>
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
