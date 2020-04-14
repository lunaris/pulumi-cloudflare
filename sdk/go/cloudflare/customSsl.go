// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides a Cloudflare custom ssl resource.
type CustomSsl struct {
	pulumi.CustomResourceState

	// The certificate, private key and associated optional parameters, such as bundle_method, geo_restrictions, and type.
	CustomSslOptions    CustomSslCustomSslOptionsPtrOutput    `pulumi:"customSslOptions"`
	CustomSslPriorities CustomSslCustomSslPriorityArrayOutput `pulumi:"customSslPriorities"`
	ExpiresOn           pulumi.StringOutput                   `pulumi:"expiresOn"`
	Hosts               pulumi.StringArrayOutput              `pulumi:"hosts"`
	Issuer              pulumi.StringOutput                   `pulumi:"issuer"`
	ModifiedOn          pulumi.StringOutput                   `pulumi:"modifiedOn"`
	Priority            pulumi.IntOutput                      `pulumi:"priority"`
	Signature           pulumi.StringOutput                   `pulumi:"signature"`
	Status              pulumi.StringOutput                   `pulumi:"status"`
	UploadedOn          pulumi.StringOutput                   `pulumi:"uploadedOn"`
	// The DNS zone id to the custom ssl cert should be added.
	ZoneId pulumi.StringOutput `pulumi:"zoneId"`
}

// NewCustomSsl registers a new resource with the given unique name, arguments, and options.
func NewCustomSsl(ctx *pulumi.Context,
	name string, args *CustomSslArgs, opts ...pulumi.ResourceOption) (*CustomSsl, error) {
	if args == nil || args.ZoneId == nil {
		return nil, errors.New("missing required argument 'ZoneId'")
	}
	if args == nil {
		args = &CustomSslArgs{}
	}
	var resource CustomSsl
	err := ctx.RegisterResource("cloudflare:index/customSsl:CustomSsl", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomSsl gets an existing CustomSsl resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomSsl(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomSslState, opts ...pulumi.ResourceOption) (*CustomSsl, error) {
	var resource CustomSsl
	err := ctx.ReadResource("cloudflare:index/customSsl:CustomSsl", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomSsl resources.
type customSslState struct {
	// The certificate, private key and associated optional parameters, such as bundle_method, geo_restrictions, and type.
	CustomSslOptions    *CustomSslCustomSslOptions   `pulumi:"customSslOptions"`
	CustomSslPriorities []CustomSslCustomSslPriority `pulumi:"customSslPriorities"`
	ExpiresOn           *string                      `pulumi:"expiresOn"`
	Hosts               []string                     `pulumi:"hosts"`
	Issuer              *string                      `pulumi:"issuer"`
	ModifiedOn          *string                      `pulumi:"modifiedOn"`
	Priority            *int                         `pulumi:"priority"`
	Signature           *string                      `pulumi:"signature"`
	Status              *string                      `pulumi:"status"`
	UploadedOn          *string                      `pulumi:"uploadedOn"`
	// The DNS zone id to the custom ssl cert should be added.
	ZoneId *string `pulumi:"zoneId"`
}

type CustomSslState struct {
	// The certificate, private key and associated optional parameters, such as bundle_method, geo_restrictions, and type.
	CustomSslOptions    CustomSslCustomSslOptionsPtrInput
	CustomSslPriorities CustomSslCustomSslPriorityArrayInput
	ExpiresOn           pulumi.StringPtrInput
	Hosts               pulumi.StringArrayInput
	Issuer              pulumi.StringPtrInput
	ModifiedOn          pulumi.StringPtrInput
	Priority            pulumi.IntPtrInput
	Signature           pulumi.StringPtrInput
	Status              pulumi.StringPtrInput
	UploadedOn          pulumi.StringPtrInput
	// The DNS zone id to the custom ssl cert should be added.
	ZoneId pulumi.StringPtrInput
}

func (CustomSslState) ElementType() reflect.Type {
	return reflect.TypeOf((*customSslState)(nil)).Elem()
}

type customSslArgs struct {
	// The certificate, private key and associated optional parameters, such as bundle_method, geo_restrictions, and type.
	CustomSslOptions    *CustomSslCustomSslOptions   `pulumi:"customSslOptions"`
	CustomSslPriorities []CustomSslCustomSslPriority `pulumi:"customSslPriorities"`
	// The DNS zone id to the custom ssl cert should be added.
	ZoneId string `pulumi:"zoneId"`
}

// The set of arguments for constructing a CustomSsl resource.
type CustomSslArgs struct {
	// The certificate, private key and associated optional parameters, such as bundle_method, geo_restrictions, and type.
	CustomSslOptions    CustomSslCustomSslOptionsPtrInput
	CustomSslPriorities CustomSslCustomSslPriorityArrayInput
	// The DNS zone id to the custom ssl cert should be added.
	ZoneId pulumi.StringInput
}

func (CustomSslArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customSslArgs)(nil)).Elem()
}
