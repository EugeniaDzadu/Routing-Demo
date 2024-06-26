import Notifications from "./@notifications/page"
import Revenue from "./@revenue/page"
import UserAnalytics from "./@users/page"




const DashboardLayout = (children, users, revenue, notifications) => {
    return (
        <>
            <div>{children}</div>
        <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>

            <div style={{display: "flex", flex: 1}}>{notifications}</div>
        </div>
        </>
    );
}

export default DashboardLayout;