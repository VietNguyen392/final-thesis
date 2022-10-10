import React from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { postAPI} from "../../service";
export default function Active() {
  const [state, setState] = React.useState({
    success: "",
    error: "",
  });
  const { success, error } = state;
  const { slug } = useParams();
  React.useEffect(() => {

    if (slug) {
      postAPI("active-account", { active_token: slug })
        .then((res) => console.log(res))
        .catch((errors) => console.log(errors));
    }
  }, [slug]);
  return (
    <>
      {error && message.error("Failed")}
      {success && message.success("Success")}
    </>
  );
}
