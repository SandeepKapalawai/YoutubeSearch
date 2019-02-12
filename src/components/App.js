import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';



class App extends React.Component{

    state ={ 
        videos : []
    };

    onTextSubmit =  async text => {
        const response =  await youtube.get('/search',{
        params :{
            q:text
        }
        });
        console.log(response.data.items)
        this.setState ( {videos : response.data.items})
    };

    render()
    {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTextSubmit}/>
                <VideoList videos={this.state.videos} />
                i have {this.state.videos.length} videos
            </div>
        )
    }
    
}

export default App;