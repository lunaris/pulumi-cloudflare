// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-cloudflare/sdk/v4/go/cloudflare"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := cloudflare.NewCertificatePack(ctx, "dedicatedCustomExample", &cloudflare.CertificatePackArgs{
// 			Hosts: pulumi.StringArray{
// 				pulumi.String("example.com"),
// 				pulumi.String("sub.example.com"),
// 			},
// 			Type:   pulumi.String("dedicated_custom"),
// 			ZoneId: pulumi.String("1d5fdc9e88c8a8c4518b068cd94331fe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = cloudflare.NewCertificatePack(ctx, "advancedExampleForDigicert", &cloudflare.CertificatePackArgs{
// 			CertificateAuthority: pulumi.String("digicert"),
// 			CloudflareBranding:   pulumi.Bool(false),
// 			Hosts: pulumi.StringArray{
// 				pulumi.String("example.com"),
// 				pulumi.String("sub.example.com"),
// 			},
// 			Type:             pulumi.String("advanced"),
// 			ValidationMethod: pulumi.String("txt"),
// 			ValidityDays:     pulumi.Int(30),
// 			ZoneId:           pulumi.String("1d5fdc9e88c8a8c4518b068cd94331fe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = cloudflare.NewCertificatePack(ctx, "advancedExampleForLetsEncrypt", &cloudflare.CertificatePackArgs{
// 			CertificateAuthority: pulumi.String("lets_encrypt"),
// 			CloudflareBranding:   pulumi.Bool(false),
// 			Hosts: pulumi.StringArray{
// 				pulumi.String("example.com"),
// 				pulumi.String("*.example.com"),
// 			},
// 			Type:             pulumi.String("advanced"),
// 			ValidationMethod: pulumi.String("http"),
// 			ValidityDays:     pulumi.Int(90),
// 			ZoneId:           pulumi.String("1d5fdc9e88c8a8c4518b068cd94331fe"),
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
// Certificate packs can be imported using a composite ID of the zone ID and certificate pack ID. This isn't recommended and it is advised to replace the certificate entirely instead.
//
// ```sh
//  $ pulumi import cloudflare:index/certificatePack:CertificatePack example cb029e245cfdd66dc8d2e570d5dd3322/8fda82e2-6af9-4eb2-992a-5ab65b792ef1
// ```
type CertificatePack struct {
	pulumi.CustomResourceState

	// Which certificate
	// authority to issue the certificate pack. Allowed values: `"digicert"`,
	// `"letsEncrypt"`.
	CertificateAuthority pulumi.StringOutput `pulumi:"certificateAuthority"`
	// Whether or not to include
	// Cloudflare branding. This will add `sni.cloudflaressl.com` as the Common Name
	// if set to `true`.
	CloudflareBranding pulumi.BoolPtrOutput `pulumi:"cloudflareBranding"`
	// List of hostnames to provision the certificate pack for.
	// Note: If using Let's Encrypt, you cannot use individual subdomains and only a
	// wildcard for subdomain is available.
	Hosts pulumi.StringArrayOutput `pulumi:"hosts"`
	// Certificate pack configuration type.
	// Allowed values: `"custom"`, `"dedicatedCustom"`, `"advanced"`.
	Type             pulumi.StringOutput                       `pulumi:"type"`
	ValidationErrors CertificatePackValidationErrorArrayOutput `pulumi:"validationErrors"`
	// Which validation method to
	// use in order to prove domain ownership. Allowed values: `"txt"`, `"http"`, `"email"`.
	ValidationMethod  pulumi.StringPtrOutput                     `pulumi:"validationMethod"`
	ValidationRecords CertificatePackValidationRecordArrayOutput `pulumi:"validationRecords"`
	// How long the certificate is valid
	// for. Note: If using Let's Encrypt, this value can only be 90 days.
	// Allowed values: 14, 30, 90, 365.
	ValidityDays pulumi.IntPtrOutput `pulumi:"validityDays"`
	// The DNS zone to which the certificate pack should be added.
	ZoneId pulumi.StringOutput `pulumi:"zoneId"`
}

