/* src/components/FlyerForm.jsx */

import { forwardRef } from 'react'

const FlyerForm = forwardRef(function FlyerForm(
    {
        form,
        updateField,
        updateHighlight,
        handleImageUpload,
        printFlyer,
    },
    ref,
) {
    return (
        <section className="control-panel" ref={ref}>
            <div className="panel-header">
                <p className="panel-kicker">Real Estate Flyer</p>
                <h1>Flyer Generator</h1>
                <p>
                    Enter the listing details, upload images, then print or save as PDF.
                </p>
            </div>

            <form className="flyer-form">
                <FieldGroup title="Listing">
                    <TextInput
                        label="Address"
                        value={form.address}
                        onChange={(value) => updateField('address', value)}
                    />

                    <div className="form-grid-location">
                        <TextInput
                            label="City"
                            value={form.city}
                            onChange={(value) => updateField('city', value)}
                        />

                        <TextInput
                            label="State"
                            value={form.state}
                            onChange={(value) => updateField('state', value)}
                        />

                        <TextInput
                            label="ZIP"
                            value={form.zip}
                            onChange={(value) => updateField('zip', value)}
                        />
                    </div>

                    <TextInput
                        label="Price"
                        value={form.price}
                        onChange={(value) => updateField('price', value)}
                    />
                </FieldGroup>

                <FieldGroup title="Stats">
                    <div className="form-grid-3">
                        <TextInput
                            label="Beds"
                            value={form.beds}
                            onChange={(value) => updateField('beds', value)}
                        />

                        <TextInput
                            label="Baths"
                            value={form.baths}
                            onChange={(value) => updateField('baths', value)}
                        />

                        <TextInput
                            label="Sq Ft"
                            value={form.sqft}
                            onChange={(value) => updateField('sqft', value)}
                        />
                    </div>
                </FieldGroup>

                <FieldGroup title="Copy">
                    <TextArea
                        label="Summary"
                        value={form.summary}
                        onChange={(value) => updateField('summary', value)}
                    />

                    <div className="stack">
                        <label className="form-label">Highlights</label>

                        {form.highlights.map((highlight, index) => (
                            <input
                                key={index}
                                className="form-input"
                                value={highlight}
                                onChange={(event) =>
                                    updateHighlight(index, event.target.value)
                                }
                                placeholder={`Highlight ${index + 1}`}
                            />
                        ))}
                    </div>
                </FieldGroup>

                <FieldGroup title="Agent">
                    <TextInput
                        label="Agent Name"
                        value={form.agentName}
                        onChange={(value) => updateField('agentName', value)}
                    />

                    <TextInput
                        label="Phone"
                        value={form.phone}
                        onChange={(value) => updateField('phone', value)}
                    />

                    <TextInput
                        label="Email"
                        value={form.email}
                        onChange={(value) => updateField('email', value)}
                    />
                </FieldGroup>

                <FieldGroup title="Images">
                    <FileInput
                        label="Home Photo"
                        onChange={(file) => handleImageUpload('homeImage', file)}
                    />

                    <FileInput
                        label="Agent Photo"
                        onChange={(file) => handleImageUpload('agentImage', file)}
                    />

                    <FileInput
                        label="Logo"
                        onChange={(file) => handleImageUpload('logoImage', file)}
                    />
                </FieldGroup>

                <FieldGroup title="Colors">
                    <div className="form-grid-2">
                        <ColorInput
                            label="Price / Icons"
                            value={form.primaryColor}
                            onChange={(value) => updateField('primaryColor', value)}
                        />

                        <ColorInput
                            label="Bullet Points"
                            value={form.accentColor}
                            onChange={(value) => updateField('accentColor', value)}
                        />
                    </div>
                </FieldGroup>

                <button type="button" className="print-button" onClick={printFlyer}>
                    Print / Save PDF
                </button>

                <footer className="form-footer">
                    <div className="footer-meta">
                        <a
                            href="https://github.com/crdunwel/real-estate-flyer-generator"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source code
                        </a>
                    </div>

                    <a
                        className="footer-cta"
                        href="mailto:clayton.dunwell@gmail.com?subject=Custom%20software%20request&body=Hi%2C%0A%0AI%20found%20your%20Real%20Estate%20Flyer%20Generator.%0A%0AI%27m%20interested%20in%20something%20similar%20for%20my%20business.%0A%0ABusiness%3A%0AWhat%20I%20want%20to%20improve%3A%0A"
                    >
                        Need something like this for your business?
                    </a>
                </footer>
            </form>
        </section>
    )
})

function FieldGroup({ title, children }) {
    return (
        <fieldset className="field-group">
            <legend>{title}</legend>
            {children}
        </fieldset>
    )
}

function TextInput({ label, value, onChange }) {
    return (
        <label className="field">
            <span>{label}</span>
            <input
                className="form-input"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    )
}

function TextArea({ label, value, onChange }) {
    return (
        <label className="field">
            <span>{label}</span>
            <textarea
                className="form-input form-textarea"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    )
}

function FileInput({ label, onChange }) {
    return (
        <label className="field">
            <span>{label}</span>
            <input
                className="form-input"
                type="file"
                accept="image/*"
                onChange={(event) => onChange(event.target.files?.[0])}
            />
        </label>
    )
}

function ColorInput({ label, value, onChange }) {
    return (
        <label className="field">
            <span>{label}</span>

            <div className="color-input-row">
                <input
                    className="color-swatch"
                    type="color"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />

                <input
                    className="form-input color-value"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
            </div>
        </label>
    )
}

export default FlyerForm