import React from 'react';
import VideoCard from '../components/VideoCard';
import {
  getMediaResources, 
} from '../apliClient';

class MediaResources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      mediaResources: [],
    };
    this.handleApiGetResponse = this.handleApiGetResponse.bind(this);
    this.handleApiDeleteResponse = this.handleApiDeleteResponse.bind(this);
  }

  handleApiGetResponse(response) {
    console.log(response);
    this.setState({mediaResources: response, isLoading: false});
  }

  handleApiDeleteResponse(response) {
    console.log(response);
    this.refreshState();
  }

  refreshState() {
    this.setState({isLoading: true});
    getMediaResources(this.handleApiGetResponse);
  }

  componentDidMount() {
    this.refreshState();
  }

  render() {
    return (
      <div>
        {this.state.mediaResources.map((resource, idx) => {
          return (
            <VideoCard key={idx} 
                imgSrc={resource.thumbnail} 
                title={resource.title} 
                description={resource.description} 
                fileSize={resource.size} />
          )}
        )}
      </div>
    );
  }
}

export default MediaResources;