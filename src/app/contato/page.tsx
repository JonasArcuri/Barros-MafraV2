"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CheckCircle2, AlertCircle } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    company: z.string().min(2, "Empresa é obrigatória"),
    role: z.string().min(2, "Cargo é obrigatório"),
    subject: z.string().min(1, "Selecione um assunto"),
    message: z.string().min(10, "Mensagem muito curta"),
    preference: z.enum(["whatsapp", "email"]),
    lgpd: z.boolean().refine(val => val === true, "Você precisa concordar com a política de privacidade"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            preference: "email",
        }
    })

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(data)
        setIsSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-neutral-50 py-24">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Entre em contato</h1>
                <p className="text-lg text-neutral-600 mb-12 max-w-2xl">
                    Estamos prontos para entender seu desafio e apresentar a melhor estratégia jurídica.
                    Retornamos em até 1 dia útil.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-serif mb-2">Mensagem enviada</h3>
                                <p className="text-neutral-600 mb-8">
                                    Obrigado pelo contato. Nossos sócios analisarão sua solicitação e retornarão em breve.
                                </p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                    Enviar nova mensagem
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Nome completo</label>
                                        <Input id="name" {...register("name")} disabled={isSubmitting} />
                                        {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium">Empresa</label>
                                        <Input id="company" {...register("company")} disabled={isSubmitting} />
                                        {errors.company && <span className="text-xs text-red-500">{errors.company.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="role" className="text-sm font-medium">Cargo</label>
                                        <select
                                            id="role"
                                            {...register("role")}
                                            className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Selecione...</option>
                                            <option value="Sócio/Diretor">Sócio / Diretor</option>
                                            <option value="Jurídico Interno">Jurídico Interno</option>
                                            <option value="Gestor">Gestor / Gerente</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                        {errors.role && <span className="text-xs text-red-500">{errors.role.message}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
                                        <select
                                            id="subject"
                                            {...register("subject")}
                                            className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Selecione...</option>
                                            <option value="Novo Caso">Discutir novo caso</option>
                                            <option value="Parceria">Parceria</option>
                                            <option value="Imprensa">Imprensa / Palestra</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                        {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                                    <Textarea id="message" {...register("message")} className="min-h-[120px]" disabled={isSubmitting} />
                                    {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium block">Preferência de contato</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 text-sm">
                                            <input type="radio" value="whatsapp" {...register("preference")} /> WhatsApp
                                        </label>
                                        <label className="flex items-center gap-2 text-sm">
                                            <input type="radio" value="email" {...register("preference")} /> E-mail
                                        </label>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="lgpd"
                                        {...register("lgpd")}
                                        className="mt-1"
                                    />
                                    <label htmlFor="lgpd" className="text-sm text-neutral-600">
                                        Concordo que os dados fornecidos serão utilizados para contato comercial, conforme a <a href="/privacidade" className="underline hover:text-neutral-900">Política de Privacidade</a>.
                                    </label>
                                </div>
                                {errors.lgpd && <span className="text-xs text-red-500 block">{errors.lgpd.message}</span>}

                                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-serif text-xl font-medium mb-4">Contato Direto</h3>
                            <p className="text-neutral-600 mb-2">contato@barrosmafra.com.br</p>
                            <p className="text-neutral-600">+55 (11) 99999-9999</p>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl font-medium mb-4">Escritório</h3>
                            <p className="text-neutral-600">
                                Av. Paulista, 0000 - Cj. 12<br />
                                Bela Vista - São Paulo / SP<br />
                                CEP 01310-000
                            </p>
                        </div>

                        <div className="p-6 bg-neutral-100 rounded-lg border border-neutral-200">
                            <div className="flex gap-3 mb-2">
                                <AlertCircle className="text-neutral-600 w-5 h-5 flex-shrink-0" />
                                <h4 className="font-medium text-sm">Aviso Importante</h4>
                            </div>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                                Não realizamos atendimento de contencioso de massa ou previdenciário.
                                Nossa atuação é focada exclusivamente em direito corporativo estratégico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
