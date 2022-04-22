// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Provides a Cloudflare custom ssl resource.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-cloudflare/sdk/v4/go/cloudflare"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		cfg := config.New(ctx, "")
// 		cloudflareZoneId := "1d5fdc9e88c8a8c4518b068cd94331fe"
// 		if param := cfg.Get("cloudflareZoneId"); param != "" {
// 			cloudflareZoneId = param
// 		}
// 		_, err := cloudflare.NewCustomSsl(ctx, "foossl", &cloudflare.CustomSslArgs{
// 			CustomSslOptions: &CustomSslCustomSslOptionsArgs{
// 				BundleMethod:    pulumi.String("ubiquitous"),
// 				Certificate:     pulumi.String("-----INSERT CERTIFICATE-----"),
// 				GeoRestrictions: pulumi.String("us"),
// 				PrivateKey:      pulumi.String("-----INSERT PRIVATE KEY-----"),
// 				Type:            pulumi.String("legacy_custom"),
// 			},
// 			ZoneId: pulumi.String(cloudflareZoneId),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Custom SSL Certs can be imported using a composite ID formed of the zone ID and [certificate ID](https://api.cloudflare.com/#custom-ssl-for-a-zone-properties), separated by a "/" e.g.
//
// ```sh
//  $ pulumi import cloudflare:index/customSsl:CustomSsl default 1d5fdc9e88c8a8c4518b068cd94331fe/0123f0ab-9cde-45b2-80bd-4da3010f1337
// ```
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
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ZoneId == nil {
		return nil, errors.New("invalid value for required argument 'ZoneId'")
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

type CustomSslInput interface {
	pulumi.Input

	ToCustomSslOutput() CustomSslOutput
	ToCustomSslOutputWithContext(ctx context.Context) CustomSslOutput
}

func (*CustomSsl) ElementType() reflect.Type {
	return reflect.TypeOf((**CustomSsl)(nil)).Elem()
}

func (i *CustomSsl) ToCustomSslOutput() CustomSslOutput {
	return i.ToCustomSslOutputWithContext(context.Background())
}

func (i *CustomSsl) ToCustomSslOutputWithContext(ctx context.Context) CustomSslOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomSslOutput)
}

// CustomSslArrayInput is an input type that accepts CustomSslArray and CustomSslArrayOutput values.
// You can construct a concrete instance of `CustomSslArrayInput` via:
//
//          CustomSslArray{ CustomSslArgs{...} }
type CustomSslArrayInput interface {
	pulumi.Input

	ToCustomSslArrayOutput() CustomSslArrayOutput
	ToCustomSslArrayOutputWithContext(context.Context) CustomSslArrayOutput
}

type CustomSslArray []CustomSslInput

func (CustomSslArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CustomSsl)(nil)).Elem()
}

func (i CustomSslArray) ToCustomSslArrayOutput() CustomSslArrayOutput {
	return i.ToCustomSslArrayOutputWithContext(context.Background())
}

func (i CustomSslArray) ToCustomSslArrayOutputWithContext(ctx context.Context) CustomSslArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomSslArrayOutput)
}

// CustomSslMapInput is an input type that accepts CustomSslMap and CustomSslMapOutput values.
// You can construct a concrete instance of `CustomSslMapInput` via:
//
//          CustomSslMap{ "key": CustomSslArgs{...} }
type CustomSslMapInput interface {
	pulumi.Input

	ToCustomSslMapOutput() CustomSslMapOutput
	ToCustomSslMapOutputWithContext(context.Context) CustomSslMapOutput
}

type CustomSslMap map[string]CustomSslInput

func (CustomSslMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CustomSsl)(nil)).Elem()
}

func (i CustomSslMap) ToCustomSslMapOutput() CustomSslMapOutput {
	return i.ToCustomSslMapOutputWithContext(context.Background())
}

func (i CustomSslMap) ToCustomSslMapOutputWithContext(ctx context.Context) CustomSslMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomSslMapOutput)
}

type CustomSslOutput struct{ *pulumi.OutputState }

func (CustomSslOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**CustomSsl)(nil)).Elem()
}

func (o CustomSslOutput) ToCustomSslOutput() CustomSslOutput {
	return o
}

func (o CustomSslOutput) ToCustomSslOutputWithContext(ctx context.Context) CustomSslOutput {
	return o
}

type CustomSslArrayOutput struct{ *pulumi.OutputState }

func (CustomSslArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CustomSsl)(nil)).Elem()
}

func (o CustomSslArrayOutput) ToCustomSslArrayOutput() CustomSslArrayOutput {
	return o
}

func (o CustomSslArrayOutput) ToCustomSslArrayOutputWithContext(ctx context.Context) CustomSslArrayOutput {
	return o
}

func (o CustomSslArrayOutput) Index(i pulumi.IntInput) CustomSslOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *CustomSsl {
		return vs[0].([]*CustomSsl)[vs[1].(int)]
	}).(CustomSslOutput)
}

type CustomSslMapOutput struct{ *pulumi.OutputState }

func (CustomSslMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CustomSsl)(nil)).Elem()
}

func (o CustomSslMapOutput) ToCustomSslMapOutput() CustomSslMapOutput {
	return o
}

func (o CustomSslMapOutput) ToCustomSslMapOutputWithContext(ctx context.Context) CustomSslMapOutput {
	return o
}

func (o CustomSslMapOutput) MapIndex(k pulumi.StringInput) CustomSslOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *CustomSsl {
		return vs[0].(map[string]*CustomSsl)[vs[1].(string)]
	}).(CustomSslOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*CustomSslInput)(nil)).Elem(), &CustomSsl{})
	pulumi.RegisterInputType(reflect.TypeOf((*CustomSslArrayInput)(nil)).Elem(), CustomSslArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*CustomSslMapInput)(nil)).Elem(), CustomSslMap{})
	pulumi.RegisterOutputType(CustomSslOutput{})
	pulumi.RegisterOutputType(CustomSslArrayOutput{})
	pulumi.RegisterOutputType(CustomSslMapOutput{})
}
