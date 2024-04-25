import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Esta es la parte de la pagina para contactar',
    keywords: ['Contact Page', 'Gael', 'Informacion', '...']
}


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}