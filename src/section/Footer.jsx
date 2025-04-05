const Footer = ()=>{
    return(
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col justify-center items-center flex-wrap gap-5">
            {/* <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div> */}

            <div className="flex gap-3">
                <a className="cursor-pointer" href="https://github.com/RdTatimmussaadah">
                    <div className="social-icon">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </div>
                </a>

                <a className="cursor-pointer" href="https://x.com/tttiiimmm___">
                <div className="social-icon">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                </div>
                </a>

                <a className="cursor-pointer" href="https://www.instagram.com/tim.mi_/">
                    <div className="social-icon">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                    </div>
                </a>
            </div>

            <p className="text-white-500">© 2025 Rd. Tatimmussa'adah. All rights reserved.</p>
        </footer>
    )
}

export default Footer;