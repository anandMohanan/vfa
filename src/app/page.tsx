"use client"
import { ActivateSection } from "@/components/activate-section";
import { FeaturesImprovementSection } from "@/components/features-improvement";
import { HeaderSection } from "@/components/header-section";
import { OperationAutomationSection } from "@/components/operation-automation";
import { OperationEfficiencySection } from "@/components/operation-efficiency";
import { TopFeaturesSection } from "@/components/top-features";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotivescroll = new LocomotiveScroll()
            }
        )()
    }, [])
    return (
        <main className="relative flex flex-col items-center justify-between ">
            <HeaderSection />
            <TopFeaturesSection />
            <OperationAutomationSection />
            <FeaturesImprovementSection />
            <OperationEfficiencySection />
            <ActivateSection />

        </main>
    );
}
