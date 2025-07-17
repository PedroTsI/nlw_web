import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateRoom} from "@/pages/create-room.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Room} from "@/pages/room.tsx";
import { RecordRoomAudio } from "./pages/record-room-audio";

const queryClient = new QueryClient()

export function App() {
    return(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<CreateRoom/>} index/>
                    <Route path='/room/:roomId' element={<Room/>}/>
                    <Route element={<RecordRoomAudio/>} path="/room/:roomId/audio"/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}