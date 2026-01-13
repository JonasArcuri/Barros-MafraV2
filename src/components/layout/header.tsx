"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
    { name: "Início", href: "/#hero" },
    { name: "Atuação", href: "/#areas" },
    { name: "Equipe", href: "/#equipe" },
    { name: "Artigos", href: "/conteudos" },
]

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className={cn(
                        "font-serif text-2xl tracking-tight font-semibold",
                        isScrolled ? "text-neutral-900" : "text-neutral-900"
                    )}>
                        Barros <span className="text-neutral-400">&</span> Mafra
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="ml-4">
                        <Link href="/contato">Agendar conversa</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-neutral-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Navigation Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-200">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-serif text-neutral-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild size="lg" className="mt-4">
                            <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>Agendar conversa</Link>
                        </Button>
                    </div>
                )}
            </div>
        </header>
    )
}
