import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact Description',
};

export default function ContactPage() {
    return (
            <span className="text-5xl">Contact</span>
    );
}

