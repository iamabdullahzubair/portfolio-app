import Link from "next/link";
import { ReactNode } from "react";
import Nav from "./ui/nav";

export default function Dashboard({ children,  }: { children: ReactNode }) {


    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white">
                <div className="px-6 py-4">
                    <Link href={'/dashboard'} className="text-2xl font-bold mb-10">Portfolio Dashboard</Link>
                    <Nav />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8">

                {children}

            </main>
        </div>
    );
}
