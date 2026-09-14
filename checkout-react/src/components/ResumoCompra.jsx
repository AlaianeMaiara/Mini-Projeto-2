function ResumoCompra({ subtotal, frete, total }) {
  function formatar(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  return (
    <div className="resumo-compra">
      <div className="resumo-linha">
        <span>Subtotal</span>
        <span>{formatar(subtotal)}</span>
      </div>
      <div className="resumo-linha">
        <span>Frete</span>
        <span>{formatar(frete)}</span>
      </div>
      <div className="resumo-linha resumo-total">
        <span>Total</span>
        <span>{formatar(total)}</span>
      </div>
    </div>
  );
}

export default ResumoCompra;