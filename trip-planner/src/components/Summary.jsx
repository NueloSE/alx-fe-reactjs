import { CiLocationOn } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";

function Summary({ locationsList }) {
  const destinationCount = locationsList.length;
  const visitedCount = locationsList.filter(
    (location) => location.visited
  ).length;
  const daysCount = locationsList.reduce((prev, cur) => prev + cur.days, 0);
  const budgetTotal = locationsList.reduce((prev, cur) => prev + cur.budget, 0);
  const progressPercentage = Math.round(
    (visitedCount / destinationCount) * 100
  );
  return (
    <div className="mt-14 text-center bg-linear-to-r from-violet-200/30 to-violet-400/20 rounded-xl shadow-2xl py-8 mx-4">
      <h2>Trip Summary</h2>

      <div className="flex  flex-wrap justify-center gap-4 my-8 mx-4">
        <div className="summary-box">
          <CiLocationOn className="text-sky-400 text-xl" />
          <p className="font-extrabold">{destinationCount}</p>
          <span className="text-sm">Destination</span>
        </div>
        <div className="summary-box">
          <IoMdCheckmarkCircleOutline className="text-green-400 text-xl" />
          <p className="font-extrabold">{visitedCount}</p>
          <span className="text-sm">Visited</span>
        </div>

        <div className="summary-box">
          <CiCalendar className="text-red-400 text-xl" />
          <p className="font-extrabold">{daysCount}</p>
          <span className="text-sm">Days</span>
        </div>

        <div className="summary-box">
          <TbCurrencyNaira className="text-purple-400 text-xl" />
          <p className="flex items-center font-extrabold">
            <TbCurrencyNaira />
            {new Intl.NumberFormat().format(budgetTotal)}
          </p>
          <span className="text-sm">Total Budget</span>
        </div>
      </div>

      <div className="">
        <p className=" bg-purple-50 w-fit mx-auto px-6 py-2 rounded-lg">
          Progress: <span className="font-extrabold">{progressPercentage}</span>
          % complete
        </p>
      </div>
    </div>
  );
}

export default Summary;
