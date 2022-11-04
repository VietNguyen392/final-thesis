import React from "react";
import { Button, Modal, Calendar } from "antd";
const Hotel = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  return (
    <div>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default Hotel;
