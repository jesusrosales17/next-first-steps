import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Description',
 keywords: ['About Page', "Jesus's Home Page"],
};

export default function AboutPage() {
    return (
            <span className="text-5xl">About</span>
    );
}