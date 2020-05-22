import React from "react";

import Like from "../images/like.svg"
import barbeque from '../images/barbeque.jpg';
import bakingo from '../images/bakingo.jpeg';
import faasos from '../images/faasos.jpg';
import firangi from '../images/firangi.jpeg';
import good from '../images/good.jpg';
import mandrine from '../images/mandrine.jpeg';
import sweet from '../images/sweet.jpeg';
import roseate from '../images/roseate.jpg';
import "./Home.css";


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {id: "001", name: "Barbeque Nation Grill", location: "Pan India", offers: ["Buy a gift voucher", "50% off"], image: barbeque, rating: 4.4},
        {id: "002", name: "Fasoos", location: "Mumbai", offers: ["50% off"], image: faasos, rating: 4.5},
        {id: "003", name: "Firangi bake", location: "Pan India", offers: ["Buy a gift voucher", "50% off"], image: firangi, rating: 4.7},
        {id: "004", name: "Good Bowl", location: "Pan India", offers: ["Buy a gift voucher", "50% off"], image: good, rating: 4.2},
        {id: "005", name: "Mandrin Oak", location: "Pan India", offers: ["Buy a gift voucher", "50% off"], image: mandrine, rating: 4.1},
        {id: "006", name: "Bakingo", location: "Mumbai, Pune", offers: ["Buy a gift voucher", "50% off"], image: barbeque, rating: 4.4},
        {id: "007", name: "Roseate", location: "Delhi NCR", offers: ["Buy a gift voucher", "50% off"], image: roseate, rating: 4.4},
        {id: "008", name: "Sweet Truth", location: "Chennai", offers: ["Buy a gift voucher", "50% off"], image: barbeque, rating: 3.2}
      ],
      showing: null
    }
  }

  closeModel() {
    this.setState({
      showing: null
    })
  }

  buy(id) {
    let image;
    this.state.list.forEach(item => {
      if (item.id === id) {
        image = item.image
      }
    })

    // if (image) {
    //   this.setState({
    //     showing: image
    //   })
    // }
    console.log("id",id, image.toString());
    window.open(image, "_blank");
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          {this.state.list.map(item => {
            console.log("render", item);
            return (
              <FoodCard key={item.id} data={item} buy={(id) => this.buy(id)}/>
            )
          })}
        </div>
        {this.state.showing && 
          <div className="model">
            <button onClick={() => this.closeModel()}>X</button>
            <img src={this.state.showing} width="100%"/>
          </div>
        }
      </div>
    )
  }
}



function FoodCard(props) {
  const {data} = props;
  return (
    <div className="card">
      <img alt="food" src={data.image} className="image"/>
      <div className="body">
        <div>
          <span className="name">{data.name}</span>
          <span className="rating">{data.rating}</span>
        </div>
        <span className="location">{data.location}</span>
        <div className="offers">
          <p>Food Voucher</p>
          <p>{data.offers[0]}</p>
          {data.offers.length > 1 && <p>{data.offers.length -1} more offer(s)</p>}
        </div>
        <div>
          <img src={Like} alt="like" height="16px"/>
        </div>
          <button className="buy" onClick={() => {props.buy(data.id)}}>Buy now</button>
      </div>
    </div>
  )
}

export default Home;