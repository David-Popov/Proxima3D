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
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-3">
          {t("home.hero.title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("home.hero.subtitle")}
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
                  alt={t("models.featured")}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("models.featured")}
                  </h3>
                  <p className="text-lg">{t("models.featuredDescription")}</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={thrall}
                  alt={t("services.printing")}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("services.printing")}
                  </h3>
                  <p className="text-lg">{t("services.printingDescription")}</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={warr}
                  alt={t("home.materials.title")}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("home.materials.title")}
                  </h3>
                  <p className="text-lg">{t("home.materials.description")}</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t("common.swipeOrArrows")} •{" "}
            {t("common.imagesChangeAutomatically")}
          </p>
        </div> */}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("home.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">
              {t("home.services.modelDesign.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("home.services.modelDesign.description")}
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">
              {t("home.services.rapidPrototyping.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("home.services.rapidPrototyping.description")}
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">
              {t("home.services.productionPrinting.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("home.services.productionPrinting.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
