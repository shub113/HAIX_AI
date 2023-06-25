import { SelectButton } from "../../components/index";

export function Home() {
    return (
        <div className='p-5'>
            <SelectButton
                onButtonClick={() => {
                    console.log("####");
                }}
            />
        </div>
    );
}
