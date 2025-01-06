interface LogoProps {
    name: string
    logoUrl?: string
}

export const Logo: React.FC<LogoProps> = ({logoUrl, name}) => {
    return logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} Logo`}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-lg font-bold text-gray-300">
          {name.charAt(0).toUpperCase()}
        </span>
      )
}