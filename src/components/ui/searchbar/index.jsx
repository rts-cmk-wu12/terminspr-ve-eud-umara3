

"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { redirect } from "next/navigation";
import "./searchbar.scss";

export default function SearchBar() {
    const [searchedData, setSearchedData] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        redirect("/search?search=" + searchedData);
    }

    return(
        <div>
            <form onSubmit={handleSearch} className="">
         <input name="search" onChange={(e) => setSearchedData(e.target.value)}
         value={searchedData} type="search" className="" />

         <button type="submit" className="">
            <FiSearch className="" />
         </button>
            </form>
        </div>
    )
}