import { Config } from "../../../types";
import { Model } from "@strapi/utils/dist/types";
declare const schema: Model;
export default schema;
export declare function sanitizeConfigInput(data: object, ctx: any): Promise<Config>;
