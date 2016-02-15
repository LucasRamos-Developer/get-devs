var ProdutoContainer = React.createClass({
     render: function () {
        var productNodes = this.props.data.map(function (product) {
            return (
                <Produto
                    key={product.id}
                    nome={product.nome}
                    rasting={product.rasting}
                    img={product.imagem_url}
                    valor={product.valor}
                    />
            );
        });
        return (
            <div className="produtos five-column" >
                {productNodes}
            </div>
        );
    }
});