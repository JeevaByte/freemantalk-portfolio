import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 flex flex-col items-center">
      <button className="mt-4 bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200 shadow-lg">
        Learn More
      </button>
      <Image src="/profile-pic.jpg" alt="Jeeva Balakrishnan" width={200} height={200} priority />

      <h1 className="text-4xl font-extrabold">Hi, I&apos;m Jeeva Balakrishnan</h1>

      <p className="hero-description text-lg mt-4 text-center italic">
        Cloud Engineer | DevOps Enthusiast | AWS Certified
      </p>
    </section>
  );
};

export default Hero;
