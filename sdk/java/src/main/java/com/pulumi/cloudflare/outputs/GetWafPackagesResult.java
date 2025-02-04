// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.outputs;

import com.pulumi.cloudflare.outputs.GetWafPackagesFilter;
import com.pulumi.cloudflare.outputs.GetWafPackagesPackage;
import com.pulumi.core.annotations.CustomType;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class GetWafPackagesResult {
    private @Nullable GetWafPackagesFilter filter;
    /**
     * @return The provider-assigned unique ID for this managed resource.
     * 
     */
    private String id;
    private List<GetWafPackagesPackage> packages;
    /**
     * @return The zone identifier to target for the resource.
     * 
     */
    private String zoneId;

    private GetWafPackagesResult() {}
    public Optional<GetWafPackagesFilter> filter() {
        return Optional.ofNullable(this.filter);
    }
    /**
     * @return The provider-assigned unique ID for this managed resource.
     * 
     */
    public String id() {
        return this.id;
    }
    public List<GetWafPackagesPackage> packages() {
        return this.packages;
    }
    /**
     * @return The zone identifier to target for the resource.
     * 
     */
    public String zoneId() {
        return this.zoneId;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(GetWafPackagesResult defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable GetWafPackagesFilter filter;
        private String id;
        private List<GetWafPackagesPackage> packages;
        private String zoneId;
        public Builder() {}
        public Builder(GetWafPackagesResult defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.filter = defaults.filter;
    	      this.id = defaults.id;
    	      this.packages = defaults.packages;
    	      this.zoneId = defaults.zoneId;
        }

        @CustomType.Setter
        public Builder filter(@Nullable GetWafPackagesFilter filter) {
            this.filter = filter;
            return this;
        }
        @CustomType.Setter
        public Builder id(String id) {
            this.id = Objects.requireNonNull(id);
            return this;
        }
        @CustomType.Setter
        public Builder packages(List<GetWafPackagesPackage> packages) {
            this.packages = Objects.requireNonNull(packages);
            return this;
        }
        public Builder packages(GetWafPackagesPackage... packages) {
            return packages(List.of(packages));
        }
        @CustomType.Setter
        public Builder zoneId(String zoneId) {
            this.zoneId = Objects.requireNonNull(zoneId);
            return this;
        }
        public GetWafPackagesResult build() {
            final var o = new GetWafPackagesResult();
            o.filter = filter;
            o.id = id;
            o.packages = packages;
            o.zoneId = zoneId;
            return o;
        }
    }
}
