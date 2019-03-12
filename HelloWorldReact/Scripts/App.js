class Description extends React.Component {
    render() {
        return (<p> Esto es una prueba con una descripci&oacute;n bastante larga para ver c&oacute;mo se dispone utilizando las columnas y el espacio disponible</p>);
    }
}

class Grid extends React.Component {
    render() {
        return (<div className="grid2Columns">
                    <Description />
                    <Description />
             </div>)
   }
   
}

class Hello extends React.Component {
  render() {
    return (<div>
              <h1 className="myDiv">Hola { this.props.name }</h1>
              <hr/>  
              <Grid />
              <hr />
        Hoy es {this.props.date}
            </div>);
  }
}