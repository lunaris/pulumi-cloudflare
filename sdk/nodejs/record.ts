// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare record resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * // Add a record to the domain
 * const foobar = new cloudflare.Record("foobar", {
 *     zoneId: _var.cloudflare_zone_id,
 *     name: "example",
 *     value: "192.168.0.11",
 *     type: "A",
 *     ttl: 3600,
 * });
 * // Add a record requiring a data map
 * const _sipTls = new cloudflare.Record("_sipTls", {
 *     zoneId: _var.cloudflare_zone_id,
 *     name: "_sip._tls",
 *     type: "SRV",
 *     data: {
 *         service: "_sip",
 *         proto: "_tls",
 *         name: "example-srv",
 *         priority: 0,
 *         weight: 0,
 *         port: 443,
 *         target: "example.com",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Records can be imported using a composite ID formed of zone ID and record ID, e.g.
 *
 * ```sh
 *  $ pulumi import cloudflare:index/record:Record default ae36f999674d196762efcc5abb06b345/d41d8cd98f00b204e9800998ecf8427e
 * ```
 *
 *  where- `ae36f999674d196762efcc5abb06b345` - the zone ID - `d41d8cd98f00b204e9800998ecf8427e` - record ID as returned by [API](https://api.cloudflare.com/#dns-records-for-a-zone-list-dns-records)
 */
export class Record extends pulumi.CustomResource {
    /**
     * Get an existing Record resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecordState, opts?: pulumi.CustomResourceOptions): Record {
        return new Record(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/record:Record';

    /**
     * Returns true if the given object is an instance of Record.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Record {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Record.__pulumiType;
    }

    public readonly allowOverwrite!: pulumi.Output<boolean | undefined>;
    /**
     * The RFC3339 timestamp of when the record was created
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
     */
    public readonly data!: pulumi.Output<outputs.RecordData | undefined>;
    /**
     * The FQDN of the record
     */
    public /*out*/ readonly hostname!: pulumi.Output<string>;
    /**
     * A key-value map of string metadata Cloudflare associates with the record
     */
    public /*out*/ readonly metadata!: pulumi.Output<{[key: string]: any}>;
    /**
     * The RFC3339 timestamp of when the record was last modified
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * The name of the record
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The priority of the record
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Shows whether this record can be proxied, must be true if setting `proxied=true`
     */
    public /*out*/ readonly proxiable!: pulumi.Output<boolean>;
    /**
     * Whether the record gets Cloudflare's origin protection; defaults to `false`.
     */
    public readonly proxied!: pulumi.Output<boolean | undefined>;
    /**
     * The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
     */
    public readonly ttl!: pulumi.Output<number>;
    /**
     * The type of the record
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The (string) value of the record. Either this or `data` must be specified
     */
    public readonly value!: pulumi.Output<string>;
    /**
     * The DNS zone ID to add the record to
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a Record resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecordArgs | RecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RecordState | undefined;
            resourceInputs["allowOverwrite"] = state ? state.allowOverwrite : undefined;
            resourceInputs["createdOn"] = state ? state.createdOn : undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["modifiedOn"] = state ? state.modifiedOn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["proxiable"] = state ? state.proxiable : undefined;
            resourceInputs["proxied"] = state ? state.proxied : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as RecordArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["allowOverwrite"] = args ? args.allowOverwrite : undefined;
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["proxied"] = args ? args.proxied : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["proxiable"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Record.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Record resources.
 */
export interface RecordState {
    allowOverwrite?: pulumi.Input<boolean>;
    /**
     * The RFC3339 timestamp of when the record was created
     */
    createdOn?: pulumi.Input<string>;
    /**
     * Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
     */
    data?: pulumi.Input<inputs.RecordData>;
    /**
     * The FQDN of the record
     */
    hostname?: pulumi.Input<string>;
    /**
     * A key-value map of string metadata Cloudflare associates with the record
     */
    metadata?: pulumi.Input<{[key: string]: any}>;
    /**
     * The RFC3339 timestamp of when the record was last modified
     */
    modifiedOn?: pulumi.Input<string>;
    /**
     * The name of the record
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of the record
     */
    priority?: pulumi.Input<number>;
    /**
     * Shows whether this record can be proxied, must be true if setting `proxied=true`
     */
    proxiable?: pulumi.Input<boolean>;
    /**
     * Whether the record gets Cloudflare's origin protection; defaults to `false`.
     */
    proxied?: pulumi.Input<boolean>;
    /**
     * The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
     */
    ttl?: pulumi.Input<number>;
    /**
     * The type of the record
     */
    type?: pulumi.Input<string>;
    /**
     * The (string) value of the record. Either this or `data` must be specified
     */
    value?: pulumi.Input<string>;
    /**
     * The DNS zone ID to add the record to
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Record resource.
 */
export interface RecordArgs {
    allowOverwrite?: pulumi.Input<boolean>;
    /**
     * Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
     */
    data?: pulumi.Input<inputs.RecordData>;
    /**
     * The name of the record
     */
    name: pulumi.Input<string>;
    /**
     * The priority of the record
     */
    priority?: pulumi.Input<number>;
    /**
     * Whether the record gets Cloudflare's origin protection; defaults to `false`.
     */
    proxied?: pulumi.Input<boolean>;
    /**
     * The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
     */
    ttl?: pulumi.Input<number>;
    /**
     * The type of the record
     */
    type: pulumi.Input<string>;
    /**
     * The (string) value of the record. Either this or `data` must be specified
     */
    value?: pulumi.Input<string>;
    /**
     * The DNS zone ID to add the record to
     */
    zoneId: pulumi.Input<string>;
}
