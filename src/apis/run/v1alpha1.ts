// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace run_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Run Admin API
   *
   * Deploy and manage user provided container images that scale automatically based on HTTP traffic.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const run = google.run('v1alpha1');
   * ```
   */
  export class Run {
    context: APIRequestContext;
    namespaces: Resource$Namespaces;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.namespaces = new Resource$Namespaces(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Information for connecting over HTTP(s).
   */
  export interface Schema$Addressable {
    /**
     * Deprecated - use url instead.
     */
    hostname?: string | null;
    url?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Webmaster Central](https://www.google.com/webmasters/verification/home).
   */
  export interface Schema$AuthorizedDomain {
    /**
     * Relative name of the domain authorized for use. Example: `example.com`.
     */
    id?: string | null;
    /**
     * Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `apps/myapp/authorizedDomains/example.com`.
     */
    name?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Adds and removes POSIX capabilities from running containers.
   */
  export interface Schema$Capabilities {
    /**
     * Added capabilities +optional
     */
    add?: string[] | null;
    /**
     * Removed capabilities +optional
     */
    drop?: string[] | null;
  }
  /**
   * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$ConfigMapEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported Specify whether the ConfigMap must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key from a ConfigMap.
   */
  export interface Schema$ConfigMapKeySelector {
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The key to select.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Specify whether the ConfigMap or its key must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
   */
  export interface Schema$ConfigMapVolumeSource {
    /**
     * Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * Name of the config.
     */
    name?: string | null;
    /**
     * Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
  }
  /**
   * Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#configuration
   */
  export interface Schema$Configuration {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case always "Configuration".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Configuration, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Configuration (from the client).
     */
    spec?: Schema$ConfigurationSpec;
    /**
     * Status communicates the observed state of the Configuration (from the controller).
     */
    status?: Schema$ConfigurationStatus;
  }
  /**
   * ConfigurationCondition defines a readiness condition for a Configuration.
   */
  export interface Schema$ConfigurationCondition {
    /**
     * Last time the condition transitioned from one status to another. +optional
     */
    lastTransitionTime?: string | null;
    /**
     * Human-readable message indicating details about last transition. +optional
     */
    message?: string | null;
    /**
     * One-word CamelCase reason for the condition's last transition. +optional
     */
    reason?: string | null;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info +optional
     */
    severity?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * ConfigurationConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include:"Ready"
     */
    type?: string | null;
  }
  /**
   * ConfigurationSpec holds the desired state of the Configuration (from the client).
   */
  export interface Schema$ConfigurationSpec {
    /**
     * Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
     */
    generation?: number | null;
    /**
     * RevisionTemplate holds the latest specification for the Revision to be stamped out. The template references the container image, and may also include labels and annotations that should be attached to the Revision. To correlate a Revision, and/or to force a Revision to be created when the spec doesn't otherwise change, a nonce label may be provided in the template metadata. For more details, see: https://github.com/knative/serving/blob/master/docs/client-conventions.md#associate-modifications-with-revisions Cloud Run does not currently support referencing a build that is responsible for materializing the container image from source.
     */
    revisionTemplate?: Schema$RevisionTemplate;
    /**
     * Template holds the latest specification for the Revision to be stamped out.
     */
    template?: Schema$RevisionTemplate;
  }
  /**
   * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
   */
  export interface Schema$ConfigurationStatus {
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
     */
    conditions?: Schema$ConfigurationCondition[];
    /**
     * LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string | null;
    /**
     * LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True".
     */
    latestReadyRevisionName?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
  }
  /**
   * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
   */
  export interface Schema$Container {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
     */
    args?: string[] | null;
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
     */
    command?: string[] | null;
    /**
     * List of environment variables to set in the container. Cannot be updated. +optional
     */
    env?: Schema$EnvVar[];
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. +optional
     */
    envFrom?: Schema$EnvFromSource[];
    /**
     * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images
     */
    image?: string | null;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images +optional
     */
    imagePullPolicy?: string | null;
    /**
     * Actions that the management system should take in response to container lifecycle events. Cannot be updated. +optional
     */
    lifecycle?: Schema$Lifecycle;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    livenessProbe?: Schema$Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container must have a unique name (DNS_LABEL). Cannot be updated.
     */
    name?: string | null;
    /**
     * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. +optional
     */
    ports?: Schema$ContainerPort[];
    /**
     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    readinessProbe?: Schema$Probe;
    /**
     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources +optional
     */
    resources?: Schema$ResourceRequirements;
    /**
     * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ +optional
     */
    securityContext?: Schema$SecurityContext;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. +optional
     */
    stdin?: boolean | null;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false +optional
     */
    stdinOnce?: boolean | null;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. +optional
     */
    terminationMessagePath?: string | null;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. +optional
     */
    terminationMessagePolicy?: string | null;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. +optional
     */
    tty?: boolean | null;
    /**
     * volumeDevices is the list of block devices to be used by the container. This is an alpha feature and may change in the future. +optional
     */
    volumeDevices?: Schema$VolumeDevice[];
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated. +optional
     */
    volumeMounts?: Schema$VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. +optional
     */
    workingDir?: string | null;
  }
  /**
   * ContainerPort represents a network port in a single container.
   */
  export interface Schema$ContainerPort {
    /**
     * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
     */
    containerPort?: number | null;
    /**
     * What host IP to bind the external port to. +optional
     */
    hostIP?: string | null;
    /**
     * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. +optional
     */
    hostPort?: number | null;
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. +optional
     */
    name?: string | null;
    /**
     * Protocol for port. Must be UDP or TCP. Defaults to "TCP". +optional
     */
    protocol?: string | null;
  }
  /**
   * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
   */
  export interface Schema$DomainMapping {
    /**
     * The API version for this call such as "domains.cloudrun.com/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case "DomainMapping".
     */
    kind?: string | null;
    /**
     * Metadata associated with this BuildTemplate.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * The spec for this DomainMapping.
     */
    spec?: Schema$DomainMappingSpec;
    /**
     * The current status of the DomainMapping.
     */
    status?: Schema$DomainMappingStatus;
  }
  /**
   * DomainMappingCondition contains state information for a DomainMapping.
   */
  export interface Schema$DomainMappingCondition {
    /**
     * Last time the condition transitioned from one status to another. +optional
     */
    lastTransitionTime?: string | null;
    /**
     * Human readable message indicating details about the current status. +optional
     */
    message?: string | null;
    /**
     * One-word CamelCase reason for the condition's current status. +optional
     */
    reason?: string | null;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info +optional
     */
    severity?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * Type of domain mapping condition.
     */
    type?: string | null;
  }
  /**
   * The desired state of the Domain Mapping.
   */
  export interface Schema$DomainMappingSpec {
    /**
     * The mode of the certificate.
     */
    certificateMode?: string | null;
    /**
     * If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning.
     */
    forceOverride?: boolean | null;
    /**
     * The name of the Knative Route that this DomainMapping applies to. The route must exist.
     */
    routeName?: string | null;
  }
  /**
   * The current state of the Domain Mapping.
   */
  export interface Schema$DomainMappingStatus {
    /**
     * Array of observed DomainMappingConditions, indicating the current state of the DomainMapping.
     */
    conditions?: Schema$DomainMappingCondition[];
    /**
     * The name of the route that the mapping currently points to.
     */
    mappedRouteName?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.
     */
    resourceRecords?: Schema$ResourceRecord[];
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Holds the URL that will serve the traffic of the DomainMapping. +optional
     */
    url?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * EnvFromSource represents the source of a set of ConfigMaps
   */
  export interface Schema$EnvFromSource {
    /**
     * The ConfigMap to select from +optional
     */
    configMapRef?: Schema$ConfigMapEnvSource;
    /**
     * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. +optional
     */
    prefix?: string | null;
    /**
     * The Secret to select from +optional
     */
    secretRef?: Schema$SecretEnvSource;
  }
  /**
   * EnvVar represents an environment variable present in a Container.
   */
  export interface Schema$EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     */
    name?: string | null;
    /**
     * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". +optional
     */
    value?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Source for the environment variable's value. Cannot be used if value is not empty. +optional
     */
    valueFrom?: Schema$EnvVarSource;
  }
  /**
   * Cloud Run fully managed: not supported Cloud Run on GKE: supported EnvVarSource represents a source for the value of an EnvVar.
   */
  export interface Schema$EnvVarSource {
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key of a ConfigMap. +optional
     */
    configMapKeyRef?: Schema$ConfigMapKeySelector;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key of a secret in the pod's namespace +optional
     */
    secretKeyRef?: Schema$SecretKeySelector;
  }
  /**
   * ExecAction describes a "run in container" action.
   */
  export interface Schema$ExecAction {
    /**
     * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional
     */
    command?: string[] | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Handler defines a specific action that should be taken
   */
  export interface Schema$Handler {
    /**
     * One and only one of the following should be specified. Exec specifies the action to take. +optional
     */
    exec?: Schema$ExecAction;
    /**
     * HTTPGet specifies the http request to perform. +optional
     */
    httpGet?: Schema$HTTPGetAction;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
     */
    tcpSocket?: Schema$TCPSocketAction;
  }
  /**
   * HTTPGetAction describes an action based on HTTP Get requests.
   */
  export interface Schema$HTTPGetAction {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. +optional
     */
    host?: string | null;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers. +optional
     */
    httpHeaders?: Schema$HTTPHeader[];
    /**
     * Path to access on the HTTP server. +optional
     */
    path?: string | null;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port?: Schema$IntOrString;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP. +optional
     */
    scheme?: string | null;
  }
  /**
   * HTTPHeader describes a custom header to be used in HTTP probes
   */
  export interface Schema$HTTPHeader {
    /**
     * The header field name
     */
    name?: string | null;
    /**
     * The header field value
     */
    value?: string | null;
  }
  /**
   * InstanceSpec is a description of an instance.
   */
  export interface Schema$InstanceSpec {
    /**
     * Optional. Optional duration in seconds the instance may be active relative to StartTime before the system will actively try to mark it failed and kill associated containers. If set to zero, the system will never attempt to kill an instance based on time. Otherwise, value must be a positive integer. +optional
     */
    activeDeadlineSeconds?: string | null;
    /**
     * Optional. List of containers belonging to the instance. We disallow a number of fields on this Container. Only a single container may be provided.
     */
    containers?: Schema$Container[];
    /**
     * Optional. Restart policy for all containers within the instance. Allowed values are: - OnFailure: Instances will always be restarted on failure if the backoffLimit has not been reached. - Never: Instances are never restarted and all failures are permanent. Cannot be used if backoffLimit is set. +optional
     */
    restartPolicy?: string | null;
    /**
     * Optional. Email address of the IAM service account associated with the instance of a Job. The service account represents the identity of the running instance, and determines what permissions the instance has. If not provided, the instance will use the project's default service account. +optional
     */
    serviceAccountName?: string | null;
    /**
     * Optional. Optional duration in seconds the instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates delete immediately. The grace period is the duration in seconds after the processes running in the instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. +optional
     */
    terminationGracePeriodSeconds?: string | null;
    /**
     * Optional. List of volumes that can be mounted by containers belonging to the instance. More info: https://kubernetes.io/docs/concepts/storage/volumes +optional
     */
    volumes?: Schema$Volume[];
  }
  /**
   * Instance represents the status of an instance of a Job.
   */
  export interface Schema$InstanceStatus {
    /**
     * Optional. Represents time when the instance was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string | null;
    /**
     * Optional. The number of times this instance exited with code \> 0; +optional
     */
    failed?: number | null;
    /**
     * Required. Index of the instance, unique per Job, and beginning at 0.
     */
    index?: number | null;
    /**
     * Optional. Last exit code seen for this instance. +optional
     */
    lastExitCode?: number | null;
    /**
     * Optional. The number of times this instance was restarted. Instances are restarted according the restartPolicy configured in the Job template. +optional
     */
    restarted?: number | null;
    /**
     * Optional. Represents time when the instance was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    startTime?: string | null;
    /**
     * Optional. The number of times this instance exited with code == 0. +optional
     */
    succeeded?: number | null;
  }
  /**
   * InstanceTemplateSpec describes the data an instance should have when created from a template.
   */
  export interface Schema$InstanceTemplateSpec {
    /**
     * Optional. Specification of the desired behavior of the instance. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status +optional
     */
    spec?: Schema$InstanceSpec;
  }
  /**
   * IntOrString is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.
   */
  export interface Schema$IntOrString {
    /**
     * The int value.
     */
    intVal?: number | null;
    /**
     * The string value.
     */
    strVal?: string | null;
    /**
     * The type of the value.
     */
    type?: number | null;
  }
  /**
   * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
   */
  export interface Schema$Job {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional
     */
    apiVersion?: string | null;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional
     */
    kind?: string | null;
    /**
     * Optional. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Optional. Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status +optional
     */
    spec?: Schema$JobSpec;
    /**
     * Optional. Current status of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status +optional
     */
    status?: Schema$JobStatus;
  }
  /**
   * JobCondition defines a readiness condition for a Revision.
   */
  export interface Schema$JobCondition {
    /**
     * Optional. Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Optional. Human readable message indicating details about the current status.
     */
    message?: string | null;
    /**
     * Optional. One-word CamelCase reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Optional. How to interpret failures of this condition, one of Error, Warning, Info
     */
    severity?: string | null;
    /**
     * Required. Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * Required. Type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Completed": True when the Job has successfully completed. * "Started": True when the Job has successfully started running. * "ResourcesAvailable": True when underlying resources have been provisioned.
     */
    type?: string | null;
  }
  /**
   * JobSpec describes how the job execution will look like.
   */
  export interface Schema$JobSpec {
    /**
     * Optional. Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it. If set to zero, the system will never attempt to terminate the job based on time. Otherwise, the value must be positive integer. +optional
     */
    activeDeadlineSeconds?: string | null;
    /**
     * Optional. Specifies the number of retries per instance, before marking this job failed. If set to zero, instances will never retry on failure. +optional
     */
    backoffLimit?: number | null;
    /**
     * Optional. Specifies the desired number of successfully finished instances the job should be run with. Setting to 1 means that parallelism is limited to 1 and the success of that instance signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    completions?: number | null;
    /**
     * Optional. Specifies the maximum desired number of instances the job should run at any given time. Must be <= completions. The actual number of instances running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    parallelism?: number | null;
    /**
     * Optional. Describes the instance that will be created when executing a job.
     */
    template?: Schema$InstanceTemplateSpec;
    /**
     * Optional. ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is set to zero, the Job won't be automatically deleted. +optional
     */
    ttlSecondsAfterFinished?: number | null;
  }
  /**
   * JobStatus represents the current state of a Job.
   */
  export interface Schema$JobStatus {
    /**
     * Optional. The number of actively running instances. +optional
     */
    active?: number | null;
    /**
     * Optional. Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string | null;
    /**
     * Optional. The latest available observations of a job's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    conditions?: Schema$JobCondition[];
    /**
     * Optional. The number of instances which reached phase Failed. +optional
     */
    failed?: number | null;
    /**
     * Optional. ImageDigest holds the resolved digest for the image specified within .Spec.Template.Spec.Container.Image. The digest is resolved during the creation of the Job. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string | null;
    /**
     * Optional. Status of completed, failed, and running instances. +optional
     */
    instances?: Schema$InstanceStatus[];
    /**
     * Optional. The 'generation' of the job that was last processed by the controller.
     */
    observedGeneration?: number | null;
    /**
     * Optional. Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    startTime?: string | null;
    /**
     * Optional. The number of instances which reached phase Succeeded. +optional
     */
    succeeded?: number | null;
  }
  /**
   * Maps a string key to a path within a volume.
   */
  export interface Schema$KeyToPath {
    /**
     * The key to project.
     */
    key?: string | null;
    /**
     * Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. +optional
     */
    mode?: number | null;
    /**
     * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
     */
    path?: string | null;
  }
  /**
   * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
   */
  export interface Schema$Lifecycle {
    /**
     * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks +optional
     */
    postStart?: Schema$Handler;
    /**
     * PreStop is called immediately before a container is terminated. The container is terminated after the handler completes. The reason for termination is passed to the handler. Regardless of the outcome of the handler, the container is eventually terminated. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks +optional
     */
    preStop?: Schema$Handler;
  }
  /**
   * A list of Authorized Domains.
   */
  export interface Schema$ListAuthorizedDomainsResponse {
    /**
     * The authorized domains belonging to the user.
     */
    domains?: Schema$AuthorizedDomain[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * ListConfigurationsResponse is a list of Configuration resources.
   */
  export interface Schema$ListConfigurationsResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of Configurations.
     */
    items?: Schema$Configuration[];
    /**
     * The kind of this resource, in this case "ConfigurationList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Configuration list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListDomainMappingsResponse is a list of DomainMapping resources.
   */
  export interface Schema$ListDomainMappingsResponse {
    /**
     * The API version for this call such as "domains.cloudrun.com/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of DomainMappings.
     */
    items?: Schema$DomainMapping[];
    /**
     * The kind of this resource, in this case "DomainMappingList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this DomainMapping list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListJobsResponse is a list of Jobs resources.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The API version for this call such as "run.googleapis.com/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of Jobs.
     */
    items?: Schema$Job[];
    /**
     * The kind of this resource, in this case "JobsList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this jobs list.
     */
    metadata?: Schema$ListMeta;
    /**
     * This field is equivalent to the metadata.continue field and is provided as a convenience for compatibility with https://google.aip.dev/158. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The metadata.resourceVersion field returned when using this field will be identical to the value in the first response.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta\}.
   */
  export interface Schema$ListMeta {
    /**
     * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response.
     */
    continue?: string | null;
    /**
     * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
     */
    resourceVersion?: string | null;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only. +optional
     */
    selfLink?: string | null;
  }
  /**
   * ListRevisionsResponse is a list of Revision resources.
   */
  export interface Schema$ListRevisionsResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of Revisions.
     */
    items?: Schema$Revision[];
    /**
     * The kind of this resource, in this case "RevisionList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this revision list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListRoutesResponse is a list of Route resources.
   */
  export interface Schema$ListRoutesResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of Routes.
     */
    items?: Schema$Route[];
    /**
     * The kind of this resource, in this case always "RouteList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Route list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A list of Service resources.
   */
  export interface Schema$ListServicesResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of Services.
     */
    items?: Schema$Service[];
    /**
     * The kind of this resource, in this case "ServiceList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Service list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
   */
  export interface Schema$LocalObjectReference {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  export interface Schema$ObjectMeta {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations +optional
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Not currently supported by Cloud Run. The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. +optional
     */
    clusterName?: string | null;
    /**
     * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC. Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
     */
    creationTimestamp?: string | null;
    /**
     * Not currently supported by Cloud Run. Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. +optional
     */
    deletionGracePeriodSeconds?: number | null;
    /**
     * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested. Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
     */
    deletionTimestamp?: string | null;
    /**
     * Not currently supported by Cloud Run. Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. +optional +patchStrategy=merge
     */
    finalizers?: string[] | null;
    /**
     * Not currently supported by Cloud Run. GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency +optional string generateName = 2;
     */
    generateName?: string | null;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. +optional
     */
    generation?: number | null;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: http://kubernetes.io/docs/user-guide/labels +optional
     */
    labels?: {[key: string]: string} | null;
    /**
     * Name must be unique within a namespace, within a Cloud Run region. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional
     */
    name?: string | null;
    /**
     * Namespace defines the space within each name must be unique, within a Cloud Run region. In Cloud Run the namespace must be equal to either the project ID or project number.
     */
    namespace?: string | null;
    /**
     * List of objects that own this object. If ALL objects in the list have been deleted, this object will be garbage collected. +optional
     */
    ownerReferences?: Schema$OwnerReference[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources. Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
     */
    resourceVersion?: string | null;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only. +optional string selfLink = 4;
     */
    selfLink?: string | null;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations. Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids +optional
     */
    uid?: string | null;
  }
  /**
   * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
   */
  export interface Schema$OwnerReference {
    /**
     * API version of the referent.
     */
    apiVersion?: string | null;
    /**
     * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
     */
    blockOwnerDeletion?: boolean | null;
    /**
     * If true, this reference points to the managing controller. +optional
     */
    controller?: boolean | null;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string | null;
    /**
     * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
   */
  export interface Schema$Probe {
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. +optional
     */
    failureThreshold?: number | null;
    /**
     * The action taken to determine the health of a container
     */
    handler?: Schema$Handler;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    initialDelaySeconds?: number | null;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional
     */
    periodSeconds?: number | null;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1. +optional
     */
    successThreshold?: number | null;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    timeoutSeconds?: number | null;
  }
  /**
   * The view model of a single quantity, e.g. "800 MiB". Corresponds to https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/generated.proto
   */
  export interface Schema$Quantity {
    /**
     * Stringified version of the quantity, e.g., "800 MiB".
     */
    string?: string | null;
  }
  /**
   * A DNS resource record.
   */
  export interface Schema$ResourceRecord {
    /**
     * Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: 'www'.
     */
    name?: string | null;
    /**
     * Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
     */
    rrdata?: string | null;
    /**
     * Resource record type. Example: `AAAA`.
     */
    type?: string | null;
  }
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  export interface Schema$ResourceRequirements {
    /**
     * Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    limits?: {[key: string]: string} | null;
    /**
     * Limits describes the maximum amount of compute resources allowed. This is a temporary field created to migrate away from the map limits field. This is done to become compliant with k8s style API. This field is deprecated in favor of limits field.
     */
    limitsInMap?: {[key: string]: Schema$Quantity} | null;
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    requests?: {[key: string]: string} | null;
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. This is a temporary field created to migrate away from the map requests field. This is done to become compliant with k8s style API. This field is deprecated in favor of requests field.
     */
    requestsInMap?: {[key: string]: Schema$Quantity} | null;
  }
  /**
   * Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. Cloud Run does not currently support referencing a build that is responsible for materializing the container image from source. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#revision
   */
  export interface Schema$Revision {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * The kind of this resource, in this case "Revision".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Revision, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Revision (from the client).
     */
    spec?: Schema$RevisionSpec;
    /**
     * Status communicates the observed state of the Revision (from the controller).
     */
    status?: Schema$RevisionStatus;
  }
  /**
   * RevisionCondition defines a readiness condition for a Revision.
   */
  export interface Schema$RevisionCondition {
    /**
     * Last time the condition transitioned from one status to another. +optional
     */
    lastTransitionTime?: string | null;
    /**
     * Human readable message indicating details about the current status. +optional
     */
    message?: string | null;
    /**
     * One-word CamelCase reason for the condition's last transition. +optional
     */
    reason?: string | null;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info +optional
     */
    severity?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * RevisionConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Ready": True when the Revision is ready. * "ResourcesAvailable": True when underlying resources have been provisioned. * "ContainerHealthy": True when the Revision readiness check completes. * "Active": True when the Revision may receive traffic.
     */
    type?: string | null;
  }
  /**
   * RevisionSpec holds the desired state of the Revision (from the client).
   */
  export interface Schema$RevisionSpec {
    /**
     * ConcurrencyModel specifies the desired concurrency model (Single or Multi) for the Revision. Defaults to Multi. Deprecated in favor of ContainerConcurrency. +optional
     */
    concurrencyModel?: string | null;
    /**
     * Container defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of the fields of this Container, including: name, ports, and volumeMounts. The runtime contract is documented here: https://github.com/knative/serving/blob/master/docs/runtime-contract.md
     */
    container?: Schema$Container;
    /**
     * (Optional) ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. Cloud Run fully managed: supported, defaults to 80 Cloud Run on GKE: supported, defaults to 0, which means concurrency to the application is not limited, and the system decides the target concurrency for the autoscaler.
     */
    containerConcurrency?: number | null;
    /**
     * Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided.
     */
    containers?: Schema$Container[];
    /**
     * Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
     */
    generation?: number | null;
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
     */
    serviceAccountName?: string | null;
    /**
     * ServingState holds a value describing the state the resources are in for this Revision. Users must not specify this when creating a revision. It is expected that the system will manipulate this based on routability and load. Populated by the system. Read-only.
     */
    servingState?: string | null;
    /**
     * TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Not currently used by Cloud Run.
     */
    timeoutSeconds?: number | null;
    volumes?: Schema$Volume[];
  }
  /**
   * RevisionStatus communicates the observed state of the Revision (from the controller).
   */
  export interface Schema$RevisionStatus {
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions "ResourcesAvailable", "ContainerHealthy", and "Active", which contribute to the overall "Ready" condition.
     */
    conditions?: Schema$RevisionCondition[];
    /**
     * ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string | null;
    /**
     * Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config. +optional
     */
    logUrl?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * Not currently used by Cloud Run.
     */
    serviceName?: string | null;
  }
  /**
   * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
   */
  export interface Schema$RevisionTemplate {
    /**
     * Optional metadata for this Revision, including labels and annotations. Name will be generated by the Configuration. To set minimum instances for this revision, use the "autoscaling.knative.dev/minScale" annotation key. (Cloud Run on GKE only). To set maximum instances for this revision, use the "autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL connections for the revision, use the "run.googleapis.com/cloudsql-instances" annotation key. Values should be comma separated.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * RevisionSpec holds the desired state of the Revision (from the client).
     */
    spec?: Schema$RevisionSpec;
  }
  /**
   * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration.
   */
  export interface Schema$Route {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * The kind of this resource, in this case always "Route".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Route, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Route (from the client).
     */
    spec?: Schema$RouteSpec;
    /**
     * Status communicates the observed state of the Route (from the controller).
     */
    status?: Schema$RouteStatus;
  }
  /**
   * RouteCondition defines a readiness condition for a Route.
   */
  export interface Schema$RouteCondition {
    /**
     * Last time the condition transitioned from one status to another. +optional
     */
    lastTransitionTime?: string | null;
    /**
     * Human-readable message indicating details about last transition. +optional
     */
    message?: string | null;
    /**
     * One-word CamelCase reason for the condition's last transition. +optional
     */
    reason?: string | null;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info +optional
     */
    severity?: string | null;
    /**
     * Status of the condition, one of "True", "False", "Unknown".
     */
    status?: string | null;
    /**
     * RouteConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: "Ready".
     */
    type?: string | null;
  }
  /**
   * RouteSpec holds the desired state of the Route (from the client).
   */
  export interface Schema$RouteSpec {
    /**
     * Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
     */
    generation?: number | null;
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName.
     */
    traffic?: Schema$TrafficTarget[];
  }
  /**
   * RouteStatus communicates the observed state of the Route (from the controller).
   */
  export interface Schema$RouteStatus {
    /**
     * Similar to url, information on where the service is available on HTTP.
     */
    address?: Schema$Addressable;
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
     */
    conditions?: Schema$RouteCondition[];
    /**
     * Deprecated - use url instead. Domain holds the top-level domain that will distribute traffic over the provided targets.
     */
    domain?: string | null;
    /**
     * Deprecated - use address instead. For Cloud Run, identifical to domain.
     */
    domainInternal?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. Note that providing a trafficTarget that only has a configurationName will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new "latest ready" revisions from the Configuration are processed without an update to the Route's spec.
     */
    observedGeneration?: number | null;
    /**
     * Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: Schema$TrafficTarget[];
    /**
     * URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash\}-{project-hash\}-{cluster-level-suffix\}.a.run.app
     */
    url?: string | null;
  }
  /**
   * SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$SecretEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported The Secret to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported Specify whether the Secret must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported Cloud Run on GKE: supported SecretKeySelector selects a key of a Secret.
   */
  export interface Schema$SecretKeySelector {
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The key of the secret to select from. Must be a valid secret key.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The name of the secret in the pod's namespace to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Specify whether the Secret or its key must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
   */
  export interface Schema$SecretVolumeSource {
    /**
     * Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
    /**
     * Name of the secret in the container's namespace to use.
     */
    secretName?: string | null;
  }
  /**
   * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
   */
  export interface Schema$SecurityContext {
    /**
     * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN +optional
     */
    allowPrivilegeEscalation?: boolean | null;
    /**
     * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. +optional
     */
    capabilities?: Schema$Capabilities;
    /**
     * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. +optional
     */
    privileged?: boolean | null;
    /**
     * Whether this container has a read-only root filesystem. Default is false. +optional
     */
    readOnlyRootFilesystem?: boolean | null;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsGroup?: number | null;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsNonRoot?: boolean | null;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsUser?: number | null;
    /**
     * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    seLinuxOptions?: Schema$SELinuxOptions;
  }
  /**
   * SELinuxOptions are the labels to be applied to the container
   */
  export interface Schema$SELinuxOptions {
    /**
     * Level is SELinux level label that applies to the container. +optional
     */
    level?: string | null;
    /**
     * Role is a SELinux role label that applies to the container. +optional
     */
    role?: string | null;
    /**
     * Type is a SELinux type label that applies to the container. +optional
     */
    type?: string | null;
    /**
     * User is a SELinux user label that applies to the container. +optional
     */
    user?: string | null;
  }
  /**
   * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#service
   */
  export interface Schema$Service {
    /**
     * The API version for this call such as "serving.knative.dev/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case "Service".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Service, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Service (from the client).
     */
    spec?: Schema$ServiceSpec;
    /**
     * Status communicates the observed state of the Service (from the controller).
     */
    status?: Schema$ServiceStatus;
  }
  /**
   * ServiceCondition defines a readiness condition for a Service.
   */
  export interface Schema$ServiceCondition {
    /**
     * Last time the condition transitioned from one status to another. +optional
     */
    lastTransitionTime?: string | null;
    /**
     * Human-readable message indicating details about last transition. +optional
     */
    message?: string | null;
    /**
     * One-word CamelCase reason for the condition's last transition. +optional
     */
    reason?: string | null;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info +optional
     */
    severity?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * ServiceConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: "Ready", "ConfigurationsReady", and "RoutesReady". "Ready" will be true when the underlying Route and Configuration are ready.
     */
    type?: string | null;
  }
  /**
   * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
   */
  export interface Schema$ServiceSpec {
    /**
     * Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
     */
    generation?: number | null;
    /**
     * Manual contains the options for configuring a manual service. See ServiceSpec for more details. Not currently supported by Cloud Run.
     */
    manual?: Schema$ServiceSpecManualType;
    /**
     * Pins this service to a specific revision name. The revision must be owned by the configuration provided. Deprecated and not supported by Cloud Run. +optional
     */
    pinned?: Schema$ServiceSpecPinnedType;
    /**
     * Release enables gradual promotion of new revisions by allowing traffic to be split between two revisions. This type replaces the deprecated Pinned type. Not currently supported by Cloud Run.
     */
    release?: Schema$ServiceSpecReleaseType;
    /**
     * RunLatest defines a simple Service. It will automatically configure a route that keeps the latest ready revision from the supplied configuration running. +optional
     */
    runLatest?: Schema$ServiceSpecRunLatest;
    /**
     * Template holds the latest specification for the Revision to be stamped out.
     */
    template?: Schema$RevisionTemplate;
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations.
     */
    traffic?: Schema$TrafficTarget[];
  }
  /**
   * ServiceSpecManualType contains the options for configuring a manual service. See ServiceSpec for more details. Not currently supported by Cloud Run.
   */
  export interface Schema$ServiceSpecManualType {}
  /**
   * ServiceSpecPinnedType Pins this service to a specific revision name. The revision must be owned by the configuration provided. Deprecated and not supported by Cloud Run.
   */
  export interface Schema$ServiceSpecPinnedType {
    /**
     * The configuration for this service.
     */
    configuration?: Schema$ConfigurationSpec;
    /**
     * The revision name to pin this service to until changed to a different service type.
     */
    revisionName?: string | null;
  }
  /**
   * ServiceSpecReleaseType contains the options for slowly releasing revisions. See ServiceSpec for more details. Not currently supported by Cloud Run.
   */
  export interface Schema$ServiceSpecReleaseType {
    /**
     * The configuration for this service. All revisions from this service must come from a single configuration.
     */
    configuration?: Schema$ConfigurationSpec;
    /**
     * Revisions is an ordered list of 1 or 2 revisions. The first is the current revision, and the second is the candidate revision. If a single revision is provided, traffic will be pinned at that revision. "@latest" is a shortcut for usage that refers to the latest created revision by the configuration.
     */
    revisions?: string[] | null;
    /**
     * RolloutPercent is the percent of traffic that should be sent to the candidate revision, i.e. the 2nd revision in the revisions list. Valid values are between 0 and 99 inclusive.
     */
    rolloutPercent?: number | null;
  }
  /**
   * ServiceSpecRunLatest contains the options for always having a route to the latest configuration. See ServiceSpec for more details.
   */
  export interface Schema$ServiceSpecRunLatest {
    /**
     * The configuration for this service.
     */
    configuration?: Schema$ConfigurationSpec;
  }
  /**
   * The current state of the Service. Output only.
   */
  export interface Schema$ServiceStatus {
    /**
     * From RouteStatus. Similar to url, information on where the service is available on HTTP.
     */
    address?: Schema$Addressable;
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
     */
    conditions?: Schema$ServiceCondition[];
    /**
     * From RouteStatus. Domain holds the top-level domain that will distribute traffic over the provided targets. It generally has the form https://{route-hash\}-{project-hash\}-{cluster-level-suffix\}.a.run.app
     */
    domain?: string | null;
    /**
     * From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string | null;
    /**
     * From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision stamped out from this Service's Configuration that has had its "Ready" condition become "True".
     */
    latestReadyRevisionName?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * From RouteStatus. Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: Schema$TrafficTarget[];
    /**
     * From RouteStatus. URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash\}-{project-hash\}-{cluster-level-suffix\}.a.run.app
     */
    url?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * TCPSocketAction describes an action based on opening a socket
   */
  export interface Schema$TCPSocketAction {
    /**
     * Optional: Host name to connect to, defaults to the pod IP. +optional
     */
    host?: string | null;
    /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port?: Schema$IntOrString;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * TrafficTarget holds a single entry of the routing table for a Route.
   */
  export interface Schema$TrafficTarget {
    /**
     * ConfigurationName of a configuration to whose latest revision we will send this portion of traffic. When the "status.latestReadyRevisionName" of the referenced configuration changes, we will automatically migrate traffic from the prior "latest ready" revision to the new one. This field is never set in Route's status, only its spec. This is mutually exclusive with RevisionName. Cloud Run currently supports a single ConfigurationName.
     */
    configurationName?: string | null;
    /**
     * LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target. When provided LatestRevision must be true if RevisionName is empty; it must be false when RevisionName is non-empty. +optional
     */
    latestRevision?: boolean | null;
    /**
     * Name is optionally used to expose a dedicated hostname for referencing this target exclusively. Not currently supported by Cloud Run. +optional
     */
    name?: string | null;
    /**
     * Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified. Cloud Run currently requires 100 percent for a single ConfigurationName TrafficTarget entry.
     */
    percent?: number | null;
    /**
     * RevisionName of a specific revision to which to send this portion of traffic. This is mutually exclusive with ConfigurationName. Providing RevisionName in spec is not currently supported by Cloud Run.
     */
    revisionName?: string | null;
    /**
     * Tag is optionally used to expose a dedicated url for referencing this target exclusively. Not currently supported in Cloud Run. +optional
     */
    tag?: string | null;
    /**
     * Output only. URL displays the URL for accessing named traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc. Not currently supported in Cloud Run.
     */
    url?: string | null;
  }
  /**
   * Volume represents a named volume in a container.
   */
  export interface Schema$Volume {
    configMap?: Schema$ConfigMapVolumeSource;
    /**
     * Volume's name.
     */
    name?: string | null;
    secret?: Schema$SecretVolumeSource;
  }
  /**
   * volumeDevice describes a mapping of a raw block device within a container.
   */
  export interface Schema$VolumeDevice {
    /**
     * devicePath is the path inside of the container that the device will be mapped to.
     */
    devicePath?: string | null;
    /**
     * name must match the name of a persistentVolumeClaim in the pod
     */
    name?: string | null;
  }
  /**
   * VolumeMount describes a mounting of a Volume within a container.
   */
  export interface Schema$VolumeMount {
    /**
     * Path within the container at which the volume should be mounted. Must not contain ':'.
     */
    mountPath?: string | null;
    /**
     * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationHostToContainer is used. This field is beta in 1.10. +optional
     */
    mountPropagation?: string | null;
    /**
     * This must match the Name of a Volume.
     */
    name?: string | null;
    /**
     * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. +optional
     */
    readOnly?: boolean | null;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). +optional
     */
    subPath?: string | null;
  }

  export class Resource$Namespaces {
    context: APIRequestContext;
    authorizeddomains: Resource$Namespaces$Authorizeddomains;
    configurations: Resource$Namespaces$Configurations;
    domainmappings: Resource$Namespaces$Domainmappings;
    jobs: Resource$Namespaces$Jobs;
    revisions: Resource$Namespaces$Revisions;
    routes: Resource$Namespaces$Routes;
    services: Resource$Namespaces$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains = new Resource$Namespaces$Authorizeddomains(
        this.context
      );
      this.configurations = new Resource$Namespaces$Configurations(
        this.context
      );
      this.domainmappings = new Resource$Namespaces$Domainmappings(
        this.context
      );
      this.jobs = new Resource$Namespaces$Jobs(this.context);
      this.revisions = new Resource$Namespaces$Revisions(this.context);
      this.routes = new Resource$Namespaces$Routes(this.context);
      this.services = new Resource$Namespaces$Services(this.context);
    }
  }

  export class Resource$Namespaces$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * RPC to list authorized domains.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.authorizeddomains.list({
     *     // Maximum results to return per page.
     *     pageSize: 'placeholder-value',
     *     // Continuation token for fetching the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Name of the parent Application resource. Example: `apps/myapp`.
     *     parent: 'namespaces/my-namespace',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAuthorizedDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Authorizeddomains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/domains.cloudrun.com/v1alpha1/{+parent}/authorizeddomains'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Namespaces$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Application resource. Example: `apps/myapp`.
     */
    parent?: string;
  }

  export class Resource$Namespaces$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to get information about a configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.configurations.get({
     *     // The name of the configuration being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/configurations/my-configuration',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Configurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Configuration> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * Rpc to list configurations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.configurations.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the configurations should be listed.
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Configurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConfigurationsResponse>;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConfigurationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/serving.knative.dev/v1alpha1/{+parent}/configurations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Configurations$Get
    extends StandardParameters {
    /**
     * The name of the configuration being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Configurations$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the configurations should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Domainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new domain mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.domainmappings.create({
     *     // The project ID or project number in which this domain mapping should be created.
     *     parent: 'namespaces/my-namespace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Namespaces$Domainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Create
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/domains.cloudrun.com/v1alpha1/{+parent}/domainmappings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * Rpc to delete a domain mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.domainmappings.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the domain mapping being deleted. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/domainmappings/my-domainmapping',
     *     // Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     *     orphanDependents: 'placeholder-value',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Domainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/domains.cloudrun.com/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rpc to get information about a domain mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.domainmappings.get({
     *     // The name of the domain mapping being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/domainmappings/my-domainmapping',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Domainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Get
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/domains.cloudrun.com/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * Rpc to list domain mappings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.domainmappings.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the domain mappings should be listed.
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Domainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$List
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainMappingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/domains.cloudrun.com/v1alpha1/{+parent}/domainmappings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDomainMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Domainmappings$Create
    extends StandardParameters {
    /**
     * The project ID or project number in which this domain mapping should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the domain mapping being deleted. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
    /**
     * Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     */
    orphanDependents?: boolean;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Get
    extends StandardParameters {
    /**
     * The name of the domain mapping being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Domainmappings$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the domain mappings should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.jobs.create({
     *     // Required. The namespace in which the job should be created. Replace {namespace_id\} with the project ID or number.
     *     parent: 'namespaces/my-namespace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Namespaces$Jobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Create
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+parent}/jobs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Delete a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.jobs.delete({
     *     // Optional. Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Optional. Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // Required. The name of the job to delete. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     *     name: 'namespaces/my-namespace/jobs/my-job',
     *     // Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get information about a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.jobs.get({
     *     // Required. The name of the job to retrieve. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     *     name: 'namespaces/my-namespace/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Get
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * List jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.jobs.list({
     *     // Optional. Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Optional. Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The namespace from which the jobs should be listed. Replace {namespace_id\} with the project ID or number.
     *     parent: 'namespaces/my-namespace',
     *     // Optional. The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Optional. Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListJobsResponse>;
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListJobsResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+parent}/jobs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The namespace in which the job should be created. Replace {namespace_id\} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Namespaces$Jobs$Delete
    extends StandardParameters {
    /**
     * Optional. Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Optional. Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * Required. The name of the job to delete. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     */
    name?: string;
    /**
     * Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The name of the job to retrieve. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Jobs$List
    extends StandardParameters {
    /**
     * Optional. Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Optional. Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Optional. Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * Required. The namespace from which the jobs should be listed. Replace {namespace_id\} with the project ID or number.
     */
    parent?: string;
    /**
     * Optional. The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Optional. Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to delete a revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.revisions.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the revision being deleted. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/revisions/my-revision',
     *     // Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     *     orphanDependents: 'placeholder-value',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rpc to get information about a revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.revisions.get({
     *     // The name of the revision being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/revisions/my-revision',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$Get
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Revision> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * Rpc to list revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.revisions.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the revisions should be listed.
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRevisionsResponse>;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$List
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+parent}/revisions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRevisionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Revisions$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the revision being deleted. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
    /**
     * Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     */
    orphanDependents?: boolean;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Revisions$Get
    extends StandardParameters {
    /**
     * The name of the revision being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Revisions$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the revisions should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to get information about a route.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.routes.get({
     *     // The name of the route being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/routes/my-route',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Routes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$Get
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Route> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * Rpc to list routes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.routes.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the routes should be listed.
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Routes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Routes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutesResponse>;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRoutesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+parent}/routes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Routes$Get
    extends StandardParameters {
    /**
     * The name of the route being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Routes$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the routes should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to create a service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.services.create({
     *     // The project ID or project number in which this service should be created.
     *     parent: 'namespaces/my-namespace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Namespaces$Services$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Namespaces$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Create
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+parent}/services'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Rpc to delete a service. This will cause the Service to stop serving traffic and will delete the child entities like Routes, Configurations and Revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.services.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the service being deleted. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/services/my-service',
     *     // Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     *     orphanDependents: 'placeholder-value',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rpc to get information about a service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.services.get({
     *     // The name of the service being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Namespaces$Services$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Get
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Rpc to list services.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.services.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the services should be listed.
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Namespaces$Services$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Namespaces$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+parent}/services'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * Rpc to replace a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.namespaces.services.replaceService({
     *     // The name of the service being replaced. If needed, replace {namespace_id\} with the project ID.
     *     name: 'namespaces/my-namespace/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    replaceService(
      params?: Params$Resource$Namespaces$Services$Replaceservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    replaceService(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Replaceservice
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Replaceservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Replaceservice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Services$Create
    extends StandardParameters {
    /**
     * The project ID or project number in which this service should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Namespaces$Services$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the service being deleted. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
    /**
     * Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     */
    orphanDependents?: boolean;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Services$Get
    extends StandardParameters {
    /**
     * The name of the service being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Services$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the services should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Services$Replaceservice
    extends StandardParameters {
    /**
     * The name of the service being replaced. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    authorizeddomains: Resource$Projects$Locations$Authorizeddomains;
    configurations: Resource$Projects$Locations$Configurations;
    domainmappings: Resource$Projects$Locations$Domainmappings;
    revisions: Resource$Projects$Locations$Revisions;
    routes: Resource$Projects$Locations$Routes;
    services: Resource$Projects$Locations$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains = new Resource$Projects$Locations$Authorizeddomains(
        this.context
      );
      this.configurations = new Resource$Projects$Locations$Configurations(
        this.context
      );
      this.domainmappings = new Resource$Projects$Locations$Domainmappings(
        this.context
      );
      this.revisions = new Resource$Projects$Locations$Revisions(this.context);
      this.routes = new Resource$Projects$Locations$Routes(this.context);
      this.services = new Resource$Projects$Locations$Services(this.context);
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * RPC to list authorized domains.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.authorizeddomains.list({
     *     // Maximum results to return per page.
     *     pageSize: 'placeholder-value',
     *     // Continuation token for fetching the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Name of the parent Application resource. Example: `apps/myapp`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAuthorizedDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Authorizeddomains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/authorizeddomains').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Application resource. Example: `apps/myapp`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to get information about a configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.configurations.get({
     *     // The name of the configuration being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name:
     *       'projects/my-project/locations/my-location/configurations/my-configuration',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Configurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Configuration> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * Rpc to list configurations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.configurations.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the configurations should be listed.
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Configurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConfigurationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConfigurationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/configurations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Configurations$Get
    extends StandardParameters {
    /**
     * The name of the configuration being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Configurations$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the configurations should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Domainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new domain mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.domainmappings.create({
     *     // The project ID or project number in which this domain mapping should be created.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Domainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Create
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/domainmappings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * Rpc to delete a domain mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.domainmappings.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the domain mapping being deleted. If needed, replace {namespace_id\} with the project ID.
     *     name:
     *       'projects/my-project/locations/my-location/domainmappings/my-domainmapping',
     *     // Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     *     orphanDependents: 'placeholder-value',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rpc to get information about a domain mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.domainmappings.get({
     *     // The name of the domain mapping being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name:
     *       'projects/my-project/locations/my-location/domainmappings/my-domainmapping',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Domainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Get
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * Rpc to list domain mappings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.domainmappings.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the domain mappings should be listed.
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Domainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$List
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainMappingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/domainmappings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDomainMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Domainmappings$Create
    extends StandardParameters {
    /**
     * The project ID or project number in which this domain mapping should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the domain mapping being deleted. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
    /**
     * Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     */
    orphanDependents?: boolean;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Get
    extends StandardParameters {
    /**
     * The name of the domain mapping being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the domain mappings should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to delete a revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.revisions.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the revision being deleted. If needed, replace {namespace_id\} with the project ID.
     *     name: 'projects/my-project/locations/my-location/revisions/my-revision',
     *     // Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     *     orphanDependents: 'placeholder-value',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rpc to get information about a revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.revisions.get({
     *     // The name of the revision being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'projects/my-project/locations/my-location/revisions/my-revision',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$Get
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Revision> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * Rpc to list revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.revisions.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the revisions should be listed.
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRevisionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$List
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/revisions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRevisionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Revisions$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the revision being deleted. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
    /**
     * Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     */
    orphanDependents?: boolean;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Revisions$Get
    extends StandardParameters {
    /**
     * The name of the revision being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Revisions$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the revisions should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to get information about a route.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.routes.get({
     *     // The name of the route being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'projects/my-project/locations/my-location/routes/my-route',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Routes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$Get
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Route> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * Rpc to list routes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.routes.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the routes should be listed.
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Routes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRoutesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/routes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Routes$Get
    extends StandardParameters {
    /**
     * The name of the route being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Routes$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the routes should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Rpc to create a service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.create({
     *     // The project ID or project number in which this service should be created.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Create
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/services').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Rpc to delete a service. This will cause the Service to stop serving traffic and will delete the child entities like Routes, Configurations and Revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the service being deleted. If needed, replace {namespace_id\} with the project ID.
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *     // Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     *     orphanDependents: 'placeholder-value',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Rpc to get information about a service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.get({
     *     // The name of the service being retrieved. If needed, replace {namespace_id\} with the project ID.
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Get
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Get the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.getIamPolicy({
     *     // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Rpc to list services.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.list({
     *     // Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The project ID or project number from which the services should be listed.
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/services').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * Rpc to replace a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.replaceService({
     *     // The name of the service being replaced. If needed, replace {namespace_id\} with the project ID.
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    replaceService(
      params?: Params$Resource$Projects$Locations$Services$Replaceservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    replaceService(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Replaceservice
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Replaceservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Replaceservice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await run.projects.locations.services.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Services$Create
    extends StandardParameters {
    /**
     * The project ID or project number in which this service should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the service being deleted. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
    /**
     * Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
     */
    orphanDependents?: boolean;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Get
    extends StandardParameters {
    /**
     * The name of the service being retrieved. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$List
    extends StandardParameters {
    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the services should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Services$Replaceservice
    extends StandardParameters {
    /**
     * The name of the service being replaced. If needed, replace {namespace_id\} with the project ID.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Services$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
