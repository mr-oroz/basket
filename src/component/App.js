import React, {Component} from 'react';
import Product from "./produck";
import Basket from "./basket";

class App extends Component {

    state = {
        data: [
            {
                id: 1,
                title: 'Asan',
                rebate: 100,
                price: 120,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
            {
                id: 2,
                title: 'Hasan',
                rebate: 200,
                price: 234,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
            {
                id: 3,
                title: 'Masan',
                rebate: 500,
                price: 543,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
            {
                id: 4,
                title: 'Uson',
                rebate: 100,
                price: 123,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
        ],
        basket: []
    }
    addProduct = (id, step) => () => {
        this.setState(({data, basket}) => {
            const index = basket.findIndex((item) => item.id === id)
            if (index === -1) {
                const index = basket.findIndex((item) => item.id === id)
                const item = {...data.find((item) => item.id === id)}
                return {basket: [...basket, {...item,total:item.rebate, count: 1}]}
            }
            return {};
        })
    }
    stepProduct = (id, step) => () => {
        this.setState(({basket}) => {
            const index = basket.findIndex((item) => item.id === id)
            if (index !== -1) {
                const index = basket.findIndex((item) => item.id === id)
                const item = {...basket[index]}
                item.count += step
                if (item.count <= 0) {
                    return {};
                }
                item.total = item.rebate * item.count
                return {basket: [...basket.slice(0, index), item, ...basket.slice(index + 1)]}
            }
            return {};
        })
    }

    deleteProduct = (id) => () => {
        this.setState(({basket}) => {
            const index = basket.findIndex((item) => item.id === id)
            return {basket: [...basket.slice(0, index), ...basket.slice(index + 1)]}
        })
    }

    render() {
        return (
            <div>
                <div className='container jumbotron'>
                    <div className="row">
                        {this.state.data.map((item) => {
                            return <Product addProduct={this.addProduct} key={item.id} {...item}/>
                        })}

                    </div>
                </div>
                <Basket stepProduct={this.stepProduct} deleteProduct={this.deleteProduct} basket={this.state.basket}/>
            </div>
        );
    }
}

export default App;