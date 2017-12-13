import * as React from "react";
import { Avatar, Chip, FontIcon } from "react-md";

export interface File{
    type: string;
    physicalPath: string;
  }

export interface Files{
    AssetFiles: File[];
}
  

class AssetFilesList extends React.Component<Files,{}>{

constructor(props: Files){
    super(props);    
}

    render(){
        return (
            <div className="chips__list"> 
             {this.props.AssetFiles.map((file:File) => 
                 <Chip label={file.type} avatar={<Avatar icon={<FontIcon iconClassName="fa fa-archive" />}/>} />                                
               )}            
          </div>    
        );
    }
}

export default AssetFilesList;