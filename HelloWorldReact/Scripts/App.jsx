class Description extends React.Component {
    render() {
        return (<p> Esto es una prueba con una descripci&oacute;n bastante larga para ver c&oacute;mo se dispone utilizando las columnas y el espacio disponible</p>);
    }
}


class ContadorClicks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numClicks: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('hizo click');
        this.setState({
            numClicks: 1
        });
    }

    render() {
        return (<div onClick={this.handleClick}>
            N&uacute;mero de clicks: {this.state.numClicks}
        </div>);
    }
}

class Grid extends React.Component {
    render() {
        return (<div className="grid2Columns">
                    <ContadorClicks />
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

    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tareas: PropTypes.arrayOf(PropTypes.string),
        tareasHechas: PropTypes.arrayOf(PropTypes.string)
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
        <ClickTest/>
    </div>
    );
  }
}

class ClickTest extends React.Component {
    ClickMe() {
        alert('the button was clicked');
    };
    render() {
        return (
            <div onClick={this.ClickMe.bind(this)}>
                Click Me
          </div>
        );
    }
}

