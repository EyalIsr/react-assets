import * as React from "react";
import { Button, Drawer, Toolbar, Divider } from "react-md";
import "./App.css";
import { DrawerPosition } from "react-md/lib/Drawers";
import Nav from "./components/Shared/Nav";
import VideoList from "./components/VideoList";

const logo = require(".assets/images/logo.svg");

interface AppState {
  visible: boolean;
  position: DrawerPosition;
}

class App extends React.Component<{}, AppState> {
  state: AppState = { visible: false, position: "left" };

  openDrawerLeft = () => {
    this.setState({ visible: true, position: "left" });
  };

  openDrawerRight = () => {
    this.setState({ visible: true, position: "right" });
  };

  closeDrawer = () => {
    this.setState({ visible: false });
  };

  handleVisibility = (visible: true) => {
    this.setState({ visible });
  };

  handleClick = () => {
    alert("clicked!");
  };

  render() {
    const { visible, position } = this.state;
    const isLeft = position === "left";

    const closeBtn = (
      <Button icon onClick={this.closeDrawer}>
        {isLeft ? "arrow_back" : "close"}
      </Button>
    );

    const inboxListItems: any = [
      <Button secondary>Some page</Button>,
      <Divider />,
      <Button secondary>Another page</Button>
    ];

    return (
      <div className="App">
        <Toolbar nav={<Nav onClick={this.openDrawerLeft} />} title="AvCom" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={this.handleClick} type="button" raised primary>
          Yo
        </Button>
        <VideoList domainId="AEC051FE-B96E-4016-AF9A-E79C76B385C4" />
        <Drawer
          id="simple-drawer-example"
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          position={position}
          onVisibilityChange={this.handleVisibility}
          navItems={inboxListItems}
          header={
            <Toolbar
              nav={isLeft ? undefined : closeBtn}
              actions={isLeft ? closeBtn : undefined}
              className="md-divider-border md-divider-border--bottom"
            />
          }
        />
      </div>
    );
  }
}

export default App;
