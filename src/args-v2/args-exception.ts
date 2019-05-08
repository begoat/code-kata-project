import { exceptionConstants } from "./constants";

export const unexpectedFlag = function(message: string) {
  this.name = exceptionConstants.UNEXPECTED_FLAG;
  this.message = message || "";
} as any;

unexpectedFlag.prototype = Error.prototype;

export const invalidFlag = function(message: string) {
  this.name = exceptionConstants.INVALID_SCHEMA;
  this.message = message || "";
} as any;

invalidFlag.prototype = Error.prototype;

export const badValue = function(message: string) {
  this.name = exceptionConstants.BAD_VALUE;
  this.message = message || "";
} as any;

badValue.prototype = Error.prototype;
