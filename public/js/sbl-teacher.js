// public/js/sbl-teacher.js
// Client-side logic for the teacher dashboard (/teacher/) — shows a
// teacher which students are assigned to them, and a lightweight
// progress summary for each. All real authorization happens
// server-side (middleware.js gates the page itself, requiring role
// === 'teacher' or 'admin'; /api/progress?myStudents=1 independently
// re-checks the caller's role) — this script only renders data. An
// admin can also act as a teacher and have students assigned
// directly to them — see README-TEACHER-LINKING-SETUP.md.

(function () {
  var pageError = document.getElementById('pageError');

  function showError(msg) {
    pageError.textContent = msg;
    pageError.classList.add('is-visible');
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function formatDate(iso) {
    if (!iso) return 'No activity yet';
    try {
      return new Date(iso).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
    } catch (e) { return iso; }
  }

  // ---- Session check / bounce non-teachers ----
  fetch('/api/session')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.loggedIn || (data.user.role !== 'teacher' && data.user.role !== 'admin')) {
        window.location.href = '/login/?redirect=/teacher/';
        return;
      }
      document.getElementById('teacherName').textContent = data.user.fullName || data.user.email;
      loadStudents();
    })
    .catch(function () {
      window.location.href = '/login/?redirect=/teacher/';
    });

  document.getElementById('logoutBtn').addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' }).finally(function () {
      window.location.href = '/login/';
    });
  });

  function loadStudents() {
    fetch('/api/progress?myStudents=1')
      .then(function (r) {
        if (!r.ok) return r.json().then(function (data) { throw new Error(data.error || 'Could not load your students.'); });
        return r.json();
      })
      .then(function (data) { render(data.students || []); })
      .catch(function (err) {
        showError(err.message || 'Could not load your students. Please refresh the page.');
      });
  }

  function render(students) {
    var body = document.getElementById('studentsBody');
    var empty = document.getElementById('studentsEmpty');
    body.innerHTML = '';
    if (!students.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    students.forEach(function (s) {
      var tr = document.createElement('tr');
      var badge = s.status === 'suspended'
        ? '<span class="sbl-badge sbl-badge--suspended">Suspended</span>'
        : '<span class="sbl-badge sbl-badge--approved">Active</span>';
      tr.innerHTML =
        '<td>' + escapeHtml(s.fullName) + '</td>' +
        '<td>' + escapeHtml(s.email) + '</td>' +
        '<td>' + (s.groupName ? escapeHtml(s.groupName) : '<span class="sbl-muted">&mdash;</span>') + '</td>' +
        '<td>' + badge + '</td>' +
        '<td>' + s.lessonsWithProgress + '</td>' +
        '<td>' + formatDate(s.lastUpdated) + '</td>';
      body.appendChild(tr);
    });
  }
})();
