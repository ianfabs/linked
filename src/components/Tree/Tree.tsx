import * as React from 'react';
import Container from "../Container/Container";

interface ILink {
    title: String,
    desc?: String,
    uri?: String
    items?: [ILink]
}

interface IProps {
    items: [ILink]
}


const wrap = (array) => array.map(item => <Node {...item}/>)

const Node: React.FC<ILink> = props => {
    return (
        <div className="node">
            <h4 className="title">{props.title}</h4>
            { props.desc  && <span className="description">{props.desc}</span> }
            { props.items && wrap(props.items) }
        </div>
    );
};


const Tree: React.FC<IProps> = props => {
    return (
        <Container
            pad="s"
        >
            {wrap(props.items)}
        </Container>
    );
};

export default Tree;
export {Tree, Node, wrap, ILink};