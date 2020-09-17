import React, {Component} from 'react';
import Produck from "./produck";

class App extends Component {

    state = {
        data: [
            {id: 1, price: 2000, title: 'Asan', text: 'bla bla bla' },
            {id: 2, price: 1500, title: 'Hasan', text: 'bla bla bla' },
            {id: 3, price: 1800, title: 'Uson', text: "bla bla bla"},
            {id: 3, price: 1750, title: 'Huson', text: "bla bla bla"}
        ]
    }


    render() {
        return (
            <div className='container jumbotron'>
                <div className='row'>
                    {this.state.data.map((item) => {
                        return <Produck key={item.id}{...item}/>
                    })}
                </div>
            </div>
        )
    }
}

export default App;