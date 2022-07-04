import React from 'react'
import { Tabs } from '@mantine/core'
import {Crud,Clinic}from '../../components/admin'

const DashBoard = () => {
  return (
    <React.Fragment>
      <div className='pt-12 pl-4' id='admin_page'>
      <Tabs orientation='vertical' variant='outline' tabPadding='xl'>
        <Tabs.Tab label='Quản lý bác sĩ' icon={<i className='fas fa-list'></i>}>
          <Crud />
        </Tabs.Tab>
        <Tabs.Tab label='Quản lý phòng khám' icon={<i className='fas fa-hospital    '></i>}>
          <Clinic />
        </Tabs.Tab>
      </Tabs>
    </div>
    </React.Fragment>
  )
}

export default DashBoard