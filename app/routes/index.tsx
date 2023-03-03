import HomeBanner from "~/components/home-banner";

export default function IndexRoute() {
  return (
    <div>
      <div>
        <HomeBanner
          secondaryTitle="Helloooo Pizza Lovers!"
          title="Put Some 'Za In Your Mouth"
          buttonText="See Menu"
          ctaUrl="/menu"
          backgroundImageUrl="/images/home-hero.jpeg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <HomeBanner
          secondaryTitle="Mouthwatering Pizza"
          title="BFFs With Salads and Wings"
          buttonText="Order Now"
          ctaUrl="/order-now"
          backgroundImageUrl="/images/home-order.jpg"
        />

        <HomeBanner
          secondaryTitle="Our Pizza is Sizzling"
          title="And So Are Our Deals"
          buttonText="Save Today"
          ctaUrl="/promotions"
          backgroundImageUrl="/images/home-deals.jpeg"
        />
      </div>

      <div>
        <HomeBanner
          secondaryTitle="Earn Points and Get Rewarded"
          title="Pentomino's Rewards"
          buttonText="Sign Up"
          ctaUrl="/rewards"
          backgroundImageUrl="/images/home-rewards.jpg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <HomeBanner
          secondaryTitle=""
          title="Join Our Team"
          buttonText="See Open Positions"
          ctaUrl="/careers"
          backgroundImageUrl="/images/home-kitchen.jpg"
        />

        <HomeBanner
          secondaryTitle="Be A Pizza Boss"
          title="Start A Franchise"
          buttonText="Learn More"
          ctaUrl="/franchising"
          backgroundImageUrl="/images/home-careers.jpg"
        />
      </div>
    </div>
  );
}
