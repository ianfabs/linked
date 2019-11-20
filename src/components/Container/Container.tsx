import * as React from "react";
// import React from "react";

import "./index.less";
type Border = "rounded" | "semi" | "square";
type Elevation = -2 | -1 | 0 | 1 | 2;
type Sizing = "xs" | "s" | "m" | "l" | "xl" | String;
type FlexDirection = "row" | "column"

interface IProps {
  card?: Boolean,
  border?: Border,
  elevate?: Elevation,
  hover?: Boolean,
  pad?: Sizing,
  margin?: Sizing
  dir?: FlexDirection
}

const filterJSON = (json, blacklist: [String]) => {
  let str = JSON.stringify(json, (key,val) => {
    if (!blacklist.includes(key)) {
      return val;
    }
  });
  return JSON.parse(str);
}

const Container: React.FC<IProps> = (props: any) => {
  let classList = () => {
    let styleProps = Object.entries(filterJSON(props, ['children']));
    console.log("props", styleProps);
    let base = "container";
    let res = ["container"];
    if (styleProps.length != 0) {
      res = [...res, ...styleProps.map( ([k,v]) => {
        return `${res[0]}--${
          typeof v == "boolean"
          ?`${k}`
          :`${k}-${v}`
        }`;
      })];
      console.log(res);
    }
    return res.join(' ');
  };

  return <div className={classList()}>{props.children}</div>;
};

export default Container;
