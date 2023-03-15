import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  isChecked?: boolean
}

const StarIcon = ({
  title,
  titleId,
  isChecked = false,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={28}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    role="button"
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M13.043 2.604c.308-.622.462-.933.67-1.033a.667.667 0 0 1 .574 0c.208.1.362.41.67 1.033l2.915 5.907c.09.184.136.276.202.347.06.063.13.114.208.15.088.042.19.057.392.086l6.522.954c.687.1 1.03.15 1.189.318a.667.667 0 0 1 .177.546c-.03.229-.279.47-.776.955l-4.717 4.595c-.147.143-.221.215-.268.3a.666.666 0 0 0-.08.244c-.012.097.006.198.04.4l1.114 6.49c.117.685.176 1.027.065 1.23a.667.667 0 0 1-.464.337c-.227.042-.534-.12-1.15-.442l-5.83-3.067c-.181-.095-.272-.143-.368-.162a.667.667 0 0 0-.256 0c-.096.02-.187.067-.368.162l-5.83 3.067c-.615.323-.923.484-1.15.442a.667.667 0 0 1-.464-.337c-.11-.203-.052-.545.065-1.23l1.113-6.49c.035-.202.053-.303.04-.4a.666.666 0 0 0-.079-.244c-.047-.085-.12-.157-.268-.3l-4.717-4.595c-.497-.484-.746-.726-.776-.955-.026-.2.039-.4.177-.546.159-.168.502-.218 1.189-.318l6.522-.954c.203-.03.304-.044.392-.085a.667.667 0 0 0 .208-.15c.066-.072.111-.164.202-.348l2.915-5.907Z"
      stroke="#E99856"
      {...(isChecked && { fill: '#E99856' })}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default StarIcon
