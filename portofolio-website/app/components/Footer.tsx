export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-10 bg-[#F7F9FC]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-12 text-[#1B1B1B]">
        {/* Contact */}
        <div>
          <h3 className="font-semibold text-base mb-6">Contact</h3>
          <ul className="space-y-6 text-sm font-normal max-w-[180px]">
            <li className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5C5FEF] text-xs">
                <i className="fas fa-phone"></i>
              </div>
              <span>602–774–4735</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-7 h-7 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5C5FEF] text-xs mt-1">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span>
                11022 South 51st Street Suite 105
                <br />
                Phoenix, AZ 85044
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-full bg-[#E6E8FF] flex items-center justify-center text-[#5C5FEF] text-xs">
                <i className="fas fa-envelope"></i>
              </div>
              <span>hello@unifedui.com</span>
            </li>
          </ul>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="font-semibold text-base mb-6">Navigate</h3>
          <ul className="space-y-4 text-sm font-normal max-w-[140px]">
            <li>Services</li>
            <li>Success Stories</li>
            <li>Discover</li>
            <li>Care</li>
            <li>Download App</li>
          </ul>
        </div>

        {/* Solution */}
        <div>
          <h3 className="font-semibold text-base mb-6">Solution</h3>
          <ul className="space-y-4 text-sm font-normal max-w-[140px]">
            <li>Get in Touch</li>
            <li>Technology</li>
            <li>Who’re We?</li>
            <li>Expertise</li>
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h3 className="font-semibold text-base mb-6">Discover</h3>
          <ul className="space-y-4 text-sm font-normal max-w-[140px]">
            <li>Latest News</li>
            <li>New Arrivals</li>
            <li>Solution</li>
            <li>Gain Profession</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-base mb-6">Follow Us</h3>
          <ul className="space-y-4 text-sm font-normal max-w-[140px]">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
