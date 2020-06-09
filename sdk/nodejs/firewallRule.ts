// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Define Firewall rules using filter expressions for more control over how traffic is matched to the rule.
 * A filter expression permits selecting traffic by multiple criteria allowing greater freedom in rule creation.
 *
 * Filter expressions needs to be created first before using Firewall Rule. See Filter.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const wordpressFilter = new cloudflare.Filter("wordpressFilter", {
 *     zoneId: "d41d8cd98f00b204e9800998ecf8427e",
 *     description: "Wordpress break-in attempts that are outside of the office",
 *     expression: "(http.request.uri.path ~ \".*wp-login.php\" or http.request.uri.path ~ \".*xmlrpc.php\") and ip.src ne 192.0.2.1",
 * });
 * const wordpressFirewallRule = new cloudflare.FirewallRule("wordpressFirewallRule", {
 *     zoneId: "d41d8cd98f00b204e9800998ecf8427e",
 *     description: "Block wordpress break-in attempts",
 *     filterId: wordpressFilter.id,
 *     action: "block",
 * });
 * ```
 */
export class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallRuleState, opts?: pulumi.CustomResourceOptions): FirewallRule {
        return new FirewallRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/firewallRule:FirewallRule';

    /**
     * Returns true if the given object is an instance of FirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallRule.__pulumiType;
    }

    /**
     * The action to apply to a matched request. Allowed values: "block", "challenge", "allow", "jsChallenge", "bypass". Enterprise plan also allows "log".
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * A description of the rule to help identify it.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly filterId!: pulumi.Output<string>;
    /**
     * Whether this filter based firewall rule is currently paused. Boolean value.
     */
    public readonly paused!: pulumi.Output<boolean | undefined>;
    /**
     * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided, any rules with a priority will be sequenced before those without.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * List of products to bypass for a request when the bypass action is used. Allowed values: "zoneLockdown", "uaBlock", "bic", "hot", "securityLevel", "rateLimit", "waf".
     */
    public readonly products!: pulumi.Output<string[] | undefined>;
    /**
     * The DNS zone to which the Filter should be added.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallRuleArgs | FirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FirewallRuleState | undefined;
            inputs["action"] = state ? state.action : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["filterId"] = state ? state.filterId : undefined;
            inputs["paused"] = state ? state.paused : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["products"] = state ? state.products : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as FirewallRuleArgs | undefined;
            if (!args || args.action === undefined) {
                throw new Error("Missing required property 'action'");
            }
            if (!args || args.filterId === undefined) {
                throw new Error("Missing required property 'filterId'");
            }
            if (!args || args.zoneId === undefined) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["filterId"] = args ? args.filterId : undefined;
            inputs["paused"] = args ? args.paused : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["products"] = args ? args.products : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(FirewallRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FirewallRule resources.
 */
export interface FirewallRuleState {
    /**
     * The action to apply to a matched request. Allowed values: "block", "challenge", "allow", "jsChallenge", "bypass". Enterprise plan also allows "log".
     */
    readonly action?: pulumi.Input<string>;
    /**
     * A description of the rule to help identify it.
     */
    readonly description?: pulumi.Input<string>;
    readonly filterId?: pulumi.Input<string>;
    /**
     * Whether this filter based firewall rule is currently paused. Boolean value.
     */
    readonly paused?: pulumi.Input<boolean>;
    /**
     * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided, any rules with a priority will be sequenced before those without.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * List of products to bypass for a request when the bypass action is used. Allowed values: "zoneLockdown", "uaBlock", "bic", "hot", "securityLevel", "rateLimit", "waf".
     */
    readonly products?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DNS zone to which the Filter should be added.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The action to apply to a matched request. Allowed values: "block", "challenge", "allow", "jsChallenge", "bypass". Enterprise plan also allows "log".
     */
    readonly action: pulumi.Input<string>;
    /**
     * A description of the rule to help identify it.
     */
    readonly description?: pulumi.Input<string>;
    readonly filterId: pulumi.Input<string>;
    /**
     * Whether this filter based firewall rule is currently paused. Boolean value.
     */
    readonly paused?: pulumi.Input<boolean>;
    /**
     * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided, any rules with a priority will be sequenced before those without.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * List of products to bypass for a request when the bypass action is used. Allowed values: "zoneLockdown", "uaBlock", "bic", "hot", "securityLevel", "rateLimit", "waf".
     */
    readonly products?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DNS zone to which the Filter should be added.
     */
    readonly zoneId: pulumi.Input<string>;
}
