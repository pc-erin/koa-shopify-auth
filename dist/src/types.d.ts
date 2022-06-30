import {Context} from 'koa';
export declare type AccessMode = 'online' | 'offline';
export interface AuthConfig {
  myShopifyDomain?: string;
  accessMode?: AccessMode;
  afterAuth?(ctx: Context): void;
}
export interface OAuthStartOptions extends AuthConfig {
  prefix?: string;
}
export interface NextFunction {
  (): any;
}
//# sourceMappingURL=types.d.ts.map
