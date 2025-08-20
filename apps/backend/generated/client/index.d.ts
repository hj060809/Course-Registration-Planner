/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model AdminCode
 *
 */
export type AdminCode = $Result.DefaultSelection<Prisma.$AdminCodePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminCodes
 * const adminCodes = await prisma.adminCode.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminCodes
   * const adminCodes = await prisma.adminCode.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.adminCode`: Exposes CRUD operations for the **AdminCode** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AdminCodes
   * const adminCodes = await prisma.adminCode.findMany()
   * ```
   */
  get adminCode(): Prisma.AdminCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    AdminCode: 'AdminCode';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'adminCode';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      AdminCode: {
        payload: Prisma.$AdminCodePayload<ExtArgs>;
        fields: Prisma.AdminCodeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdminCodeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdminCodeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>;
          };
          findFirst: {
            args: Prisma.AdminCodeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdminCodeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>;
          };
          findMany: {
            args: Prisma.AdminCodeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>[];
          };
          create: {
            args: Prisma.AdminCodeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>;
          };
          createMany: {
            args: Prisma.AdminCodeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AdminCodeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>[];
          };
          delete: {
            args: Prisma.AdminCodeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>;
          };
          update: {
            args: Prisma.AdminCodeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>;
          };
          deleteMany: {
            args: Prisma.AdminCodeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AdminCodeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AdminCodeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>[];
          };
          upsert: {
            args: Prisma.AdminCodeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminCodePayload>;
          };
          aggregate: {
            args: Prisma.AdminCodeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdminCode>;
          };
          groupBy: {
            args: Prisma.AdminCodeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminCodeGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdminCodeCountArgs<ExtArgs>;
            result: $Utils.Optional<AdminCodeCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    adminCode?: AdminCodeOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model AdminCode
   */

  export type AggregateAdminCode = {
    _count: AdminCodeCountAggregateOutputType | null;
    _avg: AdminCodeAvgAggregateOutputType | null;
    _sum: AdminCodeSumAggregateOutputType | null;
    _min: AdminCodeMinAggregateOutputType | null;
    _max: AdminCodeMaxAggregateOutputType | null;
  };

  export type AdminCodeAvgAggregateOutputType = {
    id: number | null;
  };

  export type AdminCodeSumAggregateOutputType = {
    id: number | null;
  };

  export type AdminCodeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
  };

  export type AdminCodeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
  };

  export type AdminCodeCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    _all: number;
  };

  export type AdminCodeAvgAggregateInputType = {
    id?: true;
  };

  export type AdminCodeSumAggregateInputType = {
    id?: true;
  };

  export type AdminCodeMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
  };

  export type AdminCodeMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
  };

  export type AdminCodeCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    _all?: true;
  };

  export type AdminCodeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdminCode to aggregate.
     */
    where?: AdminCodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminCodes to fetch.
     */
    orderBy?:
      | AdminCodeOrderByWithRelationInput
      | AdminCodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdminCodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminCodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminCodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdminCodes
     **/
    _count?: true | AdminCodeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdminCodeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdminCodeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminCodeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminCodeMaxAggregateInputType;
  };

  export type GetAdminCodeAggregateType<T extends AdminCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminCode[P]>
      : GetScalarType<T[P], AggregateAdminCode[P]>;
  };

  export type AdminCodeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdminCodeWhereInput;
    orderBy?:
      | AdminCodeOrderByWithAggregationInput
      | AdminCodeOrderByWithAggregationInput[];
    by: AdminCodeScalarFieldEnum[] | AdminCodeScalarFieldEnum;
    having?: AdminCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCodeCountAggregateInputType | true;
    _avg?: AdminCodeAvgAggregateInputType;
    _sum?: AdminCodeSumAggregateInputType;
    _min?: AdminCodeMinAggregateInputType;
    _max?: AdminCodeMaxAggregateInputType;
  };

  export type AdminCodeGroupByOutputType = {
    id: number;
    code: string;
    name: string;
    _count: AdminCodeCountAggregateOutputType | null;
    _avg: AdminCodeAvgAggregateOutputType | null;
    _sum: AdminCodeSumAggregateOutputType | null;
    _min: AdminCodeMinAggregateOutputType | null;
    _max: AdminCodeMaxAggregateOutputType | null;
  };

  type GetAdminCodeGroupByPayload<T extends AdminCodeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdminCodeGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AdminCodeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminCodeGroupByOutputType[P]>
            : GetScalarType<T[P], AdminCodeGroupByOutputType[P]>;
        }
      >
    >;

  export type AdminCodeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['adminCode']
  >;

  export type AdminCodeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['adminCode']
  >;

  export type AdminCodeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['adminCode']
  >;

  export type AdminCodeSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
  };

  export type AdminCodeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'code' | 'name',
    ExtArgs['result']['adminCode']
  >;

  export type $AdminCodePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AdminCode';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        code: string;
        name: string;
      },
      ExtArgs['result']['adminCode']
    >;
    composites: {};
  };

  type AdminCodeGetPayload<
    S extends boolean | null | undefined | AdminCodeDefaultArgs,
  > = $Result.GetResult<Prisma.$AdminCodePayload, S>;

  type AdminCodeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AdminCodeFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AdminCodeCountAggregateInputType | true;
  };

  export interface AdminCodeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AdminCode'];
      meta: { name: 'AdminCode' };
    };
    /**
     * Find zero or one AdminCode that matches the filter.
     * @param {AdminCodeFindUniqueArgs} args - Arguments to find a AdminCode
     * @example
     * // Get one AdminCode
     * const adminCode = await prisma.adminCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminCodeFindUniqueArgs>(
      args: SelectSubset<T, AdminCodeFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AdminCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminCodeFindUniqueOrThrowArgs} args - Arguments to find a AdminCode
     * @example
     * // Get one AdminCode
     * const adminCode = await prisma.adminCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminCodeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AdminCodeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AdminCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeFindFirstArgs} args - Arguments to find a AdminCode
     * @example
     * // Get one AdminCode
     * const adminCode = await prisma.adminCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminCodeFindFirstArgs>(
      args?: SelectSubset<T, AdminCodeFindFirstArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AdminCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeFindFirstOrThrowArgs} args - Arguments to find a AdminCode
     * @example
     * // Get one AdminCode
     * const adminCode = await prisma.adminCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminCodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminCodeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AdminCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminCodes
     * const adminCodes = await prisma.adminCode.findMany()
     *
     * // Get first 10 AdminCodes
     * const adminCodes = await prisma.adminCode.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminCodeWithIdOnly = await prisma.adminCode.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdminCodeFindManyArgs>(
      args?: SelectSubset<T, AdminCodeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AdminCode.
     * @param {AdminCodeCreateArgs} args - Arguments to create a AdminCode.
     * @example
     * // Create one AdminCode
     * const AdminCode = await prisma.adminCode.create({
     *   data: {
     *     // ... data to create a AdminCode
     *   }
     * })
     *
     */
    create<T extends AdminCodeCreateArgs>(
      args: SelectSubset<T, AdminCodeCreateArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AdminCodes.
     * @param {AdminCodeCreateManyArgs} args - Arguments to create many AdminCodes.
     * @example
     * // Create many AdminCodes
     * const adminCode = await prisma.adminCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminCodeCreateManyArgs>(
      args?: SelectSubset<T, AdminCodeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AdminCodes and returns the data saved in the database.
     * @param {AdminCodeCreateManyAndReturnArgs} args - Arguments to create many AdminCodes.
     * @example
     * // Create many AdminCodes
     * const adminCode = await prisma.adminCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AdminCodes and only return the `id`
     * const adminCodeWithIdOnly = await prisma.adminCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminCodeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AdminCodeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AdminCode.
     * @param {AdminCodeDeleteArgs} args - Arguments to delete one AdminCode.
     * @example
     * // Delete one AdminCode
     * const AdminCode = await prisma.adminCode.delete({
     *   where: {
     *     // ... filter to delete one AdminCode
     *   }
     * })
     *
     */
    delete<T extends AdminCodeDeleteArgs>(
      args: SelectSubset<T, AdminCodeDeleteArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AdminCode.
     * @param {AdminCodeUpdateArgs} args - Arguments to update one AdminCode.
     * @example
     * // Update one AdminCode
     * const adminCode = await prisma.adminCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminCodeUpdateArgs>(
      args: SelectSubset<T, AdminCodeUpdateArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AdminCodes.
     * @param {AdminCodeDeleteManyArgs} args - Arguments to filter AdminCodes to delete.
     * @example
     * // Delete a few AdminCodes
     * const { count } = await prisma.adminCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminCodeDeleteManyArgs>(
      args?: SelectSubset<T, AdminCodeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AdminCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminCodes
     * const adminCode = await prisma.adminCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminCodeUpdateManyArgs>(
      args: SelectSubset<T, AdminCodeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AdminCodes and returns the data updated in the database.
     * @param {AdminCodeUpdateManyAndReturnArgs} args - Arguments to update many AdminCodes.
     * @example
     * // Update many AdminCodes
     * const adminCode = await prisma.adminCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AdminCodes and only return the `id`
     * const adminCodeWithIdOnly = await prisma.adminCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AdminCodeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AdminCodeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AdminCode.
     * @param {AdminCodeUpsertArgs} args - Arguments to update or create a AdminCode.
     * @example
     * // Update or create a AdminCode
     * const adminCode = await prisma.adminCode.upsert({
     *   create: {
     *     // ... data to create a AdminCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminCode we want to update
     *   }
     * })
     */
    upsert<T extends AdminCodeUpsertArgs>(
      args: SelectSubset<T, AdminCodeUpsertArgs<ExtArgs>>,
    ): Prisma__AdminCodeClient<
      $Result.GetResult<
        Prisma.$AdminCodePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AdminCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeCountArgs} args - Arguments to filter AdminCodes to count.
     * @example
     * // Count the number of AdminCodes
     * const count = await prisma.adminCode.count({
     *   where: {
     *     // ... the filter for the AdminCodes we want to count
     *   }
     * })
     **/
    count<T extends AdminCodeCountArgs>(
      args?: Subset<T, AdminCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCodeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AdminCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdminCodeAggregateArgs>(
      args: Subset<T, AdminCodeAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminCodeAggregateType<T>>;

    /**
     * Group by AdminCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AdminCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminCodeGroupByArgs['orderBy'] }
        : { orderBy?: AdminCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdminCodeGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAdminCodeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdminCode model
     */
    readonly fields: AdminCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminCodeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AdminCode model
   */
  interface AdminCodeFieldRefs {
    readonly id: FieldRef<'AdminCode', 'Int'>;
    readonly code: FieldRef<'AdminCode', 'String'>;
    readonly name: FieldRef<'AdminCode', 'String'>;
  }

  // Custom InputTypes
  /**
   * AdminCode findUnique
   */
  export type AdminCodeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * Filter, which AdminCode to fetch.
     */
    where: AdminCodeWhereUniqueInput;
  };

  /**
   * AdminCode findUniqueOrThrow
   */
  export type AdminCodeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * Filter, which AdminCode to fetch.
     */
    where: AdminCodeWhereUniqueInput;
  };

  /**
   * AdminCode findFirst
   */
  export type AdminCodeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * Filter, which AdminCode to fetch.
     */
    where?: AdminCodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminCodes to fetch.
     */
    orderBy?:
      | AdminCodeOrderByWithRelationInput
      | AdminCodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminCodes.
     */
    cursor?: AdminCodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminCodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminCodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminCodes.
     */
    distinct?: AdminCodeScalarFieldEnum | AdminCodeScalarFieldEnum[];
  };

  /**
   * AdminCode findFirstOrThrow
   */
  export type AdminCodeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * Filter, which AdminCode to fetch.
     */
    where?: AdminCodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminCodes to fetch.
     */
    orderBy?:
      | AdminCodeOrderByWithRelationInput
      | AdminCodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminCodes.
     */
    cursor?: AdminCodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminCodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminCodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminCodes.
     */
    distinct?: AdminCodeScalarFieldEnum | AdminCodeScalarFieldEnum[];
  };

  /**
   * AdminCode findMany
   */
  export type AdminCodeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * Filter, which AdminCodes to fetch.
     */
    where?: AdminCodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminCodes to fetch.
     */
    orderBy?:
      | AdminCodeOrderByWithRelationInput
      | AdminCodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdminCodes.
     */
    cursor?: AdminCodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminCodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminCodes.
     */
    skip?: number;
    distinct?: AdminCodeScalarFieldEnum | AdminCodeScalarFieldEnum[];
  };

  /**
   * AdminCode create
   */
  export type AdminCodeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * The data needed to create a AdminCode.
     */
    data: XOR<AdminCodeCreateInput, AdminCodeUncheckedCreateInput>;
  };

  /**
   * AdminCode createMany
   */
  export type AdminCodeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AdminCodes.
     */
    data: AdminCodeCreateManyInput | AdminCodeCreateManyInput[];
  };

  /**
   * AdminCode createManyAndReturn
   */
  export type AdminCodeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * The data used to create many AdminCodes.
     */
    data: AdminCodeCreateManyInput | AdminCodeCreateManyInput[];
  };

  /**
   * AdminCode update
   */
  export type AdminCodeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * The data needed to update a AdminCode.
     */
    data: XOR<AdminCodeUpdateInput, AdminCodeUncheckedUpdateInput>;
    /**
     * Choose, which AdminCode to update.
     */
    where: AdminCodeWhereUniqueInput;
  };

  /**
   * AdminCode updateMany
   */
  export type AdminCodeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AdminCodes.
     */
    data: XOR<
      AdminCodeUpdateManyMutationInput,
      AdminCodeUncheckedUpdateManyInput
    >;
    /**
     * Filter which AdminCodes to update
     */
    where?: AdminCodeWhereInput;
    /**
     * Limit how many AdminCodes to update.
     */
    limit?: number;
  };

  /**
   * AdminCode updateManyAndReturn
   */
  export type AdminCodeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * The data used to update AdminCodes.
     */
    data: XOR<
      AdminCodeUpdateManyMutationInput,
      AdminCodeUncheckedUpdateManyInput
    >;
    /**
     * Filter which AdminCodes to update
     */
    where?: AdminCodeWhereInput;
    /**
     * Limit how many AdminCodes to update.
     */
    limit?: number;
  };

  /**
   * AdminCode upsert
   */
  export type AdminCodeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * The filter to search for the AdminCode to update in case it exists.
     */
    where: AdminCodeWhereUniqueInput;
    /**
     * In case the AdminCode found by the `where` argument doesn't exist, create a new AdminCode with this data.
     */
    create: XOR<AdminCodeCreateInput, AdminCodeUncheckedCreateInput>;
    /**
     * In case the AdminCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminCodeUpdateInput, AdminCodeUncheckedUpdateInput>;
  };

  /**
   * AdminCode delete
   */
  export type AdminCodeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
    /**
     * Filter which AdminCode to delete.
     */
    where: AdminCodeWhereUniqueInput;
  };

  /**
   * AdminCode deleteMany
   */
  export type AdminCodeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdminCodes to delete
     */
    where?: AdminCodeWhereInput;
    /**
     * Limit how many AdminCodes to delete.
     */
    limit?: number;
  };

  /**
   * AdminCode without action
   */
  export type AdminCodeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCode
     */
    select?: AdminCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminCode
     */
    omit?: AdminCodeOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AdminCodeScalarFieldEnum: {
    id: 'id';
    code: 'code';
    name: 'name';
  };

  export type AdminCodeScalarFieldEnum =
    (typeof AdminCodeScalarFieldEnum)[keyof typeof AdminCodeScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Deep Input Types
   */

  export type AdminCodeWhereInput = {
    AND?: AdminCodeWhereInput | AdminCodeWhereInput[];
    OR?: AdminCodeWhereInput[];
    NOT?: AdminCodeWhereInput | AdminCodeWhereInput[];
    id?: IntFilter<'AdminCode'> | number;
    code?: StringFilter<'AdminCode'> | string;
    name?: StringFilter<'AdminCode'> | string;
  };

  export type AdminCodeOrderByWithRelationInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
  };

  export type AdminCodeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      code?: string;
      AND?: AdminCodeWhereInput | AdminCodeWhereInput[];
      OR?: AdminCodeWhereInput[];
      NOT?: AdminCodeWhereInput | AdminCodeWhereInput[];
      name?: StringFilter<'AdminCode'> | string;
    },
    'id' | 'code'
  >;

  export type AdminCodeOrderByWithAggregationInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
    _count?: AdminCodeCountOrderByAggregateInput;
    _avg?: AdminCodeAvgOrderByAggregateInput;
    _max?: AdminCodeMaxOrderByAggregateInput;
    _min?: AdminCodeMinOrderByAggregateInput;
    _sum?: AdminCodeSumOrderByAggregateInput;
  };

  export type AdminCodeScalarWhereWithAggregatesInput = {
    AND?:
      | AdminCodeScalarWhereWithAggregatesInput
      | AdminCodeScalarWhereWithAggregatesInput[];
    OR?: AdminCodeScalarWhereWithAggregatesInput[];
    NOT?:
      | AdminCodeScalarWhereWithAggregatesInput
      | AdminCodeScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'AdminCode'> | number;
    code?: StringWithAggregatesFilter<'AdminCode'> | string;
    name?: StringWithAggregatesFilter<'AdminCode'> | string;
  };

  export type AdminCodeCreateInput = {
    code: string;
    name: string;
  };

  export type AdminCodeUncheckedCreateInput = {
    id?: number;
    code: string;
    name: string;
  };

  export type AdminCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type AdminCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type AdminCodeCreateManyInput = {
    id?: number;
    code: string;
    name: string;
  };

  export type AdminCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type AdminCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type AdminCodeCountOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
  };

  export type AdminCodeAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type AdminCodeMaxOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
  };

  export type AdminCodeMinOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
  };

  export type AdminCodeSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
