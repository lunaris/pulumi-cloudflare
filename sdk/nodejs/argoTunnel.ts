// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Argo Tunnel exposes applications running on your local web server on any network with an internet connection without manually adding DNS records or configuring a firewall or router.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const example = new cloudflare.ArgoTunnel("example", {
 *     accountId: "d41d8cd98f00b204e9800998ecf8427e",
 *     name: "my-tunnel",
 *     secret: "AQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIAQIDBAUGBwg=",
 * });
 * ```
 *
 * ## Import
 *
 * Argo Tunnels can be imported a composite ID of the account ID and tunnel UUID.
 *
 * ```sh
 *  $ pulumi import cloudflare:index/argoTunnel:ArgoTunnel example d41d8cd98f00b204e9800998ecf8427e/fd2455cb-5fcc-4c13-8738-8d8d2605237f
 * ```
 *
 *  where - `d41d8cd98f00b204e9800998ecf8427e` is the account ID - `fd2455cb-5fcc-4c13-8738-8d8d2605237f` is the Argo Tunnel UUID
 */
export class ArgoTunnel extends pulumi.CustomResource {
    /**
     * Get an existing ArgoTunnel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArgoTunnelState, opts?: pulumi.CustomResourceOptions): ArgoTunnel {
        return new ArgoTunnel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/argoTunnel:ArgoTunnel';

    /**
     * Returns true if the given object is an instance of ArgoTunnel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArgoTunnel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArgoTunnel.__pulumiType;
    }

    /**
     * The Cloudflare account ID that you wish to manage the Argo Tunnel on.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * Usable CNAME for accessing the Argo Tunnel.
     */
    public /*out*/ readonly cname!: pulumi.Output<string>;
    /**
     * A user-friendly name chosen when the tunnel is created. Cannot be empty.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
     */
    public readonly secret!: pulumi.Output<string>;
    /**
     * Token used by a connector to authenticate and run the tunnel.
     */
    public /*out*/ readonly tunnelToken!: pulumi.Output<string>;

    /**
     * Create a ArgoTunnel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArgoTunnelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArgoTunnelArgs | ArgoTunnelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ArgoTunnelState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["cname"] = state ? state.cname : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["tunnelToken"] = state ? state.tunnelToken : undefined;
        } else {
            const args = argsOrState as ArgoTunnelArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.secret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secret'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["cname"] = undefined /*out*/;
            resourceInputs["tunnelToken"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ArgoTunnel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ArgoTunnel resources.
 */
export interface ArgoTunnelState {
    /**
     * The Cloudflare account ID that you wish to manage the Argo Tunnel on.
     */
    accountId?: pulumi.Input<string>;
    /**
     * Usable CNAME for accessing the Argo Tunnel.
     */
    cname?: pulumi.Input<string>;
    /**
     * A user-friendly name chosen when the tunnel is created. Cannot be empty.
     */
    name?: pulumi.Input<string>;
    /**
     * 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
     */
    secret?: pulumi.Input<string>;
    /**
     * Token used by a connector to authenticate and run the tunnel.
     */
    tunnelToken?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ArgoTunnel resource.
 */
export interface ArgoTunnelArgs {
    /**
     * The Cloudflare account ID that you wish to manage the Argo Tunnel on.
     */
    accountId: pulumi.Input<string>;
    /**
     * A user-friendly name chosen when the tunnel is created. Cannot be empty.
     */
    name: pulumi.Input<string>;
    /**
     * 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
     */
    secret: pulumi.Input<string>;
}
