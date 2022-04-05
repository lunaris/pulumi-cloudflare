// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare Waiting Room Event resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 *
 * const example = new cloudflare.WaitingRoomVent("example", {
 *     eventEndTime: "2006-01-02T20:04:05Z",
 *     eventStartTime: "2006-01-02T15:04:05Z",
 *     name: "foo",
 *     waitingRoomId: "d41d8cd98f00b204e9800998ecf8427e",
 *     zoneId: "ae36f999674d196762efcc5abb06b345",
 * });
 * ```
 *
 * ## Import
 *
 * Waiting room events can be imported using a composite ID formed of zone ID, waiting room ID, and waiting room event ID, e.g.
 *
 * ```sh
 *  $ pulumi import cloudflare:index/waitingRoomEvent:WaitingRoomEvent default ae36f999674d196762efcc5abb06b345/d41d8cd98f00b204e9800998ecf8427e/25756b2dfe6e378a06b033b670413757
 * ```
 *
 *  where* `ae36f999674d196762efcc5abb06b345` - the zone ID * `d41d8cd98f00b204e9800998ecf8427e` - waiting room ID as returned by [API](https://api.cloudflare.com/#waiting-room-list-waiting-rooms) * `25756b2dfe6e378a06b033b670413757` - waiting room event ID as returned by [API](https://api.cloudflare.com/#waiting-room-list-events)
 */
export class WaitingRoomEvent extends pulumi.CustomResource {
    /**
     * Get an existing WaitingRoomEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WaitingRoomEventState, opts?: pulumi.CustomResourceOptions): WaitingRoomEvent {
        return new WaitingRoomEvent(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/waitingRoomEvent:WaitingRoomEvent';

    /**
     * Returns true if the given object is an instance of WaitingRoomEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WaitingRoomEvent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WaitingRoomEvent.__pulumiType;
    }

    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * This a templated html file that will be rendered at the edge.
     */
    public readonly customPageHtml!: pulumi.Output<string | undefined>;
    /**
     * A description to let users add more details about the waiting room event.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Disables automatic renewal of session cookies. If not specified, the event will inherit it from the waiting room.
     */
    public readonly disableSessionRenewal!: pulumi.Output<boolean | undefined>;
    /**
     * ISO 8601 timestamp that marks the end of the event.
     */
    public readonly eventEndTime!: pulumi.Output<string>;
    /**
     * ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. Must occur at least 1 minute before event_end_time.
     */
    public readonly eventStartTime!: pulumi.Output<string>;
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * A unique name to identify the event. Only alphanumeric characters, hyphens, and underscores are allowed.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The number of new users that will be let into the route every minute.
     */
    public readonly newUsersPerMinute!: pulumi.Output<number | undefined>;
    /**
     * ISO 8601 timestamp that marks when to begin queueing all users before the event starts. Must occur at least 5 minutes before event_start_time.
     */
    public readonly prequeueStartTime!: pulumi.Output<string | undefined>;
    /**
     * The queueing method to be used by the waiting room during the event. If not specified, the event will inherit it from the waiting room.
     */
    public readonly queueingMethod!: pulumi.Output<string | undefined>;
    /**
     * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. Default: 5
     */
    public readonly sessionDuration!: pulumi.Output<number | undefined>;
    /**
     * Users in the prequeue will be shuffled randomly at the `eventStartTime`. Requires that `prequeueStartTime` is not null. Default: false.
     */
    public readonly shuffleAtEventStart!: pulumi.Output<boolean | undefined>;
    /**
     * If suspended, the traffic doesn't go to the waiting room. Default: false.
     */
    public readonly suspended!: pulumi.Output<boolean | undefined>;
    /**
     * The total number of active user sessions on the route at a point in time.
     */
    public readonly totalActiveUsers!: pulumi.Output<number | undefined>;
    /**
     * The Waiting Room ID the event should apply to.
     */
    public readonly waitingRoomId!: pulumi.Output<string>;
    /**
     * The zone ID to apply to.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a WaitingRoomEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WaitingRoomEventArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WaitingRoomEventArgs | WaitingRoomEventState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WaitingRoomEventState | undefined;
            resourceInputs["createdOn"] = state ? state.createdOn : undefined;
            resourceInputs["customPageHtml"] = state ? state.customPageHtml : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableSessionRenewal"] = state ? state.disableSessionRenewal : undefined;
            resourceInputs["eventEndTime"] = state ? state.eventEndTime : undefined;
            resourceInputs["eventStartTime"] = state ? state.eventStartTime : undefined;
            resourceInputs["modifiedOn"] = state ? state.modifiedOn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["newUsersPerMinute"] = state ? state.newUsersPerMinute : undefined;
            resourceInputs["prequeueStartTime"] = state ? state.prequeueStartTime : undefined;
            resourceInputs["queueingMethod"] = state ? state.queueingMethod : undefined;
            resourceInputs["sessionDuration"] = state ? state.sessionDuration : undefined;
            resourceInputs["shuffleAtEventStart"] = state ? state.shuffleAtEventStart : undefined;
            resourceInputs["suspended"] = state ? state.suspended : undefined;
            resourceInputs["totalActiveUsers"] = state ? state.totalActiveUsers : undefined;
            resourceInputs["waitingRoomId"] = state ? state.waitingRoomId : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as WaitingRoomEventArgs | undefined;
            if ((!args || args.eventEndTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventEndTime'");
            }
            if ((!args || args.eventStartTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventStartTime'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.waitingRoomId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'waitingRoomId'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["customPageHtml"] = args ? args.customPageHtml : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableSessionRenewal"] = args ? args.disableSessionRenewal : undefined;
            resourceInputs["eventEndTime"] = args ? args.eventEndTime : undefined;
            resourceInputs["eventStartTime"] = args ? args.eventStartTime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["newUsersPerMinute"] = args ? args.newUsersPerMinute : undefined;
            resourceInputs["prequeueStartTime"] = args ? args.prequeueStartTime : undefined;
            resourceInputs["queueingMethod"] = args ? args.queueingMethod : undefined;
            resourceInputs["sessionDuration"] = args ? args.sessionDuration : undefined;
            resourceInputs["shuffleAtEventStart"] = args ? args.shuffleAtEventStart : undefined;
            resourceInputs["suspended"] = args ? args.suspended : undefined;
            resourceInputs["totalActiveUsers"] = args ? args.totalActiveUsers : undefined;
            resourceInputs["waitingRoomId"] = args ? args.waitingRoomId : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WaitingRoomEvent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WaitingRoomEvent resources.
 */
export interface WaitingRoomEventState {
    createdOn?: pulumi.Input<string>;
    /**
     * This a templated html file that will be rendered at the edge.
     */
    customPageHtml?: pulumi.Input<string>;
    /**
     * A description to let users add more details about the waiting room event.
     */
    description?: pulumi.Input<string>;
    /**
     * Disables automatic renewal of session cookies. If not specified, the event will inherit it from the waiting room.
     */
    disableSessionRenewal?: pulumi.Input<boolean>;
    /**
     * ISO 8601 timestamp that marks the end of the event.
     */
    eventEndTime?: pulumi.Input<string>;
    /**
     * ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. Must occur at least 1 minute before event_end_time.
     */
    eventStartTime?: pulumi.Input<string>;
    modifiedOn?: pulumi.Input<string>;
    /**
     * A unique name to identify the event. Only alphanumeric characters, hyphens, and underscores are allowed.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of new users that will be let into the route every minute.
     */
    newUsersPerMinute?: pulumi.Input<number>;
    /**
     * ISO 8601 timestamp that marks when to begin queueing all users before the event starts. Must occur at least 5 minutes before event_start_time.
     */
    prequeueStartTime?: pulumi.Input<string>;
    /**
     * The queueing method to be used by the waiting room during the event. If not specified, the event will inherit it from the waiting room.
     */
    queueingMethod?: pulumi.Input<string>;
    /**
     * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. Default: 5
     */
    sessionDuration?: pulumi.Input<number>;
    /**
     * Users in the prequeue will be shuffled randomly at the `eventStartTime`. Requires that `prequeueStartTime` is not null. Default: false.
     */
    shuffleAtEventStart?: pulumi.Input<boolean>;
    /**
     * If suspended, the traffic doesn't go to the waiting room. Default: false.
     */
    suspended?: pulumi.Input<boolean>;
    /**
     * The total number of active user sessions on the route at a point in time.
     */
    totalActiveUsers?: pulumi.Input<number>;
    /**
     * The Waiting Room ID the event should apply to.
     */
    waitingRoomId?: pulumi.Input<string>;
    /**
     * The zone ID to apply to.
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WaitingRoomEvent resource.
 */
export interface WaitingRoomEventArgs {
    /**
     * This a templated html file that will be rendered at the edge.
     */
    customPageHtml?: pulumi.Input<string>;
    /**
     * A description to let users add more details about the waiting room event.
     */
    description?: pulumi.Input<string>;
    /**
     * Disables automatic renewal of session cookies. If not specified, the event will inherit it from the waiting room.
     */
    disableSessionRenewal?: pulumi.Input<boolean>;
    /**
     * ISO 8601 timestamp that marks the end of the event.
     */
    eventEndTime: pulumi.Input<string>;
    /**
     * ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. Must occur at least 1 minute before event_end_time.
     */
    eventStartTime: pulumi.Input<string>;
    /**
     * A unique name to identify the event. Only alphanumeric characters, hyphens, and underscores are allowed.
     */
    name: pulumi.Input<string>;
    /**
     * The number of new users that will be let into the route every minute.
     */
    newUsersPerMinute?: pulumi.Input<number>;
    /**
     * ISO 8601 timestamp that marks when to begin queueing all users before the event starts. Must occur at least 5 minutes before event_start_time.
     */
    prequeueStartTime?: pulumi.Input<string>;
    /**
     * The queueing method to be used by the waiting room during the event. If not specified, the event will inherit it from the waiting room.
     */
    queueingMethod?: pulumi.Input<string>;
    /**
     * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. Default: 5
     */
    sessionDuration?: pulumi.Input<number>;
    /**
     * Users in the prequeue will be shuffled randomly at the `eventStartTime`. Requires that `prequeueStartTime` is not null. Default: false.
     */
    shuffleAtEventStart?: pulumi.Input<boolean>;
    /**
     * If suspended, the traffic doesn't go to the waiting room. Default: false.
     */
    suspended?: pulumi.Input<boolean>;
    /**
     * The total number of active user sessions on the route at a point in time.
     */
    totalActiveUsers?: pulumi.Input<number>;
    /**
     * The Waiting Room ID the event should apply to.
     */
    waitingRoomId: pulumi.Input<string>;
    /**
     * The zone ID to apply to.
     */
    zoneId: pulumi.Input<string>;
}
