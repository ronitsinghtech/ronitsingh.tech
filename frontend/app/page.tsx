export default function home() {
  return (
    <>
      <section></section>
      <section className="flex flex-row w-screen h-screen bg-blue-300">
        <section className="flex flex-col flex-1 justify-center items-center">
          <p className="text-white text-3xl">Welcome!</p>
        </section>
        <section className="flex flex-col flex-1 items-center justify-center gap-2">
          <img src="/Ronit_Singh.jpeg" className="w-1/5 rounded-[10]"></img>
          <p className="text-white text-2xl">Ronit Singh</p>
        </section>
      </section>
    </>
  );
}
