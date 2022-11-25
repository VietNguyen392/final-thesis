import React from "react";
import { useQuery } from "react-query";
import { Typography, Row, Empty, Select, Col, Radio } from "antd";
import { useTranslation } from "react-i18next";
import { GET } from "service";
import { FilterBar } from "styles/components";
import Loading from "./loading";
import ListComponent from "./common/ListComponent";
const { Option } = Select;
const HomeList = () => {
  const [state, setState] = React.useState({
    byIncrease: false,
    byDecrease: false,
  });
  const { byDecrease, byIncrease } = state;
  const { t } = useTranslation();
  async function getHotel() {
    const res = await GET("hotel");
    return res.data;
  }
  const { data, isFetching, isError } = useQuery("get-list", getHotel);
  const roomList = data?.data;
  if (isFetching) return <Loading />;
  if (isError) return <Empty />;
  // const tang=roomList.sort((a,b)=>a.room_price-b.room_price)
  return (
    <>
      {/*<FilterBar>
        <legend>{t("common.filter")}</legend>
        <Row
          wrap
          justify="space-between"
          align="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          <Col style={{ margin: "5px 0" }}>
            <Typography.Text>{t("common.byPrice")}:</Typography.Text>
            <span style={{ margin: 3 }}>
            
              <button onChange={() => sortIncrease} >
                {t("common.increase")}
              </button>
              <Radio  onChange={() => sortDecrease}>
                {t("common.decrease")}
              </Radio>
            </span>
          </Col>
          <Col span={6}>
            <Typography.Text>{t("common.byService")}:</Typography.Text>
            <Select style={{ width: 123, marginLeft: 2 }}></Select>
          </Col>
          <Col span={6}>
            <Typography.Text>{t("common.byLocate")}:</Typography.Text>
            <Select style={{ width: 123, marginLeft: 2 }}></Select>
          </Col>
        </Row>
      </FilterBar>
      */}
      <Row
        wrap
        justify="space-between"
        align="center"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <ListComponent items={roomList} />
      </Row>
    </>
  );
};

export default HomeList;
