import React from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { POST } from "service";
export default function Active() {
  const [state, setState] = React.useState({
    success: "",
    error: "",
  });
  const { success, error } = state;
  const { slug } = useParams();
  React.useEffect(() => {
    if (slug) {
      POST("active-account", { active_token: slug })
        .then((res) => setState((o) => ({ ...o, success: res.data.msg })))
        .catch((errors) =>
          setState((o) => ({ ...o, error: errors.res.data.msg }))
        );
    }
  }, [slug]);
  return (
    <>
      {error && message.error("Failed")}
      {success && message.success("Success")}
    </>
  );
}
