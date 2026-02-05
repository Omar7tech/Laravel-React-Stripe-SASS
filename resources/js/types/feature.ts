export interface Feature {
    id: number;
    image: string;
    route_name: string;
    name: string;
    description: string;
    required_credits: number;
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface UsedFeature {
    id: number;
    feature: Feature;
    credits_used: number;
    data?: Record<string, any>;
    created_at: string;
    updated_at: string;
}

export interface Transaction {
    id: number;
    user_id: number;
    package_id: number;
    price: number;
    credits: number;
    stripe_payment_intent_id?: string;
    status: string;
    created_at: string;
    updated_at: string;
    package?: {
        id: number;
        name: string;
        Price: number;
        credits: number;
    };
}

export interface DashboardStats {
    totalCredits: number;
    creditsUsed: number;
    creditsRemaining: number;
    totalFeaturesUsed: number;
    totalAmountPaid: number;
    mostUsedFeature?: {
        name: string;
        usageCount: number;
        totalCredits: number;
    };
    recentUsage: UsedFeature[];
}
