/* tslint:disable */
/* eslint-disable */
/**
*/
export function start(): void;
export type ErrorExt = {} & Object;

export interface UploadModelVersionArgsWithContext extends UploadRequestParams {
    extra?: number[];
}

export interface UploadModelVersionArgs extends UploadRequestParams {
    model_version: number;
    extra?: number[];
}

export interface UploadExperimentArgsWithContext extends UploadRequestParams {}

export interface UploadExperimentArgs extends UploadRequestParams {
    experiment: number;
}

export interface ModelVersionResponse {
    id: number;
    model_id: number;
    version: string;
}

export interface ExperimentResponse {
    blob: number;
    experiment_id: number;
    id: number;
    name: string;
    version_id: number;
}

export interface UploadRequestParams {
    artifact_name: string;
    format?: ArchiveFormat;
    encode?: ArchiveCompression;
}


export type ExperimentFunction =
    | ((experiment: Experiment) => Promise<void>)
    | ((experiment: Experiment) => void);


export interface Namespace {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    lastModified: string;
}

export interface PaginatedNamespace {
    page: CurrentPage;
    totalPages: number;
    totalItems: number;
    data: Namespace[];
}

export interface QueryNamespaces {
    namespace: PaginatedNamespace;
}

export interface QueryNamespacesVariables {
    page: Page | undefined;
}

export interface DeleteModelVersion {
    deleteModelVersion: boolean;
}

export interface DeleteModelVersionVariables {
    hard: boolean | undefined;
    id: number;
}

export interface Experiment {
    id: number;
    name: string;
    versionId: number;
}

export interface CreateExperiment {
    createExperiment: Experiment;
}

export interface CreateExperimentVariablesWithContext {
    experiment_name: string;
}

export interface CreateExperimentVariables {
    experiment_name: string;
    model_version_id: number;
}

export type ArchiveFormat = "arrow" | "csv" | "html" | "jpeg" | "json" | "jsonl" | "md" | "mov" | "mp4" | "msgpack" | "parquet" | "pdf" | "png" | "txt" | "wav" | "xls" | "xml";

export type ArchiveCompression = "gzip" | "lz4" | "snappy" | "tar" | "tzg" | "uncompressed" | "zip" | "zstd";

export type Lifecycle = "prod" | "qa" | "stage" | "test";

export interface ObjectBlob {
    format: ArchiveFormat | undefined;
    encode: ArchiveCompression | undefined;
    created_at: string;
}

export interface ExperimentArtifact {
    id: number;
    version_id: number;
    name: string;
    object: ObjectBlob;
}

export interface PaginatedExperimentArtifact {
    page: CurrentPage;
    total_pages: number;
    total_items: number;
    data: ExperimentArtifact[];
}

export interface Experiment {
    artifacts: PaginatedExperimentArtifact;
}

export interface PaginatedExperiment {
    data: Experiment[];
}

export interface ExperimentArtifacts {
    experiment: PaginatedExperiment;
}

export interface ExperimentArtifactsVariables {
    id: number;
    page: Page | undefined;
}

export interface DeleteModel {
    deleteModel: boolean;
}

export interface DeleteModelVariables {
    id: number;
}

export interface Model {
    id: number;
    name: string;
    namespaceId: number;
}

export interface CreateModel {
    createModel: Model;
}

export interface CreateModelVariables {
    name: string;
    namespace: number;
}

export interface Namespace {
    id: number;
    name: string;
    description: string;
    lastModified: string;
}

export interface UpdateNamespace {
    updateNamespace: Namespace;
}

export interface UpdateNamespaceVariables {
    id: number;
    name: string | undefined;
    description: string | undefined;
}

export interface ModelState {
    id: number;
    versionId: number;
    state: Lifecycle;
}

export interface UpdateModelVersionState {
    updateModelVersionState: ModelState;
}

export interface UpdateModelVersionStateVariables {
    id: number;
    state: Lifecycle;
}

export interface Experiment {
    id: number;
    name: string;
    versionId: number;
    createdAt: string;
}

export interface PaginatedExperiment {
    totalPages: number;
    totalItems: number;
    page: CurrentPage;
    data: Experiment[];
}

export interface QueryExperiment {
    experiment: PaginatedExperiment;
}

export interface QueryExperimentVariables {
    id: number | undefined;
    model_id: number | undefined;
    name: string | undefined;
    page: Page | undefined;
}

export interface Bucket {
    id: number;
    name: string;
    namespace: number;
    createdAt: string;
    lastModified: string;
}

export interface PaginatedBucket {
    page: CurrentPage;
    totalPages: number;
    totalItems: number;
    data: Bucket[];
}

export interface QueryBuckets {
    bucket: PaginatedBucket;
}

export interface QueryBucketsVariables {
    id: number | undefined;
    namespace: number | undefined;
    page: Page | undefined;
    role: Lifecycle | undefined;
}

export interface DeleteExperiment {
    deleteExperiment: boolean;
}

export interface DeleteExperimentVariables {
    hard: boolean | undefined;
    id: number;
}

export interface DeleteBucket {
    deleteBucket: boolean;
}

export interface DeleteBucketVariables {
    id: number;
}

export interface CurrentPage {
    size: number;
    page: number;
}

export interface Page {
    size: number;
    page: number;
}

export interface Model {
    id: number;
    name: string;
    lastModified: string;
}

export interface UpdateModel {
    updateModel: Model;
}

export interface UpdateModelVariables {
    id: number;
    name: string;
}

export interface Model {
    id: number;
    name: string;
    createdAt: string;
    lastModified: string;
    namespaceId: number;
}

export interface PaginatedModel {
    page: CurrentPage;
    totalPages: number;
    totalItems: number;
    data: Model[];
}

