import React from "react";
import Image from "next/image";

export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative py-16 ">
      <div className="relative cursor-pointer h-96 min-w-[275px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-3xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white px-4 py-2 rounded-lg bg-gray-500 mt-5">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
