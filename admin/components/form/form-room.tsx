import React from 'react';
import { Box, TextInput, List } from '@mantine/core';
import { useFetch } from 'hooks';
import { routes } from 'utils/routes';

const FormRoom = () => {
  const { datum } = useFetch(routes.api.getHotelList);
  return (
    <div>
      <Box>
        <TextInput placeholder="test" />
      </Box>
    </div>
  );
};

export default FormRoom;
