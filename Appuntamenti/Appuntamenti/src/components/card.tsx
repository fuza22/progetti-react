import React from "react";
import { iUser } from "../interfaces/iUser";

export default function card({ id, name, profilePic, description }: iUser) {
  return (
    <div className="shadow-">
      <ul className="bg-gray-800">
        <li key={id} className="flex py-5">
          <img
            src={profilePic}
            alt="img"
            className="h-12 w-12 flex-none rounded-full bg-gray-50 me-5 ms-3"
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6">{name}</p>
            <p className="mt-1 truncate text-xs leading-5">{description}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
