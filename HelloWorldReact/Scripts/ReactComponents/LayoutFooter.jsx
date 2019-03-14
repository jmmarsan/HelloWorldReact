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
            <div onClick={this.handleClick}> {this.state.numClicks}</div>
        );
    }
}

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('contadorClicksFooter'),
);