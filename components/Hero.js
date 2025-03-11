import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      {/* Replace <img> with Next.js <Image /> */}
      <Image src="/profile-pic.jpg" alt="Jeeva Balakrishnan" width={200} height={200} />

      {/* Fix Unescaped Apostrophe */}
      <h1>Hi, I&apos;m Jeeva Balakrishnan</h1>

      <p>
        Cloud Engineer | DevOps Enthusiast | AWS Certified
      </p>
    </section>
  );
};

export default Hero;
