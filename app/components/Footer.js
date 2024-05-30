
// app/components/Footer.js
export default function Footer() {
    return (
        
        <footer className="bg-footer-green text-white py-10">
            <div className="container mx-auto
                flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-5 md:mb-0">
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
                        <span className
                ="text-green-900 text-2xl font-bold">F</span>
                    </div>
                    <p className="text-sm mt-3 opacity-75">© 2024 Filament3D, Inc. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-32 lg:space-x-48">
                    <div>
                        <h3 className="font-bold mb-3 text-lg opacity-85">Products</h3>
                        <ul className="text-sm space-y-2 opacity-75">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3 text-lg opacity-85">Resources</h3>
                        <ul className="text-sm space-y-2 opacity-75">
                        <li>News</li>
                        <li>Support</li>
                        <li>Downloads</li>
                        <li>Community</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3 text-lg opacity-85">Company</h3>
                        <ul className="text-sm space-y-2 opacity-75">
                        <li>Careers</li>
                        <li>Leadership</li>
                        <li>Partners</li>
                        <li>Locations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
  }
  