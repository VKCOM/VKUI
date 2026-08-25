//#region node_modules/@hediet/json-rpc/dist/JsonRpcTypes.d.ts
type JSONObject = {
  [key: string]: JSONValue | undefined;
};
interface JSONArray extends Array<JSONValue> {}
type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
type Message = IRequestMessage | IResponseMessage;
/**
 * Represents a request or a notification.
 */
interface IRequestMessage {
  jsonrpc: "2.0";
  /**  must not match `rpc\..*` */
  method: string;
  params?: JSONArray | JSONObject;
  /** Is not set if and only if the request is a notification. */
  id?: RequestId;
  /** Requests don't have a result. */
  result?: never;
}
type RequestId = number | string;
/**
 * Either result or error is set.
 */
interface IResponseMessage {
  jsonrpc: "2.0";
  /**
   * This member is REQUIRED on success.
   * This member MUST NOT exist if there was an error invoking the method.
   * The value of this member is determined by the method invoked on the Server.
   */
  result?: JSONValue;
  /**
   * This member is REQUIRED on error.
   * This member MUST NOT exist if there was no error triggered during invocation.
   */
  error?: ErrorObject;
  /**
   * If there was an error in detecting the id in the Request object
   * (e.g. Parse error/Invalid Request), it MUST be Null.
   */
  id: RequestId | null;
  method?: never;
}
interface ErrorObject {
  /** A Number that indicates the error type that occurred. */
  code: ErrorCode;
  /** The message SHOULD be limited to a concise single sentence. */
  message: string;
  /**
   * A Primitive or Structured value that contains additional information about the error.
   * This may be omitted.
   * The value of this member is defined by the Server (e.g. detailed error information, nested errors etc.).
   */
  data?: JSONValue;
}
declare namespace ErrorObject {
  function create(obj: ErrorObject): ErrorObject;
}
interface ErrorCode extends Number {}
declare namespace ErrorCode {
  /**
   * Invalid JSON was received by the server.
   * An error occurred on the server while parsing the JSON text.
   */
  const parseError: ErrorCode;
  /**
   * The JSON sent is not a valid Request object.
   */
  const invalidRequest: ErrorCode;
  /**
   * The method does not exist/is not available.
   */
  const methodNotFound: ErrorCode;
  /**
   * Invalid method parameter(s).
   */
  const invalidParams: ErrorCode;
  /**
   * 	Internal JSON-RPC error.
   */
  const internalError: ErrorCode;
  /**
   * implementation-defined server-errors.
   */
  function isServerError(code: number): boolean;
  /**
   * implementation-defined server-errors.
   */
  function serverError(code: number): ErrorCode;
  /**
   * Non-spec.
   */
  const unexpectedServerError: ErrorCode;
  function isApplicationError(code: number): boolean;
  function applicationError(code: number): ErrorCode;
  /**
   * Non-spec.
   */
  const genericApplicationError: ErrorCode;
}
//#endregion
//#region node_modules/@hediet/json-rpc/dist/common.d.ts
interface IDisposable$1 {
  dispose(): void;
}
type IEvent<T> = (listener: (e: T) => void) => IDisposable$1;
declare class EventEmitter<T> {
  private listeners;
  readonly event: IEvent<T>;
  fire(args: T): void;
}
interface IValueWithChangeEvent<T> {
  get value(): T;
  get onChange(): IEvent<T>;
}
declare class ValueWithChangeEvent<T> implements IValueWithChangeEvent<T> {
  private _value;
  private eventEmitter;
  constructor(initialValue: T);
  get value(): T;
  set value(newValue: T);
  get onChange(): IEvent<T>;
}
//#endregion
//#region node_modules/@hediet/json-rpc/dist/MessageTransport.d.ts
/**
 * Represents a mechanism to send and receive messages.
 */
