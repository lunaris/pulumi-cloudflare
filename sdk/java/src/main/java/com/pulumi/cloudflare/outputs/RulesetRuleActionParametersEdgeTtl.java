// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare.outputs;

import com.pulumi.cloudflare.outputs.RulesetRuleActionParametersEdgeTtlStatusCodeTtl;
import com.pulumi.core.annotations.CustomType;
import java.lang.Integer;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import javax.annotation.Nullable;

@CustomType
public final class RulesetRuleActionParametersEdgeTtl {
    private Integer default_;
    private String mode;
    private @Nullable List<RulesetRuleActionParametersEdgeTtlStatusCodeTtl> statusCodeTtls;

    private RulesetRuleActionParametersEdgeTtl() {}
    public Integer default_() {
        return this.default_;
    }
    public String mode() {
        return this.mode;
    }
    public List<RulesetRuleActionParametersEdgeTtlStatusCodeTtl> statusCodeTtls() {
        return this.statusCodeTtls == null ? List.of() : this.statusCodeTtls;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(RulesetRuleActionParametersEdgeTtl defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private Integer default_;
        private String mode;
        private @Nullable List<RulesetRuleActionParametersEdgeTtlStatusCodeTtl> statusCodeTtls;
        public Builder() {}
        public Builder(RulesetRuleActionParametersEdgeTtl defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.default_ = defaults.default_;
    	      this.mode = defaults.mode;
    	      this.statusCodeTtls = defaults.statusCodeTtls;
        }

        @CustomType.Setter("default")
        public Builder default_(Integer default_) {
            this.default_ = Objects.requireNonNull(default_);
            return this;
        }
        @CustomType.Setter
        public Builder mode(String mode) {
            this.mode = Objects.requireNonNull(mode);
            return this;
        }
        @CustomType.Setter
        public Builder statusCodeTtls(@Nullable List<RulesetRuleActionParametersEdgeTtlStatusCodeTtl> statusCodeTtls) {
            this.statusCodeTtls = statusCodeTtls;
            return this;
        }
        public Builder statusCodeTtls(RulesetRuleActionParametersEdgeTtlStatusCodeTtl... statusCodeTtls) {
            return statusCodeTtls(List.of(statusCodeTtls));
        }
        public RulesetRuleActionParametersEdgeTtl build() {
            final var o = new RulesetRuleActionParametersEdgeTtl();
            o.default_ = default_;
            o.mode = mode;
            o.statusCodeTtls = statusCodeTtls;
            return o;
        }
    }
}
