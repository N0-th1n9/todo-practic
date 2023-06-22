import {useMemo} from "react";

export const useSortTasks = (tasks, sort) => {
  return useMemo(() => {
    if (sort.selectedSort && !sort.isReversSort) {
      return Object.values(tasks).sort((a, b) =>
        a[sort.selectedSort].localeCompare(b[sort.selectedSort])
      );
    } else if (sort.selectedSort && sort.isReversSort) {
      return Object.values(tasks).sort((a, b) =>
        b[sort.selectedSort].localeCompare(a[sort.selectedSort])
      );
    }
    return Object.values(tasks);
  }, [sort.selectedSort, sort.isReversSort, tasks])
}

export const useSortAndSearchTasks = (tasks, sort) => {
  const sortTasks = useSortTasks(tasks, sort)

  return useMemo(() => {
    if (sort.search === undefined) {
      return [...sortTasks];
    }
    return sortTasks.filter(task => task.Name.trim().toLowerCase().includes(sort.search.trim().toLowerCase()));
  }, [sort.search, sortTasks])
}
