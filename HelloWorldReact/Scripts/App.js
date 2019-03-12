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

class Lista extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>{this.props.titulo}</h3>
                <ul>{this.props.tareas.map((t) => (<li>{t}</li>))}</ul>
            </div>
        );
    }
}
                
class Hello extends React.Component {
    static defaultProps = {
        tareasHechas: ['Sin tareas...']
    };

  render() {
    return (<div>
              <h1 className="myDiv">Hola { this.props.name }</h1>
              <hr/>  
              <Grid />
              <hr />
        Hoy es {this.props.date}

        
        <Lista id="tareasPendientes" titulo="Tareas pendientes:" tareas={this.props.tareas} /> 
        <Lista id="tareasHechos" titulo="Tareas hechas:" tareas={this.props.tareasHechas} /> 
            </div>);
  }
}

