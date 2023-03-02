export default function Sell_Button({title}) {
    return (
      <>
        <button className="rounded-full h-14 border-2 font-bold px-10 py-2 items-center text-s  text-xl border-white-700 hover:border-red-500 hover:bg-red-500 duration-500 hover:text-white hover:-translate-y-1 hover:scale-110">
          {title}
        </button>
      </>
    );
  }
  
  export function Access_Button({title}) {
    return (
      <>
      <button className="rounded-full h-12 border-2 font-semibold px-10 py-2 mt-2 items-center text-md bg-black text-white  border-black">
        <span className="flex justify-between" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
   {title}
</span>
        </button>
      </>
    )
  }

    
  export function Download_Button({title}) {
    return (
      <>
      <button className="rounded-full h-14 border-2 font-semibold px-10 py-2 mt-2 items-center text-md bg-white text-black  border-white hover:bg-black hover:text-white hover:border-black duration-500">
        <span className="flex justify-between" >
      
   {title}
</span>
        </button>
      </>
    )
  }

  export function Result_Button({title}) {
    return (
      <>
      <button className="rounded-full h-14 border-2 font-semibold px-10 py-2 mt-2 items-center text-md bg-red-500 text-white  border-red-500 hover:bg-black hover:text-white hover:border-black duration-500">
        <span className="flex justify-between" >
      
   {title}
</span>
        </button>
      </>
    )
  }

  export function Strat_Button({title}) {
    return (
      <>
      <button className="rounded-full h-14 border-2 border-white font-semibold px-10 py-2 mt-2 items-center text-md bg-white text-black   hover:bg-red-500 hover:text-white hover:border-red-500 duration-500">
        <span className="flex justify-between" >
      
   {title}
</span>
        </button>
      </>
    )
  }