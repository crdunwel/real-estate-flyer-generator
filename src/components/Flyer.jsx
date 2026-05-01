/* src/components/Flyer.jsx */

function Flyer({ data }) {
    return (
        <section
            className="flyer"
            style={{
                '--flyer-primary': data.primaryColor,
                '--flyer-accent': data.accentColor,
            }}
        >
            <header className="header">
                <div className="header-copy">
                    <p className="eyebrow">Featured Listing</p>
                    <h1>{data.address}</h1>
                    <p className="location">
                        {data.city}
                        {data.city && data.state ? ', ' : ''}
                        {data.state} {data.zip}
                    </p>
                </div>

                <div className="price-wrap">
                    <p className="price-label">Offered at</p>
                    <p className="price">{data.price}</p>
                </div>
            </header>

            <figure className="hero">
                <img
                    src={data.homeImage}
                    alt={`Front exterior of ${data.address}, ${data.location}`}
                />
            </figure>

            <section className="stats-strip" aria-label="Property details">
                <div className="stat-item">
                    <svg className="stat-icon" aria-hidden="true">
                        <use href="#icon-bed"></use>
                    </svg>
                    <span className="stat-value">{data.beds}</span>
                    <span className="stat-name">Bedrooms</span>
                </div>

                <div className="stat-divider"></div>

                <div className="stat-item">
                    <svg className="stat-icon" aria-hidden="true">
                        <use href="#icon-bath"></use>
                    </svg>
                    <span className="stat-value">{data.baths}</span>
                    <span className="stat-name">Bathrooms</span>
                </div>

                <div className="stat-divider"></div>

                <div className="stat-item">
                    <svg className="stat-icon" aria-hidden="true">
                        <use href="#icon-ruler"></use>
                    </svg>
                    <span className="stat-value">{data.sqft}</span>
                    <span className="stat-name">Sq Ft</span>
                </div>
            </section>

            <section className="summary-band">
                <p>{data.summary}</p>
            </section>

            <section className="highlights">
                <div className="section-rule">
                    <span></span>
                    <p>Property Highlights</p>
                    <span></span>
                </div>

                <div className="highlights-list">
                    {data.highlights
                        .filter((highlight) => highlight.trim() !== '')
                        .map((highlight, index) => (
                            <span key={`${highlight}-${index}`}>{highlight}</span>
                        ))}
                </div>
            </section>

            <footer className="bottom-row">
                <section className="agent-block">
                    <div className="agent-photo-wrap">
                        <img
                            src={data.agentImage}
                            alt={data.agentName}
                            className="agent-photo"
                        />
                    </div>

                    <div className="agent-copy">
                        <p className="agent-kicker">Listing Agent</p>
                        <h2>{data.agentName}</h2>

                        <div className="agent-contact">
                            <div className="contact-line">
                                <svg className="contact-icon" aria-hidden="true">
                                    <use href="#icon-phone"></use>
                                </svg>
                                <span>{data.phone}</span>
                            </div>

                            <div className="contact-line">
                                <svg className="contact-icon" aria-hidden="true">
                                    <use href="#icon-mail"></use>
                                </svg>
                                <span>{data.email}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="brand-mark">
                    <img src={data.logoImage} alt="Agent logo" className="brand-logo" />
                </aside>
            </footer>
        </section>
    )
}

export default Flyer