import { useQuery } from "react-query";

export function useCustomQuery({
    key = [],
    queryFn = () => {
        console.log("queryFn called!");
    },
    ...rest
}) {
    const { isFetching, data, error, refetch, isFetched } = useQuery(key, queryFn, { ...rest });
    return { isFetching, data, error, refetch, isFetched };
}
