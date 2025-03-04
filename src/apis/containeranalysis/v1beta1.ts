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

export namespace containeranalysis_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Container Analysis API
   *
   * An implementation of the Grafeas API, which stores, and enables querying and retrieval of critical metadata about all of your software artifacts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const containeranalysis = google.containeranalysis('v1beta1');
   * ```
   */
  export class Containeranalysis {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * An alias to a repo revision.
   */
  export interface Schema$AliasContext {
    /**
     * The alias kind.
     */
    kind?: string | null;
    /**
     * The alias name.
     */
    name?: string | null;
  }
  /**
   * Artifact describes a build product.
   */
  export interface Schema$Artifact {
    /**
     * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.
     */
    checksum?: string | null;
    /**
     * Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.
     */
    id?: string | null;
    /**
     * Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
     */
    names?: string[] | null;
  }
  /**
   * Defines a hash object for use in Materials and Products.
   */
  export interface Schema$ArtifactHashes {
    sha256?: string | null;
  }
  /**
   * Defines an object to declare an in-toto artifact rule
   */
  export interface Schema$ArtifactRule {
    artifactRule?: string[] | null;
  }
  /**
   * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
   */
  export interface Schema$Attestation {
    genericSignedAttestation?: Schema$GenericSignedAttestation;
    /**
     * A PGP signed attestation.
     */
    pgpSignedAttestation?: Schema$PgpSignedAttestation;
  }
  /**
   * Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project.
   */
  export interface Schema$Authority {
    /**
     * Hint hints at the purpose of the attestation authority.
     */
    hint?: Schema$Hint;
  }
  /**
   * Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url.
   */
  export interface Schema$Basis {
    /**
     * Required. Immutable. The fingerprint of the base image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.
     */
    resourceUrl?: string | null;
  }
  /**
   * Request to create notes in batch.
   */
  export interface Schema$BatchCreateNotesRequest {
    /**
     * Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000.
     */
    notes?: {[key: string]: Schema$Note} | null;
  }
  /**
   * Response for creating notes in batch.
   */
  export interface Schema$BatchCreateNotesResponse {
    /**
     * The notes that were created.
     */
    notes?: Schema$Note[];
  }
  /**
   * Request to create occurrences in batch.
   */
  export interface Schema$BatchCreateOccurrencesRequest {
    /**
     * Required. The occurrences to create. Max allowed length is 1000.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * Response for creating occurrences in batch.
   */
  export interface Schema$BatchCreateOccurrencesResponse {
    /**
     * The occurrences that were created.
     */
    occurrences?: Schema$Occurrence[];
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
   * Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
   */
  export interface Schema$Build {
    /**
     * Required. Immutable. Version of the builder which produced this build.
     */
    builderVersion?: string | null;
    /**
     * Signature of the build in occurrences pointing to this build note containing build details.
     */
    signature?: Schema$BuildSignature;
  }
  /**
   * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
   */
  export interface Schema$BuildProvenance {
    /**
     * Version string of the builder at the time this build was executed.
     */
    builderVersion?: string | null;
    /**
     * Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
     */
    buildOptions?: {[key: string]: string} | null;
    /**
     * Output of the build.
     */
    builtArtifacts?: Schema$Artifact[];
    /**
     * Commands requested by the build.
     */
    commands?: Schema$Command[];
    /**
     * Time at which the build was created.
     */
    createTime?: string | null;
    /**
     * E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
     */
    creator?: string | null;
    /**
     * Time at which execution of the build was finished.
     */
    endTime?: string | null;
    /**
     * Required. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * URI where any logs for this provenance were written.
     */
    logsUri?: string | null;
    /**
     * ID of the project.
     */
    projectId?: string | null;
    /**
     * Details of the Source input to the build.
     */
    sourceProvenance?: Schema$Source;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Trigger identifier if the build was triggered automatically; empty if not.
     */
    triggerId?: string | null;
  }
  /**
   * Message encapsulating the signature of the verified build.
   */
  export interface Schema$BuildSignature {
    /**
     * An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service).
     */
    keyId?: string | null;
    /**
     * The type of the key, either stored in `public_key` or referenced in `key_id`.
     */
    keyType?: string | null;
    /**
     * Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin`
     */
    publicKey?: string | null;
    /**
     * Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded.
     */
    signature?: string | null;
  }
  /**
   * Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".
   */
  export interface Schema$ByProducts {
    customValues?: {[key: string]: string} | null;
  }
  /**
   * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
   */
  export interface Schema$CloudRepoSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$AliasContext;
    /**
     * The ID of the repo.
     */
    repoId?: Schema$RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string | null;
  }
  /**
   * Command describes a step performed as part of the build pipeline.
   */
  export interface Schema$Command {
    /**
     * Command-line arguments used when executing this command.
     */
    args?: string[] | null;
    /**
     * Working directory (relative to project source root) used when running this command.
     */
    dir?: string | null;
    /**
     * Environment variables set before running this command.
     */
    env?: string[] | null;
    /**
     * Optional unique identifier for this command, used in wait_for to reference this command as a dependency.
     */
    id?: string | null;
    /**
     * Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
     */
    name?: string | null;
    /**
     * The ID(s) of the command(s) that this command depends on.
     */
    waitFor?: string[] | null;
  }
  /**
   * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
   */
  export interface Schema$CVSSv3 {
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
     */
    attackVector?: string | null;
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    confidentialityImpact?: string | null;
    exploitabilityScore?: number | null;
    impactScore?: number | null;
    integrityImpact?: string | null;
    privilegesRequired?: string | null;
    scope?: string | null;
    userInteraction?: string | null;
  }
  /**
   * An artifact that can be deployed in some runtime.
   */
  export interface Schema$Deployable {
    /**
     * Required. Resource URI for the artifact being deployed.
     */
    resourceUri?: string[] | null;
  }
  /**
   * The period during which some deployable was active in a runtime.
   */
  export interface Schema$Deployment {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string | null;
    /**
     * Configuration used to create this deployment.
     */
    config?: string | null;
    /**
     * Required. Beginning of the lifetime of this deployment.
     */
    deployTime?: string | null;
    /**
     * Platform hosting this deployment.
     */
    platform?: string | null;
    /**
     * Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
     */
    resourceUri?: string[] | null;
    /**
     * End of the lifetime of this deployment.
     */
    undeployTime?: string | null;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string | null;
  }
  /**
   * Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
   */
  export interface Schema$Derived {
    /**
     * Output only. This contains the base image URL for the derived image occurrence.
     */
    baseResourceUrl?: string | null;
    /**
     * Output only. The number of layers by which this image differs from the associated image basis.
     */
    distance?: number | null;
    /**
     * Required. The fingerprint of the derived image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
     */
    layerInfo?: Schema$Layer[];
  }
  /**
   * Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
   */
  export interface Schema$Detail {
    /**
     * Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.
     */
    cpeUri?: string | null;
    /**
     * A vendor-specific description of this note.
     */
    description?: string | null;
    /**
     * The fix for this specific package version.
     */
    fixedLocation?: Schema$VulnerabilityLocation;
    /**
     * Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.
     */
    isObsolete?: boolean | null;
    /**
     * The max version of the package in which the vulnerability exists.
     */
    maxAffectedVersion?: Schema$Version;
    /**
     * The min version of the package in which the vulnerability exists.
     */
    minAffectedVersion?: Schema$Version;
    /**
     * Required. The name of the package where the vulnerability was found.
     */
    package?: string | null;
    /**
     * The type of package; whether native or non native(ruby gems, node.js packages etc).
     */
    packageType?: string | null;
    /**
     * The severity (eg: distro assigned severity) for this vulnerability.
     */
    severityName?: string | null;
    /**
     * The source from which the information in this Detail was obtained.
     */
    source?: string | null;
    /**
     * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
     */
    sourceUpdateTime?: string | null;
  }
  /**
   * Details of an attestation occurrence.
   */
  export interface Schema$Details {
    /**
     * Required. Attestation for the resource.
     */
    attestation?: Schema$Attestation;
  }
  /**
   * Provides information about the analysis status of a discovered resource.
   */
  export interface Schema$Discovered {
    /**
     * The status of discovery for the resource.
     */
    analysisStatus?: string | null;
    /**
     * When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.
     */
    analysisStatusError?: Schema$Status;
    /**
     * Whether the resource is continuously analyzed.
     */
    continuousAnalysis?: string | null;
    /**
     * The last time continuous analysis was done for this resource. Deprecated, do not use.
     */
    lastAnalysisTime?: string | null;
  }
  /**
   * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
   */
  export interface Schema$Discovery {
    /**
     * Required. Immutable. The kind of analysis that is handled by this discovery.
     */
    analysisKind?: string | null;
  }
  /**
   * This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.
   */
  export interface Schema$Distribution {
    /**
     * The CPU architecture for which packages in this distribution channel were built.
     */
    architecture?: string | null;
    /**
     * Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
     */
    cpeUri?: string | null;
    /**
     * The distribution channel-specific description of this package.
     */
    description?: string | null;
    /**
     * The latest available version of this package in this distribution channel.
     */
    latestVersion?: Schema$Version;
    /**
     * A freeform string denoting the maintainer of this package.
     */
    maintainer?: string | null;
    /**
     * The distribution channel-specific homepage for this package.
     */
    url?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".
   */
  export interface Schema$Environment {
    customValues?: {[key: string]: string} | null;
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
   * Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
   */
  export interface Schema$FileHashes {
    /**
     * Required. Collection of file hashes.
     */
    fileHash?: Schema$Hash[];
  }
  /**
   * A set of properties that uniquely identify a given Docker image.
   */
  export interface Schema$Fingerprint {
    /**
     * Required. The layer ID of the final layer in the Docker image's v1 representation.
     */
    v1Name?: string | null;
    /**
     * Required. The ordered list of v2 blobs that represent a given image.
     */
    v2Blob?: string[] | null;
    /**
     * Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.
     */
    v2Name?: string | null;
  }
  /**
   * Per resource and severity counts of fixable and total vulnerabilities.
   */
  export interface Schema$FixableTotalByDigest {
    /**
     * The number of fixable vulnerabilities associated with this resource.
     */
    fixableCount?: string | null;
    /**
     * The affected resource.
     */
    resource?: Schema$Resource;
    /**
     * The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities.
     */
    severity?: string | null;
    /**
     * The total number of vulnerabilities associated with this resource.
     */
    totalCount?: string | null;
  }
  /**
   * An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
   */
  export interface Schema$GenericSignedAttestation {
    /**
     * Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).
     */
    contentType?: string | null;
    /**
     * The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`.
     */
    serializedPayload?: string | null;
    /**
     * One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.
     */
    signatures?: Schema$Signature[];
  }
  /**
   * A SourceContext referring to a Gerrit project.
   */
  export interface Schema$GerritSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$AliasContext;
    /**
     * The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.
     */
    gerritProject?: string | null;
    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string | null;
    /**
     * A revision (commit) ID.
     */
    revisionId?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
   */
  export interface Schema$GitSourceContext {
    /**
     * Git commit hash.
     */
    revisionId?: string | null;
    /**
     * Git repository URL.
     */
    url?: string | null;
  }
  /**
   * Metadata for all operations used and required for all operations that created by Container Analysis Providers
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {
    /**
     * Output only. The time this operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time that this operation was marked completed or failed.
     */
    endTime?: string | null;
  }
  /**
   * Details of a build occurrence.
   */
  export interface Schema$GrafeasV1beta1BuildDetails {
    /**
     * Required. The actual provenance for the build.
     */
    provenance?: Schema$BuildProvenance;
    /**
     * Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.
     */
    provenanceBytes?: string | null;
  }
  /**
   * Details of a deployment occurrence.
   */
  export interface Schema$GrafeasV1beta1DeploymentDetails {
    /**
     * Required. Deployment history for the resource.
     */
    deployment?: Schema$Deployment;
  }
  /**
   * Details of a discovery occurrence.
   */
  export interface Schema$GrafeasV1beta1DiscoveryDetails {
    /**
     * Required. Analysis status for the discovered resource.
     */
    discovered?: Schema$Discovered;
  }
  /**
   * Details of an image occurrence.
   */
  export interface Schema$GrafeasV1beta1ImageDetails {
    /**
     * Required. Immutable. The child image derived from the base image.
     */
    derivedImage?: Schema$Derived;
  }
  export interface Schema$GrafeasV1beta1IntotoArtifact {
    hashes?: Schema$ArtifactHashes;
    resourceUri?: string | null;
  }
  /**
   * This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.
   */
  export interface Schema$GrafeasV1beta1IntotoDetails {
    signatures?: Schema$GrafeasV1beta1IntotoSignature[];
    signed?: Schema$Link;
  }
  /**
   * A signature object consists of the KeyID used and the signature itself.
   */
  export interface Schema$GrafeasV1beta1IntotoSignature {
    keyid?: string | null;
    sig?: string | null;
  }
  /**
   * Details of a package occurrence.
   */
  export interface Schema$GrafeasV1beta1PackageDetails {
    /**
     * Required. Where the package was installed.
     */
    installation?: Schema$Installation;
  }
  /**
   * Details of a vulnerability Occurrence.
   */
  export interface Schema$GrafeasV1beta1VulnerabilityDetails {
    /**
     * Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number | null;
    /**
     * The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability.
     */
    effectiveSeverity?: string | null;
    /**
     * Output only. A detailed description of this vulnerability.
     */
    longDescription?: string | null;
    /**
     * Required. The set of affected locations and their fixes (if available) within the associated resource.
     */
    packageIssue?: Schema$PackageIssue[];
    /**
     * Output only. URLs related to this vulnerability.
     */
    relatedUrls?: Schema$RelatedUrl[];
    /**
     * Output only. The note provider assigned Severity of the vulnerability.
     */
    severity?: string | null;
    /**
     * Output only. A one sentence description of this vulnerability.
     */
    shortDescription?: string | null;
    /**
     * The type of package; whether native or non native(ruby gems, node.js packages etc)
     */
    type?: string | null;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$Hash {
    /**
     * Required. The type of hash that was performed.
     */
    type?: string | null;
    /**
     * Required. The hash value.
     */
    value?: string | null;
  }
  /**
   * This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.
   */
  export interface Schema$Hint {
    /**
     * Required. The human readable name of this attestation authority, for example "qa".
     */
    humanReadableName?: string | null;
  }
  /**
   * This represents how a particular software package may be installed on a system.
   */
  export interface Schema$Installation {
    /**
     * Required. All of the places within the filesystem versions of this package have been found.
     */
    location?: Schema$Location[];
    /**
     * Output only. The name of the installed package.
     */
    name?: string | null;
  }
  /**
   * This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
   */
  export interface Schema$InToto {
    /**
     * This field contains the expected command used to perform the step.
     */
    expectedCommand?: string[] | null;
    /**
     * The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step.
     */
    expectedMaterials?: Schema$ArtifactRule[];
    expectedProducts?: Schema$ArtifactRule[];
    /**
     * This field contains the public keys that can be used to verify the signatures on the step metadata.
     */
    signingKeys?: Schema$SigningKey[];
    /**
     * This field identifies the name of the step in the supply chain.
     */
    stepName?: string | null;
    /**
     * This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link.
     */
    threshold?: string | null;
  }
  export interface Schema$KnowledgeBase {
    /**
     * The KB name (generally of the form KB[0-9]+ i.e. KB123456).
     */
    name?: string | null;
    /**
     * A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/
     */
    url?: string | null;
  }
  /**
   * Layer holds metadata specific to a layer of a Docker image.
   */
  export interface Schema$Layer {
    /**
     * The recovered arguments to the Dockerfile directive.
     */
    arguments?: string | null;
    /**
     * Required. The recovered Dockerfile directive used to construct this layer.
     */
    directive?: string | null;
  }
  /**
   * This corresponds to an in-toto link.
   */
  export interface Schema$Link {
    /**
     * ByProducts are data generated as part of a software supply chain step, but are not the actual result of the step.
     */
    byproducts?: Schema$ByProducts;
    /**
     * This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren't directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: "command": ["git", "clone", "https://github.com/in-toto/demo-project.git"]
     */
    command?: string[] | null;
    /**
     * This is a field that can be used to capture information about the environment. It is suggested for this field to contain information that details environment variables, filesystem information, and the present working directory. The recommended structure of this field is: "environment": { "custom_values": { "variables": "", "filesystem": "", "workdir": "", "": "..." \} \}
     */
    environment?: Schema$Environment;
    /**
     * Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: "materials": [ { "resource_uri": "foo/bar", "hashes": { "sha256": "ebebf...", : \} \} ]
     */
    materials?: Schema$GrafeasV1beta1IntotoArtifact[];
    /**
     * Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials.
     */
    products?: Schema$GrafeasV1beta1IntotoArtifact[];
  }
  /**
   * Response for listing occurrences for a note.
   */
  export interface Schema$ListNoteOccurrencesResponse {
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences attached to the specified note.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * Response for listing notes.
   */
  export interface Schema$ListNotesResponse {
    /**
     * The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
    /**
     * The notes requested.
     */
    notes?: Schema$Note[];
  }
  /**
   * Response for listing occurrences.
   */
  export interface Schema$ListOccurrencesResponse {
    /**
     * The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences requested.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * Response for listing scan configurations.
   */
  export interface Schema$ListScanConfigsResponse {
    /**
     * The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
    /**
     * The scan configurations requested.
     */
    scanConfigs?: Schema$ScanConfig[];
  }
  /**
   * An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
   */
  export interface Schema$Location {
    /**
     * Required. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
     */
    cpeUri?: string | null;
    /**
     * The path from which we gathered that this package/version is installed.
     */
    path?: string | null;
    /**
     * The version installed at this location.
     */
    version?: Schema$Version;
  }
  /**
   * A type of analysis that can be done for a resource.
   */
  export interface Schema$Note {
    /**
     * A note describing an attestation role.
     */
    attestationAuthority?: Schema$Authority;
    /**
     * A note describing a base image.
     */
    baseImage?: Schema$Basis;
    /**
     * A note describing build provenance for a verifiable build.
     */
    build?: Schema$Build;
    /**
     * Output only. The time this note was created. This field can be used as a filter in list requests.
     */
    createTime?: string | null;
    /**
     * A note describing something that can be deployed.
     */
    deployable?: Schema$Deployable;
    /**
     * A note describing the initial analysis of a resource.
     */
    discovery?: Schema$Discovery;
    /**
     * Time of expiration for this note. Empty if note does not expire.
     */
    expirationTime?: string | null;
    /**
     * A note describing an in-toto link.
     */
    intoto?: Schema$InToto;
    /**
     * Output only. The type of analysis. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * A detailed description of this note.
     */
    longDescription?: string | null;
    /**
     * Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string | null;
    /**
     * A note describing a package hosted by various package managers.
     */
    package?: Schema$Package;
    /**
     * Other notes related to this note.
     */
    relatedNoteNames?: string[] | null;
    /**
     * URLs associated with this note.
     */
    relatedUrl?: Schema$RelatedUrl[];
    /**
     * A one sentence description of this note.
     */
    shortDescription?: string | null;
    /**
     * Output only. The time this note was last updated. This field can be used as a filter in list requests.
     */
    updateTime?: string | null;
    /**
     * A note describing a package vulnerability.
     */
    vulnerability?: Schema$Vulnerability;
  }
  /**
   * An instance of an analysis type that has been found on a resource.
   */
  export interface Schema$Occurrence {
    /**
     * Describes an attestation of an artifact.
     */
    attestation?: Schema$Details;
    /**
     * Describes a verifiable build.
     */
    build?: Schema$GrafeasV1beta1BuildDetails;
    /**
     * Output only. The time this occurrence was created.
     */
    createTime?: string | null;
    /**
     * Describes the deployment of an artifact on a runtime.
     */
    deployment?: Schema$GrafeasV1beta1DeploymentDetails;
    /**
     * Describes how this resource derives from the basis in the associated note.
     */
    derivedImage?: Schema$GrafeasV1beta1ImageDetails;
    /**
     * Describes when a resource was discovered.
     */
    discovered?: Schema$GrafeasV1beta1DiscoveryDetails;
    /**
     * Describes the installation of a package on the linked resource.
     */
    installation?: Schema$GrafeasV1beta1PackageDetails;
    /**
     * Describes a specific in-toto link.
     */
    intoto?: Schema$GrafeasV1beta1IntotoDetails;
    /**
     * Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
     */
    noteName?: string | null;
    /**
     * A description of actions that can be taken to remedy the note.
     */
    remediation?: string | null;
    /**
     * Required. Immutable. The resource for which the occurrence applies.
     */
    resource?: Schema$Resource;
    /**
     * Output only. The time this occurrence was last updated.
     */
    updateTime?: string | null;
    /**
     * Describes a security vulnerability.
     */
    vulnerability?: Schema$GrafeasV1beta1VulnerabilityDetails;
  }
  /**
   * This represents a particular package that is distributed over various channels. E.g., glibc (aka libc6) is distributed by many, at various versions.
   */
  export interface Schema$Package {
    /**
     * The various channels by which a package is distributed.
     */
    distribution?: Schema$Distribution[];
    /**
     * Required. Immutable. The name of the package.
     */
    name?: string | null;
  }
  /**
   * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
   */
  export interface Schema$PackageIssue {
    /**
     * Required. The location of the vulnerability.
     */
    affectedLocation?: Schema$VulnerabilityLocation;
    /**
     * The location of the available fix for vulnerability.
     */
    fixedLocation?: Schema$VulnerabilityLocation;
    /**
     * Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability.
     */
    severityName?: string | null;
  }
  /**
   * An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
   */
  export interface Schema$PgpSignedAttestation {
    /**
     * Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).
     */
    contentType?: string | null;
    /**
     * The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexidecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.
     */
    pgpKeyId?: string | null;
    /**
     * Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload.
     */
    signature?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
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
   * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
   */
  export interface Schema$ProjectRepoId {
    /**
     * The ID of the project.
     */
    projectId?: string | null;
    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string | null;
  }
  /**
   * Metadata for any related URL information.
   */
  export interface Schema$RelatedUrl {
    /**
     * Label to describe usage of the URL.
     */
    label?: string | null;
    /**
     * Specific URL associated with the resource.
     */
    url?: string | null;
  }
  /**
   * A unique identifier for a Cloud Repo.
   */
  export interface Schema$RepoId {
    /**
     * A combination of a project ID and a repo name.
     */
    projectRepoId?: Schema$ProjectRepoId;
    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string | null;
  }
  /**
   * An entity that can have metadata. For example, a Docker image.
   */
  export interface Schema$Resource {
    /**
     * Deprecated, do not use. Use uri instead. The hash of the resource content. For example, the Docker digest.
     */
    contentHash?: Schema$Hash;
    /**
     * Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian".
     */
    name?: string | null;
    /**
     * Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image.
     */
    uri?: string | null;
  }
  /**
   * A scan configuration specifies whether Cloud components in a project have a particular type of analysis being run. For example, it can configure whether vulnerability scanning is being done on Docker images or not.
   */
  export interface Schema$ScanConfig {
    /**
     * Output only. The time this scan config was created.
     */
    createTime?: string | null;
    /**
     * Output only. A human-readable description of what the scan configuration does.
     */
    description?: string | null;
    /**
     * Whether the scan is enabled.
     */
    enabled?: boolean | null;
    /**
     * Output only. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
     */
    name?: string | null;
    /**
     * Output only. The time this scan config was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).
   */
  export interface Schema$Signature {
    /**
     * The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
     */
    publicKeyId?: string | null;
    /**
     * The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.
     */
    signature?: string | null;
  }
  /**
   * This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" \} The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.
   */
  export interface Schema$SigningKey {
    /**
     * key_id is an identifier for the signing key.
     */
    keyId?: string | null;
    /**
     * This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256".
     */
    keyScheme?: string | null;
    /**
     * This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa".
     */
    keyType?: string | null;
    /**
     * This field contains the actual public key.
     */
    publicKeyValue?: string | null;
  }
  /**
   * Source describes the location of the source used for the build.
   */
  export interface Schema$Source {
    /**
     * If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
     */
    additionalContexts?: Schema$SourceContext[];
    /**
     * If provided, the input binary artifacts for the build came from this location.
     */
    artifactStorageSourceUri?: string | null;
    /**
     * If provided, the source code used for the build came from this location.
     */
    context?: Schema$SourceContext;
    /**
     * Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
  }
  /**
   * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
   */
  export interface Schema$SourceContext {
    /**
     * A SourceContext referring to a revision in a Google Cloud Source Repo.
     */
    cloudRepo?: Schema$CloudRepoSourceContext;
    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: Schema$GerritSourceContext;
    /**
     * A SourceContext referring to any third party Git repo (e.g., GitHub).
     */
    git?: Schema$GitSourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
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
   * Version contains structured information about the version of a package.
   */
  export interface Schema$Version {
    /**
     * Used to correct mistakes in the version numbering scheme.
     */
    epoch?: number | null;
    /**
     * Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.
     */
    inclusive?: boolean | null;
    /**
     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
     */
    kind?: string | null;
    /**
     * Required only when version kind is NORMAL. The main part of the version name.
     */
    name?: string | null;
    /**
     * The iteration of the package build from the above version.
     */
    revision?: string | null;
  }
  /**
   * Vulnerability provides metadata about a security vulnerability in a Note.
   */
  export interface Schema$Vulnerability {
    /**
     * The CVSS score for this vulnerability.
     */
    cvssScore?: number | null;
    /**
     * The full description of the CVSSv3.
     */
    cvssV3?: Schema$CVSSv3;
    /**
     * All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in.
     */
    details?: Schema$Detail[];
    /**
     * Note provider assigned impact of the vulnerability.
     */
    severity?: string | null;
    /**
     * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
     */
    sourceUpdateTime?: string | null;
    /**
     * Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.
     */
    windowsDetails?: Schema$WindowsDetail[];
  }
  /**
   * The location of the vulnerability.
   */
  export interface Schema$VulnerabilityLocation {
    /**
     * Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar.
     */
    cpeUri?: string | null;
    /**
     * Required. The package being described.
     */
    package?: string | null;
    /**
     * Required. The version of the package being described.
     */
    version?: Schema$Version;
  }
  /**
   * A summary of how many vulnerability occurrences there are per resource and severity type.
   */
  export interface Schema$VulnerabilityOccurrencesSummary {
    /**
     * A listing by resource of the number of fixable and total vulnerabilities.
     */
    counts?: Schema$FixableTotalByDigest[];
  }
  export interface Schema$WindowsDetail {
    /**
     * Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.
     */
    cpeUri?: string | null;
    /**
     * The description of the vulnerability.
     */
    description?: string | null;
    /**
     * Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed kb's presence is considered a fix.
     */
    fixingKbs?: Schema$KnowledgeBase[];
    /**
     * Required. The name of the vulnerability.
     */
    name?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    notes: Resource$Projects$Notes;
    occurrences: Resource$Projects$Occurrences;
    scanConfigs: Resource$Projects$Scanconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notes = new Resource$Projects$Notes(this.context);
      this.occurrences = new Resource$Projects$Occurrences(this.context);
      this.scanConfigs = new Resource$Projects$Scanconfigs(this.context);
    }
  }

  export class Resource$Projects$Notes {
    context: APIRequestContext;
    occurrences: Resource$Projects$Notes$Occurrences;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.occurrences = new Resource$Projects$Notes$Occurrences(this.context);
    }

    /**
     * Creates new notes in batch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.batchCreate({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notes": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notes": []
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
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Notes$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreateNotesResponse>;
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchCreateNotesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/notes:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreateNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateNotesResponse>(parameters);
      }
    }

    /**
     * Creates a new note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.create({
     *     // Required. The ID to use for this note.
     *     noteId: 'placeholder-value',
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestationAuthority": {},
     *       //   "baseImage": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployable": {},
     *       //   "discovery": {},
     *       //   "expirationTime": "my_expirationTime",
     *       //   "intoto": {},
     *       //   "kind": "my_kind",
     *       //   "longDescription": "my_longDescription",
     *       //   "name": "my_name",
     *       //   "package": {},
     *       //   "relatedNoteNames": [],
     *       //   "relatedUrl": [],
     *       //   "shortDescription": "my_shortDescription",
     *       //   "updateTime": "my_updateTime",
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestationAuthority": {},
     *   //   "baseImage": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployable": {},
     *   //   "discovery": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
      params: Params$Resource$Projects$Notes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Notes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    create(
      params: Params$Resource$Projects$Notes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Projects$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Create
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Note> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Deletes the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.delete({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
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
      params: Params$Resource$Projects$Notes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Notes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Delete
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
        {}) as Params$Resource$Projects$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.get({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestationAuthority": {},
     *   //   "baseImage": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployable": {},
     *   //   "discovery": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
      params: Params$Resource$Projects$Notes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Notes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    get(
      params: Params$Resource$Projects$Notes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Notes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(
      params: Params$Resource$Projects$Notes$Get,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(callback: BodyResponseCallback<Schema$Note>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Get
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Note> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/notes/my-note',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Notes$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Getiampolicy
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
        {}) as Params$Resource$Projects$Notes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * Lists notes for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "notes": []
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
      params: Params$Resource$Projects$Notes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Notes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNotesResponse>;
    list(
      params: Params$Resource$Projects$Notes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNotesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$ListNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }

    /**
     * Updates the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.patch({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
     *     // The fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestationAuthority": {},
     *       //   "baseImage": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployable": {},
     *       //   "discovery": {},
     *       //   "expirationTime": "my_expirationTime",
     *       //   "intoto": {},
     *       //   "kind": "my_kind",
     *       //   "longDescription": "my_longDescription",
     *       //   "name": "my_name",
     *       //   "package": {},
     *       //   "relatedNoteNames": [],
     *       //   "relatedUrl": [],
     *       //   "shortDescription": "my_shortDescription",
     *       //   "updateTime": "my_updateTime",
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestationAuthority": {},
     *   //   "baseImage": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployable": {},
     *   //   "discovery": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Notes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Note>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Patch
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Note> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/notes/my-note',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Notes$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Setiampolicy
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
        {}) as Params$Resource$Projects$Notes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/notes/my-note',
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
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Notes$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Testiampermissions
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
        {}) as Params$Resource$Projects$Notes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Notes$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateNotesRequest;
  }
  export interface Params$Resource$Projects$Notes$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for this note.
     */
    noteId?: string;
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Notes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notes$Get
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notes$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Notes$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Notes$Patch
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Notes$Setiampolicy
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
  export interface Params$Resource$Projects$Notes$Testiampermissions
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

  export class Resource$Projects$Notes$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.notes.occurrences.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
     *     // Number of occurrences to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": []
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
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Notes$Occurrences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNoteOccurrencesResponse>;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Occurrences$List
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNoteOccurrencesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/occurrences').replace(
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
        createAPIRequest<Schema$ListNoteOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNoteOccurrencesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notes$Occurrences$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
    /**
     * Number of occurrences to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new occurrences in batch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.batchCreate({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "occurrences": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "occurrences": []
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
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Occurrences$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreateOccurrencesResponse>;
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchCreateOccurrencesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/occurrences:batchCreate'
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
        createAPIRequest<Schema$BatchCreateOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateOccurrencesResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a new occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.create({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "derivedImage": {},
     *       //   "discovered": {},
     *       //   "installation": {},
     *       //   "intoto": {},
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "noteName": "my_noteName",
     *       //   "remediation": "my_remediation",
     *       //   "resource": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "derivedImage": {},
     *   //   "discovered": {},
     *   //   "installation": {},
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "remediation": "my_remediation",
     *   //   "resource": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
      params: Params$Resource$Projects$Occurrences$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Occurrences$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Occurrence>;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(callback: BodyResponseCallback<Schema$Occurrence>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Create
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Occurrence> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.delete({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
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
      params: Params$Resource$Projects$Occurrences$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Occurrences$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Delete
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
        {}) as Params$Resource$Projects$Occurrences$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the specified occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.get({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "derivedImage": {},
     *   //   "discovered": {},
     *   //   "installation": {},
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "remediation": "my_remediation",
     *   //   "resource": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
      params: Params$Resource$Projects$Occurrences$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Occurrences$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Occurrence>;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(callback: BodyResponseCallback<Schema$Occurrence>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Get
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Occurrence> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/occurrences/my-occurrence',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Occurrences$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getiampolicy
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
        {}) as Params$Resource$Projects$Occurrences$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.getNotes({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestationAuthority": {},
     *   //   "baseImage": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployable": {},
     *   //   "discovery": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getNotes(
      params?: Params$Resource$Projects$Occurrences$Getnotes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(callback: BodyResponseCallback<Schema$Note>): void;
    getNotes(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getnotes
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Note> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getnotes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getnotes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/notes').replace(
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Gets a summary of the number and severity of occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.getVulnerabilitySummary(
     *     {
     *       // The filter expression.
     *       filter: 'placeholder-value',
     *       // Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     *       parent: 'projects/my-project',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "counts": []
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
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getVulnerabilitySummary(
      params?: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VulnerabilityOccurrencesSummary>;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>,
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getvulnerabilitysummary
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VulnerabilityOccurrencesSummary>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getvulnerabilitysummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getvulnerabilitysummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/occurrences:vulnerabilitySummary'
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
        createAPIRequest<Schema$VulnerabilityOccurrencesSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VulnerabilityOccurrencesSummary>(
          parameters
        );
      }
    }

    /**
     * Lists occurrences for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": []
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
      params: Params$Resource$Projects$Occurrences$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Occurrences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOccurrencesResponse>;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$List
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOccurrencesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$ListOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOccurrencesResponse>(parameters);
      }
    }

    /**
     * Updates the specified occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.patch({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
     *     // The fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "derivedImage": {},
     *       //   "discovered": {},
     *       //   "installation": {},
     *       //   "intoto": {},
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "noteName": "my_noteName",
     *       //   "remediation": "my_remediation",
     *       //   "resource": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "derivedImage": {},
     *   //   "discovered": {},
     *   //   "installation": {},
     *   //   "intoto": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "remediation": "my_remediation",
     *   //   "resource": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerability": {}
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
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Occurrences$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Occurrence>;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Occurrence>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Patch
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Occurrence> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/occurrences/my-occurrence',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Occurrences$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Setiampolicy
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
        {}) as Params$Resource$Projects$Occurrences$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.occurrences.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/occurrences/my-occurrence',
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
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Occurrences$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Testiampermissions
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
        {}) as Params$Resource$Projects$Occurrences$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Occurrences$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateOccurrencesRequest;
  }
  export interface Params$Resource$Projects$Occurrences$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Occurrences$Delete
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Get
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Occurrences$Getnotes
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Getvulnerabilitysummary
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Occurrences$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Patch
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Occurrences$Setiampolicy
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
  export interface Params$Resource$Projects$Occurrences$Testiampermissions
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

  export class Resource$Projects$Scanconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the specified scan configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.scanConfigs.get({
     *     // Required. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
     *     name: 'projects/my-project/scanConfigs/my-scanConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "enabled": false,
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Scanconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Scanconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Get
        | BodyResponseCallback<Schema$ScanConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScanConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScanConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ScanConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ScanConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }

    /**
     * Lists scan configurations for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.scanConfigs.list({
     *     // Required. The filter expression.
     *     filter: 'placeholder-value',
     *     // The number of scan configs to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list scan configurations for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "scanConfigs": []
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
      params: Params$Resource$Projects$Scanconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Scanconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScanConfigsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      callback: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$List
        | BodyResponseCallback<Schema$ListScanConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScanConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScanConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListScanConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/scanConfigs').replace(
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
        createAPIRequest<Schema$ListScanConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScanConfigsResponse>(parameters);
      }
    }

    /**
     * Updates the specified scan configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
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
     *   const res = await containeranalysis.projects.scanConfigs.update({
     *     // Required. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
     *     name: 'projects/my-project/scanConfigs/my-scanConfig',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "enabled": false,
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "enabled": false,
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    update(
      params: Params$Resource$Projects$Scanconfigs$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Scanconfigs$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    update(
      params: Params$Resource$Projects$Scanconfigs$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Scanconfigs$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    update(
      params: Params$Resource$Projects$Scanconfigs$Update,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    update(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Update
        | BodyResponseCallback<Schema$ScanConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScanConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScanConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ScanConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ScanConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Get
    extends StandardParameters {
    /**
     * Required. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$List
    extends StandardParameters {
    /**
     * Required. The filter expression.
     */
    filter?: string;
    /**
     * The number of scan configs to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list scan configurations for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Update
    extends StandardParameters {
    /**
     * Required. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScanConfig;
  }
}
