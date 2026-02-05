import React from 'react'
import type { Package, Feature, SharedData } from '@/types'
import { usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

interface CreditPricingCardsProps {
    packages: Package[]
    features: Feature[]
}

function CreditPricingCards({ packages, features }: CreditPricingCardsProps) {
    const { props } = usePage<SharedData>();
    const csrf_token = props.csrf_token as string;
    
    return (
        <div className="flex flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                        Pricing Plans
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose the perfect credit package for your workflow
                    </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {Array.isArray(packages) && packages.map((p, index) => (
                        <div 
                            key={p.id}
                            className={`relative rounded-2xl border bg-card p-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                                index === 1 ? 'border-2 border-primary shadow-lg scale-[1.02]' : 'border-border'
                            }`}
                        >
                            {index === 1 && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                                        Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold mb-4">
                                    {p.name}
                                </h3>
                                <div className="flex items-baseline justify-center mb-2">
                                    <span className="text-4xl font-bold tracking-tight">
                                        ${p.price}
                                    </span>
                                    <span className="text-muted-foreground ml-1">/USD</span>
                                </div>
                                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                    {p.credits} Credits
                                </div>
                            </div>
                            
                            <div className="space-y-4 mb-8">
                                {features.map((f) => (
                                    <div key={f.id} className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                                            <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {f.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            
                            <form className="w-full" method="POST" action={route('credits.buy', {package: p})}>
                                <input type="hidden" name="_token" value={csrf_token} autoComplete="off"/>
                                <button 
                                    type="submit" 
                                    className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        index === 1 
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                                >
                                    Purchase Credits
                                </button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreditPricingCards