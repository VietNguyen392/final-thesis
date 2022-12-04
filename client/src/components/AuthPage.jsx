import React, { useState } from "react";
import { Tabs, Row, Col } from "antd";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { useTranslation } from "react-i18next";
const AuthPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Tabs
        defaultActiveKey={"1"}
        centered
        type="card"
        items={[
          {
            label: t("common.login"),
            key: "1",
            children: <FormLogin />,
          },
          {
            label: t("common.signup"),
            key: "2",
            children: <FormRegister />,
          },
        ]}
      />
    </div>
  );
};

export default AuthPage;
