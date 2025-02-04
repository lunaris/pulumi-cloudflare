// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.inputs;

import com.pulumi.cloudflare.inputs.GetWafGroupsFilterArgs;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


public final class GetWafGroupsArgs extends com.pulumi.resources.InvokeArgs {

    public static final GetWafGroupsArgs Empty = new GetWafGroupsArgs();

    @Import(name="filter")
    private @Nullable Output<GetWafGroupsFilterArgs> filter;

    public Optional<Output<GetWafGroupsFilterArgs>> filter() {
        return Optional.ofNullable(this.filter);
    }

    @Import(name="packageId")
    private @Nullable Output<String> packageId;

    public Optional<Output<String>> packageId() {
        return Optional.ofNullable(this.packageId);
    }

    /**
     * The zone identifier to target for the resource.
     * 
     */
    @Import(name="zoneId", required=true)
    private Output<String> zoneId;

    /**
     * @return The zone identifier to target for the resource.
     * 
     */
    public Output<String> zoneId() {
        return this.zoneId;
    }

    private GetWafGroupsArgs() {}

    private GetWafGroupsArgs(GetWafGroupsArgs $) {
        this.filter = $.filter;
        this.packageId = $.packageId;
        this.zoneId = $.zoneId;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(GetWafGroupsArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private GetWafGroupsArgs $;

        public Builder() {
            $ = new GetWafGroupsArgs();
        }

        public Builder(GetWafGroupsArgs defaults) {
            $ = new GetWafGroupsArgs(Objects.requireNonNull(defaults));
        }

        public Builder filter(@Nullable Output<GetWafGroupsFilterArgs> filter) {
            $.filter = filter;
            return this;
        }

        public Builder filter(GetWafGroupsFilterArgs filter) {
            return filter(Output.of(filter));
        }

        public Builder packageId(@Nullable Output<String> packageId) {
            $.packageId = packageId;
            return this;
        }

        public Builder packageId(String packageId) {
            return packageId(Output.of(packageId));
        }

        /**
         * @param zoneId The zone identifier to target for the resource.
         * 
         * @return builder
         * 
         */
        public Builder zoneId(Output<String> zoneId) {
            $.zoneId = zoneId;
            return this;
        }

        /**
         * @param zoneId The zone identifier to target for the resource.
         * 
         * @return builder
         * 
         */
        public Builder zoneId(String zoneId) {
            return zoneId(Output.of(zoneId));
        }

        public GetWafGroupsArgs build() {
            $.zoneId = Objects.requireNonNull($.zoneId, "expected parameter 'zoneId' to be non-null");
            return $;
        }
    }

}
