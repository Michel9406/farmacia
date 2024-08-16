

function Home() {
  return (
    <>
    <div className="bg-violet-950 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-white ">
              Seja bem vindo!
            </h2>
            <p className="text-xl bg-clip-border">A farmacia marcia mais barata do brasil </p>

            <div className="flex justify-around gap-4">
              <button className=" hover:bg-violet-600 ring-2 from-blue-950 to-white text-blue-950 py-2 px-4">
                Produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
          <img src='' alt="" className='" w-4/5  m-2 rounded-full ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ' />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;