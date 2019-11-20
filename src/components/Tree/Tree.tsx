import * as React from 'react';
import Container from "../Container/Container";
import "./index.less";

interface ILink {
    title: string,
    desc?: string,
    uri?: string
    items?: ILink[]
}

interface IProps {
    items: ILink[]
}

const wrap = (array, margin = false) =>
  array.map((item, i) => (
    <Node
      {...item}
      key={i}
    />
  ));

const Node: React.FC<ILink> = props => {
    const content: React.RefObject<HTMLDivElement> = React.createRef();

    let handleClick;
    if (props.items) {
        handleClick = event => {
          if (content.current.style.maxHeight) {
            content.current.style.maxHeight = null;
          } else {
            content.current.style.maxHeight = content.current.scrollHeight + "px";
          }
        };
    } else {
        handleClick = event => {
            window.open(props.uri);
        }
    }

    return (
      <Container
        className={`node ${props.items?.length > 0 ? "tree" : "leaf"}`}
        dir="column"
        pad="s"
        style={props.style}
      >
        <span className="toggle" onClick={handleClick} title={props.uri}>
          <span>
            <span
              className={`icon icon--${
                props.items?.length > 0 ? "tree" : "leaf"
              }`}
            />
            <h4 className="title">{props.title}</h4>
          </span>
          {props.desc && <span className="description">{props.desc}</span>}
        </span>
        <div className="content" ref={content}>
          {props.items && wrap(props.items, true)}
        </div>
      </Container>
    );
};


const Tree: React.FC<IProps> = props => {
    return (
        <Container
            pad="s"
            dir="column"
            card
            className="tree"
            id="root"
        >
            {wrap(props.items)}
        </Container>
    );
};

export default Tree;
export {Tree, Node, wrap, ILink};
