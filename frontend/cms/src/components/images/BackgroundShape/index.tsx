
type BackgroundShapeImgProps = {
    color?: string;
}

const BackgroundShapeImg = ({ color }: BackgroundShapeImgProps) => {

    return (
        <svg width="1440" height="1070" viewBox="0 0 1440 1070" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M272.5 1380C519.647 1380 720 1179.65 720 932.5C720 800.376 401.153 909.916 310.095 828C230.823 756.687 387.523 485 272.5 485C25.3526 485 -175 685.353 -175 932.5C-175 1179.65 25.3526 1380 272.5 1380Z" fill={color ?? 'currentColor'} />
            <path opacity="0.541829" fillRule="evenodd" clipRule="evenodd" d="M864.469 -208.915C814.503 74.4538 1003.71 344.675 1287.08 394.64C1438.57 421.352 1377.44 33.6298 1489.77 -54.2125C1587.56 -130.685 1867.38 103.907 1890.64 -27.9738C1940.6 -311.343 1751.39 -581.564 1468.02 -631.529C1184.66 -681.495 914.435 -492.284 864.469 -208.915Z" fill={color ?? 'currentColor'} />
            <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M219.512 -233.946C-12.7303 -149.417 -132.476 107.378 -47.9461 339.62C-2.75693 463.777 259.396 251.791 372.979 297.623C471.861 337.522 417.534 646.419 525.62 607.079C757.863 522.55 877.608 265.755 793.079 33.5125C708.549 -198.73 451.755 -318.475 219.512 -233.946Z" fill={color ?? 'currentColor'} />
            <path fillRule="evenodd" clipRule="evenodd" d="M2006.38 1031.96C2061.52 719.221 1852.7 420.992 1539.96 365.848C1372.77 336.368 1440.24 764.276 1316.27 861.223C1208.34 945.622 899.512 686.715 873.848 832.264C818.703 1145 1027.53 1443.23 1340.26 1498.38C1653 1553.52 1951.23 1344.7 2006.38 1031.96Z" fill={color ?? 'currentColor'} />
        </svg>
    )
}

export default BackgroundShapeImg;