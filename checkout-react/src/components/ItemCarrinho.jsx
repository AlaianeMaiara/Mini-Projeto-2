function ItemCarrinho({ nome, autor, preco, quantidade }) {
  const subtotal = preco * quantidade;

  return (
    <div className="item-carrinho">
      <div className="item-info">
        <h3>{nome}</h3>
        <p>{autor}</p>
        <span>Qtd: {quantidade}</span>
      </div>
      <div className="item-preco">
        <p>{subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
      </div>
    </div>
  );
}

export default ItemCarrinho;