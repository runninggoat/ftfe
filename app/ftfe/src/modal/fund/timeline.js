import React, { Component } from "react";
import { Timeline } from "antd";
import MyIcon from "../../my_icon";
export default props => (
  <div>
    <Timeline>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item
        dot={<MyIcon type="icon-round" style={{ fontSize: "16px" }} />}
        color="red"
      >
        >Technical testing 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  </div>
);
