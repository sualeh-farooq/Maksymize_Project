import { Start_Button } from "@/components/buttons";
export function Boost() {
    return (
      <>
        <div class="boost_div flex items-center flex-col  justify-center h-72  bg-fixed bg-center w-100 custom-img">
          <h1 className=" text-4xl font-bold text-white  sm:text-4xl lg:text-6xl md:text-4xl">
            Boost Your Leads{" "}
          </h1>

          <span className="mt-8">
            <Start_Button title="Schedule a free strategy call" />
          </span>
        </div>
      </>
    );
  }
  