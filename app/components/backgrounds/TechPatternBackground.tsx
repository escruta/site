import { motion } from "motion/react";

export function TechPatternBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.6 }}
      className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[26vh] select-none"
    >
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-tech-pattern" width="48" height="96" patternUnits="userSpaceOnUse">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2518 15.0725L17.7895 24.8392C17.8767 24.993 18.0698 25.0457 18.2209 24.9569L19.8617 23.9922C20.0128 23.9034 20.0645 23.7067 19.9773 23.5529L14.4319 13.7725H23.6842C23.8586 13.7725 24 13.6286 24 13.451V11.5216C24 11.344 23.8586 11.2001 23.6842 11.2001H14.4474L19.9773 1.44706C20.0645 1.29327 20.0128 1.0966 19.8617 1.00781L18.2209 0.0431343C18.0698 -0.0456615 17.8767 0.00703401 17.7895 0.160833L12.2518 9.92754L6.71417 0.160833C6.62697 0.00703387 6.43383 -0.0456615 6.28279 0.0431343L4.6419 1.00781C4.49086 1.0966 4.43911 1.29327 4.52632 1.44706L10.0562 11.2001H0.315789C0.141384 11.2001 0 11.344 0 11.5216V13.451C0 13.6286 0.141384 13.7725 0.31579 13.7725H10.0717L4.52632 23.5529C4.43911 23.7067 4.49086 23.9034 4.6419 23.9922L6.28279 24.9569C6.43383 25.0457 6.62697 24.993 6.71417 24.8392L12.2518 15.0725Z"
              fill="var(--color-blue-600)"
              opacity="0.15"
            />
            <path
              transform="translate(24, 48)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2518 15.0725L17.7895 24.8392C17.8767 24.993 18.0698 25.0457 18.2209 24.9569L19.8617 23.9922C20.0128 23.9034 20.0645 23.7067 19.9773 23.5529L14.4319 13.7725H23.6842C23.8586 13.7725 24 13.6286 24 13.451V11.5216C24 11.344 23.8586 11.2001 23.6842 11.2001H14.4474L19.9773 1.44706C20.0645 1.29327 20.0128 1.0966 19.8617 1.00781L18.2209 0.0431343C18.0698 -0.0456615 17.8767 0.00703401 17.7895 0.160833L12.2518 9.92754L6.71417 0.160833C6.62697 0.00703387 6.43383 -0.0456615 6.28279 0.0431343L4.6419 1.00781C4.49086 1.0966 4.43911 1.29327 4.52632 1.44706L10.0562 11.2001H0.315789C0.141384 11.2001 0 11.344 0 11.5216V13.451C0 13.6286 0.141384 13.7725 0.31579 13.7725H10.0717L4.52632 23.5529C4.43911 23.7067 4.49086 23.9034 4.6419 23.9922L6.28279 24.9569C6.43383 25.0457 6.62697 24.993 6.71417 24.8392L12.2518 15.0725Z"
              fill="var(--color-blue-600)"
              opacity="0.15"
            />
          </pattern>
          <linearGradient id="hero-pattern-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="white" />
            <stop offset="60%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="hero-pattern-mask">
            <rect width="100%" height="100%" fill="url(#hero-pattern-grad)" />
          </mask>
        </defs>

        <rect
          opacity={0.6}
          width="100%"
          height="100%"
          fill="url(#hero-tech-pattern)"
          mask="url(#hero-pattern-mask)"
        />
      </svg>
    </motion.div>
  );
}
