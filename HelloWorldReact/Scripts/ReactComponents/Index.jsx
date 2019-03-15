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
        console.log('ejemplo log');
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

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <h4>Input:</h4>
                <p>{this.state.input}</p>
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
                if(this.state.visibility == true) {
                    return (<div>
                        <h3><div onClick={this.changeVisibility} className="clickable" >-</div> {this.props.titulo}</h3>
                        <ul>{this.props.tareas.map((t,i) => (<li key={i}>{t}</li>))}</ul>
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
