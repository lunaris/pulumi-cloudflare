// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Use this data source to get the [Origin CA root certificate](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca#4-required-for-some-add-cloudflare-origin-ca-root-certificates) for a given algorithm.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const originCa = pulumi.output(cloudflare.getOriginCaRootCertificate({
 *     algorithm: "<algorithm>",
 * }));
 * ```
 */
export function getOriginCaRootCertificate(args: GetOriginCaRootCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetOriginCaRootCertificateResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("cloudflare:index/getOriginCaRootCertificate:getOriginCaRootCertificate", {
        "algorithm": args.algorithm,
    }, opts);
}

/**
 * A collection of arguments for invoking getOriginCaRootCertificate.
 */
export interface GetOriginCaRootCertificateArgs {
    /**
     * The name of the algorithm used when creating an Origin CA certificate. Currently-supported values are "rsa" and "ecc" (case-insensitive).
     */
    algorithm: string;
}

/**
 * A collection of values returned by getOriginCaRootCertificate.
 */
export interface GetOriginCaRootCertificateResult {
    readonly algorithm: string;
    /**
     * The Origin CA root certificate in PEM format.
     */
    readonly certPem: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
