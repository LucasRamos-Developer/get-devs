var ProdutoContainer = React.createClass({displayName: "ProdutoContainer",
     render: function () {
        var productNodes = this.props.data.map(function (product) {
            return (
                React.createElement(Produto, {
                    key: product.id, 
                    nome: product.nome, 
                    rasting: product.rasting, 
                    img: product.imagem_url, 
                    valor: product.valor}
                    )
            );
        });
        return (
            React.createElement("div", {className: "produtos five-column"}, 
                productNodes
            )
        );
    }
});