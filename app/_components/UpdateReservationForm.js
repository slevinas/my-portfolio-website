"use client";
import { updateReservation } from "@/app/_lib/actions";
import { useFormStatus } from "react-dom";
import UpdateReservationButton from "./UpdateReservationButton";

function UpdateReservationForm({ reservation }) {
  console.log("from UpdateProfileForm reservation:", reservation);
  const { maxCapacity } = reservation.cabins;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   await updateReservation(formData);
  // };
  const updateReservationWithReservationId = updateReservation.bind(
    null,
    reservation.id
  );

  return (
    <div>
      <form
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        action={updateReservationWithReservationId}
      >
        {/* <input type="hidden" name="reservationId" value={reservation.id} /> */}
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
            defaultValue={reservation.num_guests}
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            defaultValue={reservation.observations}
            name="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <UpdateReservationButton />
        </div>
      </form>
    </div>
  );
}

// function Button() {
//   const formState = useFormStatus();
//   console.log("formState", formState);
//   return (
//     <button
//       disabled={formState.pending}
//       className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
//     >
//       {formState.pending ? "updating ..." : "Update reservation"}
//     </button>
//   );
// }

export default UpdateReservationForm;