var CarrinhoCompras = React.createClass({
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
              <li key={produto.id} className="cart-item">
                <span className="cart-item__nome">{produto.nome}</span>
                <span className="cart-item__valor">R$ {produto.valor.atual}</span>
              </li>
            )
        });

        var body = (<ul>{items}</ul>);
        var empty = '';
        return (
            <div>
                <a href="" className="cart">
                    <span className="icon-cart">
                        <b className="contador">{this.state.item_count}</b>
                    </span>
                    <span className="valor-total">
                        R$ {Produto.val_real(this.state.total, 2, '.', ',')}
                    </span>
                </a>
            <div className="cart-content">
                {items.length > 0 ? body : empty}
            </div>
            </div>
        );
    }
});

ReactDOM.render(<CarrinhoCompras />, document.getElementById('carrinho-compras'));