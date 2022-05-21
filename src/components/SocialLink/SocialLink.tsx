import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
  link: string
  icon: any
}

const SocialLink = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="underline">
      <FontAwesomeIcon
				icon={icon}
				className="text-white mx-2 h-6 opacity-50 hover:opacity-100 transition-all"
			/>
    </a>
  )
}

export default SocialLink
