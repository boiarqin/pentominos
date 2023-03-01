import { Outlet } from "@remix-run/react";
import Banner from "~/components/banner";
import Button from "~/components/button";

const POSTS = [
  {
    title: "Happy National Pizza Day! Get 20% off your order",
    imageSrc: "/images/promo-1.jpeg",
    imageAltText: "Pepperoni pizza",
    snippet: "Tempor in minim quis",
    actionText: "Celebrate With Us",
    slug: "national-pizza-day",
  },
  {
    title: "Free 1-Topping Large Pizza",
    imageSrc: "/images/promo-2.jpeg",
    imageAltText: "Pepperoni pizza",
    snippet: "Magna dolore consequat deserunt",
    actionText: "Order Now",
    slug: "free-1-topping-large",
  },
  {
    title: "Get 10 points just for signing up to Pentomino's Rewards",
    imageSrc: "/images/promo-3.jpeg",
    imageAltText: "Pepperoni pizza",
    snippet: "Cupidatat hawaiian in ad minim",
    actionText: "Sign Up",
    slug: "rewards-program",
  },
  {
    title: "Happy National Pizza Day! Get 20% off your order",
    imageSrc: "/images/promo-1.jpeg",
    imageAltText: "Pepperoni pizza",
    snippet: "Tempor in minim quis",
    actionText: "Celebrate With Us",
    slug: "national-pizza-day",
  },
  {
    title: "Free 1-Topping Large Pizza",
    imageSrc: "/images/promo-2.jpeg",
    imageAltText: "Pepperoni pizza",
    snippet: "Magna dolore consequat deserunt",
    actionText: "Order Now",
    slug: "free-1-topping-large",
  },
  {
    title: "Get 10 points just for signing up to Pentomino's Rewards",
    imageSrc: "/images/promo-3.jpeg",
    imageAltText: "Pepperoni pizza",
    snippet: "Cupidatat hawaiian in ad minim",
    actionText: "Sign Up",
    slug: "rewards-program",
  },
];

export default function PromotionsRoute() {
  return (
    <div>
      <Banner title="Hot Deals!" />
      <div className="bg-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POSTS.map((post) => {
              const { title, snippet, actionText, slug, imageSrc } = post;
              return (
                <div
                  className="h-64 text-white bg-cover"
                  style={{ backgroundImage: `url(${imageSrc})` }}
                >
                  <div className="h-full w-full backdrop-blur-sm bg-black/30 p-8 ">
                    <h2 className="text-lg font-semibold pb-2">{title}</h2>
                    <p className="pb-4">{snippet}</p>
                    <Button text={actionText} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
