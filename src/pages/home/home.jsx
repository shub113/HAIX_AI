import { useState, useEffect } from "react";

import { useCustomQuery } from "../../hooks/index";
import { api } from "../../modules/index";
import { Actions } from "./actions";
import { Chart } from "../../components/index";

export function Home() {
    const [chartData, setChartData] = useState([]);

    const {
        isFetching,
        data: apiData,
        refetch,
        isFetched,
    } = useCustomQuery({
        key: ["getUSPopulation"],
        queryFn: () => api.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population"),
        enabled: false,
        staleTime: 10 * 60 * 1000,
    });

    useEffect(() => {
        if (isFetched) {
            const data = apiData?.data?.data ?? [];
            setChartData(data);
        }
    }, [isFetched]);

    return (
        <div className='p-5 '>
            <Actions fetchData={refetch} data={chartData} />
            <div id='chart_container' className='grid grid-cols-2 gap-8  '>
                <Chart fetchData={refetch} isFetching={isFetching} type='bar' mode='lines+markers+text' />
                <Chart />
                <Chart />
                <Chart />
            </div>
        </div>
    );
}
