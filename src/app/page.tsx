import { ActivateSection } from "@/components/activate-section";
import { FeaturesImprovementSection } from "@/components/features-improvement";
import { FooterSection } from "@/components/footer";
import { HeaderSection } from "@/components/header-section";
import { Navbar } from "@/components/navbar";
import { OperationAutomationSection } from "@/components/operation-automation";
import { TopFeaturesSection } from "@/components/top-features";

export default function Home() {
    return (
        <main className="relative flex flex-col items-center justify-between ">
            <HeaderSection />
            <TopFeaturesSection />
            <OperationAutomationSection />
            <FeaturesImprovementSection />
            <ActivateSection />
        </main>
    );
}
