import { SelectButton } from "../../components/index";
import { useCustomQuery } from "../../hooks/index";
import { api } from "../../modules/index";

export function Home() {
    const { isFetching, data, error, refetch } = useCustomQuery({
        key: ["getData"],
        queryFn: () => api.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population"),
        enabled: false,
    });

    return (
        <div className='p-5'>
            <div className='flex gap-2 '>
                <SelectButton
                    onButtonClick={() => {
                        refetch();
                    }}
                >
                    Load chart 1
                </SelectButton>
                <SelectButton
                    onButtonClick={() => {
                        refetch();
                    }}
                >
                    Load chart 2
                </SelectButton>
                <SelectButton
                    onButtonClick={() => {
                        refetch();
                    }}
                >
                    Load chart 3
                </SelectButton>
                <SelectButton
                    onButtonClick={() => {
                        refetch();
                    }}
                >
                    Load chart 4
                </SelectButton>
            </div>
        </div>
    );
}
