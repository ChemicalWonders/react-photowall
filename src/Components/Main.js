import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    componentDidMount() {
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts: data
        })
    }

    render() {
        console.log(this.state.posts);
        return(
            <div>
            <Route exact path="/" render={() => (
                <div>
                    <Title title = {'Inspiring Locations'}/>
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                </div>
            )}/>

            <Route path="/AddPhoto" render= {({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    history.push('/');
                }}/>
            )}/>      
        </div>
        )
    }
}

function SimulateFetchFromDatabase() {
    return [
        {
            id: 0,
            description: "Landscapes in Iceland",
            imageLink: "https://scontent-sjc3-1.cdninstagram.com/vp/f9aea1556bac2c057f1bbee7d833ef66/5D613E32/t51.2885-15/sh0.08/e35/s750x750/41657850_308937303218386_7081559214564311040_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com"
        }, {
            id: 1,
            description: "Snowy Sights in Tahoe",
            imageLink: "https://scontent-sjc3-1.cdninstagram.com/vp/446d5cca2c2b601d29d6091b018f65d5/5D6C7429/t51.2885-15/e35/56418403_128907438267603_4610095347828465627_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com"
        }
    ]
}

export default Main