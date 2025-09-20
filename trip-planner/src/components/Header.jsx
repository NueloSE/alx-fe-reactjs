import { GiCommercialAirplane } from "react-icons/gi";

function Header() {
  return (
    <div className="text-center">
      <div className="flex flex-col sm:flex-row justify-center gap-2  items-center">
        <div className="w-fit p-2 mb-2 text-2xl text-white rounded-full  btn-action">
          <GiCommercialAirplane />
        </div>
        <h1 className="text-4xl  text-gradient">Trip Planner</h1>
      </div>
      <p className="">
        Plan your dream destinations and track your travel adventures
      </p>
    </div>
  );
}

export default Header;
