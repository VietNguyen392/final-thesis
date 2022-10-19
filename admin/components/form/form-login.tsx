import React, { useEffect } from 'react';
import { useForm,zodResolver } from '@mantine/form';
import { Paper, TextInput, PasswordInput, Button, Title } from '@mantine/core';
import { IconLogin } from '@tabler/icons';
import { useStyles, useAuth } from 'hooks';
import { useRouter } from 'next/router';
import { emailRegex,routes,ILogin,loginSchema } from 'utils';
const FormLogin = () => {
  const router = useRouter();
  const { authenticate, user, isAuth } = useAuth();
  const { classes } = useStyles();
  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: zodResolver(loginSchema)
  });
  const onSubmit = (data: ILogin) => {
    authenticate(data);
  };
  useEffect(() => {
    if (isAuth) {
      if (user?.user?.user?.role === 'admin') {
        router.push(routes.home);
      }
    }
  }, [isAuth, router]);
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={50}
          >
            Admin
          </Title>

          <TextInput label="Email" size="md" {...form.getInputProps('email')} />
          <PasswordInput
            label="Mật khẩu"
            mt="md"
            size="md"
            {...form.getInputProps('password')}
          />
          <Button
            leftIcon={<IconLogin />}
            fullWidth
            mt="xl"
            size="md"
            type="submit"
          >
            Đăng Nhập
          </Button>
        </Paper>
      </div>
    </form>
  );
};

export default FormLogin;
