/**
 * Parent class for all the enhanced errors in any gadget-owned package
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    GlobalNotSetError: function() {
        return GlobalNotSetError;
    },
    InternalError: function() {
        return InternalError;
    },
    InvalidActionInputError: function() {
        return InvalidActionInputError;
    },
    InvalidStateTransitionError: function() {
        return InvalidStateTransitionError;
    },
    MisconfiguredActionError: function() {
        return MisconfiguredActionError;
    },
    NoSessionForAuthenticationError: function() {
        return NoSessionForAuthenticationError;
    },
    NoTransitionError: function() {
        return NoTransitionError;
    },
    PermissionDeniedError: function() {
        return PermissionDeniedError;
    },
    UserNotSetOnSessionError: function() {
        return UserNotSetOnSessionError;
    }
});
class GadgetError extends Error {
    /** Was this error caused by the Gadget application's code */ causedByUserland = false;
    /** Was this error caused by the API client calling the Gadget application */ causedByClient = false;
    /** What HTTP status code should be sent when responding with this error */ statusCode = 500;
    /** A GGT_SOMETHING human/machine readable string unique error class name */ code;
    /** If this error is thrown, should we allow its code, message, and details to be sent to the client. Defaults to true for errors with 400 series status codes and false otherwise. */ exposeToClient;
    /** If this error is thrown, should we allow its code, message, and details to be sent to the sandbox. Defaults to true. */ exposeToSandbox;
    /** Optional bag of data about this error */ details;
    /** Was this error already logged? */ logged = false;
}
const errorClass = (code, defaultMessage, options = {})=>{
    const opts = {
        ...options,
        logged: options.logged ?? false,
        statusCode: options.statusCode ?? 500,
        causedByClient: options.causedByClient ?? false,
        causedByUserland: options.causedByUserland ?? false,
        exposeToClient: options.exposeToClient ?? false,
        exposeToSandbox: options.exposeToSandbox ?? false
    };
    return class extends GadgetError {
        details;
        static code = code;
        code;
        statusCode;
        causedByClient;
        causedByUserland;
        logged;
        exposeToClient;
        exposeToSandbox;
        /** JS classname of this error instance */ name;
        /** Inner error which caused this error */ cause;
        constructor(message = defaultMessage, details){
            super(`${code}: ${message}`);
            this.details = details;
            this.code = code;
            this.statusCode = opts.statusCode;
            this.causedByClient = opts.causedByClient;
            this.causedByUserland = opts.causedByUserland;
            this.logged = opts.logged;
            this.exposeToClient = opts.exposeToClient ?? (opts.causedByClient || opts.statusCode >= 400 && opts.statusCode < 500);
            this.exposeToSandbox = opts.exposeToSandbox ?? opts.causedByUserland;
            this.details = details;
            if (details?.cause) {
                this.cause = details.cause;
                delete details.cause;
            }
            this.name = this.constructor.name;
        }
    };
};
class PermissionDeniedError extends errorClass("GGT_PERMISSION_DENIED", "Permission denied to access this resource.", {
    statusCode: 403,
    causedByClient: true,
    causedByUserland: false
}) {
    details;
    actor;
    actorRoleKeys;
    resource;
    constructor(message, details = {}){
        super(message, details);
        this.details = details;
        this.actor = details.actor;
        this.actorRoleKeys = details.actorRoleKeys;
        this.resource = details.resource;
    }
}
class MisconfiguredActionError extends errorClass("GGT_MISCONFIGURED_ACTION", "Invalid action configuration, request cannot be processed until this is corrected.", {
    statusCode: 500,
    causedByClient: false,
    causedByUserland: true
}) {
}
class InternalError extends errorClass("GGT_INTERNAL_ERROR", "An internal error occurred.", {
    statusCode: 500,
    causedByClient: false,
    causedByUserland: false
}) {
}
class InvalidActionInputError extends errorClass("GGT_INVALID_ACTION_INPUT", "Input was invalid for an action", {
    statusCode: 422,
    causedByClient: true,
    causedByUserland: false
}) {
}
class InvalidStateTransitionError extends errorClass("GGT_INVALID_STATE_TRANSITION", "Invalid state transition", {
    statusCode: 422,
    causedByClient: false,
    causedByUserland: true
}) {
}
class UserNotSetOnSessionError extends errorClass("GGT_USER_NOT_SET_ON_SESSION", "User not set on session", {
    causedByClient: true,
    causedByUserland: false
}) {
}
class NoSessionForAuthenticationError extends errorClass("GGT_NO_SESSION_FOR_AUTHENTICATION", "There is no authenticated user in scope.", {
    causedByClient: true,
    causedByUserland: false
}) {
}
class NoTransitionError extends errorClass("GGT_NO_TRANSITION", "Invalid action", {
    statusCode: 422,
    causedByClient: true,
    causedByUserland: false
}) {
}
class GlobalNotSetError extends errorClass("GGT_GLOBAL_NOT_SET", "Globals not yet set", {
    statusCode: 500,
    causedByClient: false,
    causedByUserland: false
}) {
}
