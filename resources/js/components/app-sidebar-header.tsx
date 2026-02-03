import { usePage, Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType, SharedData } from '@/types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {

    const { auth } = usePage<SharedData>().props;
    const coins: number = auth?.user?.available_credits ?? 0;
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className="flex items-center gap-2">
                <Badge variant="secondary" className='flex gap-1'>
                    <img width={15} src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin" />
                    <span className={coins === 0 ? 'text-destructive' : ''}>{coins}</span>
                </Badge>
                <Button asChild variant="outline" size="sm">
                    <Link href="/">
                        Get More
                    </Link>
                </Button>
            </div>
        </header>
    );
}
