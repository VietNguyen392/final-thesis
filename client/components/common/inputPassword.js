import React from 'react';
import { Input,Badge } from '@mantine/core';
const InputPassword = ( props ) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Input
      icon={<i className='fas fa-lock' />}
      type={showPassword ? 'text' : 'password'}
      placeholder={props.placeholder}
      rightSectionWidth={70}
      styles={{ rightSection: { cursor: 'pointer' } }}
      rightSection={
        <Badge color='blue' radius='sm' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <i className='fas fa-eye '></i> : <i className='fas fa-eye-slash '></i>}
        </Badge>
      }
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputPassword;
