import { useState } from "react"

export function Main({ name = "Extension" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Dydx connector
      </h1>
    </div>
  )
}
