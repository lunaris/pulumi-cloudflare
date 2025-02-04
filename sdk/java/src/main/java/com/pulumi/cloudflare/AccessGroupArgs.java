// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare;

import com.pulumi.cloudflare.inputs.AccessGroupExcludeArgs;
import com.pulumi.cloudflare.inputs.AccessGroupIncludeArgs;
import com.pulumi.cloudflare.inputs.AccessGroupRequireArgs;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


public final class AccessGroupArgs extends com.pulumi.resources.ResourceArgs {

    public static final AccessGroupArgs Empty = new AccessGroupArgs();

    /**
     * The account identifier to target for the resource. Conflicts with `zone_id`.
     * 
     */
    @Import(name="accountId")
    private @Nullable Output<String> accountId;

    /**
     * @return The account identifier to target for the resource. Conflicts with `zone_id`.
     * 
     */
    public Optional<Output<String>> accountId() {
        return Optional.ofNullable(this.accountId);
    }

    @Import(name="excludes")
    private @Nullable Output<List<AccessGroupExcludeArgs>> excludes;

    public Optional<Output<List<AccessGroupExcludeArgs>>> excludes() {
        return Optional.ofNullable(this.excludes);
    }

    @Import(name="includes", required=true)
    private Output<List<AccessGroupIncludeArgs>> includes;

    public Output<List<AccessGroupIncludeArgs>> includes() {
        return this.includes;
    }

    @Import(name="name", required=true)
    private Output<String> name;

    public Output<String> name() {
        return this.name;
    }

    @Import(name="requires")
    private @Nullable Output<List<AccessGroupRequireArgs>> requires;

    public Optional<Output<List<AccessGroupRequireArgs>>> requires() {
        return Optional.ofNullable(this.requires);
    }

    /**
     * The zone identifier to target for the resource. Conflicts with `account_id`.
     * 
     */
    @Import(name="zoneId")
    private @Nullable Output<String> zoneId;

    /**
     * @return The zone identifier to target for the resource. Conflicts with `account_id`.
     * 
     */
    public Optional<Output<String>> zoneId() {
        return Optional.ofNullable(this.zoneId);
    }

    private AccessGroupArgs() {}

    private AccessGroupArgs(AccessGroupArgs $) {
        this.accountId = $.accountId;
        this.excludes = $.excludes;
        this.includes = $.includes;
        this.name = $.name;
        this.requires = $.requires;
        this.zoneId = $.zoneId;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(AccessGroupArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private AccessGroupArgs $;

        public Builder() {
            $ = new AccessGroupArgs();
        }

        public Builder(AccessGroupArgs defaults) {
            $ = new AccessGroupArgs(Objects.requireNonNull(defaults));
        }

        /**
         * @param accountId The account identifier to target for the resource. Conflicts with `zone_id`.
         * 
         * @return builder
         * 
         */
        public Builder accountId(@Nullable Output<String> accountId) {
            $.accountId = accountId;
            return this;
        }

        /**
         * @param accountId The account identifier to target for the resource. Conflicts with `zone_id`.
         * 
         * @return builder
         * 
         */
        public Builder accountId(String accountId) {
            return accountId(Output.of(accountId));
        }

        public Builder excludes(@Nullable Output<List<AccessGroupExcludeArgs>> excludes) {
            $.excludes = excludes;
            return this;
        }

        public Builder excludes(List<AccessGroupExcludeArgs> excludes) {
            return excludes(Output.of(excludes));
        }

        public Builder excludes(AccessGroupExcludeArgs... excludes) {
            return excludes(List.of(excludes));
        }

        public Builder includes(Output<List<AccessGroupIncludeArgs>> includes) {
            $.includes = includes;
            return this;
        }

        public Builder includes(List<AccessGroupIncludeArgs> includes) {
            return includes(Output.of(includes));
        }

        public Builder includes(AccessGroupIncludeArgs... includes) {
            return includes(List.of(includes));
        }

        public Builder name(Output<String> name) {
            $.name = name;
            return this;
        }

        public Builder name(String name) {
            return name(Output.of(name));
        }

        public Builder requires(@Nullable Output<List<AccessGroupRequireArgs>> requires) {
            $.requires = requires;
            return this;
        }

        public Builder requires(List<AccessGroupRequireArgs> requires) {
            return requires(Output.of(requires));
        }

        public Builder requires(AccessGroupRequireArgs... requires) {
            return requires(List.of(requires));
        }

        /**
         * @param zoneId The zone identifier to target for the resource. Conflicts with `account_id`.
         * 
         * @return builder
         * 
         */
        public Builder zoneId(@Nullable Output<String> zoneId) {
            $.zoneId = zoneId;
            return this;
        }

        /**
         * @param zoneId The zone identifier to target for the resource. Conflicts with `account_id`.
         * 
         * @return builder
         * 
         */
        public Builder zoneId(String zoneId) {
            return zoneId(Output.of(zoneId));
        }

        public AccessGroupArgs build() {
            $.includes = Objects.requireNonNull($.includes, "expected parameter 'includes' to be non-null");
            $.name = Objects.requireNonNull($.name, "expected parameter 'name' to be non-null");
            return $;
        }
    }

}
