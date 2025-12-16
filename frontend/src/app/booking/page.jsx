"use client"

import { useState } from "react"

export default function Booking() {
  const [date, setDate] = useState("")
  const [people, setPeople] = useState(1)

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Book Your Safari
        </h1>
        <p className="text-gray-500 mb-8">
          Select your preferred date and group size to continue.
        </p>

        <div className="space-y-6">

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Safari Date
            </label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of People
            </label>
            <input
              type="number"
              min="1"
              value={people}
              onChange={e => setPeople(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* CTA */}
          <a
            href="/booking/confirmation"
            className="block w-full text-center bg-red-600 hover:bg-red-700
            transition text-white font-semibold py-3 rounded-lg"
          >
            Confirm Booking
          </a>

        </div>
      </div>
    </div>
  )
}
