import Image from "next/image";

export const TestimonialCard = ({
  imageSrc,
  name,
  title,
  testimonial,
  isActive,
}: any) => {
  return (
    <div>
      {isActive ? (
        <div
          className={`bg-primary rounded-lg md:h-[250px] md:w-[400px] w-[200px] p-6 mt-10 mb-10 text-start text-white transition-transform duration-300 ease-in-out ml-2 mr-2 ${
            isActive ? "transform -translate-y-4" : ""
          }`}
        >
          <Image
            src={imageSrc}
            alt={`${name}'s picture`}
            className="rounded-full w-12 h-12 mb-4"
            height={300}
            width={300}
            priority
          />
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <h4 className="text-md font-light mb-4">{title}</h4>
          <p className="text-[10px] leading-relaxed">{testimonial}</p>
        </div>
      ) : (
        <div className="bg-beta  rounded-lg md:h-[300px] md:w-[400px] w-[200px] ">
          <div
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              height: "150px",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-4" style={{ height: "50%" }}>
            <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
            <p className="text-[10px] leading-relaxed text-white">
              {testimonial}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
