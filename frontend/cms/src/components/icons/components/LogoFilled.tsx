import { GetProps, theme } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

import { defaultThemeConfig } from "../../../configs/themes";

// Create Icon props type
type IconProps = GetProps<typeof Icon>;

// Get token theme
const { getDesignToken } = theme;

const globalToken = getDesignToken(defaultThemeConfig);

// Logo
const LogoSvg = () => (
    <svg
        width="8rem"
        height="1.5rem"
        viewBox="0 0 101 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.42 15V0.899999H5.94C8.34 0.899999 10.2 1.51333 11.52 2.74C12.84 3.95333 13.5 5.68667 13.5 7.94C13.5 10.1933 12.84 11.9333 11.52 13.16C10.2 14.3867 8.34 15 5.94 15H0.42ZM3.52 12.46H5.76C8.76 12.46 10.26 10.9533 10.26 7.94C10.26 4.94 8.76 3.44 5.76 3.44H3.52V12.46ZM18.9683 15.22C18.2349 15.22 17.5883 15.08 17.0283 14.8C16.4683 14.52 16.0216 14.14 15.6883 13.66C15.3683 13.18 15.2083 12.64 15.2083 12.04C15.2083 11.3333 15.3949 10.7667 15.7683 10.34C16.1416 9.91333 16.7483 9.61333 17.5883 9.44C18.4283 9.25333 19.5416 9.16 20.9283 9.16H21.6483V8.82C21.6483 8.23333 21.5149 7.82 21.2483 7.58C20.9816 7.32667 20.5283 7.2 19.8883 7.2C19.3549 7.2 18.7883 7.28667 18.1883 7.46C17.6016 7.62 17.0149 7.86667 16.4283 8.2L15.6083 6.18C15.9549 5.95333 16.3749 5.74667 16.8683 5.56C17.3749 5.37333 17.9016 5.23333 18.4483 5.14C18.9949 5.03333 19.5149 4.98 20.0083 4.98C21.5283 4.98 22.6616 5.32667 23.4083 6.02C24.1549 6.7 24.5283 7.76 24.5283 9.2V15H21.7083V13.52C21.5083 14.04 21.1683 14.4533 20.6883 14.76C20.2216 15.0667 19.6483 15.22 18.9683 15.22ZM19.6483 13.2C20.2083 13.2 20.6816 13.0067 21.0683 12.62C21.4549 12.2333 21.6483 11.7333 21.6483 11.12V10.72H20.9483C19.9216 10.72 19.1949 10.8133 18.7683 11C18.3416 11.1733 18.1283 11.48 18.1283 11.92C18.1283 12.2933 18.2549 12.6 18.5083 12.84C18.7749 13.08 19.1549 13.2 19.6483 13.2ZM30.5411 15.22C29.6744 15.22 28.8678 15.12 28.1211 14.92C27.3744 14.72 26.7544 14.4467 26.2611 14.1L26.9811 12.14C27.4744 12.4467 28.0344 12.6933 28.6611 12.88C29.3011 13.0533 29.9344 13.14 30.5611 13.14C31.1211 13.14 31.5344 13.0533 31.8011 12.88C32.0678 12.6933 32.2011 12.4533 32.2011 12.16C32.2011 11.6933 31.8611 11.4 31.1811 11.28L29.0811 10.9C28.2411 10.7533 27.6011 10.4533 27.1611 10C26.7211 9.54667 26.5011 8.95333 26.5011 8.22C26.5011 7.55333 26.6878 6.98 27.0611 6.5C27.4344 6.02 27.9478 5.64667 28.6011 5.38C29.2544 5.11333 30.0078 4.98 30.8611 4.98C31.5678 4.98 32.2544 5.07333 32.9211 5.26C33.5878 5.43333 34.1611 5.71333 34.6411 6.1L33.8811 8.04C33.4811 7.74667 33.0011 7.50667 32.4411 7.32C31.8944 7.13333 31.3811 7.04 30.9011 7.04C30.3011 7.04 29.8678 7.14 29.6011 7.34C29.3344 7.52667 29.2011 7.76667 29.2011 8.06C29.2011 8.52667 29.5144 8.82 30.1411 8.94L32.2411 9.32C33.1078 9.46667 33.7678 9.76 34.2211 10.2C34.6744 10.6267 34.9011 11.2133 34.9011 11.96C34.9011 12.9867 34.5011 13.7867 33.7011 14.36C32.9011 14.9333 31.8478 15.22 30.5411 15.22ZM36.6248 15V0.899999H39.6448V6.52C39.9915 6.01333 40.4382 5.63333 40.9848 5.38C41.5315 5.11333 42.1382 4.98 42.8048 4.98C45.1115 4.98 46.2648 6.35333 46.2648 9.1V15H43.2448V9.24C43.2448 8.56 43.1182 8.07333 42.8648 7.78C42.6115 7.47333 42.2382 7.32 41.7448 7.32C41.1048 7.32 40.5915 7.52 40.2048 7.92C39.8315 8.32 39.6448 8.85333 39.6448 9.52V15H36.6248Z"
            fill={globalToken.colorPrimary}
        />
        <path
            d="M53.8194 15.22C52.7127 15.22 51.666 15.08 50.6794 14.8C49.706 14.52 48.8927 14.14 48.2394 13.66L49.1394 11.22C49.766 11.66 50.4794 12.0067 51.2794 12.26C52.0927 12.5133 52.9394 12.64 53.8194 12.64C54.7794 12.64 55.466 12.4933 55.8794 12.2C56.306 11.8933 56.5194 11.5133 56.5194 11.06C56.5194 10.6733 56.3727 10.3667 56.0794 10.14C55.786 9.91333 55.2727 9.72 54.5394 9.56L52.2794 9.08C49.7594 8.54667 48.4994 7.24 48.4994 5.16C48.4994 4.26667 48.7394 3.48667 49.2194 2.82C49.6994 2.14 50.366 1.61333 51.2194 1.24C52.086 0.866666 53.086 0.68 54.2194 0.68C55.1927 0.68 56.106 0.819999 56.9594 1.1C57.8127 1.38 58.5194 1.77333 59.0794 2.28L58.1794 4.56C57.086 3.69333 55.7594 3.26 54.1994 3.26C53.3594 3.26 52.706 3.42667 52.2394 3.76C51.786 4.08 51.5594 4.5 51.5594 5.02C51.5594 5.40667 51.6994 5.72 51.9794 5.96C52.2594 6.2 52.746 6.39333 53.4394 6.54L55.6994 7.02C58.286 7.58 59.5794 8.84667 59.5794 10.82C59.5794 11.7 59.3394 12.4733 58.8594 13.14C58.3927 13.7933 57.726 14.3067 56.8594 14.68C56.006 15.04 54.9927 15.22 53.8194 15.22ZM66.0152 15.22C63.2552 15.22 61.8752 13.88 61.8752 11.2V7.44H60.0152V5.18H61.8752V2.3H64.8952V5.18H67.7952V7.44H64.8952V11.08C64.8952 11.64 65.0218 12.06 65.2752 12.34C65.5418 12.62 65.9618 12.76 66.5352 12.76C66.7085 12.76 66.8885 12.74 67.0752 12.7C67.2752 12.66 67.4885 12.6067 67.7152 12.54L68.1552 14.74C67.8752 14.8867 67.5418 15 67.1552 15.08C66.7685 15.1733 66.3885 15.22 66.0152 15.22ZM72.6011 15.22C71.8678 15.22 71.2211 15.08 70.6611 14.8C70.1011 14.52 69.6544 14.14 69.3211 13.66C69.0011 13.18 68.8411 12.64 68.8411 12.04C68.8411 11.3333 69.0278 10.7667 69.4011 10.34C69.7744 9.91333 70.3811 9.61333 71.2211 9.44C72.0611 9.25333 73.1744 9.16 74.5611 9.16H75.2811V8.82C75.2811 8.23333 75.1478 7.82 74.8811 7.58C74.6144 7.32667 74.1611 7.2 73.5211 7.2C72.9878 7.2 72.4211 7.28667 71.8211 7.46C71.2344 7.62 70.6478 7.86667 70.0611 8.2L69.2411 6.18C69.5878 5.95333 70.0078 5.74667 70.5011 5.56C71.0078 5.37333 71.5344 5.23333 72.0811 5.14C72.6278 5.03333 73.1478 4.98 73.6411 4.98C75.1611 4.98 76.2944 5.32667 77.0411 6.02C77.7878 6.7 78.1611 7.76 78.1611 9.2V15H75.3411V13.52C75.1411 14.04 74.8011 14.4533 74.3211 14.76C73.8544 15.0667 73.2811 15.22 72.6011 15.22ZM73.2811 13.2C73.8411 13.2 74.3144 13.0067 74.7011 12.62C75.0878 12.2333 75.2811 11.7333 75.2811 11.12V10.72H74.5811C73.5544 10.72 72.8278 10.8133 72.4011 11C71.9744 11.1733 71.7611 11.48 71.7611 11.92C71.7611 12.2933 71.8878 12.6 72.1411 12.84C72.4078 13.08 72.7878 13.2 73.2811 13.2ZM85.1939 15.22C84.1272 15.22 83.1939 15.0133 82.3939 14.6C81.6072 14.1733 81.0006 13.5733 80.5739 12.8C80.1472 12.0267 79.9339 11.1133 79.9339 10.06C79.9339 9.00667 80.1472 8.1 80.5739 7.34C81.0006 6.58 81.6072 6 82.3939 5.6C83.1939 5.18667 84.1272 4.98 85.1939 4.98C85.8206 4.98 86.4539 5.07333 87.0939 5.26C87.7339 5.44667 88.2539 5.71333 88.6539 6.06L87.8139 8.14C87.4806 7.87333 87.1072 7.66667 86.6939 7.52C86.2806 7.36 85.8806 7.28 85.4939 7.28C84.7072 7.28 84.0939 7.52667 83.6539 8.02C83.2272 8.5 83.0139 9.18667 83.0139 10.08C83.0139 10.96 83.2272 11.6533 83.6539 12.16C84.0939 12.6533 84.7072 12.9 85.4939 12.9C85.8672 12.9 86.2606 12.8267 86.6739 12.68C87.1006 12.5333 87.4806 12.32 87.8139 12.04L88.6539 14.12C88.2539 14.4667 87.7339 14.74 87.0939 14.94C86.4539 15.1267 85.8206 15.22 85.1939 15.22ZM89.9647 15V0.899999H92.9847V9.24H93.0247L96.6447 5.18H100.225L96.0647 9.88L100.425 15H96.7847L93.0247 10.76H92.9847V15H89.9647Z"
            fill="currentColor"
        />
    </svg>
);

const LogoFilled = (props: Partial<IconProps>) => {
    return <Icon component={LogoSvg} {...props} />;
};
export default LogoFilled;