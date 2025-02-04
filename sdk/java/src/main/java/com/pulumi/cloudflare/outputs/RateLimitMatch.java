// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.outputs;

import com.pulumi.cloudflare.outputs.RateLimitMatchRequest;
import com.pulumi.cloudflare.outputs.RateLimitMatchResponse;
import com.pulumi.core.annotations.CustomType;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class RateLimitMatch {
    /**
     * @return Matches HTTP requests (from the client to Cloudflare). See definition below.
     * 
     */
    private @Nullable RateLimitMatchRequest request;
    /**
     * @return Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
     * 
     */
    private @Nullable RateLimitMatchResponse response;

    private RateLimitMatch() {}
    /**
     * @return Matches HTTP requests (from the client to Cloudflare). See definition below.
     * 
     */
    public Optional<RateLimitMatchRequest> request() {
        return Optional.ofNullable(this.request);
    }
    /**
     * @return Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
     * 
     */
    public Optional<RateLimitMatchResponse> response() {
        return Optional.ofNullable(this.response);
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(RateLimitMatch defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable RateLimitMatchRequest request;
        private @Nullable RateLimitMatchResponse response;
        public Builder() {}
        public Builder(RateLimitMatch defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.request = defaults.request;
    	      this.response = defaults.response;
        }

        @CustomType.Setter
        public Builder request(@Nullable RateLimitMatchRequest request) {
            this.request = request;
            return this;
        }
        @CustomType.Setter
        public Builder response(@Nullable RateLimitMatchResponse response) {
            this.response = response;
            return this;
        }
        public RateLimitMatch build() {
            final var o = new RateLimitMatch();
            o.request = request;
            o.response = response;
            return o;
        }
    }
}
