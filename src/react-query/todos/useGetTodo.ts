import axios from 'axios';
import { useQuery } from 'react-query';

const useGetTodo = () => {
  const queryFn = async () => {
    const { data } = await axios.get('/todos');
    return data;
  };

  const { isLoading, isError, data } = useQuery('todos', queryFn);
  return { data, isLoading, isError };
};

export default useGetTodo;
