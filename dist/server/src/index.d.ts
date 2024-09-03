declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types").Strapi;
    }) => Promise<void>;
    config: {
        default: {};
        validator(): void;
    };
    controllers: {
        config: ({ strapi }: {
            strapi: import("@strapi/types").Strapi;
        }) => {
            index(ctx: any): Promise<void>;
            update(ctx: any): Promise<void>;
        };
    };
    routes: {
        method: string;
        path: string;
        handler: string;
        config: {
            policies: (string | {
                name: string;
                config: {
                    actions: string[];
                };
            })[];
        };
    }[];
    services: {
        config: ({ strapi }: {
            strapi: import("@strapi/types").Strapi;
        }) => {
            retrieve(): Promise<import("../../types").Config>;
            update(data: any): Promise<import("../../types").Config>;
        };
    };
    contentTypes: {
        config: {
            schema: import("@strapi/utils/dist/types").Model;
        };
    };
};
export default _default;
