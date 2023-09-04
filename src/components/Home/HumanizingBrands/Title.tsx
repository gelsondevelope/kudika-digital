import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-gray-100 text-center md:text-left uppercase font-black text-3xl md:text-5xl xl:text-6xl"
    >
      { children }
    </h2>
  )
}