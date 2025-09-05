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
        className="h-full w-full rounded-full object-cover shadow-md shadow-stone-900 dark:shadow-sm dark:shadow-slate-100"
      />
    </div>
  );
}
