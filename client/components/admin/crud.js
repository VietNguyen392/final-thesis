import React from 'react';
import { Grid, Input, Container, Chips, Chip, Select, Textarea } from '@mantine/core';
import RichTextEditor  from '../common/rte';
import InputPassword from '../common/inputPassword';
import Tableuser from '../common/table';
const Crud = () => {
  return (
    <div id='crud_page' className='ml-3'>
      <Container>
        <h1 className='center uppercase pb-3 font-bold text-3xl'>Quản lý Bác sĩ</h1>
        <Grid gutter='md'>
          <Grid.Col span={4}>
            <Input
              type='text'
              placeholder='Nhập Tên'
              required
              icon={<i className='fas fa-user'></i>}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Input
              type='text'
              placeholder='Nhập email'
              required
              icon={<i className='fas fa-envelope'></i>}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <InputPassword placeholder='Nhập mật khẩu' />
          </Grid.Col>
          <Grid.Col span={4}>
            <Chips size='md' radius='md'>
              <Chip value='react'>Nam</Chip>
              <Chip value='ng'>Nữ</Chip>
            </Chips>
          </Grid.Col>
          <Grid.Col span={4}>
            <Input
              type='text'
              placeholder='Nhập số điện thoại'
              required
              icon={<i className='fas fa-phone'></i>}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <label className='block'>
              <input
                type='file'
                className='block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:border-solid
                  file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                  file:rounded-lg '
              />
            </label>
          </Grid.Col>
          <Grid.Col span={4}>
            <Input
              type='text'
              placeholder='Nhập  điạ chỉ'
              required
              icon={<i class='fas fa-location-arrow    '></i>}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              icon={<i class='fas fa-dollar-sign    '></i>}
              placeholder='Chọn giá khám'
              searchable
              nothingFound='No options'
              data={['100.000 đ', 'Angular', 'Svelte', 'Vue']}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              icon={<i class='fas fa-money-bill    '></i>}
              placeholder='Chọn phương thức thanh toán'
              searchable
              nothingFound='No options'
              data={['React', 'Angular', 'Svelte', 'Vue']}
            />
          </Grid.Col>
        </Grid>
        <Textarea placeholder='Mô tả' required className='mt-3' />
        <div className='mt-3'><RichTextEditor/></div>
        <div className='center mt-4'>
        <button className='btn btn-primary'>Lưu thông tin
        
        <i class="fas fa-save   ml-1 "></i>
        </button>
        </div>
        <div className='mt-4'>
        <Tableuser/>
        </div>
      </Container>
    </div>
  );
};

export default Crud;
