export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-md space-y-4">
        <input className="border p-2 w-full" placeholder="Name" />
        <input className="border p-2 w-full" placeholder="Email" />
        <textarea className="border p-2 w-full" placeholder="Message"></textarea>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </div>
  )
}
