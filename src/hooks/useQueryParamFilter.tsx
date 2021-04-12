import { useQueryParam, StringParam } from "use-query-params";

const UseQueryParamFilter = () => {
  const [queryParam, setQueryParam] = useQueryParam("q", StringParam);
  const [sortParam, setSortParam] = useQueryParam("sort", StringParam);
  const [isActiveParam, setIsActiveParam] = useQueryParam(
    "is_active",
    StringParam
  );

  return {
    queryParam,
    setQueryParam,
    sortParam,
    setSortParam,
    isActiveParam,
    setIsActiveParam,
  };
};

export default UseQueryParamFilter;
