import Home from "@/views/home";
import TestDetail from "@/views/test-detail";
import TestsDetails from "@/views/tests-detail";

const routes=[
    {path:'/', component:Home},
    {path:'/test-detail',component:TestDetail},
    {path:'/tests-details',component: TestsDetails}
]

export default routes;