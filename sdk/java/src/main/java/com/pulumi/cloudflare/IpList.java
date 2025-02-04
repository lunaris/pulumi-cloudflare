// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.cloudflare;

import com.pulumi.cloudflare.IpListArgs;
import com.pulumi.cloudflare.Utilities;
import com.pulumi.cloudflare.inputs.IpListState;
import com.pulumi.cloudflare.outputs.IpListItem;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Export;
import com.pulumi.core.annotations.ResourceType;
import com.pulumi.core.internal.Codegen;
import java.lang.String;
import java.util.List;
import java.util.Optional;
import javax.annotation.Nullable;

/**
 * IP Lists are a set of IP addresses or CIDR ranges that are configured on the account level. Once created, IP Lists can be
 * used in Firewall Rules across all zones within the same account.
 * 
 * ## Example Usage
 * ```java
 * package generated_program;
 * 
 * import com.pulumi.Context;
 * import com.pulumi.Pulumi;
 * import com.pulumi.core.Output;
 * import com.pulumi.cloudflare.IpList;
 * import com.pulumi.cloudflare.IpListArgs;
 * import com.pulumi.cloudflare.inputs.IpListItemArgs;
 * import java.util.List;
 * import java.util.ArrayList;
 * import java.util.Map;
 * import java.io.File;
 * import java.nio.file.Files;
 * import java.nio.file.Paths;
 * 
 * public class App {
 *     public static void main(String[] args) {
 *         Pulumi.run(App::stack);
 *     }
 * 
 *     public static void stack(Context ctx) {
 *         var example = new IpList(&#34;example&#34;, IpListArgs.builder()        
 *             .accountId(&#34;d41d8cd98f00b204e9800998ecf8427e&#34;)
 *             .description(&#34;list description&#34;)
 *             .items(            
 *                 IpListItemArgs.builder()
 *                     .comment(&#34;Office IP&#34;)
 *                     .value(&#34;192.0.2.1&#34;)
 *                     .build(),
 *                 IpListItemArgs.builder()
 *                     .comment(&#34;Datacenter range&#34;)
 *                     .value(&#34;203.0.113.0/24&#34;)
 *                     .build())
 *             .kind(&#34;ip&#34;)
 *             .name(&#34;example_list&#34;)
 *             .build());
 * 
 *     }
 * }
 * ```
 * 
 * ## Import
 * 
 * An existing IP List can be imported using the account ID and list ID
 * 
 * ```sh
 *  $ pulumi import cloudflare:index/ipList:IpList example d41d8cd98f00b204e9800998ecf8427e/cb029e245cfdd66dc8d2e570d5dd3322
 * ```
 * 
 */
@ResourceType(type="cloudflare:index/ipList:IpList")
public class IpList extends com.pulumi.resources.CustomResource {
    /**
     * The ID of the account where the IP List is being created.
     * 
     */
    @Export(name="accountId", type=String.class, parameters={})
    private Output<String> accountId;

    /**
     * @return The ID of the account where the IP List is being created.
     * 
     */
    public Output<String> accountId() {
        return this.accountId;
    }
    /**
     * A note that can be used to annotate the List. Maximum Length: 500
     * 
     */
    @Export(name="description", type=String.class, parameters={})
    private Output</* @Nullable */ String> description;

    /**
     * @return A note that can be used to annotate the List. Maximum Length: 500
     * 
     */
    public Output<Optional<String>> description() {
        return Codegen.optional(this.description);
    }
    @Export(name="items", type=List.class, parameters={IpListItem.class})
    private Output</* @Nullable */ List<IpListItem>> items;

    public Output<Optional<List<IpListItem>>> items() {
        return Codegen.optional(this.items);
    }
    /**
     * The kind of values in the List. Valid values: `ip`.
     * 
     */
    @Export(name="kind", type=String.class, parameters={})
    private Output<String> kind;

    /**
     * @return The kind of values in the List. Valid values: `ip`.
     * 
     */
    public Output<String> kind() {
        return this.kind;
    }
    /**
     * The name of the list (used in filter expressions). Valid pattern: `^[a-zA-Z0-9_]+$`. Maximum Length: 50
     * 
     */
    @Export(name="name", type=String.class, parameters={})
    private Output<String> name;

    /**
     * @return The name of the list (used in filter expressions). Valid pattern: `^[a-zA-Z0-9_]+$`. Maximum Length: 50
     * 
     */
    public Output<String> name() {
        return this.name;
    }

    /**
     *
     * @param name The _unique_ name of the resulting resource.
     */
    public IpList(String name) {
        this(name, IpListArgs.Empty);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     */
    public IpList(String name, IpListArgs args) {
        this(name, args, null);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param options A bag of options that control this resource's behavior.
     */
    public IpList(String name, IpListArgs args, @Nullable com.pulumi.resources.CustomResourceOptions options) {
        super("cloudflare:index/ipList:IpList", name, args == null ? IpListArgs.Empty : args, makeResourceOptions(options, Codegen.empty()));
    }

    private IpList(String name, Output<String> id, @Nullable IpListState state, @Nullable com.pulumi.resources.CustomResourceOptions options) {
        super("cloudflare:index/ipList:IpList", name, state, makeResourceOptions(options, id));
    }

    private static com.pulumi.resources.CustomResourceOptions makeResourceOptions(@Nullable com.pulumi.resources.CustomResourceOptions options, @Nullable Output<String> id) {
        var defaultOptions = com.pulumi.resources.CustomResourceOptions.builder()
            .version(Utilities.getVersion())
            .build();
        return com.pulumi.resources.CustomResourceOptions.merge(defaultOptions, options, id);
    }

    /**
     * Get an existing Host resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state
     * @param options Optional settings to control the behavior of the CustomResource.
     */
    public static IpList get(String name, Output<String> id, @Nullable IpListState state, @Nullable com.pulumi.resources.CustomResourceOptions options) {
        return new IpList(name, id, state, options);
    }
}
