import React from "react";

export default function page({ params }) {
  return (
    <div>
      HEADER
      <br />
      {params.post}
      <br />
      FOOTER
    </div>
  );
}
