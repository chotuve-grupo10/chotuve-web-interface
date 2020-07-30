import React from 'react';
import { Icon } from 'rsuite'

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: props.imgSrc,
      title: props.title,
      description: props.description,
      fileSize: props.fileSize,
    }
    this.onClick = props.onClick ? props.onClick.bind(this) : null;
  }

  render() {
    return (
      <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
            <img src={this.state.imgSrc} alt="" height="200px" width="200px"/>
        </div>
        <div className="card-body px-2" style={{position: 'relative'}}>
          <div className="row">
            <div className="col-11">
              <h4 className="card-title">{this.state.title}</h4>
              <p className="card-text">{this.state.description}</p>
              <p style={{'font-size': '0.9em', color: 'grey'}}>Size: {this.state.fileSize}</p>
            </div>
            <div className="col-1">
                <Icon className="justify-content-center" icon="trash" size="3x" 
                onClick={this.onClick}/>
            </div>
          </div>
          <div className="w-100"></div>
        </div>
      </div>
    );
  }
}

export default VideoCard;