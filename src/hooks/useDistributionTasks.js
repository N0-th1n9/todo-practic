import {useMemo} from "react";

export const useCommonTasks = (sortAndSearchTasks) => {
  return useMemo(() => {
    return sortAndSearchTasks.filter(task => task.Favorites === false);
  }, [sortAndSearchTasks]);
};

export const useFavoritesTasks = (sortAndSearchTasks) => {
  return useMemo(() => {
    return sortAndSearchTasks.filter(task => task.Favorites === true);
  }, [sortAndSearchTasks]);
};
