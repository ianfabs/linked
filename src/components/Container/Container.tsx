import * as React from "react";
// import React from "react";

import "./index.less";
type Border = "rounded" | "semi" | "square";
type Elevation = -2 | -1 | 0 | 1 | 2;
type Sizing = "xs" | "s" | "m" | "l" | "xl" | String;
type FlexDirection = "row" | "column";

const ContainerProps = [
  "border",
  "elevate",
  "hover",
  "pad",
  "margin",
  "dir",
  "card",
  "children"
];

interface IProps {
  border?: Border;
  elevate?: Elevation;
  hover?: boolean;
  pad?: Sizing;
  margin?: Sizing;
  dir?: FlexDirection;
  card?: boolean;
  [key: string]: any | any[];
}

const filterJSON = (json, blacklist: string[]) => {
  let str = JSON.stringify(json, (key, val) => {
    if (!blacklist.includes(key)) {
      return val;
    }
  });
  return JSON.parse(str);
};

const Container: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  let classList = () => {
    let styleProps = Object.entries(
      filterJSON(props, ["children", "className"])
    );
    // console.log("props", styleProps);
    let res = ["container"];
    if (styleProps.length != 0) {
      res = [
        ...res,
        ...styleProps.map(([k, v]) => {
          return `${res[0]}--${typeof v == "boolean" ? `${k}` : `${k}-${v}`}`;
        })
      ];
      // console.log(res);
    }
    return res.join(" ");
  };

  return <div className={classList()} {...filterJSON(props, ContainerProps)}>{props.children}</div>;
};

export default Container;
