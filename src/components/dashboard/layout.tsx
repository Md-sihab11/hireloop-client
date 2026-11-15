import { Toaster } from "@/components/ui/toast";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-w-0 flex-1">
            {children}
            <Toaster />
        </div>
    );
};

export default DashboardLayout;