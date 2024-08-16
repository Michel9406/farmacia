function Home() {
  return (
    <>
      <div className="bg-red-950 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r bg-slate-400 to-white ">
              Seja bem vindo!
            </h2>
            <p className="text-xl bg-clip-border">
              A farmácia marcia mais barata do brasil{" "}
            </p>

            <div className="flex justify-around gap-4">
              <button className=" hover:bg-red-600 ring-2  text-gray-400 py-2 px-4">
                Produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src="" alt="" className=' " ' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
