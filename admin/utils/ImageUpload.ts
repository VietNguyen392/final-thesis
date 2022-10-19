export const checkImage = (file: File) => {
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  let err = '';
  if (!file) return (err = 'File ảnh không tồn tại');

  if (file.size > 1024 * 1024) err = 'File ảnh phải có dung lượng dưới 1mb';

  if (!types.includes(file.type)) err = 'Định dạng ảnh không được hỗ trợ!';

  return err;
};

export const imageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');
  formData.append('cloud_name', 'dji8eaf4q');

  const res = await fetch('https://api.cloudinary.com/v1_1/dji8eaf4q/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  return { public_id: data.public_id, url: data.secure_url };
};
