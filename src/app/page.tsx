
import { ActivateSection } from "@/components/activate-section";
import { FeaturesImprovementSection } from "@/components/features-improvement";
import { HeaderSection } from "@/components/header-section";
import { OperationAutomationSection } from "@/components/operation-automation";
import { OperationEfficiencySection } from "@/components/operation-efficiency";
import { TopFeaturesSection } from "@/components/top-features";

export default function Home() {
    return (
        <main className="relative flex flex-col items-center justify-between ">
            <HeaderSection />
            <TopFeaturesSection />
            <OperationAutomationSection />
            <OperationEfficiencySection />
            <ActivateSection />

        </main>
    );
}
