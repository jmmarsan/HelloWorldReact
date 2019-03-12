class Hello extends React.Component {
  render() {
    return (<div>
              <h1 className="myDiv">Hola { this.props.name }</h1>
              <hr/>  
              <p> Esto es una prueba </p>                                
            </div>);
  }
}