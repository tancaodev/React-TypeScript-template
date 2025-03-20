import { useState } from 'react'

interface YoutubeIconProps {
    className?: string
    size?: number
}

const YoutubeIcon = ({ className = '', size = 32 }: YoutubeIconProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: size, height: size }}
        >
            {/* Default white version */}
            <svg
                width={size}
                height={size}
                viewBox='0 0 32 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='transition-opacity duration-300'
                style={{ opacity: isHovered ? 0 : 1 }}
            >
                <path
                    opacity='0.1'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z'
                    fill='white'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22.6677 11.1714C23.4021 11.3729 23.9804 11.9667 24.1767 12.7207C24.5333 14.0872 24.5333 16.9385 24.5333 16.9385C24.5333 16.9385 24.5333 19.7897 24.1767 21.1564C23.9804 21.9104 23.4021 22.5041 22.6677 22.7057C21.3369 23.0718 16 23.0718 16 23.0718C16 23.0718 10.6631 23.0718 9.33218 22.7057C8.59783 22.5041 8.0195 21.9104 7.82323 21.1564C7.46667 19.7897 7.46667 16.9385 7.46667 16.9385C7.46667 16.9385 7.46667 14.0872 7.82323 12.7207C8.0195 11.9667 8.59783 11.3729 9.33218 11.1714C10.6631 10.8052 16 10.8052 16 10.8052C16 10.8052 21.3369 10.8052 22.6677 11.1714ZM14.4 14.5385V19.8718L18.6667 17.2052L14.4 14.5385Z'
                    fill='white'
                />
            </svg>

            {/* Colored version (shown on hover) */}
            <svg
                width={size}
                height={size}
                viewBox='0 0 32 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-0 left-0 transition-opacity duration-300'
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <path
                    opacity='0.1'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z'
                    fill='#FF0000'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22.6677 11.1714C23.4021 11.3729 23.9804 11.9667 24.1767 12.7207C24.5333 14.0872 24.5333 16.9385 24.5333 16.9385C24.5333 16.9385 24.5333 19.7897 24.1767 21.1564C23.9804 21.9104 23.4021 22.5041 22.6677 22.7057C21.3369 23.0718 16 23.0718 16 23.0718C16 23.0718 10.6631 23.0718 9.33218 22.7057C8.59783 22.5041 8.0195 21.9104 7.82323 21.1564C7.46667 19.7897 7.46667 16.9385 7.46667 16.9385C7.46667 16.9385 7.46667 14.0872 7.82323 12.7207C8.0195 11.9667 8.59783 11.3729 9.33218 11.1714C10.6631 10.8052 16 10.8052 16 10.8052C16 10.8052 21.3369 10.8052 22.6677 11.1714ZM14.4 14.5385V19.8718L18.6667 17.2052L14.4 14.5385Z'
                    fill='#FF0000'
                />
            </svg>
        </div>
    )
}

export default YoutubeIcon
