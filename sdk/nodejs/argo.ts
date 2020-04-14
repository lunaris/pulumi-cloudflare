// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Cloudflare Argo controls the routing to your origin and tiered caching options to speed up your website browsing experience.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * 
 * const example = new cloudflare.Argo("example", {
 *     smartRouting: "on",
 *     tieredCaching: "on",
 *     zoneId: "d41d8cd98f00b204e9800998ecf8427e",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/argo.html.markdown.
 */
export class Argo extends pulumi.CustomResource {
    /**
     * Get an existing Argo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArgoState, opts?: pulumi.CustomResourceOptions): Argo {
        return new Argo(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/argo:Argo';

    /**
     * Returns true if the given object is an instance of Argo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Argo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Argo.__pulumiType;
    }

    /**
     * Whether smart routing is enabled. Valid values: `on` or `off`. Defaults to `off`.
     */
    public readonly smartRouting!: pulumi.Output<string | undefined>;
    /**
     * Whether tiered caching is enabled. Valid values: `on` or `off`. Defaults to `off`.
     */
    public readonly tieredCaching!: pulumi.Output<string | undefined>;
    /**
     * The DNS zone ID that you wish to manage Argo on.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a Argo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArgoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArgoArgs | ArgoState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ArgoState | undefined;
            inputs["smartRouting"] = state ? state.smartRouting : undefined;
            inputs["tieredCaching"] = state ? state.tieredCaching : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ArgoArgs | undefined;
            if (!args || args.zoneId === undefined) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["smartRouting"] = args ? args.smartRouting : undefined;
            inputs["tieredCaching"] = args ? args.tieredCaching : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Argo.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Argo resources.
 */
export interface ArgoState {
    /**
     * Whether smart routing is enabled. Valid values: `on` or `off`. Defaults to `off`.
     */
    readonly smartRouting?: pulumi.Input<string>;
    /**
     * Whether tiered caching is enabled. Valid values: `on` or `off`. Defaults to `off`.
     */
    readonly tieredCaching?: pulumi.Input<string>;
    /**
     * The DNS zone ID that you wish to manage Argo on.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Argo resource.
 */
export interface ArgoArgs {
    /**
     * Whether smart routing is enabled. Valid values: `on` or `off`. Defaults to `off`.
     */
    readonly smartRouting?: pulumi.Input<string>;
    /**
     * Whether tiered caching is enabled. Valid values: `on` or `off`. Defaults to `off`.
     */
    readonly tieredCaching?: pulumi.Input<string>;
    /**
     * The DNS zone ID that you wish to manage Argo on.
     */
    readonly zoneId: pulumi.Input<string>;
}
