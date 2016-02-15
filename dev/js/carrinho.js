var CarrinhoCompras = React.createClass({displayName: "CarrinhoCompras",
    getInitialState: function() {
        var obj = PubSub.subscribe('cart.added', this.addItem);
        console.log(obj);
      //$.subscribe('cart.added', this.addItem);
      //$.subscribe('cart.removed', this.removeItem);

        return {
            items: [],
            total: 0,
            item_count: 0
        };
    },

    addItem: function(e, item) {
      this.state.items.push(item);
      this.countTotal();
      this.forceUpdate();
    },

    countTotal: function() {
      var total = 0;
      var count = this.state.item_count + 1; 
      this.state.items.forEach(function(item, index) {
        total += item.valor.atual;
      });

      this.setState({
        total: total,
        item_count: count
      });
      alert("Produto adicionado ao Carrinho de Compras");
    },

    render: function() {
        var items = this.state.items.map(function(item) {
            return (
              React.createElement("li", {key: item.id, className: "cart-item"}, 
                React.createElement("span", {className: "cart-item__nome"}, item.nome), 
                React.createElement("span", {className: "cart-item__valor"}, React.createElement(Valor, {val: item.valor.atual}))
              )
            )
        });

        var body = (React.createElement("ul", {className: "produtos-cart"}, items));
        var empty = 'Nenhum produto adicionado';
        return (
            React.createElement("div", null, 
                React.createElement("a", {id: "cart-action", className: "cart"}, 
                    React.createElement("span", {className: "icon-cart"}, 
                        React.createElement("b", {className: "contador"}, this.state.item_count)
                    ), 
                    React.createElement("span", {className: "valor-total"}, 
                        React.createElement(Valor, {val: this.state.total})
                    )
                ), 
            React.createElement("div", {className: "cart-content animated fadeIn"}, 
                items.length > 0 ? body : empty
            )
            )
        );
    }
});

ReactDOM.render(React.createElement(CarrinhoCompras, null), document.getElementById('carrinho-compras'));