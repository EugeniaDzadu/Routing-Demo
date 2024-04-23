import UserAnalytics from "@/components/Analytics"
import RevenueMetrics from "@components/RevenueMetrics"
import Notifications from "@components/Notifications"




const DashboardLayout = ()=>{
   return(
    <>
       <div>{children}</div>

       <UserAnalytics/>

       <RevenueMetrics/>
       
       <Notifications/>

    </>
   )
}

export default DashboardLayout;