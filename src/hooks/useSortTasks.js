// import {useMemo} from "react";
// import tasks from "../data";

// export const useSortTasks = useMemo((sort) => {
//   if (sort.selectedSort && !sort.isReversSort) {
//     return [...tasks].sort((a, b) =>
//       a[sort.selectedSort].localeCompare(b[sort.selectedSort])
//     )
//   }else if (sort.selectedSort && sort.isReversSort){
//     return [...tasks].sort((a, b) =>
//       b[sort.selectedSort].localeCompare(a[sort.selectedSort])
//     )
//   }
//   return tasks
// }, [sort])

// const sortAndSearchTasks = useMemo(() => {
//   return useSortTasks.filter(task => task.Name.toLowerCase().includes(sort.search.toLowerCase()))
// }, [sort.search, sortTasks])