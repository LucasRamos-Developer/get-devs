var CarrinhoCompras = React.createClass({
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
              <li key={item.id} className="cart-item">
                <span className="cart-item__nome">{item.nome}</span>
                <span className="cart-item__valor"><Valor val={item.valor.atual} /></span>
              </li>
            )
        });

        var body = (<ul className="produtos-cart">{items}</ul>);
        var empty = 'Nenhum produto adicionado';
        return (
            <div>
                <a id="cart-action" className="cart">
                    <span className="icon-cart">
                        <b className="contador">{this.state.item_count}</b>
                    </span>
                    <span className="valor-total">
                        <Valor val={this.state.total} />
                    </span>
                </a>
            <div className="cart-content animated fadeIn">
                {items.length > 0 ? body : empty}
            </div>
            </div>
        );
    }
});

ReactDOM.render(<CarrinhoCompras />, document.getElementById('carrinho-compras'));