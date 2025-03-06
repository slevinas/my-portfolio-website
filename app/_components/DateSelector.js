"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
// import { difference } from "next/dist/build/utils";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  let numNights;
  if (range?.to && range?.from) {
    const numNights = differenceInDays(range?.to, range?.from);
  } else {
    numNights = 0;
  }
  // const [bookedDatesArray, setBookedDatesArray] = useState([]);

  // useEffect(() => {
  //   // Convert the bookedDates array of strings to an array of Date objects
  //   const datesArray = bookedDates.map((dateString) => new Date(dateString));
  //   setBookedDatesArray(datesArray);
  // }, [bookedDates]);

  // console.log("from date selector bookedDatesArray:", bookedDatesArray);
  // CHANGE
  // const regularPrice = 23;
  const regularPrice = cabin.regularPrice;
  // const discount = 23;
  const discount = cabin.discount;
  // const numNights = 23;
  // const cabinPrice = 23;
  const cabinPrice = regularPrice - discount;
  const reservationPrice = cabinPrice * numNights;

  // console.log("from date selector received cabin is ", cabin);
  // console.log("from date selector the range:", range);
  // console.log("from date selector the numNights:", numNights);
  // // console.log(typeof bookedDates[0]);
  // console.log("from date selector bookedDates :", bookedDates);
  // Define inline styles for disabled dates
  const disabledDateStyles = {
    backgroundColor: "#f0f0f0",
    color: "#d0d0d0",
    textDecoration: "line-through",
  };

  // SETTINGS
  // const minBookingLength = 1;
  // const maxBookingLength = 23;
  const minBookingLength = settings.minBookingLength;
  const maxBookingLength = settings.maxBookingLength;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={(range) => {
          setRange(range);
        }}
        selected={range}
        min="1"
        max={maxBookingLength}
        startMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(currentDate) =>
          isPast(currentDate) ||
          bookedDates.some((date) => isSameDay(date, currentDate))
        }
        modifiersStyles={{
          disabled: disabledDateStyles,
        }}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">
                  ${reservationPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
