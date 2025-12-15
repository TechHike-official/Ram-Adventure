import Link from "next/link"

export default function SafariList() {
  const data = [
    { id: "jungle", name: "Jungle Safari", price: 1500 },
    { id: "sunset", name: "Sunset Safari", price: 1200 },
    { id: "desert", name: "Desert Safari", price: 2000 }
  ]

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Available Safaris</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(s => (
          <Link key={s.id} href={`/safari/${s.id}`}>
            <div className="border p-5 rounded cursor-pointer hover:bg-gray-100">
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <p className="text-gray-600">₹{s.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
