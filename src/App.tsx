import { Search, User, ChevronDown, Facebook, Instagram } from "lucide-react"
import { Button } from "./components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Input } from "./components/ui/input"

function App() {
  return (
    <div className="min-h-screen bg-emerald-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-emerald-100">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-black transform rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-emerald-100 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-emerald-100 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="font-medium">BUY</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="font-medium">SELL & TRADE</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="font-medium">SERVICES & REPAIR</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* Right Navigation */}
        <div className="flex items-center space-x-6">
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Contact</span>
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 px-6 py-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-black mb-4">MERCEDES-AMG.</h1>
            <p className="text-lg text-gray-700 mb-8">
              The AMG performance
              <br />
              vehicle of the GLA.
            </p>

            {/* Car Image */}
            <div className="relative mb-8">
              <img
                src="/images/mercedes-amg-car.png"
                alt="Mercedes-AMG White Coupe"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>

            {/* Description Text */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm text-gray-600">
                  The facelift once again
                  <br />
                  clearly underlines its
                  <br />
                  dynamic appearance.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  The AMG radiator grille with double lamella and
                  <br />
                  the characteristic AMG front skirt in A-Wing
                  <br />
                  design characterize the striking front...
                </p>
              </div>
            </div>

            {/* Buy Now Button */}
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-medium">
              BUY NOW &nbsp;&nbsp;&nbsp; 50,113 €
            </Button>
          </div>
        </div>

        {/* Pink Sidebar */}
        <div className="w-80 bg-pink-500 text-white relative">
          {/* Vertical Text */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
            <span className="text-sm font-medium tracking-wider">MERCEDES BENZ</span>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
            <span className="text-sm font-medium tracking-wider">DEALER LOCATOR</span>
          </div>

          <div className="p-8 pt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">CARS</h2>
              <p className="text-sm">NEW & USED CARS</p>
              <div className="w-full h-px bg-black mt-2"></div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">MODEL</label>
                <Select>
                  <SelectTrigger className="w-full bg-pink-500 border-black text-white">
                    <SelectValue placeholder="MERCEDES BENZ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mercedes">MERCEDES BENZ</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="audi">AUDI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">TYPE</label>
                <Select>
                  <SelectTrigger className="w-full bg-pink-500 border-black text-white">
                    <SelectValue placeholder="AMG CLA COUPE" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coupe">AMG CLA COUPE</SelectItem>
                    <SelectItem value="sedan">AMG CLA SEDAN</SelectItem>
                    <SelectItem value="suv">AMG GLA SUV</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">PRICE</label>
                <Select>
                  <SelectTrigger className="w-full bg-pink-500 border-black text-white">
                    <SelectValue placeholder="ANY TYPE" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">ANY TYPE</SelectItem>
                    <SelectItem value="under50k">Under 50,000 €</SelectItem>
                    <SelectItem value="50k-100k">50,000 - 100,000 €</SelectItem>
                    <SelectItem value="over100k">Over 100,000 €</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">NEAR BY</label>
                <Select>
                  <SelectTrigger className="w-full bg-pink-500 border-black text-white">
                    <SelectValue placeholder="100 MILES" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 MILES</SelectItem>
                    <SelectItem value="50">50 MILES</SelectItem>
                    <SelectItem value="25">25 MILES</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">ZIP CODE</label>
                <Input
                  placeholder="ZIP CODE"
                  className="w-full bg-pink-500 border-black text-white placeholder-white/70"
                />
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-xl font-bold mt-8">
                SEARCH
              </Button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="absolute bottom-8 right-8 flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App