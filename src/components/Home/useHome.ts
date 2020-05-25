import { useStore } from "../../store";
import { fetchRandom } from "../../api";
import { ICharacter } from "../../interfaces";
import { useCallback, useEffect } from "react";

const useHome = () => {
  const [state, dispatch] = useStore();

  const setLoading = useCallback(
    (loading: boolean) => {
      dispatch({ type: "SET_LOADING", payload: { loading } });
    },
    [dispatch]
  );

  const setItems = useCallback(
    (items: ICharacter[]) => {
      dispatch({ type: "ADD_ITEMS", payload: { items } });
    },
    [dispatch]
  );

  useEffect(() => {
    setLoading(true);
    fetchRandom()
      .then((results: ICharacter[]) => {
        setItems(results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setItems, setLoading]);

  return {
    state
  };
};

export default useHome;
