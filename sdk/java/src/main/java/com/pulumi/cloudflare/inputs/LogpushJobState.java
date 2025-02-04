// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.inputs;

import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import java.lang.Boolean;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


public final class LogpushJobState extends com.pulumi.resources.ResourceArgs {

    public static final LogpushJobState Empty = new LogpushJobState();

    /**
     * The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
     * 
     */
    @Import(name="accountId")
    private @Nullable Output<String> accountId;

    /**
     * @return The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
     * 
     */
    public Optional<Output<String>> accountId() {
        return Optional.ofNullable(this.accountId);
    }

    /**
     * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination). Available values: `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`.
     * 
     */
    @Import(name="dataset")
    private @Nullable Output<String> dataset;

    /**
     * @return Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination). Available values: `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`.
     * 
     */
    public Optional<Output<String>> dataset() {
        return Optional.ofNullable(this.dataset);
    }

    /**
     * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).
     * 
     */
    @Import(name="destinationConf")
    private @Nullable Output<String> destinationConf;

    /**
     * @return Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).
     * 
     */
    public Optional<Output<String>> destinationConf() {
        return Optional.ofNullable(this.destinationConf);
    }

    /**
     * Whether to enable the job.
     * 
     */
    @Import(name="enabled")
    private @Nullable Output<Boolean> enabled;

    /**
     * @return Whether to enable the job.
     * 
     */
    public Optional<Output<Boolean>> enabled() {
        return Optional.ofNullable(this.enabled);
    }

    /**
     * Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).
     * 
     */
    @Import(name="filter")
    private @Nullable Output<String> filter;

    /**
     * @return Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).
     * 
     */
    public Optional<Output<String>> filter() {
        return Optional.ofNullable(this.filter);
    }

    /**
     * A higher frequency will result in logs being pushed on faster with smaller files. `low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.
     * 
     */
    @Import(name="frequency")
    private @Nullable Output<String> frequency;

    /**
     * @return A higher frequency will result in logs being pushed on faster with smaller files. `low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.
     * 
     */
    public Optional<Output<String>> frequency() {
        return Optional.ofNullable(this.frequency);
    }

    /**
     * The kind of logpush job to create. Available values: `edge`, `instant-logs`, `&#34;&#34;`.
     * 
     */
    @Import(name="kind")
    private @Nullable Output<String> kind;

    /**
     * @return The kind of logpush job to create. Available values: `edge`, `instant-logs`, `&#34;&#34;`.
     * 
     */
    public Optional<Output<String>> kind() {
        return Optional.ofNullable(this.kind);
    }

    /**
     * Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpull options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).
     * 
     */
    @Import(name="logpullOptions")
    private @Nullable Output<String> logpullOptions;

    /**
     * @return Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpull options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).
     * 
     */
    public Optional<Output<String>> logpullOptions() {
        return Optional.ofNullable(this.logpullOptions);
    }

    /**
     * The name of the logpush job to create.
     * 
     */
    @Import(name="name")
    private @Nullable Output<String> name;

    /**
     * @return The name of the logpush job to create.
     * 
     */
    public Optional<Output<String>> name() {
        return Optional.ofNullable(this.name);
    }

    /**
     * Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).
     * 
     */
    @Import(name="ownershipChallenge")
    private @Nullable Output<String> ownershipChallenge;

    /**
     * @return Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).
     * 
     */
    public Optional<Output<String>> ownershipChallenge() {
        return Optional.ofNullable(this.ownershipChallenge);
    }

    /**
     * The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
     * 
     */
    @Import(name="zoneId")
    private @Nullable Output<String> zoneId;

    /**
     * @return The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
     * 
     */
    public Optional<Output<String>> zoneId() {
        return Optional.ofNullable(this.zoneId);
    }

    private LogpushJobState() {}

