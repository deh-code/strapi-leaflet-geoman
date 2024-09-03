import { Strapi } from "@strapi/strapi";
import { Config } from "../../../types";
declare const _default: ({ strapi }: {
    strapi: Strapi;
}) => {
    retrieve(): Promise<Config | null>;
    update(data: any): Promise<Config>;
};
export default _default;
