import * as React from "react";
import Container from "./components/Container/Container";
import Tree, {ILink} from "./components/Tree/Tree";

const items: [ILink] = [
  {title: "Google", uri: "https://google.com/"},
  {title: "New Folder", items: [
    {title: "Bing", uri: "https://bing.com/"},
    {title: "DuckDuckGo", uri: "https://duckduckgo.com/"},
  ]}
];

const App = props => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Container
        pad="s"
        margin="l"
        border="semi"
        card
        elevate={2}
      >
        <span>Thank you for choosing linked</span>
        <span>Here's a list of items</span>
        <Tree items={items}/>
      </Container>
    </div>
  );
};

export default App;
