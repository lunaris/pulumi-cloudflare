// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Outputs
{

    [OutputType]
    public sealed class NotificationPolicyFilters
    {
        /// <summary>
        /// State of the pool to alert on.
        /// </summary>
        public readonly ImmutableArray<string> Enableds;
        /// <summary>
        /// Source configuration to alert on for pool or origin.
        /// </summary>
        public readonly ImmutableArray<string> EventSources;
        /// <summary>
        /// Stream event type to alert on.
        /// </summary>
        public readonly ImmutableArray<string> EventTypes;
        /// <summary>
        /// Identifier health check. Required when using `filters.0.status`.
        /// </summary>
        public readonly ImmutableArray<string> HealthCheckIds;
        /// <summary>
        /// Stream input id to alert on.
        /// </summary>
        public readonly ImmutableArray<string> InputIds;
        /// <summary>
        /// A numerical limit. Example: `100`.
        /// </summary>
        public readonly ImmutableArray<string> Limits;
        /// <summary>
        /// Health status to alert on for pool or origin.
        /// </summary>
        public readonly ImmutableArray<string> NewHealths;
        /// <summary>
        /// Packets per second threshold for dos alert.
        /// </summary>
        public readonly ImmutableArray<string> PacketsPerSeconds;
        /// <summary>
        /// Load balancer pool identifier.
        /// </summary>
        public readonly ImmutableArray<string> PoolIds;
        /// <summary>
        /// Product name. Available values: `worker_requests`, `worker_durable_objects_requests`, `worker_durable_objects_duration`, `worker_durable_objects_data_transfer`, `worker_durable_objects_stored_data`, `worker_durable_objects_storage_deletes`, `worker_durable_objects_storage_writes`, `worker_durable_objects_storage_reads`.
        /// </summary>
        public readonly ImmutableArray<string> Products;
        /// <summary>
        /// Protocol to alert on for dos.
        /// </summary>
        public readonly ImmutableArray<string> Protocols;
        /// <summary>
        /// Requests per second threshold for dos alert.
        /// </summary>
        public readonly ImmutableArray<string> RequestsPerSeconds;
        public readonly ImmutableArray<string> Services;
        /// <summary>
        /// A numerical limit. Example: `99.9`.
        /// </summary>
        public readonly ImmutableArray<string> Slos;
        /// <summary>
        /// Status to alert on.
        /// </summary>
        public readonly ImmutableArray<string> Statuses;
        /// <summary>
        /// Target host to alert on for dos.
        /// </summary>
        public readonly ImmutableArray<string> TargetHosts;
        /// <summary>
        /// Target domain to alert on.
        /// </summary>
        public readonly ImmutableArray<string> TargetZoneNames;
        /// <summary>
        /// A list of zone identifiers.
        /// </summary>
        public readonly ImmutableArray<string> Zones;

        [OutputConstructor]
        private NotificationPolicyFilters(
            ImmutableArray<string> enableds,

            ImmutableArray<string> eventSources,

            ImmutableArray<string> eventTypes,

            ImmutableArray<string> healthCheckIds,

            ImmutableArray<string> inputIds,

            ImmutableArray<string> limits,

            ImmutableArray<string> newHealths,

            ImmutableArray<string> packetsPerSeconds,

            ImmutableArray<string> poolIds,

            ImmutableArray<string> products,

            ImmutableArray<string> protocols,

            ImmutableArray<string> requestsPerSeconds,

            ImmutableArray<string> services,

            ImmutableArray<string> slos,

            ImmutableArray<string> statuses,

            ImmutableArray<string> targetHosts,

            ImmutableArray<string> targetZoneNames,

            ImmutableArray<string> zones)
        {
            Enableds = enableds;
            EventSources = eventSources;
            EventTypes = eventTypes;
            HealthCheckIds = healthCheckIds;
            InputIds = inputIds;
            Limits = limits;
            NewHealths = newHealths;
            PacketsPerSeconds = packetsPerSeconds;
            PoolIds = poolIds;
            Products = products;
            Protocols = protocols;
            RequestsPerSeconds = requestsPerSeconds;
            Services = services;
            Slos = slos;
            Statuses = statuses;
            TargetHosts = targetHosts;
            TargetZoneNames = targetZoneNames;
            Zones = zones;
        }
    }
}
