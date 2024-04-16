import { Route } from "react-router-dom";
import NotFound from ".";

const routes = (
    <Route path="*" element={<NotFound />} />
)

export default routes;