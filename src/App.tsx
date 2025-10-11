import { Search, User, ChevronDown, Facebook, Instagram } from "lucide-react"
import { Button } from "./components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Input } from "./components/ui/input"

function App() {
  return (
    <div className="min-h-screen relative">
      {/* the downlayer */}
      <div className="w-4/5 h-11/10 bg-emerald-100 absolute z-0"></div>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 mt-7 z-20 relative">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-black transform rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-emerald-100 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-emerald-100 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8 text-sm">
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
        <div className="flex items-center space-x-6 text-sm">
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Contact</span>
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 px-6 py-8 ">
          <div className="relative">
            <div className="ml-46 absolute top-5 left-10">
              <h1 className="text-4xl font-bold text-black mb-2">MERCEDES-AMG.</h1>
              <p className="text-sm text-gray-700 mb-1">
                The AMG performance
                <br />
                vehicle of the GLA.
            </p>
            </div>

            {/* Car Image */}
            <div className="absolute -top-10 mb-5 mt-30 z-20">
              <img
                src="/images/car_from_figma.png"
                alt="Mercedes-AMG White Coupe"
                className="w-[1050px] object-contain ml-15"
              />
            </div>

            {/* Description Text */}
            <div className="absolute -bottom-160 left-60 grid grid-cols-2 gap-4 mb-8">
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
            <Button className="absolute -bottom-193 left-30 bg-pink-500 hover:bg-pink-600 text-white px-20 py-10 text-lg font-medium">
              BUY NOW &nbsp;&nbsp;&nbsp; 50,113 €
            </Button>
          </div>
        </div>

        {/* Pink Sidebar */}
        <div className="w-105 bg-[#FF5875] text-white absolute z-15 right-1/15">
          <div className="p-18 pt-16 text-black">
            <div className="mb-8">
              <h2 className="text-md font-bold mb-2">CARS</h2>
              <p className="text-xs">NEW & USED CARS</p>
              <div className="w-full h-px bg-black mt-2"></div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">MODEL</label>
                <Select>
                  <SelectTrigger className="w-full bg-[#FF5875]">
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
                  <SelectTrigger className="w-full bg-[#FF5875]">
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
                  <SelectTrigger className="w-full bg-[#FF5875] border-black">
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
                  <SelectTrigger className="w-full bg-[#FF5875] border-black">
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
                  className="w-full bg-[#FF5875] border-black"
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