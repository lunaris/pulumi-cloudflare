// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare Load Balancer pool resource. This provides a pool of origins that can be used by a Cloudflare Load Balancer. Note that the load balancing feature must be enabled in your Cloudflare account before you can use this resource.
 *
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const foo = new cloudflare.LoadBalancerPool("foo", {
 *     description: "example load balancer pool",
 *     enabled: false,
 *     minimumOrigins: 1,
 *     name: "example-pool",
 *     notificationEmail: "someone@example.com",
 *     origins: [
 *         {
 *             address: "192.0.2.1",
 *             enabled: false,
 *             name: "example-1",
 *         },
 *         {
 *             address: "192.0.2.2",
 *             name: "example-2",
 *         },
 *     ],
 * });
 * ```
 */
export class LoadBalancerPool extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerPoolState, opts?: pulumi.CustomResourceOptions): LoadBalancerPool {
        return new LoadBalancerPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/loadBalancerPool:LoadBalancerPool';

    /**
     * Returns true if the given object is an instance of LoadBalancerPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancerPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancerPool.__pulumiType;
    }

    /**
     * A list of regions (specified by region code) from which to run health checks. Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://support.cloudflare.com/hc/en-us/articles/115000540888-Load-Balancing-Geographic-Regions).
     */
    public readonly checkRegions!: pulumi.Output<string[]>;
    /**
     * The RFC3339 timestamp of when the load balancer was created.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Free text description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether to enable (the default) this origin within the Pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Default: 1.
     */
    public readonly minimumOrigins!: pulumi.Output<number | undefined>;
    /**
     * The RFC3339 timestamp of when the load balancer was last modified.
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * The ID of the Monitor to use for health checking origins within this pool.
     */
    public readonly monitor!: pulumi.Output<string | undefined>;
    /**
     * A human-identifiable name for the origin.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.
     */
    public readonly notificationEmail!: pulumi.Output<string | undefined>;
    /**
     * The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. It's a complex value. See description below.
     */
    public readonly origins!: pulumi.Output<outputs.LoadBalancerPoolOrigin[]>;

    /**
     * Create a LoadBalancerPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalancerPoolArgs | LoadBalancerPoolState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LoadBalancerPoolState | undefined;
            inputs["checkRegions"] = state ? state.checkRegions : undefined;
            inputs["createdOn"] = state ? state.createdOn : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["minimumOrigins"] = state ? state.minimumOrigins : undefined;
            inputs["modifiedOn"] = state ? state.modifiedOn : undefined;
            inputs["monitor"] = state ? state.monitor : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notificationEmail"] = state ? state.notificationEmail : undefined;
            inputs["origins"] = state ? state.origins : undefined;
        } else {
            const args = argsOrState as LoadBalancerPoolArgs | undefined;
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.origins === undefined) {
                throw new Error("Missing required property 'origins'");
            }
            inputs["checkRegions"] = args ? args.checkRegions : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["minimumOrigins"] = args ? args.minimumOrigins : undefined;
            inputs["monitor"] = args ? args.monitor : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notificationEmail"] = args ? args.notificationEmail : undefined;
            inputs["origins"] = args ? args.origins : undefined;
            inputs["createdOn"] = undefined /*out*/;
            inputs["modifiedOn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(LoadBalancerPool.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LoadBalancerPool resources.
 */
export interface LoadBalancerPoolState {
    /**
     * A list of regions (specified by region code) from which to run health checks. Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://support.cloudflare.com/hc/en-us/articles/115000540888-Load-Balancing-Geographic-Regions).
     */
    readonly checkRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The RFC3339 timestamp of when the load balancer was created.
     */
    readonly createdOn?: pulumi.Input<string>;
    /**
     * Free text description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Whether to enable (the default) this origin within the Pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Default: 1.
     */
    readonly minimumOrigins?: pulumi.Input<number>;
    /**
     * The RFC3339 timestamp of when the load balancer was last modified.
     */
    readonly modifiedOn?: pulumi.Input<string>;
    /**
     * The ID of the Monitor to use for health checking origins within this pool.
     */
    readonly monitor?: pulumi.Input<string>;
    /**
     * A human-identifiable name for the origin.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.
     */
    readonly notificationEmail?: pulumi.Input<string>;
    /**
     * The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. It's a complex value. See description below.
     */
    readonly origins?: pulumi.Input<pulumi.Input<inputs.LoadBalancerPoolOrigin>[]>;
}

/**
 * The set of arguments for constructing a LoadBalancerPool resource.
 */
export interface LoadBalancerPoolArgs {
    /**
     * A list of regions (specified by region code) from which to run health checks. Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://support.cloudflare.com/hc/en-us/articles/115000540888-Load-Balancing-Geographic-Regions).
     */
    readonly checkRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Free text description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Whether to enable (the default) this origin within the Pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Default: 1.
     */
    readonly minimumOrigins?: pulumi.Input<number>;
    /**
     * The ID of the Monitor to use for health checking origins within this pool.
     */
    readonly monitor?: pulumi.Input<string>;
    /**
     * A human-identifiable name for the origin.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.
     */
    readonly notificationEmail?: pulumi.Input<string>;
    /**
     * The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. It's a complex value. See description below.
     */
    readonly origins: pulumi.Input<pulumi.Input<inputs.LoadBalancerPoolOrigin>[]>;
}
