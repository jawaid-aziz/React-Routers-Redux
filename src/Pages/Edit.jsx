import React from "react";
import { useSearchParams } from "react-router-dom";

export const EditPage = () => {

    const [params] = useSearchParams();

return (
    
    <div>
        <img src={params.get("url")} width="400px"/>
    </div>
)
};