// NewCertificatePack registers a new resource with the given unique name, arguments, and options.
func NewCertificatePack(ctx *pulumi.Context,
	name string, args *CertificatePackArgs, opts ...pulumi.ResourceOption) (*CertificatePack, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Hosts == nil {
		return nil, errors.New("invalid value for required argument 'Hosts'")
	}
	if args.Type == nil {
		return nil, errors.New("invalid value for required argument 'Type'")
	}
	if args.ZoneId == nil {
		return nil, errors.New("invalid value for required argument 'ZoneId'")
	}
	var resource CertificatePack
	err := ctx.RegisterResource("cloudflare:index/certificatePack:CertificatePack", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCertificatePack gets an existing CertificatePack resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCertificatePack(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CertificatePackState, opts ...pulumi.ResourceOption) (*CertificatePack, error) {
	var resource CertificatePack
	err := ctx.ReadResource("cloudflare:index/certificatePack:CertificatePack", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CertificatePack resources.
type certificatePackState struct {
	// Which certificate
	// authority to issue the certificate pack. Allowed values: `"digicert"`,
	// `"letsEncrypt"`.
	CertificateAuthority *string `pulumi:"certificateAuthority"`
	// Whether or not to include
	// Cloudflare branding. This will add `sni.cloudflaressl.com` as the Common Name
	// if set to `true`.
	CloudflareBranding *bool `pulumi:"cloudflareBranding"`
	// List of hostnames to provision the certificate pack for.
	// Note: If using Let's Encrypt, you cannot use individual subdomains and only a
	// wildcard for subdomain is available.
	Hosts []string `pulumi:"hosts"`
	// Certificate pack configuration type.
	// Allowed values: `"custom"`, `"dedicatedCustom"`, `"advanced"`.
	Type             *string                          `pulumi:"type"`
	ValidationErrors []CertificatePackValidationError `pulumi:"validationErrors"`
	// Which validation method to
	// use in order to prove domain ownership. Allowed values: `"txt"`, `"http"`, `"email"`.
	ValidationMethod  *string                           `pulumi:"validationMethod"`
	ValidationRecords []CertificatePackValidationRecord `pulumi:"validationRecords"`
	// How long the certificate is valid
	// for. Note: If using Let's Encrypt, this value can only be 90 days.
	// Allowed values: 14, 30, 90, 365.
	ValidityDays *int `pulumi:"validityDays"`
	// The DNS zone to which the certificate pack should be added.
	ZoneId *string `pulumi:"zoneId"`
}

type CertificatePackState struct {
	// Which certificate
	// authority to issue the certificate pack. Allowed values: `"digicert"`,
	// `"letsEncrypt"`.
	CertificateAuthority pulumi.StringPtrInput
	// Whether or not to include
	// Cloudflare branding. This will add `sni.cloudflaressl.com` as the Common Name
	// if set to `true`.
	CloudflareBranding pulumi.BoolPtrInput
	// List of hostnames to provision the certificate pack for.
	// Note: If using Let's Encrypt, you cannot use individual subdomains and only a
	// wildcard for subdomain is available.
	Hosts pulumi.StringArrayInput
	// Certificate pack configuration type.
	// Allowed values: `"custom"`, `"dedicatedCustom"`, `"advanced"`.
	Type             pulumi.StringPtrInput
	ValidationErrors CertificatePackValidationErrorArrayInput
	// Which validation method to
	// use in order to prove domain ownership. Allowed values: `"txt"`, `"http"`, `"email"`.
	ValidationMethod  pulumi.StringPtrInput
	ValidationRecords CertificatePackValidationRecordArrayInput
	// How long the certificate is valid
	// for. Note: If using Let's Encrypt, this value can only be 90 days.
	// Allowed values: 14, 30, 90, 365.
	ValidityDays pulumi.IntPtrInput
	// The DNS zone to which the certificate pack should be added.
	ZoneId pulumi.StringPtrInput
}

func (CertificatePackState) ElementType() reflect.Type {
	return reflect.TypeOf((*certificatePackState)(nil)).Elem()
}

type certificatePackArgs struct {
	// Which certificate
	// authority to issue the certificate pack. Allowed values: `"digicert"`,
	// `"letsEncrypt"`.
	CertificateAuthority *string `pulumi:"certificateAuthority"`
	// Whether or not to include
	// Cloudflare branding. This will add `sni.cloudflaressl.com` as the Common Name
	// if set to `true`.
	CloudflareBranding *bool `pulumi:"cloudflareBranding"`
	// List of hostnames to provision the certificate pack for.
	// Note: If using Let's Encrypt, you cannot use individual subdomains and only a
	// wildcard for subdomain is available.
	Hosts []string `pulumi:"hosts"`
	// Certificate pack configuration type.
	// Allowed values: `"custom"`, `"dedicatedCustom"`, `"advanced"`.
	Type             string                           `pulumi:"type"`
	ValidationErrors []CertificatePackValidationError `pulumi:"validationErrors"`
	// Which validation method to
	// use in order to prove domain ownership. Allowed values: `"txt"`, `"http"`, `"email"`.
	ValidationMethod  *string                           `pulumi:"validationMethod"`
	ValidationRecords []CertificatePackValidationRecord `pulumi:"validationRecords"`
	// How long the certificate is valid
	// for. Note: If using Let's Encrypt, this value can only be 90 days.
	// Allowed values: 14, 30, 90, 365.
	ValidityDays *int `pulumi:"validityDays"`
	// The DNS zone to which the certificate pack should be added.
	ZoneId string `pulumi:"zoneId"`
}

// The set of arguments for constructing a CertificatePack resource.
type CertificatePackArgs struct {
	// Which certificate
	// authority to issue the certificate pack. Allowed values: `"digicert"`,
	// `"letsEncrypt"`.
	CertificateAuthority pulumi.StringPtrInput
	// Whether or not to include
	// Cloudflare branding. This will add `sni.cloudflaressl.com` as the Common Name
	// if set to `true`.
	CloudflareBranding pulumi.BoolPtrInput
	// List of hostnames to provision the certificate pack for.
	// Note: If using Let's Encrypt, you cannot use individual subdomains and only a
	// wildcard for subdomain is available.
	Hosts pulumi.StringArrayInput
	// Certificate pack configuration type.
	// Allowed values: `"custom"`, `"dedicatedCustom"`, `"advanced"`.
	Type             pulumi.StringInput
	ValidationErrors CertificatePackValidationErrorArrayInput
	// Which validation method to
	// use in order to prove domain ownership. Allowed values: `"txt"`, `"http"`, `"email"`.
	ValidationMethod  pulumi.StringPtrInput
	ValidationRecords CertificatePackValidationRecordArrayInput
	// How long the certificate is valid
	// for. Note: If using Let's Encrypt, this value can only be 90 days.
	// Allowed values: 14, 30, 90, 365.
	ValidityDays pulumi.IntPtrInput
	// The DNS zone to which the certificate pack should be added.
	ZoneId pulumi.StringInput
}

func (CertificatePackArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*certificatePackArgs)(nil)).Elem()
}

type CertificatePackInput interface {
	pulumi.Input

	ToCertificatePackOutput() CertificatePackOutput
	ToCertificatePackOutputWithContext(ctx context.Context) CertificatePackOutput
}

func (*CertificatePack) ElementType() reflect.Type {
	return reflect.TypeOf((**CertificatePack)(nil)).Elem()
}

func (i *CertificatePack) ToCertificatePackOutput() CertificatePackOutput {
	return i.ToCertificatePackOutputWithContext(context.Background())
}

func (i *CertificatePack) ToCertificatePackOutputWithContext(ctx context.Context) CertificatePackOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificatePackOutput)
}

