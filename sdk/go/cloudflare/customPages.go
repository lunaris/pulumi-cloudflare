// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package cloudflare

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a resource which manages Cloudflare custom error pages.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/custom_pages.html.markdown.
type CustomPages struct {
	pulumi.CustomResourceState

	// The account ID where the custom pages should be
	// updated. Either `accountId` or `zoneId` must be provided. If
	// `accountId` is present, it will override the zone setting.
	AccountId pulumi.StringPtrOutput `pulumi:"accountId"`
	State     pulumi.StringPtrOutput `pulumi:"state"`
	// The type of custom page you wish to update. Must
	// be one of `basicChallenge`, `wafChallenge`, `wafBlock`,
	// `ratelimitBlock`, `countryChallenge`, `ipBlock`, `underAttack`,
	// `500Errors`, `1000Errors`, `alwaysOnline`.
	Type pulumi.StringOutput `pulumi:"type"`
	// URL of where the custom page source is located.
	Url pulumi.StringOutput `pulumi:"url"`
	// The zone ID where the custom pages should be
	// updated. Either `zoneId` or `accountId` must be provided.
	ZoneId pulumi.StringPtrOutput `pulumi:"zoneId"`
}

// NewCustomPages registers a new resource with the given unique name, arguments, and options.
func NewCustomPages(ctx *pulumi.Context,
	name string, args *CustomPagesArgs, opts ...pulumi.ResourceOption) (*CustomPages, error) {
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	if args == nil || args.Url == nil {
		return nil, errors.New("missing required argument 'Url'")
	}
	if args == nil {
		args = &CustomPagesArgs{}
	}
	var resource CustomPages
	err := ctx.RegisterResource("cloudflare:index/customPages:CustomPages", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomPages gets an existing CustomPages resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomPages(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomPagesState, opts ...pulumi.ResourceOption) (*CustomPages, error) {
	var resource CustomPages
	err := ctx.ReadResource("cloudflare:index/customPages:CustomPages", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomPages resources.
type customPagesState struct {
	// The account ID where the custom pages should be
	// updated. Either `accountId` or `zoneId` must be provided. If
	// `accountId` is present, it will override the zone setting.
	AccountId *string `pulumi:"accountId"`
	State     *string `pulumi:"state"`
	// The type of custom page you wish to update. Must
	// be one of `basicChallenge`, `wafChallenge`, `wafBlock`,
	// `ratelimitBlock`, `countryChallenge`, `ipBlock`, `underAttack`,
	// `500Errors`, `1000Errors`, `alwaysOnline`.
	Type *string `pulumi:"type"`
	// URL of where the custom page source is located.
	Url *string `pulumi:"url"`
	// The zone ID where the custom pages should be
	// updated. Either `zoneId` or `accountId` must be provided.
	ZoneId *string `pulumi:"zoneId"`
}

type CustomPagesState struct {
	// The account ID where the custom pages should be
	// updated. Either `accountId` or `zoneId` must be provided. If
	// `accountId` is present, it will override the zone setting.
	AccountId pulumi.StringPtrInput
	State     pulumi.StringPtrInput
	// The type of custom page you wish to update. Must
	// be one of `basicChallenge`, `wafChallenge`, `wafBlock`,
	// `ratelimitBlock`, `countryChallenge`, `ipBlock`, `underAttack`,
	// `500Errors`, `1000Errors`, `alwaysOnline`.
	Type pulumi.StringPtrInput
	// URL of where the custom page source is located.
	Url pulumi.StringPtrInput
	// The zone ID where the custom pages should be
	// updated. Either `zoneId` or `accountId` must be provided.
	ZoneId pulumi.StringPtrInput
}

func (CustomPagesState) ElementType() reflect.Type {
	return reflect.TypeOf((*customPagesState)(nil)).Elem()
}

type customPagesArgs struct {
	// The account ID where the custom pages should be
	// updated. Either `accountId` or `zoneId` must be provided. If
	// `accountId` is present, it will override the zone setting.
	AccountId *string `pulumi:"accountId"`
	State     *string `pulumi:"state"`
	// The type of custom page you wish to update. Must
	// be one of `basicChallenge`, `wafChallenge`, `wafBlock`,
	// `ratelimitBlock`, `countryChallenge`, `ipBlock`, `underAttack`,
	// `500Errors`, `1000Errors`, `alwaysOnline`.
	Type string `pulumi:"type"`
	// URL of where the custom page source is located.
	Url string `pulumi:"url"`
	// The zone ID where the custom pages should be
	// updated. Either `zoneId` or `accountId` must be provided.
	ZoneId *string `pulumi:"zoneId"`
}

// The set of arguments for constructing a CustomPages resource.
type CustomPagesArgs struct {
	// The account ID where the custom pages should be
	// updated. Either `accountId` or `zoneId` must be provided. If
	// `accountId` is present, it will override the zone setting.
	AccountId pulumi.StringPtrInput
	State     pulumi.StringPtrInput
	// The type of custom page you wish to update. Must
	// be one of `basicChallenge`, `wafChallenge`, `wafBlock`,
	// `ratelimitBlock`, `countryChallenge`, `ipBlock`, `underAttack`,
	// `500Errors`, `1000Errors`, `alwaysOnline`.
	Type pulumi.StringInput
	// URL of where the custom page source is located.
	Url pulumi.StringInput
	// The zone ID where the custom pages should be
	// updated. Either `zoneId` or `accountId` must be provided.
	ZoneId pulumi.StringPtrInput
}

func (CustomPagesArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customPagesArgs)(nil)).Elem()
}
