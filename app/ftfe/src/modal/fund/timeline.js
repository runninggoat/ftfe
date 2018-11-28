import React, { Component } from "react";
import { Timeline } from "antd";
import faker from 'faker'
const text =
  "许多小伙伴会有疑问，古法红糖的食品安全问题。红糖由制糖人手工熬制、手工切割，虽不用机器加工，但也能保证生态健康。我们将红糖做了质检，可以放心食用。我们希望把原生态的原汁糖，带给更多的人。 许多小伙伴会有疑问，古法红糖的食品安全问题。红糖由制糖人手工熬制、手工切割。";
export default props => (
  <div style={{ margin: "35px 0 0 107px" }}>
    <Timeline>
      <Timeline.Item
        color="#4A4A4A"
        style={{ fontSize: 15, fontseight: 400, lineHeight: "21px" }}
      >
        {text}
        <div>
          <img src={faker.image.food()} />
        </div>
      </Timeline.Item>
      <Timeline.Item color="#4A4A4A">
        Solve initial network problems 2015-09-01
      </Timeline.Item>
      <Timeline.Item color="#4A4A4A">
        >Technical testing 2015-09-01
      </Timeline.Item>
      <Timeline.Item color="#4A4A4A">
        Network problems being solved 2015-09-01
      </Timeline.Item>
    </Timeline>
  </div>
);
