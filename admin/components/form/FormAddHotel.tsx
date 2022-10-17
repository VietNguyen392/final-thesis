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
  NumberInput
} from '@mantine/core';
import { createHotel } from 'utils/service';
import TextEdit from 'components/common/TextEdit';
import { IHotel } from 'utils/interface';
import city from 'mock/city.json'
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
      featured:[],
    }
  });
  const handleImageUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // const target = e.target as HTMLInputElement
    // const files = target.files
    // if (files) {
    //     const imgfile = files[0]
    //     ({...form,photo:imgfile})
    // }
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
              label="Hotel Name"
              {...form.getInputProps('hotel_name')}
              withAsterisk
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
            <Select
             data={[
                { value: 'Hà nội', label: 'Hà Nội' },
                { value: 'Sài gòn', label: 'Sài Gòn' },
                { value: 'Đà nẵng', label: 'Đà Nẵng' },
                { value: 'Hải phòng', label: 'Hài Phòng' },
                { value: 'Quảng Ninh', label: 'Quảng Ninh' },
              ]}
              label="City"
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
            <NumberInput label="Distance" {...form.getInputProps('distance')} />
              <NumberInput
               min={0}
               max={100}
                label="Number of Room"
                {...form.getInputProps('rooms')}
                withAsterisk
              />
             <MultiSelect
             data={[
              {value:'Xe đưa đón',label:'Xe đưa đón'},
              {value:'Buffet',label:'Buffet'},
              {value:'Người phục vụ riêng',label:'Người phục vụ riêng'},
             ]}
             {...form.getInputProps('featured')}
             label='Features'
             />
            
            <div style={{ marginTop: '25px', display: 'flex' }}>
              <FileButton
                accept="image/png,image/jpeg"
                multiple
                onChange={handleImageUp}
                {...form.getInputProps('photo')}
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
