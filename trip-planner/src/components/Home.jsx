import { useState } from "react";
import Header from "./Header";
import Locationlist from "./Locationlist";
import Newdestination from "./Newdestination";
import Summary from "./Summary";
import { GiCommercialAirplane } from "react-icons/gi";

function Home() {
  const [locationList, setLocationList] = useState(
    JSON.parse(localStorage.getItem("locations") || "[]")
  );

  function handleAddNewLocation(newLocation) {
    updateLocalStorage([...locationList, newLocation]);
    setLocationList((locationArr) => [...locationArr, newLocation]);
  }

  function deleteLocation(id) {
    const newLocation = locationList.filter((location) => location.id != id);

    updateLocalStorage(newLocation);
    setLocationList(newLocation);
  }

  function updateVisitedStatus(locationToUpdate) {
    const updatedLocation = locationList.map((location) =>
      location.id === locationToUpdate.id
        ? { ...location, visited: !locationToUpdate.visited }
        : location
    );

    updateLocalStorage(updatedLocation);
    setLocationList(updatedLocation);
  }

  function updateLocalStorage(data) {
    localStorage.setItem("locations", JSON.stringify(data));
  }

  return (
    <div className="flex flex-col text-center items-center justify-center mt-12 px-4   mx-auto">
      <Header />
      <Newdestination onAddLocation={handleAddNewLocation} />
      {locationList.length == 0 ? (
        <div className="flex flex-col justify-center items-center mt-24 gap-4 px-4">
          <GiCommercialAirplane className="text-slate-400 text-4xl" />
          <h2 className="text-slate-500 font-bold text-xl">
            No destinations yet
          </h2>
          <p className="text-slate-400">
            Add your first destination to start planning your trip!
          </p>
        </div>
      ) : (
        <div>
          <Locationlist
            locationsList={locationList}
            onDeleteLocation={deleteLocation}
            onVisitedLocation={updateVisitedStatus}
          />
          <Summary locationsList={locationList} />
        </div>
      )}
    </div>
  );
}

export default Home;
