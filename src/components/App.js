import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';




class App extends React.Component{

    state ={ 
        videos : [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTextSubmit('buildings');
    }

    onTextSubmit =  async text => {
        const response =  await youtube.get('/search',{
        params :{
            q:text
        }
        });
        console.log(response.data.items)
        this.setState ( {videos : response.data.items,
            selectedVideo:response.data.items[0]
        })
    };

    onVideoSelect= (video) => {
      console.log('from the app', video);
      this.setState({selectedVideo : video});
    }

    render()
    {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTextSubmit}/>
               <div className = "ui grid">
                <div className="ui row">
                <div className="eleven wide column">
                <VideoDetail video ={this.state.selectedVideo} />
                </div>
               <div className="five wide column">
               <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
               </div>
                </div>
               </div>
   
            </div>
        )
    }
    
}

export default App;