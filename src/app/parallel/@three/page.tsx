export default async function Page() {
  // 3秒の遅延を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">3️⃣</h2>
      <p>This is the main page content.</p>
    </div>
  )
}
