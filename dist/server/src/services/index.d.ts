declare const _default: {
    config: ({ strapi }: {
        strapi: import("@strapi/types").Strapi;
    }) => {
        retrieve(): Promise<import("../../../types").Config>;
        update(data: any): Promise<import("../../../types").Config>;
    };
};
export default _default;
