import React from 'react';
import { Facebook } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FooterImage from "../Image/Footer.jpg";

const Footer = () => {
    return (
        <>
            <footer
                className="text-center md:mx-container my-16 text-neutral-600 lg:text-left">
                <div
                    className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="flex justify-center">
                        <Facebook className="mr-6 text-gray-500" />
                        <TwitterIcon className="mr-6 text-gray-500" />
                        <InstagramIcon className="mr-6 text-gray-500" />
                        <WhatsAppIcon className="mr-6 text-gray-500" />
                    </div>
                </div>
                <div className="py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-6 md:grid-cols-3 lg:grid-cols-3">
                        <div className="">
                            <h6
                                className="mb-4 flex items-center justify-center font-medium font-serif uppercase md:justify-start">
                                PROMO
                            </h6>
                            <img src={FooterImage} className='h-40 w-64 rounded-lg pb-6' alt="Footer Image" />
                            <p className='text-maincolor text-xl'>
                                Finding Your Perfect Product
                            </p>
                        </div>

                        <div className="">

                            <div className="">
                                <h6
                                    className="mb-4 flex items-center justify-center font-medium font-serif uppercase md:justify-start">
                                    Products
                                </h6>
                            </div>

                            <div className="grid grid-cols-3 gap-6 whitespace-nowrap">
                                <div className="">
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Sell online</a>
                                    </p>
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Features</a>
                                    </p>
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Store builder</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Shopping cart</a>
                                    </p>
                                </div>
                                <div className="">
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Mobile commerce</a>
                                    </p>
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Dropshipping</a>
                                    </p>
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Website</a>
                                    </p>
                                </div>
                                <div className="">
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Point of sale</a>
                                    </p>
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Hardware</a>
                                    </p>
                                    <p className="mb-4">
                                        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Software</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Contact </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <HomeIcon className='mr-3' /> New York, NY 10012, US
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <EmailIcon className='mr-3' /> info@example.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <CallIcon className='mr-3' /> + 01 234 567 88
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <PermContactCalendarIcon className='mr-3' /> + 01 234 567 89 </p>
                        </div>
                    </div>
                </div>
                <div className="p-6 text-center">
                    <span>© 2023 Copyright:</span>
                    <a
                        className="font-semibold text-neutral-600"
                        href="https://tw-elements.com/"
                    >E-Shop</a
                    >
                </div>
            </footer>
        </>
    )
}

export default Footer