import { Button } from "../button";




export function Card({expense, category, cost}) {


    return (
        <>
        <article className="bg-white p-4 shadow-md h-40 relative flex justify-between flex-col gap-2 drop-shadow-lg">
            <Button className="absolute top-0 right-0  text-sm" variant="ghost" >excluir</Button>
            <h1 className="font-bold text-xl text-center">{expense}</h1>
            <p className="px-4 h-8 flex text-purple-900 bg-purple-100 rounded-full text-center justify-center align-middle mx-12 ">{category}</p>
            <p className="text-center"><strong>R${cost}</strong> </p>
        </article>       
        </>


    )
}