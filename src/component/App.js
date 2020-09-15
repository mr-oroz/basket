import React, {Component} from 'react';
import Produck from "./produck";

class App extends Component {

    state = {
        data: [
            {id: 1, title: 'Asan', number: 1500},
            {id: 2, title: 'Hasan', number: 1200},
            {id: 3, title: 'Uson', number: 1700}
        ]
    }


    render() {
        return (
            <div className='container jumbotron'>
                <div className='row'>
                    {this.state.data.map((item) => {
                        return <Produck key={item.id} title={item.title} number={item.number}/>
                    })}
                </div>
            </div>
        )
    }
}

export default App;