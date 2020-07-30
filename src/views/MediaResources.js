import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import VideoCard from '../components/VideoCard';
import {
  getMediaResources,
  deleteMediaResource,
} from '../apliClient';
import Spinner from '../components/Spinner/Spinner';

class MediaResources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      mediaResources: [],
    };
    this.handleApiGetResponse = this.handleApiGetResponse.bind(this);
    this.handleApiDeleteResponse = this.handleApiDeleteResponse.bind(this);
    // this.deleteResource = this.deleteResource.bind(this);
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

  onDelete(elementId) {
    var deleteResourceFunction = this.deleteResource;
    console.log(deleteResourceFunction);
    var options = {
      title: 'Confirmar eliminación',
      message: '¿Está segur@ de querer eliminar el recurso?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => {
            console.log(`Eliminando ${elementId}`);
            deleteMediaResource(elementId, this.handleApiDeleteResponse);            
          }
        },
        {
          label: 'No'
        }
      ]
    }
    confirmAlert(options);
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Spinner />}
        {this.state.mediaResources.map((resource, idx) => {
          return (
            <div>
              {!this.state.isLoading &&
                <VideoCard key={resource._id}
                    elementId={resource._id}
                    imgSrc={resource.thumbnail} 
                    title={resource.title} 
                    description={resource.description} 
                    fileSize={resource.size}
                    onDelete={this.onDelete} />
              }
            </div>
          )}
        )}
      </div>
    );
  }
}

export default MediaResources;