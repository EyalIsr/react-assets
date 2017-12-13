import * as React from "react";
import { List, Subheader, ListItem, Avatar, FontIcon } from "react-md";
import axios from 'axios';
import AssetFilesList from './AssetFileList';
import { File as AFile } from './AssetFileList';

const InfoIcon = () => <FontIcon>info</FontIcon>;
//const StarIcon = () => <FontIcon>star</FontIcon>;

export interface AssetsProps { domainId: string; }
export interface AssetsState {
  assets: Asset[];
}
export interface Asset {
  houseNumber: string;
  files: AFile[];
}

class VideoList extends React.Component<AssetsProps, AssetsState> {
  componentDidMount() {
    const baseUrl = 'http://10.5.1.99:5050/api/assets/';
    const url = `${baseUrl}Domains/${this.props.domainId}?page=1&pageSize=50`;
    axios(url)
      .then(res => {
        const assetsFromWebAPI: Asset[] = res.data.map((obj: any) => obj as Asset);
        this.setState({ assets: assetsFromWebAPI });
        //console.log(assetsHouseNumber);
      });
  }

  constructor(props: AssetsProps) {
    super(props);
    this.state = {
      assets: []
    };
  }

  render() {
    return (
      <div className="md-grid">
        <List className="md-cell md-paper md-paper--1">
          <Subheader primaryText="Top AvCom Videos:" primary />
          {this.state.assets.map((asset: any) =>
            <div className="md-grid">
              <ListItem
                leftAvatar={<Avatar suffix="deep-purple">B</Avatar>}
                rightIcon={<InfoIcon />}
                primaryText={asset.houseNumber}
                secondaryText={asset.physicalPath}
              />
              <AssetFilesList AssetFiles={asset.files} />
            </div>
          )}
        </List>
      </div>
    );
  }
}

export default VideoList;
