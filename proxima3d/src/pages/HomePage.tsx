import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import hulk from "../assets/asc-hulk.webp";
import warr from "../assets/warrior.jpg";
import thrall from "../assets/thrall.jpg";

const HomePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-3">
          Premium 3D Models & Printing Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your ideas into reality with our high-quality 3D models and
          professional printing solutions.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={hulk}
                  alt="Featured product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Custom 3D Models</h3>
                  <p className="text-lg">
                    Professionally designed models tailored to your
                    specifications.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={thrall}
                  alt="Special offers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    High-Precision Printing
                  </h3>
                  <p className="text-lg">
                    State-of-the-art equipment for exceptional print quality.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={warr}
                  alt="Customer support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Materials</h3>
                  <p className="text-lg">
                    Wide selection of high-quality filaments and resins for any
                    project.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Swipe or use arrows to navigate • Images change automatically every
            5 seconds
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our 3D Printing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">Model Design</h3>
            <p className="text-muted-foreground">
              Expert 3D modeling services to bring your concepts to life with
              precision and creativity.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">Rapid Prototyping</h3>
            <p className="text-muted-foreground">
              Quick turnaround on prototype development with iterative
              refinement options.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">Production Printing</h3>
            <p className="text-muted-foreground">
              Large-scale production capabilities with consistent quality and
              competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