    private LogpushJobState(LogpushJobState $) {
        this.accountId = $.accountId;
        this.dataset = $.dataset;
        this.destinationConf = $.destinationConf;
        this.enabled = $.enabled;
        this.filter = $.filter;
        this.frequency = $.frequency;
        this.kind = $.kind;
        this.logpullOptions = $.logpullOptions;
        this.name = $.name;
        this.ownershipChallenge = $.ownershipChallenge;
        this.zoneId = $.zoneId;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(LogpushJobState defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private LogpushJobState $;

        public Builder() {
            $ = new LogpushJobState();
        }

        public Builder(LogpushJobState defaults) {
            $ = new LogpushJobState(Objects.requireNonNull(defaults));
        }

        /**
         * @param accountId The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
         * 
         * @return builder
         * 
         */
        public Builder accountId(@Nullable Output<String> accountId) {
            $.accountId = accountId;
            return this;
        }

        /**
         * @param accountId The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
         * 
         * @return builder
         * 
         */
        public Builder accountId(String accountId) {
            return accountId(Output.of(accountId));
        }

        /**
         * @param dataset Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination). Available values: `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`.
         * 
         * @return builder
         * 
         */
        public Builder dataset(@Nullable Output<String> dataset) {
            $.dataset = dataset;
            return this;
        }

        /**
         * @param dataset Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination). Available values: `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`.
         * 
         * @return builder
         * 
         */
        public Builder dataset(String dataset) {
            return dataset(Output.of(dataset));
        }

        /**
         * @param destinationConf Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).
         * 
         * @return builder
         * 
         */
        public Builder destinationConf(@Nullable Output<String> destinationConf) {
            $.destinationConf = destinationConf;
            return this;
        }

        /**
         * @param destinationConf Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).
         * 
         * @return builder
         * 
         */
        public Builder destinationConf(String destinationConf) {
            return destinationConf(Output.of(destinationConf));
        }

        /**
         * @param enabled Whether to enable the job.
         * 
         * @return builder
         * 
         */
        public Builder enabled(@Nullable Output<Boolean> enabled) {
            $.enabled = enabled;
            return this;
        }

        /**
         * @param enabled Whether to enable the job.
         * 
         * @return builder
         * 
         */
        public Builder enabled(Boolean enabled) {
            return enabled(Output.of(enabled));
        }

        /**
         * @param filter Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).
         * 
         * @return builder
         * 
         */
        public Builder filter(@Nullable Output<String> filter) {
            $.filter = filter;
            return this;
        }

        /**
         * @param filter Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).
         * 
         * @return builder
         * 
         */
        public Builder filter(String filter) {
            return filter(Output.of(filter));
        }

        /**
         * @param frequency A higher frequency will result in logs being pushed on faster with smaller files. `low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.
         * 
         * @return builder
         * 
         */
        public Builder frequency(@Nullable Output<String> frequency) {
            $.frequency = frequency;
            return this;
        }

        /**
         * @param frequency A higher frequency will result in logs being pushed on faster with smaller files. `low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.
         * 
         * @return builder
         * 
         */
        public Builder frequency(String frequency) {
            return frequency(Output.of(frequency));
        }

        /**
         * @param kind The kind of logpush job to create. Available values: `edge`, `instant-logs`, `&#34;&#34;`.
         * 
         * @return builder
         * 
         */
        public Builder kind(@Nullable Output<String> kind) {
            $.kind = kind;
            return this;
        }

        /**
         * @param kind The kind of logpush job to create. Available values: `edge`, `instant-logs`, `&#34;&#34;`.
         * 
         * @return builder
         * 
         */
        public Builder kind(String kind) {
            return kind(Output.of(kind));
        }

        /**
         * @param logpullOptions Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpull options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).
         * 
         * @return builder
         * 
         */
        public Builder logpullOptions(@Nullable Output<String> logpullOptions) {
            $.logpullOptions = logpullOptions;
            return this;
        }

        /**
         * @param logpullOptions Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpull options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).
         * 
         * @return builder
         * 
         */
        public Builder logpullOptions(String logpullOptions) {
            return logpullOptions(Output.of(logpullOptions));
        }

        /**
         * @param name The name of the logpush job to create.
         * 
         * @return builder
         * 
         */
        public Builder name(@Nullable Output<String> name) {
            $.name = name;
            return this;
        }

        /**
         * @param name The name of the logpush job to create.
         * 
         * @return builder
         * 
         */
        public Builder name(String name) {
            return name(Output.of(name));
        }

        /**
         * @param ownershipChallenge Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).
         * 
         * @return builder
         * 
         */
        public Builder ownershipChallenge(@Nullable Output<String> ownershipChallenge) {
            $.ownershipChallenge = ownershipChallenge;
            return this;
        }

        /**
         * @param ownershipChallenge Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).
         * 
         * @return builder
         * 
         */
        public Builder ownershipChallenge(String ownershipChallenge) {
            return ownershipChallenge(Output.of(ownershipChallenge));
        }

        /**
         * @param zoneId The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
         * 
         * @return builder
         * 
         */
        public Builder zoneId(@Nullable Output<String> zoneId) {
            $.zoneId = zoneId;
            return this;
        }

        /**
         * @param zoneId The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.
         * 
         * @return builder
         * 
         */
        public Builder zoneId(String zoneId) {
            return zoneId(Output.of(zoneId));
        }

        public LogpushJobState build() {
            return $;
        }
    }

}
