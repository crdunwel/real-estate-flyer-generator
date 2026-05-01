/* src/components/SvgSprite.jsx */

function SvgSprite() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="0"
            style={{
                position: 'absolute',
                left: '-9999px',
                overflow: 'hidden',
            }}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5f7cff" />
                    <stop offset="50%" stopColor="#9a6bff" />
                    <stop offset="100%" stopColor="#ff4fa3" />
                </linearGradient>
            </defs>

            <symbol id="icon-bed" viewBox="0 0 24 24">
                <path d="M3 8.5v8.5" />
                <path d="M21 8.5v8.5" />
                <path d="M3 12h18" />
                <path d="M6.5 12V9.2a1.7 1.7 0 0 1 1.7-1.7h4.2a1.7 1.7 0 0 1 1.7 1.7V12" />
            </symbol>

            <symbol id="icon-bath" viewBox="0 0 24 24">
                <path d="M7 10.5V8.2A3.2 3.2 0 0 1 10.2 5h.8" />
                <path d="M5 11.5h14" />
                <path d="M6 11.5v2.8a4.5 4.5 0 0 0 4.5 4.5h3A4.5 4.5 0 0 0 18 14.3v-2.8" />
                <path d="M8 18.8v1.7" />
                <path d="M16 18.8v1.7" />
                <path d="M15 8.5a1.4 1.4 0 1 0 0-2.8" />
            </symbol>

            <symbol id="icon-ruler" viewBox="0 0 24 24">
                <path d="M4 5.5v13" />
                <path d="M20 5.5v13" />
                <path d="M8 5.5v3" />
                <path d="M8 12v2" />
                <path d="M8 17.5v1" />
                <path d="M12 5.5v2" />
                <path d="M12 10.5v3" />
                <path d="M12 17.5v1" />
                <path d="M16 5.5v1" />
                <path d="M16 9v3" />
                <path d="M16 16v2.5" />
            </symbol>

            <symbol id="icon-phone" viewBox="0 0 24 24">
                <path d="M6.8 4.8h2.5l1.2 4-1.8 1.8a14.8 14.8 0 0 0 4.7 4.7l1.8-1.8 4 1.2v2.5a1.8 1.8 0 0 1-1.8 1.8A14.6 14.6 0 0 1 5 6.6a1.8 1.8 0 0 1 1.8-1.8Z" />
            </symbol>

            <symbol id="icon-mail" viewBox="0 0 24 24">
                <path d="M4 6.5h16v11H4z" />
                <path d="m4.8 7.4 7.2 5.8 7.2-5.8" />
            </symbol>
        </svg>
    )
}

export default SvgSprite