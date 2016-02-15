var Produto = React.createClass({displayName: "Produto",
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
            valor_antigo = React.createElement(Valor, {val: this.props.valor.anterio})
        }
        return (
            React.createElement("article", {className: "produto-item column"}, 
                React.createElement("div", {className: "produto-inner animated"}, 
                    React.createElement("div", {className: "produto-infor"}, 
                        React.createElement("figure", null, 
                            React.createElement("img", {src: this.props.img, alt: "{this.props.nome}"})
                        ), 
                        React.createElement("div", {className: "rating", "data-rasting": this.props.rasting}, 
                            React.createElement("i", {className: "fa fa-star", "data-star": "5"}), 
                            React.createElement("i", {className: "fa fa-star", "data-star": "4"}), 
                            React.createElement("i", {className: "fa fa-star", "data-star": "3"}), 
                            React.createElement("i", {className: "fa fa-star", "data-star": "2"}), 
                            React.createElement("i", {className: "fa fa-star", "data-star": "1"})
                        ), 
                        React.createElement("h4", null, this.props.nome), 
                        React.createElement("p", {className: "preco"}, 
                            valor_antigo, 
                            React.createElement(Valor, {val: this.props.valor.atual})
                        )
                    ), 
                    React.createElement("button", {"data-action": "add-cart", className: "button-action animated", onClick: this.addCart}, 
                        "Adicionar ao carrinho"
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(MaisComprados, null),
    document.getElementById('mais-comprados')
);
