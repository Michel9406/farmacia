import React from "react";

function Navbar() {
  return (
    <>
      <div className='w-full" bg-green-800 text-white p-4 flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Blog Pessoal</div>

          <div className="flex gap-4">
            <div className="hover:underline">Produtos</div>

            <div className="hover:underline">Perfil</div>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
