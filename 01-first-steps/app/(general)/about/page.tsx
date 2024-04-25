import type { Metadata } from "next"


export const metadata: Metadata = {
    title: 'SEO Title' + (new Date().toString()),
    description: 'SEO Description',
    keywords: ['About Page', 'Gael', 'Informacion', '...']
} 

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
        
    )
}