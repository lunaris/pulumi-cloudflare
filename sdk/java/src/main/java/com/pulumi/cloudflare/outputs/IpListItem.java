// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.outputs;

import com.pulumi.core.annotations.CustomType;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class IpListItem {
    /**
     * @return A note that can be used to annotate the item.
     * 
     */
    private @Nullable String comment;
    /**
     * @return The IPv4 address, IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /64.
     * 
     */
    private String value;

    private IpListItem() {}
    /**
     * @return A note that can be used to annotate the item.
     * 
     */
    public Optional<String> comment() {
        return Optional.ofNullable(this.comment);
    }
    /**
     * @return The IPv4 address, IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /64.
     * 
     */
    public String value() {
        return this.value;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(IpListItem defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable String comment;
        private String value;
        public Builder() {}
        public Builder(IpListItem defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.comment = defaults.comment;
    	      this.value = defaults.value;
        }

        @CustomType.Setter
        public Builder comment(@Nullable String comment) {
            this.comment = comment;
            return this;
        }
        @CustomType.Setter
        public Builder value(String value) {
            this.value = Objects.requireNonNull(value);
            return this;
        }
        public IpListItem build() {
            final var o = new IpListItem();
            o.comment = comment;
            o.value = value;
            return o;
        }
    }
}
