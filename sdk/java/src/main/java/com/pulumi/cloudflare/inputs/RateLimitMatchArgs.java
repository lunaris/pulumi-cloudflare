// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.inputs;

import com.pulumi.cloudflare.inputs.RateLimitMatchRequestArgs;
import com.pulumi.cloudflare.inputs.RateLimitMatchResponseArgs;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


public final class RateLimitMatchArgs extends com.pulumi.resources.ResourceArgs {

    public static final RateLimitMatchArgs Empty = new RateLimitMatchArgs();

    /**
     * Matches HTTP requests (from the client to Cloudflare). See definition below.
     * 
     */
    @Import(name="request")
    private @Nullable Output<RateLimitMatchRequestArgs> request;

    /**
     * @return Matches HTTP requests (from the client to Cloudflare). See definition below.
     * 
     */
    public Optional<Output<RateLimitMatchRequestArgs>> request() {
        return Optional.ofNullable(this.request);
    }

    /**
     * Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
     * 
     */
    @Import(name="response")
    private @Nullable Output<RateLimitMatchResponseArgs> response;

    /**
     * @return Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
     * 
     */
    public Optional<Output<RateLimitMatchResponseArgs>> response() {
        return Optional.ofNullable(this.response);
    }

    private RateLimitMatchArgs() {}

    private RateLimitMatchArgs(RateLimitMatchArgs $) {
        this.request = $.request;
        this.response = $.response;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(RateLimitMatchArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private RateLimitMatchArgs $;

        public Builder() {
            $ = new RateLimitMatchArgs();
        }

        public Builder(RateLimitMatchArgs defaults) {
            $ = new RateLimitMatchArgs(Objects.requireNonNull(defaults));
        }

        /**
         * @param request Matches HTTP requests (from the client to Cloudflare). See definition below.
         * 
         * @return builder
         * 
         */
        public Builder request(@Nullable Output<RateLimitMatchRequestArgs> request) {
            $.request = request;
            return this;
        }

        /**
         * @param request Matches HTTP requests (from the client to Cloudflare). See definition below.
         * 
         * @return builder
         * 
         */
        public Builder request(RateLimitMatchRequestArgs request) {
            return request(Output.of(request));
        }

        /**
         * @param response Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
         * 
         * @return builder
         * 
         */
        public Builder response(@Nullable Output<RateLimitMatchResponseArgs> response) {
            $.response = response;
            return this;
        }

        /**
         * @param response Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
         * 
         * @return builder
         * 
         */
        public Builder response(RateLimitMatchResponseArgs response) {
            return response(Output.of(response));
        }

        public RateLimitMatchArgs build() {
            return $;
        }
    }

}
