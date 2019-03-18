class Description extends React.Component {
    render() {
        return (<p> Esto es una prueba con una descripci&oacute;n bastante larga para ver c&oacute;mo se dispone utilizando las columnas y el espacio disponible</p>);
    }
}

class ContadorClicks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {

        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {

        this.setState({
            count: this.state.count - 1
        });
    }

    reset() {

        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <button className='clickable' onClick={this.increment}>Incrementar!</button>
                <button className='clickable' onClick={this.decrement}>Decrementar!</button>
                <button className='clickable' onClick={this.reset}>Reset</button>
                <div>N&uacute;mero de clicks: {this.state.count}</div>
            </div>
        );
    }
}

class ControlledInputVisor extends React.Component {
    constructor(props) {
        super(props);
    }

    //Component Lifecycle logs (Ver Tutorial/lifecycle.pdf para más info)

    componentWillMount() {
        console.log("ControlledInputVisor (componentWillMount) -> Componente siendo montado en el DOM");
    }

    componentDidMount() {
        console.log("ControlledInputVisor (componentDidMount) -> Componente ya montado en el DOM. Habitualmente utilizado para ubicar llamadas a servidor, apis, disponer eventhandlers (document.addEventListener()) etc");
    }

    componentWillReceiveProps(nextProps) {
        console.log("ControlledInputVisor (componentWillReceiveProps) -> Props del componente actualizadas por cambio desde componente padre");
        console.log(this.props);
        console.log(nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("ControlledInputVisor (shouldComponentUpdate) -> Permite cancelar renderizado del componente bajo ciertas condiciones");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("ControlledInputVisor (componentWillUpdate) -> Componente necesita repintarse. Similar a componentWillMount pero sin permitir setState");
    }

    componentDidUpdate() {
        console.log("ControlledInputVisor (componentDidUpdate) -> Componente repintado tras cambio en props o en state");
    }

    componentWillUnmount() {
        console.log("ControlledInputVisor (componentWillUnmount) -> Componente desmontado y destruido. Habitualmentes utilizado para quitar eventhandlers (document.removeEventListener())");
    }

    render() {
        return (<div>
            <h4>Input:</h4>
            <p>{this.props.texto}</p>
        </div>);
    }
}

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            showVisor: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeVisibility = this.handleChangeVisibility.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value, showVisor: this.state.showVisor });
    }

    handleChangeVisibility(event) {
        this.setState({ input: this.state.input, showVisor: !this.state.showVisor })
    }

    render() {

        const visor = this.state.showVisor ? <ControlledInputVisor texto={this.state.input} /> : null;
        return (
            <div>
                <label>&iquest;Mostrar visor&#63;</label>
                <input type="checkbox" checked={this.state.showVisor} onChange={this.handleChangeVisibility} />
                <br />
                <input value={this.state.input} onChange={this.handleChange} />
                {visor}
            </div>
        );
    }
};



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
        this.state = {
            visibility: false
        };
        this.changeVisibility = this.changeVisibility.bind(this);
    }

    changeVisibility() {
        this.setState({ visibility: !this.state.visibility });
    }

    render() {
        if (this.state.visibility == true) {
            return (<div>
                <h3><div onClick={this.changeVisibility} className="clickable" >-</div> {this.props.titulo}</h3>
                <ul>{this.props.tareas.map((t, i) => (<li key={i}>{t}</li>))}</ul>
            </div>);
        }
        else {
            return (<div>
                <h3><div onClick={this.changeVisibility} className="clickable" >+</div> {this.props.titulo}</h3>
            </div>);
        }
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

    //componentWillMount() {
    //    console.log("Hello (componentWillMount) -> Componente siendo montado en el DOM");
    //}

    //componentDidMount() {
    //    console.log("Hello (componentDidMount) -> Componente ya montado en el DOM. Habitualmente utilizado para ubicar llamadas a servidor, apis, etc");
    //}


    render() {
        return (<div>
            <h1 className="myDiv">Hola {this.props.name}</h1>
            <hr />
            <Grid />
            <hr />
            Hoy es {this.props.date}
            <Lista id="tareasPendientes" titulo="Tareas pendientes:" tareas={this.props.tareas} />
            <Lista id="tareasHechos" titulo="Tareas hechas:" tareas={this.props.tareasHechas} />
            <hr />
            <ControlledInput />
        </div>
        );
    }
}