// CertificatePackArrayInput is an input type that accepts CertificatePackArray and CertificatePackArrayOutput values.
// You can construct a concrete instance of `CertificatePackArrayInput` via:
//
//          CertificatePackArray{ CertificatePackArgs{...} }
type CertificatePackArrayInput interface {
	pulumi.Input

	ToCertificatePackArrayOutput() CertificatePackArrayOutput
	ToCertificatePackArrayOutputWithContext(context.Context) CertificatePackArrayOutput
}

type CertificatePackArray []CertificatePackInput

func (CertificatePackArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CertificatePack)(nil)).Elem()
}

func (i CertificatePackArray) ToCertificatePackArrayOutput() CertificatePackArrayOutput {
	return i.ToCertificatePackArrayOutputWithContext(context.Background())
}

func (i CertificatePackArray) ToCertificatePackArrayOutputWithContext(ctx context.Context) CertificatePackArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificatePackArrayOutput)
}

// CertificatePackMapInput is an input type that accepts CertificatePackMap and CertificatePackMapOutput values.
// You can construct a concrete instance of `CertificatePackMapInput` via:
//
//          CertificatePackMap{ "key": CertificatePackArgs{...} }
type CertificatePackMapInput interface {
	pulumi.Input

	ToCertificatePackMapOutput() CertificatePackMapOutput
	ToCertificatePackMapOutputWithContext(context.Context) CertificatePackMapOutput
}

