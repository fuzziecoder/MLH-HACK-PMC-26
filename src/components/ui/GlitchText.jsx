import './GlitchText.css';

const GlitchText = ({ children, speed = 1, enableShadows = true, enableOnHover = false, className = '' }) => {
    const inlineStyles = {
        '--after-duration': `${speed * 3}s`,
        '--before-duration': `${speed * 2}s`,
        '--after-shadow': enableShadows ? '-5px 0 rgba(150,150,150,0.5)' : 'none',
        '--before-shadow': enableShadows ? '5px 0 rgba(220,220,220,0.3)' : 'none',
    };

    const hoverClass = enableOnHover ? 'enable-on-hover' : '';

    return (
        <div
            className={`glitch ${hoverClass} ${className}`}
            style={inlineStyles}
            data-text={children}
        >
            {children}
        </div>
    );
};

export default GlitchText;
