import AppLayout from '@/layouts/app-layout'
import { Head, Link, usePage } from '@inertiajs/react'
import React from 'react'
import { SharedData } from '@/types'
import type { Feature, BreadcrumbItem } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lock, CreditCard } from 'lucide-react'

const Feature = ({ feature, answer, children, breadcrumbs }: { feature: Feature, answer: string, children: React.ReactNode, breadcrumbs?: BreadcrumbItem[] }) => {
    const { auth } = usePage<SharedData>().props;
    const availableCredits = auth.user.available_credits ?? 0;
    const hasEnoughCredits = availableCredits >= feature.required_credits;
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={feature.name || 'Feature'} />
            
            <div className='py-6'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6'>
                    {answer != null && (
                        <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="font-medium text-green-800 dark:text-green-200">Result:</span>
                                    <span className="font-mono text-lg text-green-900 dark:text-green-100">{answer}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    
                    <Card className="relative">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <CardTitle className="text-2xl">{feature.name || 'Feature'}</CardTitle>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <CreditCard className="w-3 h-3" />
                                    {feature.required_credits} credits
                                </Badge>
                            </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                            {!hasEnoughCredits && (
                                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                                    <div className="text-center space-y-4 p-6">
                                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                                            <Lock className="w-8 h-8 text-muted-foreground" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-lg">Insufficient Credits</h3>
                                            <p className="text-muted-foreground">
                                                You need {feature.required_credits} credits to use this feature, but you only have {availableCredits}.
                                            </p>
                                            <Button asChild className="mt-2">
                                                <Link href="/">
                                                    Buy More Credits
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <div className={`transition-opacity ${hasEnoughCredits ? 'opacity-100' : 'opacity-50'}`}>
                                {children}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    )
}

export default Feature