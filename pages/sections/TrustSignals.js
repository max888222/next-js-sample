export default function TrustSignals() {
  const stats = [
    { number: "500+", label: "Reviews Analyzed" },
    { number: "50+", label: "Cities Covered" },
    { number: "4.8+", label: "Avg Rating" },
    { number: "24/7", label: "Emergency Support" },
  ];

  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}