var MaisComprados = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'js/produtos.json', true);
        xhr.onload = function() {
          var data = JSON.parse(xhr.responseText);
          this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },
    render: function () {
        return (
            <div>
            <div className="title column">
                <h2>Mais Comprados</h2>
            </div>
            <ProdutoContainer  data={this.state.data} />
            </div>
        );
    }
});