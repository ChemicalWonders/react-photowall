import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';

const posts = [{
    id: "0",
    description: "Landscapes in Iceland",
    imageLink: "https://scontent-sjc3-1.cdninstagram.com/vp/f9aea1556bac2c057f1bbee7d833ef66/5D613E32/t51.2885-15/sh0.08/e35/s750x750/41657850_308937303218386_7081559214564311040_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com"
    }, {
    id: "1",
    description: "Snowy Sights in Tahoe",
    imageLink: "https://scontent-sjc3-1.cdninstagram.com/vp/446d5cca2c2b601d29d6091b018f65d5/5D6C7429/t51.2885-15/e35/56418403_128907438267603_4610095347828465627_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com"
    }, /*{
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}]*/
    ]

class Main extends Component {
    render() {
        return <div>
            <Title title = {'Photowall'}/>
            <Photowall posts={posts}/>
            </div>
    }
}

export default Main