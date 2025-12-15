"use client"
import { useState } from "react"

export default function Booking() {
  const [date, setDate] = useState("")
  const [people, setPeople] = useState(1)

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book Your Safari</h1>

      <div className="space-y-4">
        <input type="date" className="border p-2 w-full" value={date} onChange={e => setDate(e.target.value)} />

        <input type="number" className="border p-2 w-full" value={people} min="1" onChange={e => setPeople(e.target.value)} />

        <a href="/booking/confirmation" className="block px-4 py-2 bg-green-600 text-white rounded text-center">
          Confirm Booking
        </a>
      </div>
    </div>
  )
}
