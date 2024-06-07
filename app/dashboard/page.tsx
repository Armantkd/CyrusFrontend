import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
//import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import { redirect } from 'next/navigation';
import { auth } from "@/auth";
import { prisma } from "@/auth";

function fetchRevenue() {
  return prisma.revenue.findMany();
}
export default async function Page() {
  const session = await auth()

  if (!session) {
    redirect("/login");
  }

  const revenue = await fetchRevenue();
  //const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        { 
          <RevenueChart revenue={revenue}  /> }
        { <p>{session.user.email}</p>
        
        /*<LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}