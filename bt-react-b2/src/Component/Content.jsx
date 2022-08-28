import React, { Component } from 'react'
import "./style.css"

export default class Content extends Component {
    styleBackground = {
        background : "url(./glassesImage/background.jpg)",
        backgroundSize : "cover"
    }

    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 70, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 40, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 60, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 80, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 100, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 60, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];

    state = {
        imgSrc: "./glassesImage/v1.png",
        name: "GUCCI G8850U",
        price: "30",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    }

    // changeGlass = (id, name) => {
    //     this.setState({
    //         imgSrc: `./glassesImage/v${id}.png`,
    //         name: `${name}`,
    //         price: `- ${this.arrProduct[7].price}$`,
    //     })
    // }

    renderProduct = () => {
        const arrTagJSX = this.arrProduct.map((value, index) => {
            return(
                <div className="col-2 ">
                    <div className="product" key={value}>
                        <img className="img-fluid border rounded border-secondary" src={value.url} alt="{...}" onClick={() => {
                            // this.changeGlass(value.id, value.name, value.desc, value.price)
                            this.setState({
                                imgSrc: `./glassesImage/v${value.id}.png`,
                                name: `${value.name}`,
                                price: `- ${value.price}$`,
                            })
                        }} />
                    </div>
                </div>
        )});
        return arrTagJSX;
    }

    render() {
        return (
            <div style={this.styleBackground}>
                <div className="row pt-4 w-100">
                    <div className="col-6">
                        <div className="card text-white w-50 float-right mr-5">
                            <img className="card-img-top" src="./glassesImage/model.jpg" alt="..." />
                            <img className="imgGlass" src="./glassesImage/v1.png" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">FENDI F8750</h4>
                                <p className="card-text">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-white w-50 ml-5">
                            <img className="card-img-top" src="./glassesImage/model.jpg" alt="..." />
                            <img className="imgGlass" src={this.state.imgSrc} alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{this.state.name} {this.state.price}</h4>
                                <p className="card-text">{this.state.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 matKinh" >
                    <div className="row p-2">
                        {this.renderProduct()}
                    </div>
                </div>
            </div>
        )
    }
}