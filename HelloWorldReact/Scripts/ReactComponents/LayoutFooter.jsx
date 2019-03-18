class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numClicks: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState({
            numClicks: this.state.numClicks + 1
        });
    }





    render() {
        return (
            <div> Contador clicks footer <div className="clickable" onClick={this.handleClick}> {this.state.numClicks}</div></div>
        );
    }
}

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('contadorClicksFooter'),
);