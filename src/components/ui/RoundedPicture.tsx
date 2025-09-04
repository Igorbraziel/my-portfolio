interface RoundedPictureProps {
  src: string;
  alt: string;
}

export default function RoundedPicture({ src, alt }: RoundedPictureProps) {
  return (
    <div className="mb-3 h-40 w-40 sm:mb-4 sm:h-45 sm:w-45 md:h-50 md:w-50 lg:h-55 lg:w-55 xl:h-60 xl:w-60">
      <img
        src={src}
        alt={alt}
        className="shadow-md dark:shadow-slate-100 dark:shadow-sm shadow-stone-900 h-full w-full rounded-full object-cover"
      />
    </div>
  );
}
