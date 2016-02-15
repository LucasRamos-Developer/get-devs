var MaisComprados = React.createClass({displayName: "MaisComprados",
    
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
            React.createElement("div", null, 
            React.createElement("div", {className: "title column"}, 
                React.createElement("h2", null, "Mais Comprados")
            ), 
            React.createElement(ProdutoContainer, {data: this.state.data})
            )
        );
    }
});