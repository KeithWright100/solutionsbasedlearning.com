// api/_lib/validate.js
// Small, dependency-free validation helpers shared by the register
// and password endpoints. Client-side validation on the forms is a
// courtesy for the user — these server-side checks are the real
// boundary, since the API can always be called directly.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return typeof value === 'string' && value.length <= 254 && EMAIL_RE.test(value.trim());
}

export function isNonEmptyString(value, maxLength = 500) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

const VALID_ROLES = [
  'Teacher', 'Head of Department', 'School Leader', 'Curriculum Coordinator',
  'Educational Consultant', 'University Lecturer', 'Trainee Teacher', 'Other'
];

export function isValidRoleApplied(value) {
  return VALID_ROLES.includes(value);
}

export function sanitizeAreasOfInterest(value) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 20);
}

// Minimum password requirement — deliberately simple (length-based)
// rather than character-class rules, which push people toward
// predictable substitutions without much real security benefit.
export function isValidPassword(value) {
  return typeof value === 'string' && value.length >= 10 && value.length <= 200;
}
