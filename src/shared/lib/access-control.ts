/**
 * Access control utilities for program sessions
 * Determines user access based on authentication and premium status
 */

export interface AccessControlContext {
  isAuthenticated: boolean;
}

export type AccessAction = "allow" | "require_auth";

/**
 * Determines what action should be taken based on user authentication status
 */
export function getSessionAccess(context: AccessControlContext): AccessAction {
  const { isAuthenticated } = context;

  if (!isAuthenticated) {
    return "require_auth";
  }

  return "allow";
}

/**
 * Helper to check if user can start the session
 */
export function canStartSession(context: AccessControlContext): boolean {
  return getSessionAccess(context) === "allow";
}