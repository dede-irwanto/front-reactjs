import React, { Component } from "react";
import "./CSS/Produk.css";

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  ButtonBeli = () => {
    this.setState({
      stock: this.state.stock - 1,
    });

    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };
  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img src="https://i.pcmag.com/imagery/reviews/05POeP7aWhKjIKkZ15YCZa9-21..v1635374572.jpg" />
        <p>
          <b>Rp. {this.props.harga}</b>
        </p>
        <p>{this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.ButtonBeli}
          disabled={this.state.disabled}
        >
          Beli
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Produk;
