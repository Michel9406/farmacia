import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='w-full" bg-red-950 text-white p-4 flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Farmácia</div>

          <div className="flex gap-4">
            <div className="hover:underline">Produtos</div>

            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>

            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
