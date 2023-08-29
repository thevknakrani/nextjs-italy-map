"use client";

import React, { useState } from "react";
import { SVGMap } from "react-svg-map";
import italy from "@svg-maps/italy";
import "react-svg-map/lib/index.css";
import styles from "../../style/mapStyles.css";

const Page = () => {
  const [region, setRegion] = useState()
  const onLocationClick = (event) => {
    setRegion(event.target.getAttribute("name"))
  };

  return (
    <div className="bg-white text-black p-24">
      <h1 className="text-center text-3xl font-bold mb-6">Itlay</h1>
      <div className="flex">
        <div className="w-[600px]">
          <SVGMap
            map={italy}
            onLocationClick={onLocationClick}
            className={styles.svgMap}
            locationClassName={styles.svgMapLocation}
          />
        </div>
        <h1 className="text-center text-2xl font-normal">Selected Region:<span className="ml-2 font-semibold">{region ?? 'not selected'}</span></h1>
      </div>
    </div>
  );
};

export default Page;