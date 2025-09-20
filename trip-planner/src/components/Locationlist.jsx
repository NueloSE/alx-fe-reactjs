import { useState } from "react";
import Button from "./Button";
import { SlLocationPin } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Locationlist({ locationsList, onDeleteLocation, onVisitedLocation }) {
  const [filter, setFilter] = useState("all");
  const visitedCount = locationsList.filter(
    (location) => location.visited === true
  ).length;
  const notVisitedCount = locationsList.filter(
    (location) => location.visited === false
  ).length;

  function handleAll() {
    setFilter("all");
  }

  function handleVisited() {
    setFilter("visited");
  }

  function handleNot() {
    setFilter("notVisited");
  }
  return (
      <div>
        <ul className="flex flex-wrap  justify-center  font-bold   py-1 w-screen max-w-2xl shadow-2xl rounded-xl cursor-pointer">
          <li
            onClick={handleAll}
            className={`${filter == "all" ? "btn-action" : ""} filter`}
          >
            All
            <span className={`count`}>{locationsList.length}</span>
          </li>
          <li
            onClick={handleVisited}
            className={`${filter == "visited" ? "btn-action" : ""} filter`}
          >
            Visited
            <span className="count">{visitedCount}</span>
          </li>
          <li
            onClick={handleNot}
            className={`${filter == "notVisited" ? "btn-action" : ""} filter`}
          >
            Not Visited
            <span className="count">{notVisitedCount}</span>
          </li>
        </ul>

        <ul className=" space-y-6 px-2 mt-4">
          {filter == "notVisited" ? (
            notVisitedCount == 0 ? (
              <NoLocationFoundMessage />
            ) : (
              locationsList.map((location) =>
                location.visited == false ? (
                  <Location
                    location={location}
                    key={location.id}
                    onDeleteLocation={onDeleteLocation}
                    onVisitedLocation={onVisitedLocation}
                  />
                ) : (
                  <></>
                )
              )
            )
          ) : filter == "visited" ? (
            visitedCount == 0 ? (
              <NoLocationFoundMessage />
            ) : (
              locationsList.map((location) =>
                location.visited == true ? (
                  <Location
                    location={location}
                    key={location.id}
                    onDeleteLocation={onDeleteLocation}
                    onVisitedLocation={onVisitedLocation}
                  />
                ) : (
                  <></>
                )
              )
            )
          ) : (
            locationsList.map((location) => (
              <Location
                location={location}
                key={location.id}
                onDeleteLocation={onDeleteLocation}
                onVisitedLocation={onVisitedLocation}
              />
            ))
          )}

         
        </ul>
      </div>
  );
}

function NoLocationFoundMessage() {
    return (
      <div className="my-24 space-y-2">
        <h1 className="font-bold text-slate-600 text-xl">
          No destinations match your filter
        </h1>
        <p className="text-slate-400">
          Try selecting a different filter to see your destinations
        </p>
      </div>
    );
}




function Location({ location, onDeleteLocation, onVisitedLocation }) {
  const destination = capitalizeStr(location.location);
  function capitalizeStr(str) {
    const newStr = str
      .split(", ")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(", ");

    return newStr;
  }

  return (
    <li className=" space-y-5 p-8 bg-slate-50 rounded-xl shadow-2xl">
      <div className="flex flex-wrap  justify-center sm:justify-between gap-4">
        <span className="flex  items-center gap-4">
          <SlLocationPin className="text-sky-500 text-xl" />
          <div>
            {location.visited ? (
              <p className="flex items-center">
                <span className={location.visited ? "line-through" : ""}>
                  {destination}
                </span>
                <span className=" flex gap-3 ml-2 border border-green-300/60 px-2 py-1 text-sm text-green-700 bg-green-200/30 rounded-lg">
                  {" "}
                  <FaCheck /> visited
                </span>
              </p>
            ) : (
              destination
            )}
          </div>
        </span>
        <div className="flex items-center gap-4">
          {location.visited ? (
            <span
              onClick={() => onVisitedLocation(location)}
              className="flex gap-2  items-center text-red-400 bg-slate-100 border border-red-400 px-4 py-2 rounded-lg cursor-pointer"
            >
              <FaTimes />
              <p>Unmark</p>
            </span>
          ) : (
            <span
              onClick={() => onVisitedLocation(location)}
              className="flex gap-2  font-bold text-white bg-lime-600 px-4 py-2 rounded-lg cursor-pointer"
            >
              <FaCheck />
              <p>Visited</p>
            </span>
          )}

          <div className="border px-3 py-2 rounded-lg border-red-500 cursor-pointer">
            <RiDeleteBinLine
              onClick={() => onDeleteLocation(location.id)}
              className="text-xl text-red-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:justify-start gap-4">
        <span className="flex items-center">
          <CiCalendar />
          <p>{location.days} days</p>
        </span>
        <span className="flex items-center">
          <TbCurrencyNaira /> {new Intl.NumberFormat().format(location.budget)}
        </span>
      </div>
    </li>
  );
}

export default Locationlist;
