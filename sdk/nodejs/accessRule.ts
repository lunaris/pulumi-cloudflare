// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare IP Firewall Access Rule resource. Access control can be applied on basis of IP addresses, IP ranges, AS numbers or countries.
 */
export class AccessRule extends pulumi.CustomResource {
    /**
     * Get an existing AccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessRuleState, opts?: pulumi.CustomResourceOptions): AccessRule {
        return new AccessRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/accessRule:AccessRule';

    /**
     * Returns true if the given object is an instance of AccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessRule.__pulumiType;
    }

    /**
     * Rule configuration to apply to a matched request. It's a complex value. See description below.
     */
    public readonly configuration!: pulumi.Output<outputs.AccessRuleConfiguration>;
    /**
     * The action to apply to a matched request. Allowed values: "block", "challenge", "whitelist", "jsChallenge"
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * A personal note about the rule. Typically used as a reminder or explanation for the rule.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The DNS zone to which the access rule should be added.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a AccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessRuleArgs | AccessRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AccessRuleState | undefined;
            inputs["configuration"] = state ? state.configuration : undefined;
            inputs["mode"] = state ? state.mode : undefined;
            inputs["notes"] = state ? state.notes : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as AccessRuleArgs | undefined;
            if (!args || args.configuration === undefined) {
                throw new Error("Missing required property 'configuration'");
            }
            if (!args || args.mode === undefined) {
                throw new Error("Missing required property 'mode'");
            }
            inputs["configuration"] = args ? args.configuration : undefined;
            inputs["mode"] = args ? args.mode : undefined;
            inputs["notes"] = args ? args.notes : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AccessRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AccessRule resources.
 */
export interface AccessRuleState {
    /**
     * Rule configuration to apply to a matched request. It's a complex value. See description below.
     */
    readonly configuration?: pulumi.Input<inputs.AccessRuleConfiguration>;
    /**
     * The action to apply to a matched request. Allowed values: "block", "challenge", "whitelist", "jsChallenge"
     */
    readonly mode?: pulumi.Input<string>;
    /**
     * A personal note about the rule. Typically used as a reminder or explanation for the rule.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The DNS zone to which the access rule should be added.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccessRule resource.
 */
export interface AccessRuleArgs {
    /**
     * Rule configuration to apply to a matched request. It's a complex value. See description below.
     */
    readonly configuration: pulumi.Input<inputs.AccessRuleConfiguration>;
    /**
     * The action to apply to a matched request. Allowed values: "block", "challenge", "whitelist", "jsChallenge"
     */
    readonly mode: pulumi.Input<string>;
    /**
     * A personal note about the rule. Typically used as a reminder or explanation for the rule.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The DNS zone to which the access rule should be added.
     */
    readonly zoneId?: pulumi.Input<string>;
}
