export default function Sell_Button({title}) {
    return (
      <>
        <button className="rounded-full h-14 border-2 font-bold px-10 py-2 items-center text-s  text-xl border-white-700 hover:border-red-500 hover:bg-red-500 duration-500 hover:text-white hover:-translate-y-1 hover:scale-110">
          {title}
        </button>
      </>
    );
  }
  