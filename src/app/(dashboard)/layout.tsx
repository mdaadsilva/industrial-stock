import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
