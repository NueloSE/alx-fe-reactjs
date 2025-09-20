import { useState } from "react";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";

function Newdestination({ onAddLocation }) {
  const [openAddForm, setOpenAddForm] = useState(false);
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const newLocation = {
      id: new Date().getTime(),
      location,
      days,
      budget,
      visited: false,
    };

    onAddLocation(newLocation);
    setOpenAddForm(false);

    setBudget("");
    setLocation("");
    setDays("");
  }

  return (
    <div className="my-8 ">
      <div className="text-center">
        <Button
          onClicked={() => setOpenAddForm((openAddForm) => !openAddForm)}
          btnStyle="btn-action"
        >
          <span className="flex items-center gap-4">
            <FaPlus /> Add New Destination
          </span>
        </Button>
      </div>

      {openAddForm && (
        <div className="bg-gray-600/80 w-screen h-screen top-0 left-0 absolute">
          <div className=" flex justify-center mt-58  ">
            <form
              onSubmit={(e) => handleFormSubmit(e)}
              className="relative p-6 rounded-xl  shadow-xl bg-white"
            >
              <div className="absolute text-2xl top-2 right-2 cursor-pointer">
                <IoIosClose onClick={() => setOpenAddForm((open) => !open)} />
              </div>

              <div className="flex gap-4 text-sky-500 items-center text-xl">
                <span className="pb-1.5">
                  <FaPlus />
                </span>
                <h2 className="text-gradient ">Add New Destination</h2>
              </div>

              <div className="flex flex-col md:flex-row max-w-2xl gap-4">
                <div className="flex flex-col">
                  <label htmlFor="destination">Destination</label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    placeholder="e.g., Lagos, Nigeria"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="destination">Days</label>
                  <input
                    value={days}
                    onChange={(e) => setDays(+e.target.value)}
                    type="number"
                    placeholder="7"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="budget">
                    <span className="flex items-center gap">
                      Budget(
                      <TbCurrencyNaira />)
                    </span>
                  </label>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(+e.target.value)}
                    id="budget"
                    type="number"
                    placeholder="150,000"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end mt-6">
                <Button
                  onClicked={() => setOpenAddForm((open) => !open)}
                  btnStyle="btn-primary"
                >
                  <span className="text-slate-600 flex gap-4 items-center ">
                    <IoIosClose className="text-2xl " />
                    Cancel
                  </span>
                </Button>
                <Button btnStyle="btn-action">
                  <span className="flex gap-4 items-center">
                    <FaPlus />
                    Add 
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newdestination;
