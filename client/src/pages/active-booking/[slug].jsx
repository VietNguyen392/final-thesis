import React from "react";
import { postAPI } from "service";
import { useParams } from "react-router-dom";
import { notification } from "antd";
const ActiveBooking = () => {
  const [state, setState] = React.useState({
    success: "",
    error: "",
  });
  const { success, error } = state;
  const { slug } = useParams();
  React.useEffect(() => {
    if (slug) {
      postAPI("active-booking", { active_code: slug })
        .then((res) => setState((o) => ({ ...o, success: res.data.msg })))
        .catch((errors) =>
          setState((o) => ({ ...o, error: errors.res.data.msg }))
        );
    }
  }, [slug]);
  return (
    <div>
      {" "}
      {error &&
        notification.error({
          message: "Lỗi",
          description: "Can't create booking",
          placement: "top",
        })}
      {success &&
        notification.success({
          message: "Thành công",
          description: "Tạo thành công",
          placement: "top",
        })}
    </div>
  );
};

export default ActiveBooking;
