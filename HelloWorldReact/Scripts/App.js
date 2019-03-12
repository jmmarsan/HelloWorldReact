class Description extends React.Component {
    render() {
        return (<p> Esto es una prueba </p>);
    }
}

class Hello extends React.Component {
  render() {
    return (<div>
              <h1 className="myDiv">Hola { this.props.name }</h1>
              <hr/>  
        <Description />
        <Description />
            </div>);
  }
}