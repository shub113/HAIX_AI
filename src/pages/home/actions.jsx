import { SelectButton } from "../../components/index";

export function Actions({ fetchData, data }) {
    const onButtonClick = () => {
        if ((data?.length ?? 0) === 0) {
            fetchData();
        }
    };
    return (
        <div className='flex gap-2 p-3 m-1'>
            <SelectButton onButtonClick={onButtonClick}>Load chart 1</SelectButton>
            <SelectButton onButtonClick={onButtonClick}>Load chart 2</SelectButton>
            <SelectButton onButtonClick={onButtonClick}>Load chart 3</SelectButton>
            <SelectButton onButtonClick={onButtonClick}>Load chart 4</SelectButton>
        </div>
    );
}
