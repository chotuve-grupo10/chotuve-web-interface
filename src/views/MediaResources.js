import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import VideoCard from '../components/VideoCard';
import {
  getMediaResources,
  deleteMediaResource,
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
    this.onDelete = this.onDelete.bind(this);
  }

  handleApiGetResponse(response) {
    console.log(response);
    this.setState({mediaResources: response, isLoading: false});
  }

  handleApiDeleteResponse(response) {
    console.log('Se terminó de eliminar el video');
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
    console.log(this);
    var options = {
      title: 'Confirmar eliminación',
      message: '¿Está segur@ de querer eliminar el recurso?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => {
            console.log(`Eliminando ${elementId}`);
            deleteMediaResource(elementId, this.handleApiDeleteResponse);
            console.log('Se disparó el método para eliminar');
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
        {this.state.mediaResources.map((resource, idx) => {
          return (
              <VideoCard key={resource._id}
                    elementId={resource._id}
                    imgSrc={resource.thumbnail} 
                    title={resource.title} 
                    description={resource.description} 
                    fileSize={resource.size}
                    onDelete={this.onDelete}
                    bindObject={this} />
          )}
        )}
      </div>
    );
  }
}

export default MediaResources;