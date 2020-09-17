import React, {Component} from 'react';

class Produck extends Component {

    render() {
        const {title, text, price} = this.props
        return (
            <div className="card col-3">
                <img className="card-img-top" src="https://delo.ua/files/news/images/3679/78/picture2_preimuschestva-na_367978_p0.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <span href="#" className="btn btn-danger">Купить</span>
                    <span style={{marginLeft: "10px"}} className='price'>{price} сом</span>
                </div>
            </div>
        );
    }
}

export default Produck;