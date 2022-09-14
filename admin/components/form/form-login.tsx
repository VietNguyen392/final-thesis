import React from 'react';
import { useForm } from '@mantine/form';
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
} from '@mantine/core';
import { IconLogin } from '@tabler/icons';
import { useStyles } from '../../hooks';
const FormLogin = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Login Admin !
        </Title>

        <TextInput label="Email" size="md" />
        <PasswordInput label="Password" mt="md" size="md" />
        <Button leftIcon={<IconLogin/>} fullWidth mt="xl" size="md">
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default FormLogin;
