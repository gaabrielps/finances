import { ButtonHTMLAttributes, Children, ReactNode } from "react";
import tw from 'tailwind-styled-components';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "ghost";
}

export function Button({children,variant, ...props}: Props) {

    if (variant ==='ghost') {
        return(
            <GhostButton {...props} >
                {children}
            </GhostButton>            
        )
    }

    return (
        <MainButton {...props} >
            {children}
        </MainButton>

    )
}

export const BaseButton = tw.button`
bg-purple-500 font-bold hover:bg-purple-400 px-8 h-10 rounded-sm

`;


export const MainButton = tw(BaseButton)`
bg-purple-500 hover:bg-purple-400

`;

export const GhostButton = tw(BaseButton)` 
bg-transparent hover:bg-purple-300 text-purple-500

`;