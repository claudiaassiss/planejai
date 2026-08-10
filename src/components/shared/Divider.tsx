interface DivideProps {
    orientation?: 'horizontal' | 'vertical'
    spacing?: number
    className?: string
}

export function Divider({orientation = 'horizontal', spacing = 16, className,}: DivideProps) {
    const style = orientation === 'horizontal'
        ? { marginTop: spacing, marginBottom: spacing }
        : { marginLeft: spacing, marginRight: spacing }

    const classNameByOrientation = {
        horizontal: 'w-full h-px',
        vertical: 'self-stretch w-px',
    }

    return (
        <div 
            role="separator"
            aria-orientation={orientation}
            style={style}
            className={['bg-border', classNameByOrientation[orientation], className]
                .filter(Boolean)
                .join(' ')
            }
        />
    )
}