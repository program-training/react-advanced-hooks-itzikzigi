export type LocalStorageActionType = "set" | "get" | "remove";
const useLocalStorage = (
  key: string,
  value = "",
  action: LocalStorageActionType
) => {
  return localStorage[`${action}Item`](key, value);
};
export default useLocalStorage;
