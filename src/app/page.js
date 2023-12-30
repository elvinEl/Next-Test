import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link href="/about">Haqqımızda</Link>
      <br />
      <Link href="/docs/services">Services</Link>
      <br />
      <Link href="/docs/clients">Clients</Link>
      <br />
      <Link
        href={{
          pathname: "/about",
          query: {
            name: "Next.js",
          },
        }}
      >
        Haqqımızda
      </Link>
    </div>
  );
}
