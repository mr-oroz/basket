import React, {Component} from 'react';

class Produck extends Component {

    render() {
        return (
            <div className="card col-3">
                <img className="card-img-top" src="https://delo.ua/files/news/images/3679/78/picture2_preimuschestva-na_367978_p0.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.number}</p>
                    <a href="#" className="btn btn-secondary">Купить</a>
                </div>
            </div>
        );
    }
}

export default Produck;