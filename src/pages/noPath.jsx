import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NoPath() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, []);

    return <div />;
}
