import React from 'react';
import { TextInput, Button, Group, Grid } from '@mantine/core';
import { useStyles } from 'hooks';
const FormAddUser = () => {
  return (
    <Grid>
      <Grid.Col xs={8}>
        <Group>
          <TextInput withAsterisk label="Name" />
          <TextInput withAsterisk label="Email" />
          <TextInput withAsterisk label="Phone Number" type="number" min="1" />
        </Group>
      </Grid.Col>
      <Grid.Col xs={8}></Grid.Col>
    </Grid>
  );
};

export default FormAddUser;
