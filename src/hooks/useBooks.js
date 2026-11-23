
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const fetchBooks = async ({ queryKey, signal }) => {

    const [_key, page, size] = queryKey;

    const response = await axiosInstance.get("/", {
        params: {
            page,
            size
        },
        signal
    });

    return response.data;
};

const useBooks = (page = 0, size = 10) => {

    return useQuery({
        queryKey: ["books", page, size],
        queryFn: fetchBooks
    });

};

export default useBooks;
