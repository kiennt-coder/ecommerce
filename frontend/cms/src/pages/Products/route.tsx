import { Route } from "react-router-dom";
import Products from ".";

const routes = (
    <Route path="/san-pham">
        <Route index element={<Products />} />
    </Route>
)

export default routes;