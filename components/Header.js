import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [guestNumber, setGuestNumber] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <header className="z-50 top-0 sticky grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* logo */}
      <Link href="/">
        <div
          className="relative flex items-center h-10 cursor-pointer"
          style={{ width: "120px" }}
        >
          <Image
            priority
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="Logo"
          />
        </div>
      </Link>

      {/* search */}
      <div className="flex items-center md:border-2 rounded-full ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 outline-none"
          type="text"
          placeholder={placeholder}
        />
        <SearchIcon className="hidden md:inline-flex h-7 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-1" />
      </div>

      {/* right-side */}
      <div className="flex space-x-4 items-center justify-end text-gray-400">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 rounded-full p-1">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput.trim() && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5D61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={guestNumber}
              onChange={(e) => {
                setGuestNumber(e.target.value);
              }}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500 text-sm"
              onClick={() => {
                setSearchInput("");
              }}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400 text-sm" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
