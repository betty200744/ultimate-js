// number enum
export enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
}

export enum StatusCode {
    SUCCESS = 0,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500,
    UNKNOWN = 1400,
    OBJECT_NOT_FOUND = 1401,
    VALUE_NOT_FOUND = 1402,
    VALUE_ALREADY_EXISTS = 1403,
    VALUE_OUT_OF_RANGE = 1404,
    INVALID_VALUE = 1405,
    FAILED_DEPENDENCY = 1406,
    FORBIDDEN = 1407,
    USERNAME_TAKEN = 1408,
    EMAIL_TAKEN = 1409,
}

// string enum
export enum Severity {
    BLOCKER = 'BLOCKER',
    CRITICAL = 'CRITICAL',
    MAJOR = 'MAJOR',
    MINOR = 'MINOR',
    INFO = 'INFO'
}