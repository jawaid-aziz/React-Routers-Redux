import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Text } from "../Components/Text";

export const EditPage = () => {

    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const addText = () => {
        setCount(count + 1);
    }
return (
    <div>
        <div>
            <img src={params.get("url")} width="400px"/>
            {
                Array(count).fill(0).map(e => <Text/>)
            }
        </div>
        <Button onClick={addText()}>Add Text</Button>
    </div>
)
};

