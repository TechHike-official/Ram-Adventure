export default function SafariDetails({ params }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Safari: {params.id}</h1>

      <p className="mt-4">Experience an unforgettable adventure in our premium jeep safari package.</p>

      <a href="/booking" className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Book Now
      </a>
    </div>
  )
}
