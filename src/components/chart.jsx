import Plot from "react-plotly.js";

export function Chart({ type = "bar", mode = "lines+markers+text", fetchData, isFetching }) {
    const onReload = () => {
        fetchData();
    };
    return (
        <div className=' relative group w-[500px] h-[500px]'>
            {isFetching ? (
                <div className='grid place-items-center bg-white h-[500px] w-[500px] '>Loading... </div>
            ) : (
                <Plot
                    data={[{ type: type, mode: mode, x: [1, 2, 3], y: [2, 5, 3] }]}
                    layout={{ width: 500, height: 500, title: "A Fancy Plot" }}
                    config={{ scrollZoom: true, displayModeBar: false, doubleClickDelay: 1000 }}
                />
            )}
            <button
                onClick={onReload}
                className='absolute top-2 left-2 border border-black p-2 rounded-full hidden transition duration-300 ease-in-out group-hover:block hover:bg-orange-500 hover:text-white bg-orange-300 '
            >
                reload
            </button>
        </div>
    );
}
