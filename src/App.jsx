/* src/App.jsx */

import { useRef, useState } from 'react'

import './styles/app.css'
import './styles/flyer.css'
import './styles/flyer-form.css'
import './styles/print.css'

import { defaultFlyerData } from './data/defaultFlyerData'
import Flyer from './components/Flyer'
import FlyerForm from './components/FlyerForm'
import SvgSprite from './components/SvgSprite'

function App() {
  const [form, setForm] = useState(defaultFlyerData)
  const controlPanelRef = useRef(null)

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function updateHighlight(index, value) {
    setForm((current) => {
      const nextHighlights = [...current.highlights]
      nextHighlights[index] = value

      return {
        ...current,
        highlights: nextHighlights,
      }
    })
  }

  function handleImageUpload(field, file) {
    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setForm((current) => ({
      ...current,
      [field]: imageUrl,
    }))
  }

  function printFlyer() {
    window.print()
  }

  function handlePreviewWheel(event) {
    const panel = controlPanelRef.current
    if (!panel) return

    // Only hijack scroll on desktop
    const isDesktop = window.matchMedia('(min-width: 1101px)').matches
    if (!isDesktop) return

    // If panel can't scroll, do nothing
    const canScrollPanel = panel.scrollHeight > panel.clientHeight
    if (!canScrollPanel) return

    // Prevent browser from scrolling page/preview
    event.preventDefault()

    // Forward scroll to left panel
    panel.scrollTop += event.deltaY
  }

  return (
      <>
        <SvgSprite />

        <main className="app-shell">
          <FlyerForm
              ref={controlPanelRef}
              form={form}
              updateField={updateField}
              updateHighlight={updateHighlight}
              handleImageUpload={handleImageUpload}
              printFlyer={printFlyer}
          />

          <section
              className="preview-panel"
              aria-label="Flyer preview"
              onWheel={handlePreviewWheel}
          >
            <div className="mobile-preview-frame">
              <Flyer data={form} />
            </div>
          </section>
        </main>
      </>
  )
}

export default App