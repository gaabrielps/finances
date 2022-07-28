import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';



interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;

}

export function Link({children, href, ...props}: Props){
    return(
            <NextLink href={href} >
                <a {...props} className="text-gray-500">{children}</a>
            </NextLink>
   

    )

}