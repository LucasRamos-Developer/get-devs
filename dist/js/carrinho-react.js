var CarrinhoCompras = React.createClass({displayName: "CarrinhoCompras",
    getInitialState: function() {
        var ee = new EventEmitter();
        var obj = ee.getListeners('cart.added');
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
      this.forceUpdate();

      this.countTotal();
    },

    countTotal: function() {
      var total = 0;

      this.state.items.forEach(function(item, index) {
        total += item.price;
      });

      this.setState({
        total: total
      })
    },

    render: function() {
        var items = this.state.items.map(function(produto) {
            return (
              React.createElement("li", {key: produto.id, className: "cart-item"}, 
                React.createElement("span", {className: "cart-item__nome"}, produto.nome), 
                React.createElement("span", {className: "cart-item__valor"}, "R$ ", produto.valor.atual)
              )
            )
        });

        var body = (React.createElement("ul", null, items));
        var empty = '';
        return (
            React.createElement("div", null, 
                React.createElement("a", {href: "", className: "cart"}, 
                    React.createElement("span", {className: "icon-cart"}, 
                        React.createElement("b", {className: "contador"}, this.state.item_count)
                    ), 
                    React.createElement("span", {className: "valor-total"}, 
                        "R$ ", Produto.val_real(this.state.total)
                    )
                ), 
            React.createElement("div", {className: "cart-content"}, 
                items.length > 0 ? body : empty
            )
            )
        );
    }
});

ReactDOM.render(React.createElement(CarrinhoCompras, null), document.getElementById('carrinho-compras'));