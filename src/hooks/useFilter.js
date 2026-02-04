import { useState, useMemo } from 'react';

/**
 * Custom hook for filtering items by category or other criteria
 * @param {Array} items - Array of items to filter
 * @param {string} filterKey - Key to filter by (e.g., 'category')
 * @returns {Object} - { filteredItems, activeFilter, setFilter, clearFilter }
 */
export function useFilter(items, filterKey = 'category') {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all' || !activeFilter) {
      return items;
    }

    return items.filter(item => item[filterKey] === activeFilter);
  }, [items, activeFilter, filterKey]);

  const setFilter = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const clearFilter = () => {
    setActiveFilter('all');
  };

  return {
    filteredItems,
    activeFilter,
    setFilter,
    clearFilter
  };
}
