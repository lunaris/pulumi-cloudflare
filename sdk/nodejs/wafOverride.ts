// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare WAF override resource. This enables the ability to toggle
 * WAF rules and groups on or off based on URIs.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const shopEcxample = new cloudflare.WafOverride("shopEcxample", {
 *     zoneId: "1d5fdc9e88c8a8c4518b068cd94331fe",
 *     urls: [
 *         "example.com/no-waf-here",
 *         "example.com/another/path/*",
 *     ],
 *     rules: {
 *         "100015": "disable",
 *     },
 *     groups: {
 *         ea8687e59929c1fd05ba97574ad43f77: "default",
 *     },
 *     rewriteAction: {
 *         "default": "block",
 *         challenge: "block",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * WAF Overrides can be imported using a composite ID formed of zone ID and override ID.
 *
 * ```sh
 *  $ pulumi import cloudflare:index/wafOverride:WafOverride my_example_waf_override 3abe5b950053dbddf1516d89f9ef1e8a/9d4e66d7649c178663bf62e06dbacb23
 * ```
 */
export class WafOverride extends pulumi.CustomResource {
    /**
     * Get an existing WafOverride resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WafOverrideState, opts?: pulumi.CustomResourceOptions): WafOverride {
        return new WafOverride(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/wafOverride:WafOverride';

    /**
     * Returns true if the given object is an instance of WafOverride.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WafOverride {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WafOverride.__pulumiType;
    }

    /**
     * Description of what the WAF override does.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Similar to `rules`; which WAF groups you want to alter.
     */
    public readonly groups!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly overrideId!: pulumi.Output<string>;
    /**
     * Whether this package is currently paused.
     */
    public readonly paused!: pulumi.Output<boolean | undefined>;
    /**
     * Relative priority of this configuration when multiple configurations match a single URL.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * When a WAF rule matches, substitute its configured action for a different action specified by this definition.
     */
    public readonly rewriteAction!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of WAF rule ID to rule action you intend to apply.
     */
    public readonly rules!: pulumi.Output<{[key: string]: string}>;
    /**
     * An array of URLs to apply the WAF override to.
     */
    public readonly urls!: pulumi.Output<string[]>;
    /**
     * The DNS zone to which the WAF override condition should be added.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a WafOverride resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WafOverrideArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WafOverrideArgs | WafOverrideState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WafOverrideState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["groups"] = state ? state.groups : undefined;
            inputs["overrideId"] = state ? state.overrideId : undefined;
            inputs["paused"] = state ? state.paused : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["rewriteAction"] = state ? state.rewriteAction : undefined;
            inputs["rules"] = state ? state.rules : undefined;
            inputs["urls"] = state ? state.urls : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as WafOverrideArgs | undefined;
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            if ((!args || args.urls === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urls'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["groups"] = args ? args.groups : undefined;
            inputs["paused"] = args ? args.paused : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["rewriteAction"] = args ? args.rewriteAction : undefined;
            inputs["rules"] = args ? args.rules : undefined;
            inputs["urls"] = args ? args.urls : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
            inputs["overrideId"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(WafOverride.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WafOverride resources.
 */
export interface WafOverrideState {
    /**
     * Description of what the WAF override does.
     */
    description?: pulumi.Input<string>;
    /**
     * Similar to `rules`; which WAF groups you want to alter.
     */
    groups?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    overrideId?: pulumi.Input<string>;
    /**
     * Whether this package is currently paused.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * Relative priority of this configuration when multiple configurations match a single URL.
     */
    priority?: pulumi.Input<number>;
    /**
     * When a WAF rule matches, substitute its configured action for a different action specified by this definition.
     */
    rewriteAction?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of WAF rule ID to rule action you intend to apply.
     */
    rules?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An array of URLs to apply the WAF override to.
     */
    urls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DNS zone to which the WAF override condition should be added.
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WafOverride resource.
 */
export interface WafOverrideArgs {
    /**
     * Description of what the WAF override does.
     */
    description?: pulumi.Input<string>;
    /**
     * Similar to `rules`; which WAF groups you want to alter.
     */
    groups?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether this package is currently paused.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * Relative priority of this configuration when multiple configurations match a single URL.
     */
    priority?: pulumi.Input<number>;
    /**
     * When a WAF rule matches, substitute its configured action for a different action specified by this definition.
     */
    rewriteAction?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of WAF rule ID to rule action you intend to apply.
     */
    rules: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An array of URLs to apply the WAF override to.
     */
    urls: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DNS zone to which the WAF override condition should be added.
     */
    zoneId: pulumi.Input<string>;
}
