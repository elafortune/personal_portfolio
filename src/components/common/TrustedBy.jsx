const companies = [
  { name: 'MBDA', detail: 'Computer Vision & Full Stack' },
  { name: 'Alten Labs', detail: 'IA générative & Computer Vision' },
  { name: 'Air France KLM', detail: 'Big Data Engineering' }
];

function TrustedBy() {
  return (
    <section className="py-10 px-4 sm:px-6 bg-dark-light border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[11px] uppercase tracking-widest text-gray-500 mb-6">
          Expériences chez
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {companies.map((company) => (
            <div key={company.name} className="text-center">
              <div className="text-lg sm:text-xl font-semibold tracking-wide text-gray-300">
                {company.name}
              </div>
              <div className="text-[11px] text-gray-600 mt-0.5">{company.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
