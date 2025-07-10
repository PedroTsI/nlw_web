import {Link} from 'react-router-dom'
import {useQuery} from "@tanstack/react-query";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ArrowRight} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {dayjs} from "@/lib/dayjs.ts";

type GetRoomsAPIResponse = Array<{
    id: string
    name: string
    questionsCount: number
    createdAt: string
}>

export function CreateRoom(){
    const {data, isLoading} = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms')
            const result: GetRoomsAPIResponse = await response.json()

            return result;
        }
    })

    return(
        <div className="min-h-screen px-4 py-8">
            <div className="mx-auto max-w-4xl">
                <div className="grid gap-8 grid-cols-2 items-start">
                    <div/>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Salas Recentes
                            </CardTitle>
                            <CardDescription>
                                Acesso Rapido para as salas criadas recentementes
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-3'>
                            {isLoading && <p className='text-muted-foreground text-sm'>Carregando...</p>}
                            {data?.map(room => {
                                return (
                                    <Link key={room.id} to={`/rooms/${room.id}`} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50">
                                        <div className='flex-1 flex flex-col gap-1'>
                                            <h3 className="font-medium">{room.name}</h3>

                                            <div className='flex items-center gap-2'>
                                                <Badge variant='secondary' className='text-xs'>{dayjs(room.createdAt).toNow()}</Badge>
                                                <Badge variant='secondary' className='text-xs'>{room.questionsCount} Pergunta(s)</Badge>
                                            </div>
                                        </div>

                                        <span className='flex items-center gap-1 text-sm'>
                                            Entrar
                                            <ArrowRight className='size-3'></ArrowRight>
                                        </span>
                                    </Link>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}