function Timeline({ items, onSelect }) {
  const getIcon = (type) => {
    if (type === 'experience') {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    );
  };

  const formatDate = (startDate, endDate, current) => {
    const start = new Date(startDate).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short'
    });

    if (current) {
      return `${start} - Aujourd'hui`;
    }

    if (endDate) {
      const end = new Date(endDate).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short'
      });
      return `${start} - ${end}`;
    }

    return start;
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          {/* Timeline Line */}
          {index !== items.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary-500/30" />
          )}

          {/* Timeline Item */}
          <div className="flex gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white z-10">
              {getIcon(item.type)}
            </div>

            {/* Compact clickable card */}
            <button
              type="button"
              onClick={() => onSelect(item)}
              className="flex-1 pb-2 text-left group"
            >
              <div className="bg-dark-light border border-primary-500/30 rounded-lg p-4 sm:p-6 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary-400 font-medium text-sm">
                      {item.organization}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                  <span>{formatDate(item.startDate, item.endDate, item.current)}</span>
                  {item.location && (
                    <>
                      <span>•</span>
                      <span>{item.location}</span>
                    </>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {item.summary || item.description}
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir le détail
                </span>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