export interface NamespaceModels {
    model: PaginatedModel;
}

export interface NamespaceModelsVariables {
    model_id: number | undefined;
    model_name: string | undefined;
    model_namespace: number | undefined;
    page: Page | undefined;
}

export interface DeleteNamespace {
    deleteNamespace: boolean;
}

export interface DeleteNamespaceVariablesWithContext {}

export interface DeleteNamespaceVariables {
    id: number;
}

export interface Namespace {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    lastModified: string;
}

export interface CreateNamespace {
    createNamespace: Namespace;
}

export interface CreateNamespaceVariables {
    name: string;
    description: string;
}

export interface ModelVersion {
    id: number;
    version: string;
    modelId: number;
}

export interface CreateModelVersion {
    createModelVersion: ModelVersion;
}

export interface CreateModelVersionVariables {
    model_id: number;
    version_tag: string;
}

export interface Bucket {
    id: number;
    name: string;
    region: string;
    namespace: number;
    role: Lifecycle;
    createdAt: string;
    lastModified: string;
}

export interface CreateBucket {
    createBucket: Bucket;
}

export interface CreateBucketVariables {
    name: string;
    namespace_id: number;
    region: string | undefined;
    role: Lifecycle;
}

/**
*/
export class Client {
  free(): void;
/**
* @param {string} base_url
*/
  constructor(base_url: string);
/**
* @param {UploadExperimentArgs} artifact
* @param {Uint8Array} data
* @returns {Promise<ExperimentResponse>}
*/
  uploadExperimentArtifact(artifact: UploadExperimentArgs, data: Uint8Array): Promise<ExperimentResponse>;
/**
* @param {CreateBucketVariables} bucket
* @returns {Promise<CreateBucket>}
*/
  createBucket(bucket: CreateBucketVariables): Promise<CreateBucket>;
/**
* @param {DeleteBucketVariables} bucket
* @returns {Promise<DeleteBucket>}
*/
  deleteBucket(bucket: DeleteBucketVariables): Promise<DeleteBucket>;
/**
* @param {CreateNamespaceVariables} namespace
* @returns {Promise<CreateNamespace>}
*/
  createNamespace(namespace: CreateNamespaceVariables): Promise<CreateNamespace>;
/**
* @param {DeleteNamespaceVariables} namespace
* @returns {Promise<DeleteNamespace>}
*/
  deleteNamespace(namespace: DeleteNamespaceVariables): Promise<DeleteNamespace>;
/**
* @param {UpdateNamespaceVariables} namespace
* @returns {Promise<UpdateNamespace>}
*/
  updateNamespace(namespace: UpdateNamespaceVariables): Promise<UpdateNamespace>;
/**
* @param {CreateModelVariables} model
* @returns {Promise<CreateModel>}
*/
  createModel(model: CreateModelVariables): Promise<CreateModel>;
/**
* @param {DeleteModelVariables} model
* @returns {Promise<DeleteModel>}
*/
  deleteModel(model: DeleteModelVariables): Promise<DeleteModel>;
/**
* @param {UpdateModelVariables} model
* @returns {Promise<UpdateModel>}
*/
  updateModel(model: UpdateModelVariables): Promise<UpdateModel>;
/**
* @param {CreateModelVersionVariables} version
* @returns {Promise<CreateModelVersion>}
*/
  createModelVersion(version: CreateModelVersionVariables): Promise<CreateModelVersion>;
/**
* @param {DeleteModelVersionVariables} version
* @returns {Promise<DeleteModelVersion>}
*/
  deleteModelVersion(version: DeleteModelVersionVariables): Promise<DeleteModelVersion>;
/**
* @param {UpdateModelVersionStateVariables} state
* @returns {Promise<UpdateModelVersionState>}
*/
  updateModelVersionState(state: UpdateModelVersionStateVariables): Promise<UpdateModelVersionState>;
/**
* @param {CreateExperimentVariables} experiment
* @returns {Promise<CreateExperiment>}
*/
  createExperiment(experiment: CreateExperimentVariables): Promise<CreateExperiment>;
/**
* @param {DeleteExperimentVariables} experiment
* @returns {Promise<DeleteExperiment>}
*/
  deleteExperiment(experiment: DeleteExperimentVariables): Promise<DeleteExperiment>;
/**
* @param {QueryNamespacesVariables} vars
* @returns {Promise<QueryNamespaces>}
*/
  queryNamespaces(vars: QueryNamespacesVariables): Promise<QueryNamespaces>;
/**
* @param {QueryBucketsVariables} vars
* @returns {Promise<QueryBuckets>}
*/
  queryBuckets(vars: QueryBucketsVariables): Promise<QueryBuckets>;
/**
* @param {NamespaceModelsVariables} vars
* @returns {Promise<NamespaceModels>}
*/
  queryNamespaceModels(vars: NamespaceModelsVariables): Promise<NamespaceModels>;
/**
* @param {QueryExperimentVariables} vars
* @returns {Promise<QueryExperiment>}
*/
  queryExperiment(vars: QueryExperimentVariables): Promise<QueryExperiment>;
}
/**
*/
export class Experiment {
  free(): void;
/**
* @param {Client} client
* @param {CreateExperimentVariables} args
*/
  constructor(client: Client, args: CreateExperimentVariables);
/**
* @param {Function} experiment_fn
* @returns {Promise<void>}
*/
  run(experiment_fn: Function): Promise<void>;
/**
* @param {UploadExperimentArgsWithContext} artifact
* @param {Uint8Array} data
* @returns {Promise<ExperimentResponse>}
*/
  saveArtifact(artifact: UploadExperimentArgsWithContext, data: Uint8Array): Promise<ExperimentResponse>;
}
