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

var Produto = React.createClass({displayName: "Produto",
    val_real: function(number, decimals, dec_point, thousands_sep){
         // Strip all characters but numerical ones.
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    },
    addCart: function (e) {
        e.preventDefault();
        var ee = new EventEmitter();
        ee.addListener('cart.added', this.props);
    },
    getInitialState: function() {
        return {data: this.props};
    },
    render: function () {
        var valor_antigo = '';
        if (this.props.valor.anterio) {
            valor_antigo = React.createElement("span", {className: "ant"}, "R$ ", this.val_real(this.props.valor.anterio, 2, ',', '.'), " ");
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
                            React.createElement("span", null, "R$ ", this.val_real(this.props.valor.atual, 2, ",", "."))
                            
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
