import SiderMenu from "../SiderMenu";
import { SiderDrawerWrapper } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../configs/store/reducers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../configs/store";
import { toggleSiderCollapse } from "../../../../../../configs/store/reducers/app/appActions";


const SiderDrawer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isSiderCollapse } = useSelector((state: RootState) => state.app)

    const handleDrawerClose = () => {
        dispatch(toggleSiderCollapse())
    }

    return (
        <SiderDrawerWrapper
            onClose={handleDrawerClose}
            open={isSiderCollapse}
            placement="left"
            styles={{
                body: {
                    padding: 0,
                }
            }}
        >
            <SiderMenu />
        </SiderDrawerWrapper>
    );
};

export default SiderDrawer;
