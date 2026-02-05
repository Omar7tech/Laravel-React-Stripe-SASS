import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import type { Auth, Feature, Package } from '@/types'
import CreditPricingCards from '@/components/CreditPricingCards'

interface Props {
    auth: Auth
    packages: { data: Package[] }
    features: { data: Feature[] }
    success?: string
    error?: string
}

function Index({ auth, packages, features, success, error }: Props) {
    return (
        <AppLayout>
            <Head title="Credits" />
            <div className="flex flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {success && (
                    <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
                        <p className="font-medium">{success}</p>
                    </div>
                )}
                {error && (
                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200">
                        <p className="font-medium">{error}</p>
                    </div>
                )}
                
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <img className="h-8 w-8" src="/icons/coin.png" alt="Credits" />
                        <div>
                            <h1 className="text-sm font-medium text-muted-foreground">
                                Available Credits
                            </h1>
                            <p className="text-2xl font-bold text-primary">
                                {auth.user.available_credits}
                            </p>
                        </div>
                    </div>
                </div>
                
                <CreditPricingCards packages={packages.data} features={features.data}/>
            </div>
        </AppLayout>
    )
}

export default Index