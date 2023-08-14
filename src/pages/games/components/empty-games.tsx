export default function EmptyGames() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img
        src="/images/empty-box.png"
        alt="Empty Game List"
        className="w-48 h-48"
      />
      <h1 className="text-xl font-semibold">No games available</h1>
      <p className="text-gray-500">Sorry, there are no games to display.</p>
    </div>
  )
}
