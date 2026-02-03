import { useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import Feature from "@/components/Feature";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: route('dashboard') },
    { title: 'Feature 2', href: route('feature2.index') },
];

export default function Index({ feature, answer }: { feature: Feature, answer: string }) {

    const { data, setData, post, reset, errors, processing } = useForm({
        number1: "",
        number2: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('feature2.calculate'), {
            onSuccess() {
                reset();
            }
        });
    }

    return (
        <Feature feature={feature} answer={answer} breadcrumbs={breadcrumbs}>
            <form onSubmit={submit} className="p-8 grid grid-cols-2 gap-2">
                <div>
                    <Input id="number1" className="mt-1 block w-full" type="number" name="number1" value={data.number1} onChange={(e) => setData('number1', e.target.value)} />
                    <InputError message={errors.number1} />
                </div>
                <div>
                    <Input id="number2" className="mt-1 block w-full" type="number" name="number2" value={data.number2} onChange={(e) => setData('number2', e.target.value)} />
                    <InputError message={errors.number2} />
                </div>
                <div className="flex items-center justify-end mt-4 col-span-2">
                    <Button type="submit" disabled={processing} className="ml-4">
                        Subtract
                    </Button>
                </div>
            </form>
        </Feature>
    )
}