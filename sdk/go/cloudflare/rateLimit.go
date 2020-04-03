// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package cloudflare

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare rate limit resource for a given zone. This can be used to limit the traffic you receive zone-wide, or matching more specific types of requests/responses.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/rate_limit.html.markdown.
type RateLimit struct {
	pulumi.CustomResourceState

	// The action to be performed when the threshold of matched traffic within the period defined is exceeded.
	Action RateLimitActionOutput `pulumi:"action"`
	// URLs matching the patterns specified here will be excluded from rate limiting.
	BypassUrlPatterns pulumi.StringArrayOutput `pulumi:"bypassUrlPatterns"`
	// Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
	Correlate RateLimitCorrelatePtrOutput `pulumi:"correlate"`
	// A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Whether this ratelimit is currently disabled. Default: `false`.
	Disabled pulumi.BoolPtrOutput `pulumi:"disabled"`
	// Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
	Match RateLimitMatchOutput `pulumi:"match"`
	// The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
	Period pulumi.IntOutput `pulumi:"period"`
	// The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
	Threshold pulumi.IntOutput `pulumi:"threshold"`
	// The DNS zone ID to apply rate limiting to.
	ZoneId pulumi.StringOutput `pulumi:"zoneId"`
}

// NewRateLimit registers a new resource with the given unique name, arguments, and options.
func NewRateLimit(ctx *pulumi.Context,
	name string, args *RateLimitArgs, opts ...pulumi.ResourceOption) (*RateLimit, error) {
	if args == nil || args.Action == nil {
		return nil, errors.New("missing required argument 'Action'")
	}
	if args == nil || args.Period == nil {
		return nil, errors.New("missing required argument 'Period'")
	}
	if args == nil || args.Threshold == nil {
		return nil, errors.New("missing required argument 'Threshold'")
	}
	if args == nil || args.ZoneId == nil {
		return nil, errors.New("missing required argument 'ZoneId'")
	}
	if args == nil {
		args = &RateLimitArgs{}
	}
	var resource RateLimit
	err := ctx.RegisterResource("cloudflare:index/rateLimit:RateLimit", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRateLimit gets an existing RateLimit resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRateLimit(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RateLimitState, opts ...pulumi.ResourceOption) (*RateLimit, error) {
	var resource RateLimit
	err := ctx.ReadResource("cloudflare:index/rateLimit:RateLimit", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RateLimit resources.
type rateLimitState struct {
	// The action to be performed when the threshold of matched traffic within the period defined is exceeded.
	Action *RateLimitAction `pulumi:"action"`
	// URLs matching the patterns specified here will be excluded from rate limiting.
	BypassUrlPatterns []string `pulumi:"bypassUrlPatterns"`
	// Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
	Correlate *RateLimitCorrelate `pulumi:"correlate"`
	// A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
	Description *string `pulumi:"description"`
	// Whether this ratelimit is currently disabled. Default: `false`.
	Disabled *bool `pulumi:"disabled"`
	// Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
	Match *RateLimitMatch `pulumi:"match"`
	// The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
	Period *int `pulumi:"period"`
	// The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
	Threshold *int `pulumi:"threshold"`
	// The DNS zone ID to apply rate limiting to.
	ZoneId *string `pulumi:"zoneId"`
}

type RateLimitState struct {
	// The action to be performed when the threshold of matched traffic within the period defined is exceeded.
	Action RateLimitActionPtrInput
	// URLs matching the patterns specified here will be excluded from rate limiting.
	BypassUrlPatterns pulumi.StringArrayInput
	// Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
	Correlate RateLimitCorrelatePtrInput
	// A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
	Description pulumi.StringPtrInput
	// Whether this ratelimit is currently disabled. Default: `false`.
	Disabled pulumi.BoolPtrInput
	// Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
	Match RateLimitMatchPtrInput
	// The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
	Period pulumi.IntPtrInput
	// The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
	Threshold pulumi.IntPtrInput
	// The DNS zone ID to apply rate limiting to.
	ZoneId pulumi.StringPtrInput
}

func (RateLimitState) ElementType() reflect.Type {
	return reflect.TypeOf((*rateLimitState)(nil)).Elem()
}

type rateLimitArgs struct {
	// The action to be performed when the threshold of matched traffic within the period defined is exceeded.
	Action RateLimitAction `pulumi:"action"`
	// URLs matching the patterns specified here will be excluded from rate limiting.
	BypassUrlPatterns []string `pulumi:"bypassUrlPatterns"`
	// Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
	Correlate *RateLimitCorrelate `pulumi:"correlate"`
	// A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
	Description *string `pulumi:"description"`
	// Whether this ratelimit is currently disabled. Default: `false`.
	Disabled *bool `pulumi:"disabled"`
	// Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
	Match *RateLimitMatch `pulumi:"match"`
	// The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
	Period int `pulumi:"period"`
	// The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
	Threshold int `pulumi:"threshold"`
	// The DNS zone ID to apply rate limiting to.
	ZoneId string `pulumi:"zoneId"`
}

// The set of arguments for constructing a RateLimit resource.
type RateLimitArgs struct {
	// The action to be performed when the threshold of matched traffic within the period defined is exceeded.
	Action RateLimitActionInput
	// URLs matching the patterns specified here will be excluded from rate limiting.
	BypassUrlPatterns pulumi.StringArrayInput
	// Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
	Correlate RateLimitCorrelatePtrInput
	// A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
	Description pulumi.StringPtrInput
	// Whether this ratelimit is currently disabled. Default: `false`.
	Disabled pulumi.BoolPtrInput
	// Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
	Match RateLimitMatchPtrInput
	// The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
	Period pulumi.IntInput
	// The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
	Threshold pulumi.IntInput
	// The DNS zone ID to apply rate limiting to.
	ZoneId pulumi.StringInput
}

func (RateLimitArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*rateLimitArgs)(nil)).Elem()
}
