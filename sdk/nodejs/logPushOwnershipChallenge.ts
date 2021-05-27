// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a resource which manages Cloudflare Logpush ownership challenges to use
 * in a Logpush Job. On it's own, doesn't do much however this resource should
 * be used in conjunction to create Logpush jobs.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const example = new cloudflare.LogPushOwnershipChallenge("example", {
 *     destinationConf: "s3://my-bucket-path?region=us-west-2",
 *     zoneId: "d41d8cd98f00b204e9800998ecf8427e",
 * });
 * ```
 */
export class LogPushOwnershipChallenge extends pulumi.CustomResource {
    /**
     * Get an existing LogPushOwnershipChallenge resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogPushOwnershipChallengeState, opts?: pulumi.CustomResourceOptions): LogPushOwnershipChallenge {
        return new LogPushOwnershipChallenge(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/logPushOwnershipChallenge:LogPushOwnershipChallenge';

    /**
     * Returns true if the given object is an instance of LogPushOwnershipChallenge.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogPushOwnershipChallenge {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogPushOwnershipChallenge.__pulumiType;
    }

    /**
     * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#destination).
     */
    public readonly destinationConf!: pulumi.Output<string>;
    /**
     * The filename of the ownership challenge which
     * contains the contents required for Logpush Job creation.
     */
    public /*out*/ readonly ownershipChallengeFilename!: pulumi.Output<string>;
    /**
     * The zone ID where the logpush ownership challenge should be created.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a LogPushOwnershipChallenge resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogPushOwnershipChallengeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogPushOwnershipChallengeArgs | LogPushOwnershipChallengeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogPushOwnershipChallengeState | undefined;
            inputs["destinationConf"] = state ? state.destinationConf : undefined;
            inputs["ownershipChallengeFilename"] = state ? state.ownershipChallengeFilename : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as LogPushOwnershipChallengeArgs | undefined;
            if ((!args || args.destinationConf === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationConf'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["destinationConf"] = args ? args.destinationConf : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
            inputs["ownershipChallengeFilename"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(LogPushOwnershipChallenge.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LogPushOwnershipChallenge resources.
 */
export interface LogPushOwnershipChallengeState {
    /**
     * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#destination).
     */
    destinationConf?: pulumi.Input<string>;
    /**
     * The filename of the ownership challenge which
     * contains the contents required for Logpush Job creation.
     */
    ownershipChallengeFilename?: pulumi.Input<string>;
    /**
     * The zone ID where the logpush ownership challenge should be created.
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogPushOwnershipChallenge resource.
 */
export interface LogPushOwnershipChallengeArgs {
    /**
     * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#destination).
     */
    destinationConf: pulumi.Input<string>;
    /**
     * The zone ID where the logpush ownership challenge should be created.
     */
    zoneId: pulumi.Input<string>;
}
