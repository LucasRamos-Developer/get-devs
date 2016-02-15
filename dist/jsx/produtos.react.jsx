var Produto = React.createClass({
    addCart: function (e) {
        e.preventDefault();
        PubSub.publish('cart.added', this.props);
    },
    getInitialState: function() {
        return {data: this.props};
    },
    render: function () {
        var valor_antigo = '';
        if (this.props.valor.anterio) {
            valor_antigo = <Valor val={this.props.valor.anterio} />
        }
        return (
            <article className="produto-item column">
                <div className="produto-inner animated">
                    <div className="produto-infor">
                        <figure>
                            <img src={this.props.img} alt="{this.props.nome}" />
                        </figure>
                        <div className="rating" data-rasting={this.props.rasting}>
                            <i className="fa fa-star" data-star="5"></i>
                            <i className="fa fa-star" data-star="4"></i>
                            <i className="fa fa-star" data-star="3"></i>
                            <i className="fa fa-star" data-star="2"></i>
                            <i className="fa fa-star" data-star="1"></i>
                        </div>
                        <h4>{this.props.nome}</h4>
                        <p className="preco">
                            {valor_antigo}
                            <Valor val={this.props.valor.atual} />
                        </p>
                    </div>
                    <button data-action="add-cart" className="button-action animated" onClick={this.addCart}>
                        Adicionar ao carrinho
                    </button>
                </div>
            </article>
        );
    }
});

ReactDOM.render(
    <MaisComprados />,
    document.getElementById('mais-comprados')
);
