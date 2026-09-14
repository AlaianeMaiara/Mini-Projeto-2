import { Link } from "react-router-dom";
import { produtos } from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";

function Carrinho() {
  
  const subtotal = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
    0
  );
  const frete = 9.9;
  const total = subtotal + frete;

  return (
    <main>
      <h1>Seu carrinho</h1>

      {produtos.map((produto) => (
        <ItemCarrinho
          key={produto.id}
          nome={produto.nome}
          autor={produto.autor}
          preco={produto.preco}
          quantidade={produto.quantidade}
        />
      ))}

      <ResumoCompra subtotal={subtotal} frete={frete} total={total} />

      <Link to="/pagamento">
        <button>Finalizar compra</button>
      </Link>
    </main>
  );
}

export default Carrinho;