import Review_Card from "@/components/cards";
import Slider from "@/components/slider";
export function Clients() {
  return (
    <div className="approach-bg py-10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            What our clients say
          </h2>
        </div>
        <div className=" rev-card rounded mt-5 sm:p-5 md:p-6 lg:p-5">
          {/* <Review_Card /> */}
          <Slider card={Review_Card} />
        </div>
      </div>
    </div>
  );
}
