import { Grid } from "antd";

const { useBreakpoint } = Grid;

const useActiveBreakpoint = () => {
    const screens = useBreakpoint();
    const activeBreakpoints = Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => screen[0]);

    // Current breakpoint
    const currentBreakpoint = activeBreakpoints[activeBreakpoints.length - 1];

    // Mobile screen
    const isMobileScreen =
        currentBreakpoint === "xs" || currentBreakpoint === "sm";

    // Tablet screen
    const isTabletScreen =
        currentBreakpoint === "md" || currentBreakpoint === "lg";

    // Laptop screen
    const isLaptopScreen =
        currentBreakpoint === "xl"

    // Desktop screen
    const isDesktopScreen = currentBreakpoint === "xxl";

    return {
        isMobileScreen,
        isTabletScreen,
        isLaptopScreen,
        isDesktopScreen,
        currentBreakpoint,
        activeBreakpoints,
    };
};

export default useActiveBreakpoint;
