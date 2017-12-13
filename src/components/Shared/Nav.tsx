import * as React from "react";
import { Button } from "react-md";

interface NavProps {
  className?: string;
  onClick: () => void;
}

class Nav extends React.Component<NavProps> {
  render() {
    const { className, onClick } = this.props;
    return (
      <Button onClick={onClick} icon className={className}>
        menu
      </Button>
    );
  }
}

export default Nav;
