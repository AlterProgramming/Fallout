const sampleInbox = [
  {
    id: 'm_001',
    threadId: 't_internship_followup',
    from: 'Campus Recruiting <recruiting@brightstart.io>',
    subject: 'Interview follow-up: preferred time for technical round',
    preview: 'Could you share two time slots this week for a 45-minute technical interview?',
    receivedAt: '2026-03-13T09:16:00Z',
    gmailSmartReplyHint: 'needs-reply',
    gmailPriorityScore: 0.96,
    hasUserReplyAfter: false,
  },
  {
    id: 'm_002',
    threadId: 't_prof_meeting',
    from: 'Prof. Elena Ramirez <eramirez@university.edu>',
    subject: 'Re: Reschedule office hours',
    preview: 'I can do Tuesday at 3 PM instead. Let me know if that works for you.',
    receivedAt: '2026-03-12T19:48:00Z',
    gmailSmartReplyHint: 'needs-reply',
    gmailPriorityScore: 0.89,
    hasUserReplyAfter: false,
  },
  {
    id: 'm_003',
    threadId: 't_newsletter',
    from: 'Product Weekly <digest@productweekly.com>',
    subject: 'Top product jobs this week',
    preview: "Here are this week's curated PM roles and resources.",
    receivedAt: '2026-03-12T11:02:00Z',
    gmailSmartReplyHint: 'informational',
    gmailPriorityScore: 0.21,
    hasUserReplyAfter: false,
  },
  {
    id: 'm_004',
    threadId: 't_video_call',
    from: 'Alex Tan <alex@foundrylabs.ai>',
    subject: 'Great speaking today — quick follow up',
    preview: 'Thanks for joining the video call. If interested, send your portfolio and availability.',
    receivedAt: '2026-03-11T16:20:00Z',
    gmailSmartReplyHint: 'needs-reply',
    gmailPriorityScore: 0.93,
    hasUserReplyAfter: true,
  },
  {
    id: 'm_005',
    threadId: 't_group_project',
    from: 'Study Group <group@uni-chat.edu>',
    subject: 'Draft slide deck uploaded',
    preview: 'FYI: slides are in Drive. No action needed unless you see errors.',
    receivedAt: '2026-03-10T23:10:00Z',
    gmailSmartReplyHint: 'ambiguous',
    gmailPriorityScore: 0.44,
    hasUserReplyAfter: false,
  },
]

const manuallyDone = new Set()
let inbox = []

const syncBtn = document.querySelector('#syncBtn')
const inboxList = document.querySelector('#inboxList')
const todoList = document.querySelector('#todoList')
const summary = document.querySelector('#summary')

syncBtn.addEventListener('click', () => {
  inbox = [...sampleInbox].sort((a, b) => b.receivedAt.localeCompare(a.receivedAt))
  render()
})

function evaluateStatus(email) {
  if (email.hasUserReplyAfter) return 'replied'
  if (email.gmailSmartReplyHint === 'needs-reply') return 'needsReply'
  if (email.gmailSmartReplyHint === 'ambiguous' && email.gmailPriorityScore >= 0.5) return 'needsReply'
  return 'noReplyNeeded'
}

function formatRelative(iso) {
  const diffHrs = Math.round((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60))
  if (diffHrs < 24) return `${diffHrs}h ago`
  return `${Math.round(diffHrs / 24)}d ago`
}

function render() {
  const evaluated = inbox.map((email) => ({ email, status: evaluateStatus(email) }))
  const needsReply = evaluated.filter(({ email, status }) => status === 'needsReply' && !manuallyDone.has(email.id))
  const replied = evaluated.filter(({ status }) => status === 'replied')

  summary.innerHTML = `
    <div class="metric"><strong>${inbox.length}</strong><span>emails synced</span></div>
    <div class="metric warn"><strong>${needsReply.length}</strong><span>need reply</span></div>
    <div class="metric ok"><strong>${replied.length}</strong><span>already replied</span></div>
  `

  inboxList.innerHTML = evaluated.map(({ email, status }) => {
    const badgeLabel = status === 'needsReply' ? 'Needs reply' : status === 'replied' ? 'Replied' : 'No reply needed'
    return `
      <li class="item">
        <div class="item-top">
          <p class="subject">${email.subject}</p>
          <span class="badge ${status}">${badgeLabel}</span>
        </div>
        <p class="meta">${email.from} • ${formatRelative(email.receivedAt)}</p>
        <p class="preview">${email.preview}</p>
        <p class="meta">Suggestion source: Gmail-style smart signal (${Math.round(email.gmailPriorityScore * 100)}% confidence)</p>
      </li>
    `
  }).join('')

  todoList.innerHTML = needsReply.length === 0
    ? '<li class="item">All clear 🎉 No pending replies detected.</li>'
    : needsReply.map(({ email }) => `
      <li class="item">
        <p class="subject">${email.subject}</p>
        <p class="meta">${email.from}</p>
        <button class="done" data-email-id="${email.id}">Mark as handled</button>
      </li>
    `).join('')

  document.querySelectorAll('.done').forEach((button) => {
    button.addEventListener('click', () => {
      manuallyDone.add(button.dataset.emailId)
      render()
    })
  })
}

render()
