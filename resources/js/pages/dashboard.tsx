import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, CreditCard, Target, Activity, Zap, DollarSign } from "lucide-react";
import type { BreadcrumbItem } from '@/types';
import type { UsedFeature, DashboardStats, Transaction } from '@/types/feature';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface DashboardProps {
    stats: DashboardStats;
    usedFeatures: UsedFeature[];
    transactions: Transaction[];
}

export default function Dashboard(props: any) {
    // Debug: Log all props
    console.log('All props received:', props);
    console.log('usedFeatures:', props.usedFeatures);
    console.log('stats:', props.stats);

    const stats = props.stats || {};
    const usedFeatures = props.usedFeatures || [];
    const transactions = props.transactions || [];
    const creditUsagePercentage = stats.totalCredits > 0 ? (stats.creditsUsed / stats.totalCredits) * 100 : 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalCredits}</div>
                            <p className="text-xs text-muted-foreground">
                                Available credits in your account
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Credits Used</CardTitle>
                            <TrendingDown className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.creditsUsed}</div>
                            <p className="text-xs text-muted-foreground">
                                Total credits consumed
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${stats.totalAmountPaid || 0}</div>
                            <p className="text-xs text-muted-foreground">
                                Total amount spent on credits
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Features Used</CardTitle>
                            <Target className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalFeaturesUsed}</div>
                            <p className="text-xs text-muted-foreground">
                                Total features accessed
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Most Used Feature */}
                {stats.mostUsedFeature && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="h-5 w-5" />
                                Most Used Feature
                            </CardTitle>
                            <CardDescription>
                                Your most frequently accessed feature
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg">{stats.mostUsedFeature.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Used {stats.mostUsedFeature.usageCount} times
                                    </p>
                                </div>
                                <div className="text-right">
                                    <Badge variant="secondary">
                                        {stats.mostUsedFeature.totalCredits} credits
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Recent Usage Table */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="h-5 w-5" />
                            Recent Feature Usage
                        </CardTitle>
                        <CardDescription>
                            Your latest feature usage history
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Feature</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Credits Used</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {usedFeatures && usedFeatures.length > 0 ? (
                                    usedFeatures.map((usedFeature: any) => (
                                        <TableRow key={usedFeature.id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline">
                                                        {usedFeature.feature?.name || 'Unknown Feature'}
                                                    </Badge>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {usedFeature.feature?.description || 'No description'}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={(usedFeature.credits || usedFeature.credits_used) > 5 ? "destructive" : "secondary"}>
                                                    {usedFeature.credits || usedFeature.credits_used}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right text-muted-foreground py-2">
                                                <span className="text-xs">
                                                    {new Date(usedFeature.created_at).toLocaleDateString()}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                            <div className="flex flex-col items-center gap-2">
                                                <Activity className="h-8 w-8 text-muted-foreground" />
                                                <p>No features used yet.</p>
                                                <p className="text-sm">Start using features to see your usage history here.</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Transactions Table */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5" />
                            Recent Transactions
                        </CardTitle>
                        <CardDescription>
                            Your payment history and credit purchases
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Package</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Credits</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.length > 0 ? (
                                    transactions.map((transaction: any) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell className="font-medium">
                                                <Badge variant="outline">
                                                    {transaction.package?.name || 'Unknown Package'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                ${transaction.price || 0}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">
                                                    {transaction.credits || 0} credits
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right text-muted-foreground">
                                                {new Date(transaction.created_at).toLocaleDateString()}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                            <div className="flex flex-col items-center gap-2">
                                                <DollarSign className="h-8 w-8 text-muted-foreground" />
                                                <p>No transactions yet.</p>
                                                <p className="text-sm">Purchase credits to see your payment history here.</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
