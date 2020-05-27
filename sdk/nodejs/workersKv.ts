// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a Workers KV Pair.  *NOTE:*  This resource uses the Cloudflare account APIs.  This requires setting the `CLOUDFLARE_ACCOUNT_ID` environment variable or `accountId` provider argument.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const exampleNs = new cloudflare.WorkersKvNamespace("exampleNs", {title: "test-namespace"});
 * const example = new cloudflare.WorkersKv("example", {
 *     namespaceId: exampleNs.id,
 *     key: "test-key",
 *     value: "test value",
 * });
 * ```
 */
export class WorkersKv extends pulumi.CustomResource {
    /**
     * Get an existing WorkersKv resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkersKvState, opts?: pulumi.CustomResourceOptions): WorkersKv {
        return new WorkersKv(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/workersKv:WorkersKv';

    /**
     * Returns true if the given object is an instance of WorkersKv.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkersKv {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkersKv.__pulumiType;
    }

    /**
     * The key name
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * The ID of the Workers KV namespace in which you want to create the KV pair
     */
    public readonly namespaceId!: pulumi.Output<string>;
    /**
     * The string value to be stored in the key
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a WorkersKv resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkersKvArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkersKvArgs | WorkersKvState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as WorkersKvState | undefined;
            inputs["key"] = state ? state.key : undefined;
            inputs["namespaceId"] = state ? state.namespaceId : undefined;
            inputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as WorkersKvArgs | undefined;
            if (!args || args.key === undefined) {
                throw new Error("Missing required property 'key'");
            }
            if (!args || args.namespaceId === undefined) {
                throw new Error("Missing required property 'namespaceId'");
            }
            if (!args || args.value === undefined) {
                throw new Error("Missing required property 'value'");
            }
            inputs["key"] = args ? args.key : undefined;
            inputs["namespaceId"] = args ? args.namespaceId : undefined;
            inputs["value"] = args ? args.value : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(WorkersKv.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WorkersKv resources.
 */
export interface WorkersKvState {
    /**
     * The key name
     */
    readonly key?: pulumi.Input<string>;
    /**
     * The ID of the Workers KV namespace in which you want to create the KV pair
     */
    readonly namespaceId?: pulumi.Input<string>;
    /**
     * The string value to be stored in the key
     */
    readonly value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkersKv resource.
 */
export interface WorkersKvArgs {
    /**
     * The key name
     */
    readonly key: pulumi.Input<string>;
    /**
     * The ID of the Workers KV namespace in which you want to create the KV pair
     */
    readonly namespaceId: pulumi.Input<string>;
    /**
     * The string value to be stored in the key
     */
    readonly value: pulumi.Input<string>;
}
