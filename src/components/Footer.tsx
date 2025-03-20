import { footerLogo } from '~/utils'
import { DribbleIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './Icons'

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
    <div>
        <h4 className='text-headline-4 mb-6'>{title}</h4>
        {links.map((link) => (
            <p key={link} className='text-body-regular-3 text-silver mb-3'>
                {link}
            </p>
        ))}
    </div>
)

const Footer = () => {
    return (
        <footer className='w-full bg-neutral-black'>
            <div className='flex justify-between py-16 mx-36'>
                <div className='flex flex-col gap-10'>
                    <div className='flex-shrink-0'>
                        <img src={footerLogo} alt='Logo' />
                    </div>
                    <div className='text-body-regular-2 text-silver'>
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p className='mt-2'>All rights reserved</p>
                    </div>
                    <div className='flex gap-4'>
                        <InstagramIcon />
                        <DribbleIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                    </div>
                </div>
                <div className='flex justify-between gap-8 text-white'>
                    <FooterColumn
                        title='Company'
                        links={['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials']}
                    />
                    <FooterColumn
                        title='Support'
                        links={['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status']}
                    />

                    <div>
                        <h4 className='text-headline-4 mb-6'>Stay up to date</h4>

                        <div className='relative w-full '>
                            <input
                                type='email'
                                placeholder='Your email address'
                                className='w-full bg-white/20 text-[#D9DBE1] text-body-regular-3 rounded-[8px] py-2 px-3 pr-10'
                            />

                            <svg
                                className='absolute right-3 top-1/2 transform -translate-y-1/2'
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g clip-path='url(#clip0_381_89)'>
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z'
                                        fill='white'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_381_89'>
                                        <rect width='18' height='18' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
