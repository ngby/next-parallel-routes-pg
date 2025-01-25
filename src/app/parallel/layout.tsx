export default function Layout({
                                 children,
                                 one,
                                 two,
                                 three,
                               }: {
  children: React.ReactNode
  one: React.ReactNode
  two: React.ReactNode
  three: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col p-4">
      <header className="h-16">{children}</header>
      <main className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <section className="rounded-lg border border-gray-200 p-4 shadow-sm">
          {one}
        </section>
        <section className="rounded-lg border border-gray-200 p-4 shadow-sm">
          {two}
        </section>
        <section className="rounded-lg border border-gray-200 p-4 shadow-sm">
          {three}
        </section>
      </main>
      <footer className="h-16 text-sm text-gray-500">
        Parallel Routes Test
      </footer>
    </div>
  )
}
