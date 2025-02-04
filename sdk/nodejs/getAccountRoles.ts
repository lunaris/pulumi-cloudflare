// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export function getAccountRoles(args: GetAccountRolesArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountRolesResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("cloudflare:index/getAccountRoles:getAccountRoles", {
        "accountId": args.accountId,
    }, opts);
}

/**
 * A collection of arguments for invoking getAccountRoles.
 */
export interface GetAccountRolesArgs {
    /**
     * The account identifier to target for the resource.
     */
    accountId: string;
}

/**
 * A collection of values returned by getAccountRoles.
 */
export interface GetAccountRolesResult {
    /**
     * The account identifier to target for the resource.
     */
    readonly accountId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly roles: outputs.GetAccountRolesRole[];
}

export function getAccountRolesOutput(args: GetAccountRolesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountRolesResult> {
    return pulumi.output(args).apply(a => getAccountRoles(a, opts))
}

/**
 * A collection of arguments for invoking getAccountRoles.
 */
export interface GetAccountRolesOutputArgs {
    /**
     * The account identifier to target for the resource.
     */
    accountId: pulumi.Input<string>;
}