interface IMessageTransport {
  get state(): IValueWithChangeEvent<ConnectionState>;
  send(message: Message): Promise<void>;
  /**
   * Sets a listener for received messages.
   * The listener might be called multiple times before this function returns.
   * The method allows reentrancy.
   */
  setListener(listener: MessageListener | undefined): void;
  /**
   * Returns a human readable representation of this stream.
   */
  toString(): string;
}
type ConnectionState = {
  state: "connecting";
} | {
  state: "open";
} | {
  state: "closed";
  error: Error | undefined;
};
type MessageListener = (message: Message) => void;
/**
 * Base class for implementing a MessageStream.
 * Provides an unreadMessage queue.
 */
declare abstract class BaseMessageTransport implements IMessageTransport {
  private static id;
  private readonly _unprocessedMessages;
  private _messageListener;
  protected readonly id: number;
  private readonly _state;
  readonly state: ValueWithChangeEvent<ConnectionState>;
  /**
   * Sets a callback for incoming messages.
   */
  setListener(listener: MessageListener | undefined): void;
  /**
   * Writes a message to the stream.
   */
  send(message: Message): Promise<void>;
  protected abstract _sendImpl(message: Message): Promise<void>;
  /**
   * Returns human readable information of this message stream.
   */
  abstract toString(): string;
  /**
   * Call this in derived classes to signal a new message.
   */
  protected _dispatchReceivedMessage(message: Message): void;
  /**
   * Call this in derived classes to signal that the connection closed.
   */
  protected _onConnectionClosed(): void;
  log(logger?: IMessageLogger): IMessageTransport;
}
/**
 * Used by `StreamLogger` to log messages.
 */
interface IMessageLogger {
  log(stream: IMessageTransport, type: "incoming" | "outgoing", message: Message): void;
}
//#endregion
//#region node_modules/@hediet/json-rpc/dist/typedChannel/serializerMapping.d.ts
declare global {
  interface JsonRpcSerializerMapper<T> {}
}
//#endregion
//#region src/utils.d.ts
interface IDisposable {
  dispose(): void;
}
//#endregion
//#region src/adapters/LspClient.d.ts
declare class MonacoLspClient {
  private _connection;
  private readonly _capabilitiesRegistry;
  private readonly _bridge;
  private _initPromise;
  constructor(transport: IMessageTransport);
  private _init;
  protected createFeatures(): IDisposable;
}
//#endregion
//#region node_modules/@hediet/json-rpc-websocket/dist/index.d.ts
type NormalizedWebSocketOptions = {
  address: string;
};
type WebSocketOptions = NormalizedWebSocketOptions | {
  host: string;
  port: number;
  forceTls?: boolean;
};
/**
 * Represents a stream through a web socket.
 * Use the static `connectTo` method to get a stream to a web socket server.
 */
declare class WebSocketTransport extends BaseMessageTransport {
  private readonly socket;
  static connectTo(options: WebSocketOptions): Promise<WebSocketTransport>;
  static fromWebSocket(socket: unknown): WebSocketTransport;
  private readonly errorEmitter;
  readonly onError: EventEmitter<{
    error: unknown;
  }>;
  private constructor();
  /**
   * Closes the underlying socket.
   */
  close(): void;
  /**
   * Same as `close`.
   */
  dispose(): void;
  _sendImpl(message: Message): Promise<void>;
  toString(): string;
}
//#endregion
//#region node_modules/@hediet/json-rpc-browser/dist/worker.d.ts
/**
 * Gets a stream that uses `worker.postMessage` to write
 * and `worker.addEventListener` to read messages.
 */
declare function createTransportToWorker(worker: Worker): BaseMessageTransport;
//#endregion
//#region node_modules/@hediet/json-rpc-browser/dist/iframe.d.ts
/**
 * Gets a stream that uses `worker.postMessage` to write
 * and `worker.addEventListener` to read messages.
 */
declare function createTransportToIFrame(iframe: HTMLIFrameElement): BaseMessageTransport;

export { MonacoLspClient, WebSocketTransport, createTransportToIFrame, createTransportToWorker };
