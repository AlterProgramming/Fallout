import './style.css'

type SourceType = 'Patreon' | 'Substack' | 'Instagram' | 'Book' | 'Other'

interface LibraryItem {
  id: string
  title: string
  link: string
  notes: string
  source: SourceType
  createdAt: string
}

const SOURCE_OPTIONS: SourceType[] = ['Patreon', 'Substack', 'Instagram', 'Book', 'Other']
const STORAGE_KEY = 'content-library-items'

const sourcePatterns: Record<Exclude<SourceType, 'Book' | 'Other'>, RegExp> = {
  Patreon: /patreon\.com/i,
  Substack: /substack\.com/i,
  Instagram: /instagram\.com/i,
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = `
  <main class="library-app">
    <header>
      <h1>Content Library</h1>
      <p>Save links from Patreon, Substack, Instagram, books, and more into one organized library.</p>
    </header>

    <section class="entry-panel">
      <h2>Add content</h2>
      <form id="content-form" class="content-form">
        <label>
          Title
          <input id="title" name="title" type="text" placeholder="e.g. Deep-dive on worldbuilding" required />
        </label>

        <label>
          Link (optional for books)
          <input id="link" name="link" type="url" placeholder="https://..." />
        </label>

        <label>
          Source
          <select id="source" name="source" required>
            <option value="">Auto-detect from link</option>
            ${SOURCE_OPTIONS.map((source) => `<option value="${source}">${source}</option>`).join('')}
          </select>
        </label>

        <label>
          Notes
          <textarea id="notes" name="notes" rows="3" placeholder="Short summary, chapter, or why this is useful..."></textarea>
        </label>

        <button type="submit">Add to library</button>
      </form>
    </section>

    <section class="library-panel">
      <div class="library-heading">
        <h2>Your library</h2>
        <button id="clear-all" class="ghost" type="button">Clear all</button>
      </div>
      <div id="library-view" class="library-view"></div>
    </section>
  </main>
`

const form = document.querySelector<HTMLFormElement>('#content-form')
const libraryView = document.querySelector<HTMLDivElement>('#library-view')
const clearButton = document.querySelector<HTMLButtonElement>('#clear-all')

if (!form || !libraryView || !clearButton) {
  throw new Error('Required controls are missing')
}

const readItems = (): LibraryItem[] => {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return []
  }

  try {
    return JSON.parse(raw) as LibraryItem[]
  } catch {
    return []
  }
}

const writeItems = (items: LibraryItem[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const getSourceFromLink = (link: string): SourceType => {
  const clean = link.trim()
  if (!clean) {
    return 'Book'
  }

  const matches = Object.entries(sourcePatterns).find(([, pattern]) => pattern.test(clean))
  return (matches?.[0] as SourceType) ?? 'Other'
}

const renderLibrary = (): void => {
  const items = readItems().sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  if (items.length === 0) {
    libraryView.innerHTML = '<p class="empty-state">No content yet. Add your first entry above.</p>'
    return
  }

  const groups = SOURCE_OPTIONS.reduce<Record<SourceType, LibraryItem[]>>((acc, source) => {
    acc[source] = items.filter((item) => item.source === source)
    return acc
  }, {} as Record<SourceType, LibraryItem[]>)

  libraryView.innerHTML = SOURCE_OPTIONS.map((source) => {
    const entries = groups[source]

    if (!entries.length) {
      return ''
    }

    const cards = entries
      .map((item) => {
        const safeLink = item.link
          ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">Open source ↗</a>`
          : '<span class="book-label">No link provided</span>'

        return `
          <article class="entry-card">
            <h3>${item.title}</h3>
            <p class="meta">Added ${new Date(item.createdAt).toLocaleDateString()}</p>
            <p>${item.notes || 'No notes added.'}</p>
            <div class="entry-footer">
              ${safeLink}
              <button type="button" class="ghost delete-btn" data-id="${item.id}">Remove</button>
            </div>
          </article>
        `
      })
      .join('')

    return `
      <section class="source-group">
        <h3>${source} <span>${entries.length}</span></h3>
        <div class="card-grid">${cards}</div>
      </section>
    `
  }).join('')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  const title = String(formData.get('title') ?? '').trim()
  const link = String(formData.get('link') ?? '').trim()
  const notes = String(formData.get('notes') ?? '').trim()
  const selectedSource = String(formData.get('source') ?? '').trim() as SourceType | ''

  if (!title) {
    return
  }

  if (link && !/^https?:\/\//i.test(link)) {
    alert('Please provide a valid URL starting with http:// or https://')
    return
  }

  const item: LibraryItem = {
    id: crypto.randomUUID(),
    title,
    link,
    notes,
    source: selectedSource || getSourceFromLink(link),
    createdAt: new Date().toISOString(),
  }

  const items = readItems()
  writeItems([item, ...items])
  form.reset()
  renderLibrary()
})

libraryView.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  const button = target.closest<HTMLButtonElement>('.delete-btn')

  if (!button) {
    return
  }

  const itemId = button.dataset.id
  if (!itemId) {
    return
  }

  const items = readItems().filter((item) => item.id !== itemId)
  writeItems(items)
  renderLibrary()
})

clearButton.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY)
  renderLibrary()
})

renderLibrary()
