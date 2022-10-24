import React, { useEffect, useRef, useState } from 'react';
import { Paper, TextInput, Button, Box, List } from '@mantine/core';
import { postData, getData } from 'utils';
const ConfigFeature = () => {
  const [state, setState] = useState({
    featureList: [],
  });
  const { featureList } = state;
  const inputRef = useRef<HTMLInputElement>(null);
  async function postFeatured(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await postData('/api/create-company', {
      company_name: inputRef.current?.value,
    });
    getData('/api/get-company').then((res) =>
      setState((p) => ({
        ...p,
        featureList: res?.data?.map((x: any) => {
          return {
            ftId: x._id,
            ftName: x.company_name,
          };
        }),
      })),
    );
  }
  useEffect(() => {
    getData('/api/get-company').then((res) =>
      setState((p) => ({
        ...p,
        featureList: res?.data?.map((x: any) => {
          return {
            ftId: x._id,
            ftName: x.company_name,
          };
        }),
      })),
    );
  }, []);
  return (
    <Box>
      <Paper component="form" onSubmit={(e) => postFeatured(e)}>
        <Box
          sx={{
            display: 'flex',
            width: '300px',
            justifyContent: 'space-between',
          }}
        >
          <TextInput label="Thêm dịch vụ" ref={inputRef} />
          <Button sx={{ marginTop: '23px' }} type="submit">
            Submit
          </Button>
        </Box>
      </Paper>
      <List type="ordered">
        {featureList?.map((x: any) => (
          <List.Item key={x.ftId}>{x.ftName}</List.Item>
        ))}
      </List>
    </Box>
  );
};

export default ConfigFeature;
