import { useState } from 'react'

interface InstagramIconProps {
    className?: string
    size?: number
}

const InstagramIcon = ({ className = '', size = 32 }: InstagramIconProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: size, height: size }}
        >
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
                    d='M16.0008 8.13843C13.6833 8.13843 13.3924 8.14856 12.4822 8.18998C11.5737 8.23158 10.9536 8.37541 10.4111 8.58643C9.84981 8.80439 9.37372 9.09595 8.8994 9.57044C8.42473 10.0448 8.13317 10.5209 7.9145 11.0819C7.70294 11.6247 7.55894 12.245 7.51805 13.1531C7.47734 14.0633 7.46667 14.3543 7.46667 16.6718C7.46667 18.9894 7.47699 19.2793 7.51823 20.1896C7.56001 21.098 7.70383 21.7181 7.91468 22.2607C8.13282 22.822 8.42437 23.2981 8.89887 23.7724C9.37301 24.247 9.8491 24.5393 10.41 24.7573C10.9529 24.9683 11.5732 25.1121 12.4815 25.1537C13.3917 25.1951 13.6824 25.2053 15.9997 25.2053C18.3175 25.2053 18.6074 25.1951 19.5176 25.1537C20.4261 25.1121 21.0469 24.9683 21.5898 24.7573C22.1509 24.5393 22.6263 24.247 23.1004 23.7724C23.5751 23.2981 23.8667 22.822 24.0853 22.2609C24.2951 21.7181 24.4391 21.0979 24.4818 20.1898C24.5227 19.2795 24.5333 18.9894 24.5333 16.6718C24.5333 14.3543 24.5227 14.0635 24.4818 13.1532C24.4391 12.2448 24.2951 11.6247 24.0853 11.0821C23.8667 10.5209 23.5751 10.0448 23.1004 9.57044C22.6258 9.09577 22.1511 8.80421 21.5893 8.58643C21.0453 8.37541 20.4249 8.23158 19.5164 8.18998C18.6062 8.14856 18.3164 8.13843 15.9981 8.13843H16.0008ZM15.2353 9.6762C15.4625 9.67584 15.716 9.6762 16.0008 9.6762C18.2792 9.6762 18.5492 9.68438 19.449 9.72526C20.281 9.76331 20.7326 9.90233 21.0334 10.0191C21.4316 10.1738 21.7155 10.3587 22.014 10.6574C22.3127 10.956 22.4976 11.2405 22.6526 11.6387C22.7694 11.9392 22.9086 12.3907 22.9464 13.2227C22.9873 14.1223 22.9962 14.3925 22.9962 16.6699C22.9962 18.9472 22.9873 19.2175 22.9464 20.117C22.9084 20.949 22.7694 21.4006 22.6526 21.701C22.4979 22.0993 22.3127 22.3828 22.014 22.6813C21.7153 22.98 21.4318 23.1649 21.0334 23.3195C20.7329 23.4369 20.281 23.5755 19.449 23.6136C18.5494 23.6545 18.2792 23.6634 16.0008 23.6634C13.7222 23.6634 13.4521 23.6545 12.5526 23.6136C11.7205 23.5752 11.269 23.4362 10.968 23.3194C10.5698 23.1647 10.2853 22.9798 9.98666 22.6811C9.68799 22.3825 9.5031 22.0987 9.34808 21.7003C9.23128 21.3999 9.09208 20.9483 9.05421 20.1163C9.01332 19.2167 9.00514 18.9465 9.00514 16.6677C9.00514 14.389 9.01332 14.1202 9.05421 13.2206C9.09226 12.3886 9.23128 11.937 9.34808 11.6362C9.50275 11.238 9.68799 10.9535 9.98666 10.6549C10.2853 10.3562 10.5698 10.1713 10.968 10.0163C11.2688 9.89896 11.7205 9.76029 12.5526 9.72206C13.3398 9.68651 13.6448 9.67584 15.2353 9.67406V9.6762ZM20.5558 11.0931C19.9905 11.0931 19.5318 11.5512 19.5318 12.1168C19.5318 12.6821 19.9905 13.1408 20.5558 13.1408C21.1212 13.1408 21.5799 12.6821 21.5799 12.1168C21.5799 11.5514 21.1212 11.0931 20.5558 11.0931ZM16.0008 12.2896C13.5807 12.2896 11.6186 14.2517 11.6186 16.6718C11.6186 19.0919 13.5807 21.0532 16.0008 21.0532C18.4209 21.0532 20.3824 19.0919 20.3824 16.6718C20.3824 14.2517 18.4209 12.2896 16.0008 12.2896ZM16.0008 13.8274C17.5717 13.8274 18.8453 15.1008 18.8453 16.6718C18.8453 18.2427 17.5717 19.5163 16.0008 19.5163C14.4298 19.5163 13.1563 18.2427 13.1563 16.6718C13.1563 15.1008 14.4298 13.8274 16.0008 13.8274Z'
                    fill='white'
                />
            </svg>

            {/* Instagram colored version (shown on hover) */}
            <svg
                width={size}
                height={size}
                viewBox='0 0 32 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-0 left-0 transition-opacity duration-300'
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <defs>
                    <linearGradient id='instagramGradient' x1='0%' y1='100%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#FFDC80' />
                        <stop offset='10%' stopColor='#FCAF45' />
                        <stop offset='50%' stopColor='#F77737' />
                        <stop offset='70%' stopColor='#F56040' />
                        <stop offset='85%' stopColor='#FD1D1D' />
                        <stop offset='100%' stopColor='#C13584' />
                    </linearGradient>
                </defs>
                <path
                    opacity='0.1'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z'
                    fill='url(#instagramGradient)'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.0008 8.13843C13.6833 8.13843 13.3924 8.14856 12.4822 8.18998C11.5737 8.23158 10.9536 8.37541 10.4111 8.58643C9.84981 8.80439 9.37372 9.09595 8.8994 9.57044C8.42473 10.0448 8.13317 10.5209 7.9145 11.0819C7.70294 11.6247 7.55894 12.245 7.51805 13.1531C7.47734 14.0633 7.46667 14.3543 7.46667 16.6718C7.46667 18.9894 7.47699 19.2793 7.51823 20.1896C7.56001 21.098 7.70383 21.7181 7.91468 22.2607C8.13282 22.822 8.42437 23.2981 8.89887 23.7724C9.37301 24.247 9.8491 24.5393 10.41 24.7573C10.9529 24.9683 11.5732 25.1121 12.4815 25.1537C13.3917 25.1951 13.6824 25.2053 15.9997 25.2053C18.3175 25.2053 18.6074 25.1951 19.5176 25.1537C20.4261 25.1121 21.0469 24.9683 21.5898 24.7573C22.1509 24.5393 22.6263 24.247 23.1004 23.7724C23.5751 23.2981 23.8667 22.822 24.0853 22.2609C24.2951 21.7181 24.4391 21.0979 24.4818 20.1898C24.5227 19.2795 24.5333 18.9894 24.5333 16.6718C24.5333 14.3543 24.5227 14.0635 24.4818 13.1532C24.4391 12.2448 24.2951 11.6247 24.0853 11.0821C23.8667 10.5209 23.5751 10.0448 23.1004 9.57044C22.6258 9.09577 22.1511 8.80421 21.5893 8.58643C21.0453 8.37541 20.4249 8.23158 19.5164 8.18998C18.6062 8.14856 18.3164 8.13843 15.9981 8.13843H16.0008ZM15.2353 9.6762C15.4625 9.67584 15.716 9.6762 16.0008 9.6762C18.2792 9.6762 18.5492 9.68438 19.449 9.72526C20.281 9.76331 20.7326 9.90233 21.0334 10.0191C21.4316 10.1738 21.7155 10.3587 22.014 10.6574C22.3127 10.956 22.4976 11.2405 22.6526 11.6387C22.7694 11.9392 22.9086 12.3907 22.9464 13.2227C22.9873 14.1223 22.9962 14.3925 22.9962 16.6699C22.9962 18.9472 22.9873 19.2175 22.9464 20.117C22.9084 20.949 22.7694 21.4006 22.6526 21.701C22.4979 22.0993 22.3127 22.3828 22.014 22.6813C21.7153 22.98 21.4318 23.1649 21.0334 23.3195C20.7329 23.4369 20.281 23.5755 19.449 23.6136C18.5494 23.6545 18.2792 23.6634 16.0008 23.6634C13.7222 23.6634 13.4521 23.6545 12.5526 23.6136C11.7205 23.5752 11.269 23.4362 10.968 23.3194C10.5698 23.1647 10.2853 22.9798 9.98666 22.6811C9.68799 22.3825 9.5031 22.0987 9.34808 21.7003C9.23128 21.3999 9.09208 20.9483 9.05421 20.1163C9.01332 19.2167 9.00514 18.9465 9.00514 16.6677C9.00514 14.389 9.01332 14.1202 9.05421 13.2206C9.09226 12.3886 9.23128 11.937 9.34808 11.6362C9.50275 11.238 9.68799 10.9535 9.98666 10.6549C10.2853 10.3562 10.5698 10.1713 10.968 10.0163C11.2688 9.89896 11.7205 9.76029 12.5526 9.72206C13.3398 9.68651 13.6448 9.67584 15.2353 9.67406V9.6762ZM20.5558 11.0931C19.9905 11.0931 19.5318 11.5512 19.5318 12.1168C19.5318 12.6821 19.9905 13.1408 20.5558 13.1408C21.1212 13.1408 21.5799 12.6821 21.5799 12.1168C21.5799 11.5514 21.1212 11.0931 20.5558 11.0931ZM16.0008 12.2896C13.5807 12.2896 11.6186 14.2517 11.6186 16.6718C11.6186 19.0919 13.5807 21.0532 16.0008 21.0532C18.4209 21.0532 20.3824 19.0919 20.3824 16.6718C20.3824 14.2517 18.4209 12.2896 16.0008 12.2896ZM16.0008 13.8274C17.5717 13.8274 18.8453 15.1008 18.8453 16.6718C18.8453 18.2427 17.5717 19.5163 16.0008 19.5163C14.4298 19.5163 13.1563 18.2427 13.1563 16.6718C13.1563 15.1008 14.4298 13.8274 16.0008 13.8274Z'
                    fill='url(#instagramGradient)'
                />
            </svg>
        </div>
    )
}

export default InstagramIcon
