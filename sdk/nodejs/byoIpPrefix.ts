// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides the ability to manage Bring-Your-Own-IP prefixes (BYOIP) which are used with or without Magic Transit.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const example = new cloudflare.ByoIpPrefix("example", {
 *     advertisement: "on",
 *     description: "Example IP Prefix",
 *     prefixId: "d41d8cd98f00b204e9800998ecf8427e",
 * });
 * ```
 *
 * ## Import
 *
 * The current settings for Bring-Your-Own-IP prefixes can be imported using the prefix ID.
 *
 * ```sh
 *  $ pulumi import cloudflare:index/byoIpPrefix:ByoIpPrefix example d41d8cd98f00b204e9800998ecf8427e
 * ```
 */
export class ByoIpPrefix extends pulumi.CustomResource {
    /**
     * Get an existing ByoIpPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ByoIpPrefixState, opts?: pulumi.CustomResourceOptions): ByoIpPrefix {
        return new ByoIpPrefix(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/byoIpPrefix:ByoIpPrefix';

    /**
     * Returns true if the given object is an instance of ByoIpPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ByoIpPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ByoIpPrefix.__pulumiType;
    }

    /**
     * Whether or not the prefix shall be announced. A prefix can be activated or deactivated once every 15 minutes (attempting more regular updates will trigger rate limiting). Valid values: `on` or `off`.
     */
    public readonly advertisement!: pulumi.Output<string>;
    /**
     * The description of the prefix.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The assigned Bring-Your-Own-IP prefix ID.
     */
    public readonly prefixId!: pulumi.Output<string>;

    /**
     * Create a ByoIpPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ByoIpPrefixArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ByoIpPrefixArgs | ByoIpPrefixState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ByoIpPrefixState | undefined;
            inputs["advertisement"] = state ? state.advertisement : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["prefixId"] = state ? state.prefixId : undefined;
        } else {
            const args = argsOrState as ByoIpPrefixArgs | undefined;
            if ((!args || args.prefixId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixId'");
            }
            inputs["advertisement"] = args ? args.advertisement : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["prefixId"] = args ? args.prefixId : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ByoIpPrefix.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ByoIpPrefix resources.
 */
export interface ByoIpPrefixState {
    /**
     * Whether or not the prefix shall be announced. A prefix can be activated or deactivated once every 15 minutes (attempting more regular updates will trigger rate limiting). Valid values: `on` or `off`.
     */
    advertisement?: pulumi.Input<string>;
    /**
     * The description of the prefix.
     */
    description?: pulumi.Input<string>;
    /**
     * The assigned Bring-Your-Own-IP prefix ID.
     */
    prefixId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ByoIpPrefix resource.
 */
export interface ByoIpPrefixArgs {
    /**
     * Whether or not the prefix shall be announced. A prefix can be activated or deactivated once every 15 minutes (attempting more regular updates will trigger rate limiting). Valid values: `on` or `off`.
     */
    advertisement?: pulumi.Input<string>;
    /**
     * The description of the prefix.
     */
    description?: pulumi.Input<string>;
    /**
     * The assigned Bring-Your-Own-IP prefix ID.
     */
    prefixId: pulumi.Input<string>;
}
