import Link from "next/link"
import { footerLinks } from "~constants"

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
      {footerLinks.map(item =>(<Link key={item.title} href={item.url}>{item.title}</Link>))}
    </div>
  )
}
