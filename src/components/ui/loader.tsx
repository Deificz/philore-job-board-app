import Image from "next/image";
import React from "react";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="spinner-overlay">
      <Image className="animate-bounce" alt="icon-loading" width="100" height="100" src={"/images/philore_logo.png"}/>
    </div>
  );
}
