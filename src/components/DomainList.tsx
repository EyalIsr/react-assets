import * as React from "react";
import { observer } from "mobx-react";
import AssetsStore from "../stores/AssetsStore";

export interface DomainListProps {
  assets: AssetsStore;
}

@observer
export default class DomainList extends React.Component<DomainListProps, {}> {
  componentDidMount() {
    this.props.assets.fetchDomains();
  }
  render() {
    const { assets } = this.props;
    return assets.isFetchingDomains ? (
      <div>loading...</div>
    ) : (
      <div>
        Yo {assets.domainsCount}
        {assets.domains.map((item, key) => <div key={key}>{item}</div>)}
      </div>
    );
  }
}
