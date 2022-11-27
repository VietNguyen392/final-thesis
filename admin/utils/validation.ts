import { z } from 'zod';
export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email(),
});
export const checkImage = (file: File) => {
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  let err = '';
  if (!file) return (err = 'File ảnh không tồn tại');

  if (file.size > 1024 * 1024) err = 'File ảnh phải có dung lượng dưới 1mb';

  if (!types.includes(file.type)) err = 'Định dạng ảnh không được hỗ trợ!';

  return err;
};