type CertificatePackMap map[string]CertificatePackInput

func (CertificatePackMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CertificatePack)(nil)).Elem()
}

func (i CertificatePackMap) ToCertificatePackMapOutput() CertificatePackMapOutput {
	return i.ToCertificatePackMapOutputWithContext(context.Background())
}

func (i CertificatePackMap) ToCertificatePackMapOutputWithContext(ctx context.Context) CertificatePackMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificatePackMapOutput)
}

type CertificatePackOutput struct{ *pulumi.OutputState }

func (CertificatePackOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**CertificatePack)(nil)).Elem()
}

func (o CertificatePackOutput) ToCertificatePackOutput() CertificatePackOutput {
	return o
}

func (o CertificatePackOutput) ToCertificatePackOutputWithContext(ctx context.Context) CertificatePackOutput {
	return o
}

type CertificatePackArrayOutput struct{ *pulumi.OutputState }

func (CertificatePackArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CertificatePack)(nil)).Elem()
}

func (o CertificatePackArrayOutput) ToCertificatePackArrayOutput() CertificatePackArrayOutput {
	return o
}

func (o CertificatePackArrayOutput) ToCertificatePackArrayOutputWithContext(ctx context.Context) CertificatePackArrayOutput {
	return o
}

func (o CertificatePackArrayOutput) Index(i pulumi.IntInput) CertificatePackOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *CertificatePack {
		return vs[0].([]*CertificatePack)[vs[1].(int)]
	}).(CertificatePackOutput)
}

type CertificatePackMapOutput struct{ *pulumi.OutputState }

func (CertificatePackMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CertificatePack)(nil)).Elem()
}

func (o CertificatePackMapOutput) ToCertificatePackMapOutput() CertificatePackMapOutput {
	return o
}

func (o CertificatePackMapOutput) ToCertificatePackMapOutputWithContext(ctx context.Context) CertificatePackMapOutput {
	return o
}

func (o CertificatePackMapOutput) MapIndex(k pulumi.StringInput) CertificatePackOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *CertificatePack {
		return vs[0].(map[string]*CertificatePack)[vs[1].(string)]
	}).(CertificatePackOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*CertificatePackInput)(nil)).Elem(), &CertificatePack{})
	pulumi.RegisterInputType(reflect.TypeOf((*CertificatePackArrayInput)(nil)).Elem(), CertificatePackArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*CertificatePackMapInput)(nil)).Elem(), CertificatePackMap{})
	pulumi.RegisterOutputType(CertificatePackOutput{})
	pulumi.RegisterOutputType(CertificatePackArrayOutput{})
	pulumi.RegisterOutputType(CertificatePackMapOutput{})
}
