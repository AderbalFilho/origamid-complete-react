import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Montou agora");
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  componentWillUnmount() {
    console.log("Saiu da tela");
  }

  handleClick() {
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Products;
