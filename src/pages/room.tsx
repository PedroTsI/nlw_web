import {useParams, Navigate} from "react-router-dom";

type roomParams = {
    roomId: string;
}

export function Room(){
    const params = useParams<roomParams>();

    if (!params.roomId) {
        return <Navigate to='/' replace/>
    }

    return <div>Room Details {JSON.stringify(params)}</div>
}