// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Provides a resource, that manages a notification policy for Cloudflare's products. The delivery
 * mechanisms supported are email, webhooks, and PagerDuty.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const example = new cloudflare.NotificationPolicy("example", {
 *     accountId: "c4a7362d577a6c3019a474fd6f485821",
 *     alertType: "universal_ssl_event_type",
 *     description: "Notification policy to alert when my SSL certificates are modified",
 *     emailIntegrations: [{
 *         id: "myemail@example.com",
 *     }],
 *     enabled: true,
 *     name: "Policy for SSL notification events",
 *     pagerdutyIntegrations: [{
 *         id: "850129d136459401860572c5d964d27k",
 *     }],
 *     webhooksIntegrations: [{
 *         id: "1860572c5d964d27aa0f379d13645940",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * An existing notification policy can be imported using the account ID and the policy ID
 *
 * ```sh
 *  $ pulumi import cloudflare:index/notificationPolicy:NotificationPolicy example 72c379d136459405d964d27aa0f18605/c4a7362d577a6c3019a474fd6f485821
 * ```
 */
export class NotificationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing NotificationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationPolicyState, opts?: pulumi.CustomResourceOptions): NotificationPolicy {
        return new NotificationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/notificationPolicy:NotificationPolicy';

    /**
     * Returns true if the given object is an instance of NotificationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationPolicy.__pulumiType;
    }

    /**
     * The ID of the account for which the notification policy has to be created.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * The event type that will trigger the dispatch of a notification.
     */
    public readonly alertType!: pulumi.Output<string>;
    public readonly conditions!: pulumi.Output<{[key: string]: any} | undefined>;
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Description of the notification policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The email id to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    public readonly emailIntegrations!: pulumi.Output<outputs.NotificationPolicyEmailIntegration[] | undefined>;
    /**
     * The status of the notification policy, a boolean value.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Optional filterable items for a policy.
     */
    public readonly filters!: pulumi.Output<{[key: string]: any[]} | undefined>;
    public /*out*/ readonly modified!: pulumi.Output<string>;
    /**
     * The name of the notification policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The unique id of a configured pagerduty endpoint to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    public readonly pagerdutyIntegrations!: pulumi.Output<outputs.NotificationPolicyPagerdutyIntegration[] | undefined>;
    /**
     * The unique id of a configured webhooks endpoint to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    public readonly webhooksIntegrations!: pulumi.Output<outputs.NotificationPolicyWebhooksIntegration[] | undefined>;

    /**
     * Create a NotificationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationPolicyArgs | NotificationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationPolicyState | undefined;
            inputs["accountId"] = state ? state.accountId : undefined;
            inputs["alertType"] = state ? state.alertType : undefined;
            inputs["conditions"] = state ? state.conditions : undefined;
            inputs["created"] = state ? state.created : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["emailIntegrations"] = state ? state.emailIntegrations : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["filters"] = state ? state.filters : undefined;
            inputs["modified"] = state ? state.modified : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pagerdutyIntegrations"] = state ? state.pagerdutyIntegrations : undefined;
            inputs["webhooksIntegrations"] = state ? state.webhooksIntegrations : undefined;
        } else {
            const args = argsOrState as NotificationPolicyArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.alertType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertType'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            inputs["accountId"] = args ? args.accountId : undefined;
            inputs["alertType"] = args ? args.alertType : undefined;
            inputs["conditions"] = args ? args.conditions : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["emailIntegrations"] = args ? args.emailIntegrations : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["filters"] = args ? args.filters : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pagerdutyIntegrations"] = args ? args.pagerdutyIntegrations : undefined;
            inputs["webhooksIntegrations"] = args ? args.webhooksIntegrations : undefined;
            inputs["created"] = undefined /*out*/;
            inputs["modified"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(NotificationPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationPolicy resources.
 */
export interface NotificationPolicyState {
    /**
     * The ID of the account for which the notification policy has to be created.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The event type that will trigger the dispatch of a notification.
     */
    alertType?: pulumi.Input<string>;
    conditions?: pulumi.Input<{[key: string]: any}>;
    created?: pulumi.Input<string>;
    /**
     * Description of the notification policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The email id to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    emailIntegrations?: pulumi.Input<pulumi.Input<inputs.NotificationPolicyEmailIntegration>[]>;
    /**
     * The status of the notification policy, a boolean value.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Optional filterable items for a policy.
     */
    filters?: pulumi.Input<{[key: string]: pulumi.Input<any[]>}>;
    modified?: pulumi.Input<string>;
    /**
     * The name of the notification policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The unique id of a configured pagerduty endpoint to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    pagerdutyIntegrations?: pulumi.Input<pulumi.Input<inputs.NotificationPolicyPagerdutyIntegration>[]>;
    /**
     * The unique id of a configured webhooks endpoint to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    webhooksIntegrations?: pulumi.Input<pulumi.Input<inputs.NotificationPolicyWebhooksIntegration>[]>;
}

/**
 * The set of arguments for constructing a NotificationPolicy resource.
 */
export interface NotificationPolicyArgs {
    /**
     * The ID of the account for which the notification policy has to be created.
     */
    accountId: pulumi.Input<string>;
    /**
     * The event type that will trigger the dispatch of a notification.
     */
    alertType: pulumi.Input<string>;
    conditions?: pulumi.Input<{[key: string]: any}>;
    /**
     * Description of the notification policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The email id to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    emailIntegrations?: pulumi.Input<pulumi.Input<inputs.NotificationPolicyEmailIntegration>[]>;
    /**
     * The status of the notification policy, a boolean value.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Optional filterable items for a policy.
     */
    filters?: pulumi.Input<{[key: string]: pulumi.Input<any[]>}>;
    /**
     * The name of the notification policy.
     */
    name: pulumi.Input<string>;
    /**
     * The unique id of a configured pagerduty endpoint to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    pagerdutyIntegrations?: pulumi.Input<pulumi.Input<inputs.NotificationPolicyPagerdutyIntegration>[]>;
    /**
     * The unique id of a configured webhooks endpoint to which the notification should be dispatched. One of email, webhooks, or PagerDuty mechanisms is required.
     */
    webhooksIntegrations?: pulumi.Input<pulumi.Input<inputs.NotificationPolicyWebhooksIntegration>[]>;
}
