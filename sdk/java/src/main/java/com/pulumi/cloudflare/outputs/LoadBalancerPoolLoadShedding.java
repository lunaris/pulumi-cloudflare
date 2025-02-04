// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.outputs;

import com.pulumi.core.annotations.CustomType;
import java.lang.Double;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class LoadBalancerPoolLoadShedding {
    /**
     * @return Percent of traffic to shed 0 - 100.
     * 
     */
    private @Nullable Double defaultPercent;
    /**
     * @return Method of shedding traffic &#34;&#34;, &#34;hash&#34; or &#34;random&#34;.
     * 
     */
    private @Nullable String defaultPolicy;
    /**
     * @return Percent of session traffic to shed 0 - 100.
     * 
     */
    private @Nullable Double sessionPercent;
    /**
     * @return Method of shedding session traffic &#34;&#34; or &#34;hash&#34;.
     * 
     */
    private @Nullable String sessionPolicy;

    private LoadBalancerPoolLoadShedding() {}
    /**
     * @return Percent of traffic to shed 0 - 100.
     * 
     */
    public Optional<Double> defaultPercent() {
        return Optional.ofNullable(this.defaultPercent);
    }
    /**
     * @return Method of shedding traffic &#34;&#34;, &#34;hash&#34; or &#34;random&#34;.
     * 
     */
    public Optional<String> defaultPolicy() {
        return Optional.ofNullable(this.defaultPolicy);
    }
    /**
     * @return Percent of session traffic to shed 0 - 100.
     * 
     */
    public Optional<Double> sessionPercent() {
        return Optional.ofNullable(this.sessionPercent);
    }
    /**
     * @return Method of shedding session traffic &#34;&#34; or &#34;hash&#34;.
     * 
     */
    public Optional<String> sessionPolicy() {
        return Optional.ofNullable(this.sessionPolicy);
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(LoadBalancerPoolLoadShedding defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable Double defaultPercent;
        private @Nullable String defaultPolicy;
        private @Nullable Double sessionPercent;
        private @Nullable String sessionPolicy;
        public Builder() {}
        public Builder(LoadBalancerPoolLoadShedding defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.defaultPercent = defaults.defaultPercent;
    	      this.defaultPolicy = defaults.defaultPolicy;
    	      this.sessionPercent = defaults.sessionPercent;
    	      this.sessionPolicy = defaults.sessionPolicy;
        }

        @CustomType.Setter
        public Builder defaultPercent(@Nullable Double defaultPercent) {
            this.defaultPercent = defaultPercent;
            return this;
        }
        @CustomType.Setter
        public Builder defaultPolicy(@Nullable String defaultPolicy) {
            this.defaultPolicy = defaultPolicy;
            return this;
        }
        @CustomType.Setter
        public Builder sessionPercent(@Nullable Double sessionPercent) {
            this.sessionPercent = sessionPercent;
            return this;
        }
        @CustomType.Setter
        public Builder sessionPolicy(@Nullable String sessionPolicy) {
            this.sessionPolicy = sessionPolicy;
            return this;
        }
        public LoadBalancerPoolLoadShedding build() {
            final var o = new LoadBalancerPoolLoadShedding();
            o.defaultPercent = defaultPercent;
            o.defaultPolicy = defaultPolicy;
            o.sessionPercent = sessionPercent;
            o.sessionPolicy = sessionPolicy;
            return o;
        }
    }
}
