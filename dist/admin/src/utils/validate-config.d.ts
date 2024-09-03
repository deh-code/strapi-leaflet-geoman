declare const validateConfig: (config: any) => {
    latitude: number | undefined;
    longitude: number | undefined;
    zoom: number | undefined;
    tileUrl: any;
    tileAttribution: any;
    tileAccessToken: any;
};
export default validateConfig;
